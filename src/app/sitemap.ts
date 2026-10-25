import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { absoluteUrl } from "@/lib/site-url";

/** Every indexable URL, including each product and policy page. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/shop",
    "/about",
    "/materials",
    "/sizing",
    "/shipping",
    "/returns",
    "/privacy",
    "/terms",
    "/contact",
  ];

  return [
    ...pages.map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : path === "/shop" ? 0.9 : 0.5,
    })),
    ...products.map((product) => ({
      url: absoluteUrl(`/product/${product.slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
