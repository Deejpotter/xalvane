import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { content, site } from "@/config/site";
import { getCategories, getFeaturedProducts, products } from "@/data/products";

export default function HomePage() {
  const featured = getFeaturedProducts(4);
  const categories = getCategories();

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_10%,rgba(210,173,99,0.14),transparent_35%),radial-gradient(circle_at_10%_80%,rgba(93,122,99,0.12),transparent_40%)]" />
        <div className="container-page section-pad relative flex flex-col items-start gap-7">
          <p className="rounded-full border border-line bg-bg-soft px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-accent">
            {content.hero.badge}
          </p>
          <h1 className="max-w-4xl text-4xl leading-[1.05] sm:text-6xl">
            {content.hero.headline}
          </h1>
          <p className="max-w-2xl text-lg text-muted">{content.hero.sub}</p>
          <div className="flex flex-wrap gap-3">
            <Link href={content.hero.cta.href} className="button button-primary">
              {content.hero.cta.label}
            </Link>
            <Link
              href={content.hero.secondaryCta.href}
              className="button button-secondary"
            >
              {content.hero.secondaryCta.label}
            </Link>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
            {site.shippingNotes}
          </p>
        </div>
      </section>

      <section id="featured" className="border-b border-line">
        <div className="container-page section-pad flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              Drop 01
            </p>
            <h2 className="text-3xl sm:text-4xl">{content.home.featuredTitle}</h2>
            <p className="max-w-2xl text-muted">{content.home.featuredIntro}</p>
          </div>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div>
            <Link href="/shop" className="button button-secondary">
              See all {products.length} pieces
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="container-page section-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              The label
            </p>
            <h2 className="text-3xl sm:text-4xl">
              Six designs. Four blanks. No warehouse.
            </h2>
            <p className="max-w-xl text-muted">
              Xalvane is a small print-on-demand label from Frankston North. The
              artwork is original, the blanks are chosen one at a time, and every
              piece is printed after you order it.
            </p>
            <Link href="/about" className="button button-secondary w-fit">
              Read the story
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.home.principles.map((principle) => (
              <div key={principle.title} className="card">
                <h3 className="text-lg font-semibold">{principle.title}</h3>
                <p className="mt-2 text-sm text-muted">{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-page section-pad flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              Browse
            </p>
            <h2 className="text-3xl sm:text-4xl">{content.home.categoriesTitle}</h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const count = products.filter(
                (product) => product.category === category,
              ).length;
              return (
                <li key={category}>
                  <Link
                    href={`/shop?category=${encodeURIComponent(category)}`}
                    className="card flex min-h-28 flex-col justify-center gap-1 transition-colors hover:border-accent"
                  >
                    <span className="font-display text-xl font-semibold">
                      {category}
                    </span>
                    <span className="text-sm text-muted">
                      {count} {count === 1 ? "piece" : "pieces"}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-page section-pad grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-xl border border-line bg-bg-soft p-8">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              Drop 01 / 2026
            </p>
            <h2 className="mt-3 text-3xl">Lunar Moth</h2>
            <p className="mt-4 max-w-md text-muted">
              The first piece in the drop. A moth around a crescent moon, printed
              on a mid-weight cotton tee. The back carries the full motif.
            </p>
            <Link href="/product/lunar-moth-tee" className="button button-primary mt-6">
              See Lunar Moth
            </Link>
          </div>
          <div className="overflow-hidden rounded-xl border border-line">
            <Image
              src="/images/products/lunar-moth-tee.svg"
              alt="Lunar Moth tee"
              width={800}
              height={800}
              className="h-full min-h-72 w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
