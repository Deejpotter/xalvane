"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/cart-provider";

/** Header cart link with live item count. Client leaf, the header stays server. */
export function CartCount() {
  const { itemCount } = useCart();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <Link
      href="/cart"
      className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-line px-4 py-2 font-semibold transition-colors hover:bg-bg-soft"
    >
      Cart
      {/* Render the count only after mount so SSR and hydration match. */}
      {mounted && itemCount > 0 && (
        <span
          className="inline-flex min-w-6 items-center justify-center rounded-full bg-accent px-1.5 text-sm text-accent-fg"
          aria-label={`${itemCount} items in cart`}
        >
          {itemCount}
        </span>
      )}
    </Link>
  );
}
