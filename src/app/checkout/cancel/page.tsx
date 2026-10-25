import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/config/site";

export const metadata: Metadata = {
  title: content.checkout.cancelTitle,
  robots: { index: false, follow: false },
};

export default function CheckoutCancelPage() {
  return (
    <div className="container-page section-pad flex flex-col items-start gap-5">
      <h1 className="text-3xl font-semibold sm:text-4xl">
        {content.checkout.cancelTitle}
      </h1>
      <p className="max-w-xl text-muted">{content.checkout.cancelBody}</p>
      <Link href={content.checkout.cancelCta.href} className="button button-primary">
        {content.checkout.cancelCta.label}
      </Link>
    </div>
  );
}
