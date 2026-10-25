import Link from "next/link";

export function InfoPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <div className="container-page section-pad">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl">{title}</h1>
        <p className="mt-5 text-lg text-muted">{intro}</p>
      </div>
      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="prose-xalvane flex min-w-0 max-w-2xl flex-col gap-6 text-muted">
          {children}
        </div>
        <aside className="card h-fit">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
            Xalvane
          </p>
          <p className="mt-3 text-sm">
            A Lumendot brand. Original artwork, printed to order in Australia.
          </p>
          <nav className="mt-5 flex flex-col gap-2 text-sm">
            <Link href="/shop" className="hover:underline">
              Shop Drop 01
            </Link>
            <Link href="/shipping" className="hover:underline">
              Shipping
            </Link>
            <Link href="/returns" className="hover:underline">
              Returns
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </aside>
      </div>
    </div>
  );
}
