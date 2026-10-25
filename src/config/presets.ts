/**
 * Three colour + font presets. Set `site.preset` to switch the whole site.
 *
 * Colours are CSS custom properties (see styles/presets.css) so components use
 * semantic classes (bg-bg, text-fg, bg-accent…) and never hard-code a colour.
 * Fonts are registered in styles/global.css; browsers only download the faces
 * the active preset actually uses.
 *
 * The `colors` block mirrors styles/presets.css for code that runs outside CSS
 * (the OG image generator). Keep the two in sync when editing.
 */

export const presets = {
  paper: {
    label: "Paper",
    fonts: {
      display: "'Source Serif 4 Variable', Georgia, serif",
      body: "Inter Variable, system-ui, sans-serif",
    },
    colors: {
      bg: "#fbf8f3",
      bgSoft: "#f3ede3",
      fg: "#26221c",
      muted: "#6b6155",
      accent: "#b4531f",
      accentFg: "#ffffff",
      line: "#e5dbcc",
    },
  },
  xalvane: {
    label: "Xalvane",
    fonts: {
      display: "'Source Serif 4 Variable', Georgia, serif",
      body: "Inter Variable, system-ui, sans-serif",
    },
    colors: {
      bg: "#080b12",
      bgSoft: "#0e1624",
      fg: "#f2ead8",
      muted: "#a7adba",
      accent: "#d2ad63",
      accentFg: "#080b12",
      line: "#263143",
    },
  },
  workshop: {
    label: "Workshop",
    fonts: {
      display: "'Space Grotesk Variable', system-ui, sans-serif",
      body: "Inter Variable, system-ui, sans-serif",
    },
    colors: {
      bg: "#17191c",
      bgSoft: "#212529",
      fg: "#f2f3f4",
      muted: "#a9b0b7",
      accent: "#f5a623",
      accentFg: "#17191c",
      line: "#2f353b",
    },
  },
  coast: {
    label: "Coast",
    fonts: {
      display: "'Space Grotesk Variable', system-ui, sans-serif",
      body: "Inter Variable, system-ui, sans-serif",
    },
    colors: {
      bg: "#f2f7f5",
      bgSoft: "#e4efea",
      fg: "#14312c",
      muted: "#55706a",
      accent: "#0e7c6b",
      accentFg: "#ffffff",
      line: "#cfe2db",
    },
  },
} as const;

export type PresetId = keyof typeof presets;
