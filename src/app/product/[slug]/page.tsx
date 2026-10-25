import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { content, site } from "@/config/site";
import { getProductBySlug, products } from "@/data/products";
import { formatMoney } from "@/lib/money";
import { absoluteUrl } from "@/lib/site-url";

// Classic ISR: pages are prerendered, then refreshed at most hourly.
export const revalidate = 3600;

// The catalog is build-time data, so every real slug is in generateStaticParams
// and unknown ones should 404. Without this they'd render the not-found UI as
// a soft-404 (HTTP 200) because loading.tsx starts streaming before notFound()
// can set the status, see the loading.md "Status codes" note.
export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: `/product/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      url: `/product/${product.slug}`,
      images: [{ url: product.image, width: 800, height: 800 }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  // schema.org Product. Escape "<" per the Next.js JSON-LD guidance.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: absoluteUrl(product.image),
    description: product.longDescription,
    sku: product.slug,
    brand: { "@type": "Brand", name: site.name },
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/product/${product.slug}`),
      priceCurrency: site.currency,
      price: (product.priceAUD / 100).toFixed(2),
      availability:
        product.stock > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <div className="container-page section-pad">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
        <Link href="/shop" className="hover:underline">
          {content.shop.title}
        </Link>{" "}
        / <span aria-current="page">{product.name}</span>
      </nav>

      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-lg border border-line">
          <Image
            src={product.image}
            alt={product.name}
            width={800}
            height={800}
            priority
            className="aspect-square w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">
              {product.category}
            </p>
            <h1 className="text-3xl font-semibold sm:text-4xl">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold">
              {formatMoney(product.priceAUD)}
            </p>
            <p className="text-muted">{product.shortDescription}</p>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
              {product.design} / {product.blank}
            </p>
          </div>

          <p>
            {product.stock <= 0 ? (
              <span className="font-semibold text-muted">
                {content.product.soldOutLabel}
              </span>
            ) : product.stock <= 5 ? (
              <span className="font-semibold text-accent">
                {content.product.lowStockLabel(product.stock)}
              </span>
            ) : (
              <span className="text-muted">{content.product.inStockLabel}</span>
            )}
          </p>

          <AddToCartButton product={product} className="w-full sm:w-auto" />

          <div className="card flex flex-col gap-2">
            <p className="text-sm">{site.shippingNotes}</p>
            <p className="text-sm text-muted">{site.returnsNotes}</p>
            <p className="text-sm text-muted">{site.descriptorNote}</p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">
              {content.product.descriptionTitle}
            </h2>
            <p className="leading-relaxed text-muted">{product.longDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
