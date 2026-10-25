import { site } from "@/config/site";

/** Format a whole number of cents as money, e.g. 4800 → "$48.00". */
export function formatMoney(cents: number): string {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: site.currency,
  }).format(cents / 100);
}
