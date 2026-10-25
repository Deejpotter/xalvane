import type { Metadata } from "next";
import { CartView } from "@/components/cart-view";
import { content } from "@/config/site";

export const metadata: Metadata = {
  title: content.cart.title,
  description: content.cart.intro,
  alternates: { canonical: "/cart" },
};

export default function CartPage() {
  return (
    <div className="container-page section-pad">
      <CartView />
    </div>
  );
}
