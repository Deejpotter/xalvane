import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Shipping",
  description: "Xalvane production and shipping times, rates and tracking.",
  alternates: { canonical: "/shipping" },
};

export default function ShippingPage() {
  return (
    <InfoPage
      eyebrow="Shipping"
      title="Made to order, then sent."
      intro="Every piece is printed after you order it. We ship Australia-wide from a production partner in Australia."
    >
      <h2 className="text-xl font-semibold text-fg">Times</h2>
      <p>
        Production usually takes 3–6 business days. Standard delivery adds 2–5
        business days depending on your address. Allow 6–10 business days in
        total, and a little longer around public holidays.
      </p>
      <h2 className="text-xl font-semibold text-fg">Rates</h2>
      <p>
        Standard shipping is A$9.95. Orders over A$150 ship free. Express
        delivery is not available at launch.
      </p>
      <h2 className="text-xl font-semibold text-fg">Tracking</h2>
      <p>
        You will get a tracking link by email when the parcel leaves production.
        If you do not receive one within 10 business days, contact us and we will
        chase it.
      </p>
      <h2 className="text-xl font-semibold text-fg">Addresses</h2>
      <p>
        Please check your address at checkout. If you spot a mistake before the
        order goes into production, email us immediately. Once a parcel is
        printed and dispatched, an address change may not be possible.
      </p>
      <p className="text-sm">
        We currently ship within Australia only. New Zealand is planned next.
      </p>
    </InfoPage>
  );
}
