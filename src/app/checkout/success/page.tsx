import type { Metadata } from "next";
import Link from "next/link";
import { ClearCartOnMount } from "@/components/clear-cart-on-mount";
import { content, site } from "@/config/site";

// Payment is done, keep this page out of the index.
export const metadata: Metadata = {
  title: content.checkout.successTitle,
  robots: { index: false, follow: false },
};

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;

  return (
    <div className="container-page section-pad flex flex-col items-start gap-5">
      <ClearCartOnMount />
      <h1 className="text-3xl font-semibold sm:text-4xl">
        {content.checkout.successTitle}
      </h1>
      <p className="max-w-xl text-muted">{content.checkout.successBody}</p>
      {sessionId && (
        <p className="text-sm text-muted">
          {content.checkout.referenceLabel}: <code>{sessionId}</code>
        </p>
      )}
      <Link href={content.checkout.successCta.href} className="button button-primary">
        {content.checkout.successCta.label}
      </Link>
      <p className="text-sm text-muted">{site.descriptorNote}</p>
      <p className="text-sm text-muted">{site.returnsNotes}</p>
    </div>
  );
}
