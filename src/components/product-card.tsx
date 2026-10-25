import Image from "next/image";
import Link from "next/link";
import { content } from "@/config/site";
import type { Product } from "@/data/products";
import { formatMoney } from "@/lib/money";

/** Product tile for the home and shop grids. A plain component, works in
 *  Server Components and inside the client shop filter alike. */
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col gap-3">
      <Link
        href={`/product/${product.slug}`}
        className="group rounded-lg focus-visible:outline-3"
        aria-label={`${product.name}, ${formatMoney(product.priceAUD)}`}
      >
        <div className="overflow-hidden rounded-lg border border-line">
          <Image
            src={product.image}
            alt={product.name}
            width={800}
            height={800}
            className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </Link>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg leading-snug">
          <Link href={`/product/${product.slug}`} className="hover:underline">
            {product.name}
          </Link>
        </h3>
        <p className="shrink-0 font-semibold">{formatMoney(product.priceAUD)}</p>
      </div>
      <p className="text-sm text-muted">{product.shortDescription}</p>
      <p className="text-sm">
        {product.stock <= 0 ? (
          <span className="text-muted">{content.product.soldOutLabel}</span>
        ) : product.stock <= 5 ? (
          <span className="text-accent">{content.product.lowStockLabel(product.stock)}</span>
        ) : (
          <span className="text-muted">{content.product.inStockLabel}</span>
        )}
      </p>
    </article>
  );
}
