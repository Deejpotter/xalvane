import Link from "next/link";
import { content, site } from "@/config/site";
import { formatMoney } from "@/lib/money";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg-soft">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <p className="font-display text-lg font-semibold tracking-[0.08em]">
            {site.name}
          </p>
          <p className="max-w-sm text-sm text-muted">{site.tagline}</p>
          <p className="text-sm text-muted">
            {site.shippingNotes} Free shipping over {formatMoney(site.freeShippingCents)}.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
            Shop
          </h2>
          <nav aria-label="Footer shop" className="flex flex-col gap-2 text-sm">
            <Link href="/shop" className="min-h-6 w-fit hover:underline">
              Drop 01
            </Link>
            <Link href="/cart" className="min-h-6 w-fit hover:underline">
              Your cart
            </Link>
            <Link href="/sizing" className="min-h-6 w-fit hover:underline">
              Sizing
            </Link>
            <Link href="/shipping" className="min-h-6 w-fit hover:underline">
              Shipping
            </Link>
            <Link href="/returns" className="min-h-6 w-fit hover:underline">
              Returns
            </Link>
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
            The label
          </h2>
          <nav aria-label="Footer information" className="flex flex-col gap-2 text-sm">
            <Link href="/about" className="min-h-6 w-fit hover:underline">
              About
            </Link>
            <Link href="/materials" className="min-h-6 w-fit hover:underline">
              Materials
            </Link>
            <Link href="/contact" className="min-h-6 w-fit hover:underline">
              Contact
            </Link>
            <Link href="/privacy" className="min-h-6 w-fit hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="min-h-6 w-fit hover:underline">
              Terms
            </Link>
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
            Seller
          </h2>
          <p className="text-sm text-muted">{site.legalName}</p>
          <p className="text-sm text-muted">ABN {site.abn}</p>
          <p className="text-sm text-muted">Frankston North, VIC 3200</p>
          <a href={`mailto:${site.email}`} className="min-h-6 w-fit text-sm hover:underline">
            {site.email}
          </a>
          <p className="text-xs text-muted">{content.footer.note}</p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <p>{site.descriptorNote}</p>
        </div>
      </div>
    </footer>
  );
}
