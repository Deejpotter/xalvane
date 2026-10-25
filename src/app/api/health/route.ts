/** Liveness check for Render/Docker (healthCheckPath: /api/health). */
export function GET() {
  return Response.json({ ok: true });
}
