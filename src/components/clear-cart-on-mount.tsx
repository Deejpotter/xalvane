"use client";

import { useEffect } from "react";
import { useCart } from "@/components/cart-provider";

/** Runs on the checkout success page: the order is paid, so empty the saved
 *  cart exactly once when the customer lands back on the site. */
export function ClearCartOnMount() {
  const { clear } = useCart();
  useEffect(() => {
    clear();
  }, [clear]);
  return null;
}
