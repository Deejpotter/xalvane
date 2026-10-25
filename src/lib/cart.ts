/**
 * Cart math and shape. Pure functions only: state lives in
 * src/components/cart-provider.tsx (the one client island).
 *
 * `priceAUD` on a line is display-only: the checkout route re-reads every
 * price from the catalog server-side and never trusts the client.
 */

export type CartLine = {
  slug: string;
  name: string;
  /** Unit price in cents, from the catalog. Display only. */
  priceAUD: number;
  image: string;
  quantity: number;
  /** Apparel size, or undefined for prints. */
  size?: string;
};

/** localStorage key. Bump the suffix to invalidate old carts after a rebrand. */
export const CART_STORAGE_KEY = "xalvane-cart:v1";

/** Sanity cap per line, the checkout route enforces the same limit. */
export const MAX_QUANTITY = 99;

export function lineKey(line: Pick<CartLine, "slug" | "size">): string {
  return `${line.slug}::${line.size ?? ""}`;
}

export function lineTotalCents(line: CartLine): number {
  return line.priceAUD * line.quantity;
}

export function subtotalCents(lines: CartLine[]): number {
  return lines.reduce((sum, line) => sum + lineTotalCents(line), 0);
}

export function itemCount(lines: CartLine[]): number {
  return lines.reduce((sum, line) => sum + line.quantity, 0);
}
