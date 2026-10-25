import type { Metadata } from "next";
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
      <div className="max-w-full min-w-0 overflow-x-auto rounded-lg border border-line">
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
