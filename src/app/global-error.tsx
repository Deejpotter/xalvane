"use client";

// Last-resort error UI, including failures in the root layout itself.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en-AU">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "1.25rem",
          padding: "2rem",
        }}
      >
        <h1 style={{ fontSize: "1.75rem", margin: 0 }}>
          Something went wrong
        </h1>
        <p style={{ color: "#555", margin: 0 }}>
          The shop hit an unexpected error. Please try again.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            minHeight: "3rem",
            padding: "0 1.5rem",
            borderRadius: "0.5rem",
            border: "none",
            background: "#b4531f",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
