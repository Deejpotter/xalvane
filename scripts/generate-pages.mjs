import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const app = resolve("src/app");

const pages = {
  about: `import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "About",
  description: "Xalvane is a small print-on-demand label from Frankston North, Victoria.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="The label"
      title="A small label for the quiet hours."
      intro="Xalvane makes original night-inspired artwork on garments and prints. Everything is made to order, in Australia, in small drops that get retired."
    >
      <p>
        The name is invented. The work is not. Each design starts as a drawing,
        gets scanned and prepared for print, then goes onto a blank we have worn
        and chosen ourselves.
      </p>
      <p>
        We are not trying to build a huge catalogue. Drop 01 has six designs
        across a handful of blanks. When a design is retired, it stays retired.
        That is the whole model: fewer things, made properly.
      </p>
      <h2 className="text-xl font-semibold text-fg">Made to order</h2>
      <p>
        Nothing is printed until you order it. That means a short wait, but no
        warehouse full of unsold shirts. Production and delivery in Australia
        usually takes 6–10 business days.
      </p>
      <h2 className="text-xl font-semibold text-fg">The seller</h2>
      <p>
        Xalvane is a brand of Lumendot. The seller is Deej Potter, trading as
        Lumendot, ABN 61 889 636 448, based in Frankston North, Victoria.
      </p>
      <p>
        Questions? <Link href="/contact" className="underline">Contact us</Link>.
      </p>
    </InfoPage>
  );
}
`,
  materials: `import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Materials",
  description: "The blanks, inks and print methods behind Xalvane Drop 01.",
  alternates: { canonical: "/materials" },
};

export default function MaterialsPage() {
  return (
    <InfoPage
      eyebrow="Materials"
      title="What each piece is made of."
      intro="We name the blank, the fabric and the print method. If we cannot verify a claim, we leave it out."
    >
      <h2 className="text-xl font-semibold text-fg">Classic tee</h2>
      <p>
        Mid-weight 100% cotton unisex tee with a soft-hand DTG print. The print
        sits on the surface of the fabric and softens after the first wash.
      </p>
      <h2 className="text-xl font-semibold text-fg">Heavyweight hoodie</h2>
      <p>
        Cotton-rich brushed fleece pullover with a double-layer hood, ribbed cuffs
        and a kangaroo pocket. The back print is larger and holds more detail.
      </p>
      <h2 className="text-xl font-semibold text-fg">Crew sweatshirt</h2>
      <p>
        Mid-weight cotton-blend crewneck with a brushed inside and ribbed trims.
        A good layer for people who do not wear hoods.
      </p>
      <h2 className="text-xl font-semibold text-fg">Matte art print</h2>
      <p>
        200 gsm matte paper, 300 × 450 mm, unframed. Ships rolled in a rigid tube.
        The paper is uncoated, so colours are slightly softer than a gloss print.
      </p>
      <h2 className="text-xl font-semibold text-fg">Care</h2>
      <ul className="list-disc pl-5">
        <li>Wash inside out, cold, with similar colours.</li>
        <li>Do not iron directly over the print.</li>
        <li>Line dry in shade; do not tumble dry.</li>
        <li>Wash less. Air more. The garment will last longer.</li>
      </ul>
      <p className="text-sm">
        Exact composition and measurements are shown on each product page. If a
        blank changes, we update the page and note it in the order.
      </p>
    </InfoPage>
  );
}
`,
  sizing: `import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Sizing",
  description: "Size charts and fit notes for Xalvane tees, hoodies and sweatshirts.",
  alternates: { canonical: "/sizing" },
};

export default function SizingPage() {
  return (
    <InfoPage
      eyebrow="Sizing"
      title="Measure a shirt you already like."
      intro="Our blanks are unisex and run true to size for most people. The measurements below are the garment, not the body."
    >
      <div className="overflow-x-auto rounded-lg border border-line">
        <table className="w-full min-w-[34rem] text-left text-sm">
          <thead className="bg-bg-soft font-mono text-xs uppercase tracking-wide text-accent">
            <tr>
              <th className="px-4 py-3">Size</th>
              <th className="px-4 py-3">Chest (cm)</th>
              <th className="px-4 py-3">Length (cm)</th>
              <th className="px-4 py-3">Sleeve (cm)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["S", "51", "70", "20"],
              ["M", "54", "72", "21"],
              ["L", "57", "74", "22"],
              ["XL", "60", "76", "23"],
              ["2XL", "63", "78", "24"],
            ].map(([size, chest, length, sleeve]) => (
              <tr key={size} className="border-t border-line">
                <td className="px-4 py-3 font-semibold text-fg">{size}</td>
                <td className="px-4 py-3">{chest}</td>
                <td className="px-4 py-3">{length}</td>
                <td className="px-4 py-3">{sleeve}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm">
        Measurements are approximate and can vary by 1–2 cm. If you are between
        sizes, size up for a relaxed fit. Hoodies and sweatshirts use the same
        unisex size scale.
      </p>
      <p className="text-sm">
        Still unsure? Email <a href="mailto:hello@xalvane.com" className="underline">hello@xalvane.com</a>
        with your usual size and we will help.
      </p>
    </InfoPage>
  );
}
`,
  shipping: `import type { Metadata } from "next";
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
`,
  returns: `import type { Metadata } from "next";
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
`,
  privacy: `import type { Metadata } from "next";
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
`,
  terms: `import type { Metadata } from "next";
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
`,
  contact: `import type { Metadata } from "next";
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
`,
};

for (const [slug, content] of Object.entries(pages)) {
  const dir = resolve(app, slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, "page.tsx"), content);
}
console.log(`Wrote ${Object.keys(pages).length} info pages`);
