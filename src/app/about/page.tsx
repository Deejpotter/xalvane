import type { Metadata } from "next";
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
