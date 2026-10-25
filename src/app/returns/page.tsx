import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Returns",
  description: "Xalvane returns and faulty-item policy.",
  alternates: { canonical: "/returns" },
};

export default function ReturnsPage() {
  return (
    <InfoPage
      eyebrow="Returns"
      title="If something is wrong, tell us."
      intro="Made-to-order pieces are not easy to resell, so we handle returns honestly and case by case."
    >
      <h2 className="text-xl font-semibold text-fg">Faulty or misprinted</h2>
      <p>
        If a garment arrives damaged, misprinted, or is not what you ordered,
        email us within 14 days with your order number and a photo. We will
        replace it or refund it, including postage.
      </p>
      <h2 className="text-xl font-semibold text-fg">Wrong size</h2>
      <p>
        Check the size chart before ordering. If you ordered the wrong size, email
        us. We will consider an exchange or return on a case-by-case basis, but
        made-to-order items cannot always be resold, so change-of-mind returns are
        not guaranteed.
      </p>
      <h2 className="text-xl font-semibold text-fg">Change of mind</h2>
      <p>
        Unworn, unwashed items may be accepted within 14 days at our discretion.
        Return postage is paid by the customer unless the item is faulty.
      </p>
      <h2 className="text-xl font-semibold text-fg">Consumer guarantees</h2>
      <p>
        Nothing here limits your rights under the Australian Consumer Law. Goods
        must be of acceptable quality and fit for purpose.
      </p>
      <p>
        Start a return at <a href="mailto:hello@xalvane.com" className="underline">hello@xalvane.com</a>.
      </p>
    </InfoPage>
  );
}
