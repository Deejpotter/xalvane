import Link from "next/link";
import { CartCount } from "@/components/cart-count";
import { site } from "@/config/site";

const nav = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/materials", label: "Materials" },
  { href: "/sizing", label: "Sizing" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="container-page flex items-center justify-between gap-4 py-4">
        <Link
          href="/"
          className="font-display text-2xl font-semibold tracking-[0.08em]"
          aria-label={`${site.name} home`}
        >
          {site.name}
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden min-h-10 items-center rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:bg-bg-soft sm:inline-flex"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/shop"
            className="inline-flex min-h-10 items-center rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:bg-bg-soft sm:hidden"
          >
            Shop
          </Link>
          <CartCount />
        </nav>
      </div>
    </header>
  );
}
