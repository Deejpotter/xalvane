"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { content } from "@/config/site";
import type { Product } from "@/data/products";

/** Catalog grid with a client-side category filter. Product data arrives as
 *  props from the server: no fetching in the browser. The filter reads
 *  ?category=… on mount so /shop links can deep-link (the page stays static). */
export function ShopCatalog({
  products,
  categories,
}: {
  products: Product[];
  categories: string[];
}) {
  const [active, setActive] = useState<string>("all");

  useEffect(() => {
    const wanted = new URLSearchParams(window.location.search).get("category");
    if (wanted && categories.includes(wanted)) setActive(wanted);
  }, [categories]);

  const filters = [
    { value: "all", label: content.shop.allLabel },
    ...categories.map((category) => ({ value: category, label: category })),
  ];
  const shown =
    active === "all"
      ? products
      : products.filter((product) => product.category === active);

  return (
    <div className="flex flex-col gap-10">
      <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setActive(filter.value)}
            aria-pressed={active === filter.value}
            className={`min-h-10 rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
              active === filter.value
                ? "border-accent bg-accent text-accent-fg"
                : "border-line hover:bg-bg-soft"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {shown.length === 0 ? (
        <p className="text-muted">{content.shop.emptyLabel}</p>
      ) : (
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
