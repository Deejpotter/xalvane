import Link from "next/link";
import { content, site } from "@/config/site";

export default function NotFound() {
  return (
    <div className="container-page section-pad flex flex-col items-start gap-5">
      <p className="text-sm font-semibold uppercase tracking-wide text-muted">
        404
      </p>
      <h1 className="text-3xl font-semibold sm:text-4xl">
        We can&apos;t find that page
      </h1>
      <p className="max-w-xl text-muted">
        The page may have moved or the product is no longer listed. The shop is
        one click away.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href={content.hero.cta.href} className="button button-primary">
          {content.hero.cta.label}
        </Link>
        <Link href="/" className="button button-secondary">
          Back to {site.name}
        </Link>
      </div>
    </div>
  );
}
