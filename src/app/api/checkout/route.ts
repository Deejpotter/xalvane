import { NextResponse } from "next/server";
import { site } from "@/config/site";
import { getProductBySlug, type Product } from "@/data/products";

/**
 * Creates a Stripe Checkout Session and returns its URL.
 *
 * Security: the client sends only { slug, quantity } pairs. Every price and
 * product name is re-read from the catalog here: client-side prices are
 * display-only and never charged. Talks to the Stripe REST API with plain
 * fetch, no SDK.
 */

type CheckoutItem = { slug?: unknown; size?: unknown; quantity?: unknown };

/** Line items per request, the checkout route is not a bulk-order endpoint. */
const MAX_ITEMS = 50;

const MAX_QUANTITY = 99;

export async function POST(req: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      {
        error:
          "Checkout is not configured: STRIPE_SECRET_KEY is missing on the server. Set it in .env (see .env.example) and restart.",
      },
      { status: 503 },
    );
  }

  let body: { items?: CheckoutItem[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Body must be JSON." }, { status: 400 });
  }

  const items = body.items;
  if (!Array.isArray(items) || items.length === 0 || items.length > MAX_ITEMS) {
    return NextResponse.json(
      { error: `items must be a non-empty array (max ${MAX_ITEMS}).` },
      { status: 400 },
    );
  }

  // Validate against the catalog. Never trust client-sent prices.
  const lines: { product: Product; quantity: number; size?: string }[] = [];
  for (const item of items) {
    const slug = typeof item.slug === "string" ? item.slug : "";
    const quantity = item.quantity;
    const size = typeof item.size === "string" ? item.size : undefined;
    if (
      !slug ||
      typeof quantity !== "number" ||
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      quantity > MAX_QUANTITY
    ) {
      return NextResponse.json(
        { error: "Each item needs a slug and a whole-number quantity (1-99)." },
        { status: 400 },
      );
    }
    const product = getProductBySlug(slug);
    if (!product) {
      return NextResponse.json(
        { error: `Unknown product: ${slug}` },
        { status: 400 },
      );
    }
    if (product.stock < quantity) {
      return NextResponse.json(
        { error: `${product.name} only has ${product.stock} left.` },
        { status: 400 },
      );
    }
    if (product.sizes?.length) {
      if (!size || !product.sizes.includes(size)) {
        return NextResponse.json(
          { error: `Choose a valid size for ${product.name}.` },
          { status: 400 },
        );
      }
    } else if (size) {
      return NextResponse.json(
        { error: `${product.name} does not use sizes.` },
        { status: 400 },
      );
    }
    lines.push({ product, quantity, size });
  }

  // Prefer the deployed origin; fall back to the request origin for local dev.
  const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL ?? new URL(req.url).origin).replace(/\/+$/, "");
  const currency = site.currency.toLowerCase();
  const subtotalCents = lines.reduce(
    (sum, { product, quantity }) => sum + product.priceAUD * quantity,
    0,
  );
  const freeShipping = subtotalCents >= site.freeShippingCents;

  // Stripe expects form-encoded bodies. Prices come from the catalog above.
  const form = new URLSearchParams();
  form.set("mode", "payment");
  form.set("success_url", `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`);
  form.set("cancel_url", `${baseUrl}/checkout/cancel`);

  for (const country of site.shippingCountries) {
    form.append("shipping_address_collection[allowed_countries][]", country);
  }

  lines.forEach(({ product, quantity, size }, i) => {
    form.set(`line_items[${i}][quantity]`, String(quantity));
    form.set(`line_items[${i}][price_data][currency]`, currency);
    form.set(`line_items[${i}][price_data][unit_amount]`, String(product.priceAUD));
    form.set(
      `line_items[${i}][price_data][product_data][name]`,
      size ? `${product.name} — Size ${size}` : product.name,
    );
    form.set(
      `line_items[${i}][price_data][product_data][description]`,
      product.shortDescription,
    );
  });

  // One shipping option: free above the threshold, flat rate below it.
  form.set("shipping_options[0][shipping_rate_data][type]", "fixed_amount");
  form.set(
    "shipping_options[0][shipping_rate_data][display_name]",
    freeShipping ? "Free shipping" : "Standard shipping",
  );
  form.set(
    "shipping_options[0][shipping_rate_data][fixed_amount][amount]",
    String(freeShipping ? 0 : site.flatRateCents),
  );
  form.set("shipping_options[0][shipping_rate_data][fixed_amount][currency]", currency);

  // Xalvane is a Lumendot brand; keep the Stripe object traceable.
  form.set("metadata[brand]", "xalvane");
  form.set("payment_intent_data[metadata][brand]", "xalvane");
  form.set("payment_intent_data[description]", "Xalvane order");

  const stripeRes = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form.toString(),
  });

  const session = (await stripeRes.json().catch(() => null)) as {
    url?: string;
    error?: { message?: string };
  } | null;

  if (!stripeRes.ok || !session?.url) {
    return NextResponse.json(
      {
        error:
          session?.error?.message ??
          `Stripe could not create a checkout session (HTTP ${stripeRes.status}).`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ url: session.url });
}
