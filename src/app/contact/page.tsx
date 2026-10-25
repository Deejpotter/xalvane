import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Xalvane about an order, a return or a sizing question.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <InfoPage
      eyebrow="Contact"
      title="A real person reads these."
      intro="Questions about sizing, an order, a return or a design? Email us. We usually reply within two business days."
    >
      <p className="text-xl text-fg">
        <a href="mailto:hello@xalvane.com" className="underline">
          hello@xalvane.com
        </a>
      </p>
      <h2 className="text-xl font-semibold text-fg">Seller details</h2>
      <p>
        Deej Potter trading as Lumendot<br />
        ABN 61 889 636 448<br />
        Frankston North, VIC 3200<br />
        Australia
      </p>
      <h2 className="text-xl font-semibold text-fg">Order enquiries</h2>
      <p>
        Include your order reference and the email address you used at checkout.
        For faulty items, attach a photo of the issue.
      </p>
      <p className="text-sm">
        Xalvane is online-only. There is no shopfront or pickup.
      </p>
    </InfoPage>
  );
}
