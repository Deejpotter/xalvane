import { ImageResponse } from "next/og";
import { presets } from "@/config/presets";
import { content, site } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = site.name;

/** Social card, generated at build time in the active preset's colours. */
export default function OpengraphImage() {
  const colors = presets[site.preset].colors;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: colors.bg,
          color: colors.fg,
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 30,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: colors.accent,
          }}
        >
          <div
            style={{ width: 18, height: 18, borderRadius: 9, background: colors.accent }}
          />
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, lineHeight: 1.1 }}>{content.hero.headline}</div>
          <div style={{ fontSize: 32, color: colors.muted }}>{site.tagline}</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            color: colors.muted,
          }}
        >
          <div>{content.hero.badge}</div>
          <div>{site.url.replace(/^https?:\/\//, "")}</div>
        </div>
      </div>
    ),
    size,
  );
}
