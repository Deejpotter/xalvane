import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of sale for Xalvane.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <InfoPage
      eyebrow="Terms"
      title="The boring bits, in plain English."
      intro="By ordering from Xalvane you agree to these terms. They do not replace your rights under Australian Consumer Law."
    >
      <h2 className="text-xl font-semibold text-fg">Seller</h2>
      <p>
        Xalvane is a brand of Lumendot. The seller is Deej Potter, trading as
        Lumendot, ABN 61 889 636 448, Frankston North, VIC 3200.
      </p>
      <h2 className="text-xl font-semibold text-fg">Orders</h2>
      <p>
        An order is accepted when payment clears. We may cancel an order if a
        product is unavailable, the address is invalid, or fraud is suspected. If
        we cancel, we refund the amount paid.
      </p>
      <h2 className="text-xl font-semibold text-fg">Prices</h2>
      <p>
        Prices are in Australian dollars and include any applicable taxes. Shipping
        is shown at checkout. Prices can change without notice, but the price you
        paid is the price on your receipt.
      </p>
      <h2 className="text-xl font-semibold text-fg">Made to order</h2>
      <p>
        Products are printed after ordering. Small variations in print placement,
        colour and garment fit are normal. We aim to show colours accurately, but
        screens vary.
      </p>
      <h2 className="text-xl font-semibold text-fg">Intellectual property</h2>
      <p>
        All Xalvane artwork, names and images remain our property. You may not
        reproduce them for commercial use without written permission.
      </p>
      <h2 className="text-xl font-semibold text-fg">Liability</h2>
      <p>
        Nothing in these terms excludes rights that cannot be excluded by law. To
        the extent permitted, our liability is limited to replacing the goods or
        refunding the amount paid.
      </p>
    </InfoPage>
  );
}
