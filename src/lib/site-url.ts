import { site } from "@/config/site";

/**
 * Absolute site URL, no trailing slash. The deploy env wins; the config value
 * covers local dev. Used for canonical URLs, sitemap, robots and JSON-LD.
 */
export function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_BASE_URL ?? site.url).replace(/\/+$/, "");
}

/** Absolute URL for a path, e.g. absoluteUrl("/shop"). */
export function absoluteUrl(path: string): string {
  return `${siteUrl()}${path.startsWith("/") ? "" : "/"}${path}`;
}
