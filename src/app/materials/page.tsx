import type { Metadata } from "next";
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
