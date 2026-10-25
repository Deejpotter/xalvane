"use client";

// Route-level error boundary. Must be a Client Component.
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container-page section-pad flex flex-col items-start gap-5">
      <h1 className="text-3xl font-semibold sm:text-4xl">
        Something went wrong
      </h1>
      <p className="max-w-xl text-muted">
        The shop hit an unexpected error. Try again, and if it keeps happening
        email us and we&apos;ll sort it out.
      </p>
      <button type="button" onClick={() => reset()} className="button button-primary">
        Try again
      </button>
      {error.digest && (
        <p className="text-sm text-muted">Error reference: {error.digest}</p>
      )}
    </div>
  );
}
