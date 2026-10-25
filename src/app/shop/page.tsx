import type { Metadata } from "next";
import { ShopCatalog } from "@/components/shop-catalog";
import { content } from "@/config/site";
import { getCategories, products } from "@/data/products";

// Static page, filtering happens client-side from props below.
export const metadata: Metadata = {
  title: content.shop.title,
  description: content.shop.intro,
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <div className="container-page section-pad flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold sm:text-4xl">
          {content.shop.title}
        </h1>
        <p className="max-w-2xl text-muted">{content.shop.intro}</p>
      </div>
      <ShopCatalog products={products} categories={getCategories()} />
    </div>
  );
}
