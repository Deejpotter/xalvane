"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart-provider";
import { content, site } from "@/config/site";
import { MAX_QUANTITY, lineKey, lineTotalCents } from "@/lib/cart";
import { formatMoney } from "@/lib/money";

/** The /cart page body: quantities, remove, subtotal, checkout. */
export function CartView() {
  const { lines, setQuantity, removeLine, subtotalCents } = useCart();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [mounted, setMounted] = useState(false);
  // Cart state lives in localStorage; render the body only after mount so the
  // SSR'd empty state never flashes over a saved cart.
  useEffect(() => setMounted(true), []);

  const subtotal = subtotalCents;
  const freeShippingGap = site.freeShippingCents - subtotal;

  async function handleCheckout() {
    setStatus("loading");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Only ids and quantities go to the server, it re-reads all prices.
        body: JSON.stringify({
          items: lines.map(({ slug, size, quantity }) => ({ slug, size, quantity })),
        }),
      });
      const data: { url?: string } | null = await res.json().catch(() => null);
      if (res.ok && data?.url) {
        window.location.assign(data.url);
        return;
      }
    } catch {
      // fall through to the error state
    }
    setStatus("error");
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-semibold sm:text-4xl">{content.cart.title}</h1>
        <p className="mt-2 text-muted">{content.cart.intro}</p>
      </div>

      {!mounted ? null : lines.length === 0 ? (
        <div className="card flex flex-col items-start gap-4">
          <h2 className="text-xl font-semibold">{content.cart.emptyTitle}</h2>
          <p className="text-muted">{content.cart.emptyBody}</p>
          <Link href={content.cart.emptyCta.href} className="button button-primary">
            {content.cart.emptyCta.label}
          </Link>
        </div>
      ) : (
        <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
          <ul className="flex flex-col gap-6">
            {lines.map((line) => (
              <li
                key={lineKey(line)}
                className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-center"
              >
                <Link
                  href={`/product/${line.slug}`}
                  className="shrink-0 overflow-hidden rounded-lg border border-line"
                >
                  <Image
                    src={line.image}
                    alt={line.name}
                    width={800}
                    height={800}
                    className="h-24 w-24 object-cover"
                  />
                </Link>

                <div className="flex flex-1 flex-col gap-2">
                  <Link
                    href={`/product/${line.slug}`}
                    className="font-semibold hover:underline"
                  >
                    {line.name}
                  </Link>
                  <p className="text-sm text-muted">
                    {formatMoney(line.priceAUD)} each
                    {line.size ? ` · Size ${line.size}` : ""}
                  </p>
                  <button
                    type="button"
                    onClick={() => removeLine(lineKey(line))}
                    className="min-h-10 w-fit text-sm text-muted underline hover:text-fg"
                  >
                    {content.cart.removeLabel}
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor={`qty-${lineKey(line)}`}
                      className="text-sm text-muted"
                    >
                      {content.cart.quantityLabel}
                    </label>
                    <input
                      id={`qty-${lineKey(line)}`}
                      type="number"
                      inputMode="numeric"
                      min={1}
                      max={MAX_QUANTITY}
                      value={line.quantity}
                      onChange={(event) =>
                        setQuantity(lineKey(line), Number(event.target.value))
                      }
                      className="min-h-10 w-20 rounded-lg border border-line bg-bg px-3"
                    />
                  </div>
                  <p className="w-24 text-right font-semibold">
                    {formatMoney(lineTotalCents(line))}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <aside className="card flex h-fit flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold">{content.cart.subtotalLabel}</p>
              <p className="text-xl font-semibold">{formatMoney(subtotal)}</p>
            </div>
            <p className="text-sm text-muted">{content.cart.shippingNote}</p>
            <p className="text-sm text-muted">{site.descriptorNote}</p>
            <p className="text-sm">
              {freeShippingGap > 0
                ? `You're ${formatMoney(freeShippingGap)} away from free shipping.`
                : "Free shipping unlocked."}
            </p>
            <button
              type="button"
              onClick={handleCheckout}
              disabled={status === "loading"}
              className="button button-primary"
            >
              {status === "loading" ? "…" : content.cart.checkoutLabel}
            </button>
            {status === "error" && (
              <p role="alert" className="text-sm text-accent">
                {content.cart.checkoutError}
              </p>
            )}
            <Link
              href={content.cart.emptyCta.href}
              className="min-h-10 text-center text-sm text-muted underline hover:text-fg"
            >
              {content.cart.continueLabel}
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
