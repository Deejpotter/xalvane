import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Xalvane collects, uses and retains personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <InfoPage
      eyebrow="Privacy"
      title="Only what we need to send an order."
      intro="Xalvane is a Lumendot brand. This policy covers the store and the order process."
    >
      <h2 className="text-xl font-semibold text-fg">What we collect</h2>
      <ul className="list-disc pl-5">
        <li>Name, email and shipping address.</li>
        <li>Order contents and amounts.</li>
        <li>Payment status from Stripe. We never receive your card number.</li>
        <li>Basic technical logs for security and errors.</li>
      </ul>
      <h2 className="text-xl font-semibold text-fg">Why</h2>
      <p>
        To process and deliver your order, reply to you, meet tax and accounting
        obligations, and keep the store secure.
      </p>
      <h2 className="text-xl font-semibold text-fg">Who sees it</h2>
      <p>
        Stripe processes payments. Our print partner receives the shipping details
        needed to produce and send the order. We do not sell or rent your data.
      </p>
      <h2 className="text-xl font-semibold text-fg">Retention</h2>
      <p>
        Order records are kept for at least five years for tax purposes. Failed
        checkout data and technical logs are kept only as long as needed.
      </p>
      <h2 className="text-xl font-semibold text-fg">Contact</h2>
      <p>
        For access, correction or deletion requests, email
        <a href="mailto:hello@xalvane.com" className="ml-1 underline">hello@xalvane.com</a>.
      </p>
    </InfoPage>
  );
}
