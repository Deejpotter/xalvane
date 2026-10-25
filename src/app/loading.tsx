export default function Loading() {
  return (
    <div className="container-page section-pad" aria-busy="true">
      <div className="h-8 w-48 animate-pulse rounded bg-bg-soft" />
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-72 animate-pulse rounded-lg border border-line bg-bg-soft"
          />
        ))}
      </div>
      <p className="sr-only">Loading…</p>
    </div>
  );
}
