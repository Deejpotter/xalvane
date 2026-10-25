import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Xalvane Studio",
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  const live = products.filter((product) => product.stock > 0);
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="container-page section-pad flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
          Internal preview
        </p>
        <h1 className="text-4xl">Xalvane Studio</h1>
        <p className="max-w-2xl text-muted">
          Read-only launch overview. Authentication, order persistence and
          fulfilment controls are the next backend pass.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card">
          <p className="font-mono text-xs uppercase tracking-wide text-muted">Products</p>
          <p className="mt-2 text-3xl font-semibold">{products.length}</p>
        </div>
        <div className="card">
          <p className="font-mono text-xs uppercase tracking-wide text-muted">Live</p>
          <p className="mt-2 text-3xl font-semibold">{live.length}</p>
        </div>
        <div className="card">
          <p className="font-mono text-xs uppercase tracking-wide text-muted">Categories</p>
          <p className="mt-2 text-3xl font-semibold">{categories.length}</p>
        </div>
        <div className="card">
          <p className="font-mono text-xs uppercase tracking-wide text-muted">Seller</p>
          <p className="mt-2 text-sm font-semibold">Lumendot</p>
          <p className="text-xs text-muted">ABN {site.abn}</p>
        </div>
      </div>

      <div className="grid min-w-0 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card min-w-0">
          <h2 className="text-xl font-semibold">Catalog</h2>
          <div className="mt-4 max-w-full min-w-0 overflow-x-auto">
            <table className="w-full min-w-[42rem] text-left text-sm">
              <thead className="font-mono text-xs uppercase tracking-wide text-accent">
                <tr>
                  <th className="py-2 pr-4">Product</th>
                  <th className="py-2 pr-4">Design</th>
                  <th className="py-2 pr-4">Blank</th>
                  <th className="py-2 pr-4">Price</th>
                  <th className="py-2">Sizes</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.slug} className="border-t border-line">
                    <td className="py-3 pr-4">
                      <Link href={`/product/${product.slug}`} className="hover:underline">
                        {product.name}
                      </Link>
                    </td>
                    <td className="py-3 pr-4 font-mono text-xs">{product.design}</td>
                    <td className="py-3 pr-4 text-muted">{product.blank}</td>
                    <td className="py-3 pr-4">${(product.priceAUD / 100).toFixed(0)}</td>
                    <td className="py-3 text-muted">{product.sizes?.join(", ") ?? "Print"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold">Launch checklist</h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {[
              "Brand and storefront copy",
              "Drop 01 catalog and artwork",
              "Size-aware cart",
              "Stripe Checkout",
              "Content, shipping, returns and privacy",
              "Production build",
              "Postgres orders and invoices",
              "Better Auth customer accounts",
              "Gelato order submission and tracking",
            ].map((item, index) => (
              <li key={item} className="flex items-center gap-3">
                <span className="text-accent">{index < 6 ? "✓" : "○"}</span>
                <span className={index < 6 ? "" : "text-muted"}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold">Next backend pass</h2>
        <p className="mt-2 text-sm text-muted">
          The current build is a working storefront with Stripe Checkout. The
          technical plan covers Postgres, Better Auth, invoices, Gelato submission
          and tracking. None of those are faked here.
        </p>
      </div>
    </div>
  );
}
