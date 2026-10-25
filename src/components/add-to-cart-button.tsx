"use client";

import { useState } from "react";
import { useCart } from "@/components/cart-provider";
import { content } from "@/config/site";
import type { Product } from "@/data/products";

/** Add-to-cart control for product pages and cards. */
export function AddToCartButton({
  product,
  className,
}: {
  product: Pick<Product, "slug" | "name" | "priceAUD" | "image" | "stock" | "sizes">;
  className?: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [size, setSize] = useState<string>("");

  const soldOut = product.stock <= 0;
  const needsSize = Boolean(product.sizes?.length);
  const canAdd = !soldOut && (!needsSize || Boolean(size));

  function handleClick() {
    if (!canAdd) return;
    addItem({
      slug: product.slug,
      name: product.name,
      priceAUD: product.priceAUD,
      image: product.image,
      ...(needsSize ? { size } : {}),
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className={`flex flex-col gap-3 ${className ?? ""}`}>
      {needsSize && (
        <label className="flex flex-col gap-2 text-sm font-semibold">
          {content.product.sizeLabel}
          <select
            value={size}
            onChange={(event) => setSize(event.target.value)}
            className="min-h-12 rounded-lg border border-line bg-bg px-3 text-base font-normal"
          >
            <option value="">{content.product.chooseSize}</option>
            {product.sizes!.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      )}
      <button
        type="button"
        onClick={handleClick}
        disabled={!canAdd}
        className="button button-primary"
      >
        {soldOut
          ? content.product.soldOutLabel
          : added
            ? content.product.addedLabel
            : content.product.addToCartLabel}
      </button>
    </div>
  );
}
