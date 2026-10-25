import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const outDir = resolve("public/images/products");
mkdirSync(outDir, { recursive: true });

const ink = "#070a10";
const night = "#141d2b";
const bone = "#f2ead8";
const gold = "#d2ad63";
const moss = "#5d7a63";
const ember = "#c86a3e";

const motifs = {
  lunarMoth: `
    <g transform="translate(0 8)">
      <circle cx="0" cy="0" r="86" fill="none" stroke="${gold}" stroke-width="3"/>
      <path d="M-72 10 C-120 -40 -118 66 -38 64 C-66 34 -66 18 -72 10Z" fill="${gold}" opacity=".9"/>
      <path d="M72 10 C120 -40 118 66 38 64 C66 34 66 18 72 10Z" fill="${gold}" opacity=".9"/>
      <path d="M-16 -52 C-4 -72 4 -72 16 -52" fill="none" stroke="${gold}" stroke-width="3"/>
      <path d="M-30 12 C-12 -12 12 -12 30 12 C12 44 -12 44 -30 12Z" fill="${bone}"/>
      <circle cx="0" cy="10" r="8" fill="${ink}"/>
    </g>`,
  fernFog: `
    <g stroke="${bone}" fill="none" stroke-width="3">
      <path d="M-44 90 C-38 30 -16 -40 0 -92"/>
      <path d="M0 -92 C-28 -82 -44 -62 -48 -42"/>
      <path d="M0 -92 C28 -82 44 -62 48 -42"/>
      <path d="M-11 -50 C-36 -46 -52 -28 -56 -10"/>
      <path d="M11 -50 C36 -46 52 -28 56 -10"/>
      <path d="M-18 -10 C-40 -4 -54 12 -58 30"/>
      <path d="M18 -10 C40 -4 54 12 58 30"/>
      <path d="M-22 32 C-40 38 -50 52 -52 68"/>
      <path d="M22 32 C40 38 50 52 52 68"/>
      <path d="M-62 76 C-30 68 30 68 62 76" opacity=".45"/>
      <path d="M-54 88 C-22 80 22 80 54 88" opacity=".28"/>
    </g>`,
  stripePine: `
    <g>
      <path d="M0 -96 L-48 -20 L-22 -20 L-62 44 L-20 44 L-20 84 L20 84 L20 44 L62 44 L22 -20 L48 -20 Z" fill="${bone}"/>
      <circle cx="-90" cy="-62" r="4" fill="${gold}"/>
      <circle cx="86" cy="-36" r="3" fill="${gold}"/>
      <circle cx="-74" cy="26" r="2.5" fill="${gold}"/>
      <circle cx="92" cy="42" r="2" fill="${gold}"/>
      <circle cx="-34" cy="-104" r="2.5" fill="${gold}"/>
      <circle cx="38" cy="-100" r="2" fill="${gold}"/>
    </g>`,
  owlkeeper: `
    <g>
      <ellipse cx="0" cy="16" rx="72" ry="92" fill="${bone}"/>
      <path d="M-72 -18 C-74 -74 -34 -100 0 -108 C34 -100 74 -74 72 -18 C52 -44 36 -54 0 -54 C-36 -54 -52 -44 -72 -18Z" fill="${moss}"/>
      <circle cx="-28" cy="0" r="20" fill="${ink}"/>
      <circle cx="28" cy="0" r="20" fill="${ink}"/>
      <circle cx="-28" cy="0" r="7" fill="${gold}"/>
      <circle cx="28" cy="0" r="7" fill="${gold}"/>
      <path d="M-10 30 L0 42 L10 30" fill="${ember}"/>
      <path d="M-46 64 C-20 80 20 80 46 64" fill="none" stroke="${ink}" stroke-width="4"/>
    </g>`,
  nocturneBloom: `
    <g>
      <g fill="${bone}">
        <ellipse cx="0" cy="-62" rx="18" ry="46" transform="rotate(0)"/>
        <ellipse cx="0" cy="-62" rx="18" ry="46" transform="rotate(45)"/>
        <ellipse cx="0" cy="-62" rx="18" ry="46" transform="rotate(90)"/>
        <ellipse cx="0" cy="-62" rx="18" ry="46" transform="rotate(135)"/>
        <ellipse cx="0" cy="-62" rx="18" ry="46" transform="rotate(180)"/>
        <ellipse cx="0" cy="-62" rx="18" ry="46" transform="rotate(225)"/>
        <ellipse cx="0" cy="-62" rx="18" ry="46" transform="rotate(270)"/>
        <ellipse cx="0" cy="-62" rx="18" ry="46" transform="rotate(315)"/>
      </g>
      <circle cx="0" cy="0" r="28" fill="${gold}"/>
      <circle cx="0" cy="0" r="10" fill="${ink}"/>
      <path d="M0 70 C-6 40 -6 20 0 0" stroke="${moss}" stroke-width="5" fill="none"/>
      <path d="M0 44 C-36 38 -54 20 -58 2" stroke="${moss}" stroke-width="4" fill="none"/>
      <path d="M0 54 C36 46 54 28 58 10" stroke="${moss}" stroke-width="4" fill="none"/>
    </g>`,
  duskTide: `
    <g>
      <circle cx="0" cy="-54" r="58" fill="${gold}"/>
      <path d="M-130 26 C-90 6 -50 46 -10 26 C30 6 70 46 110 26" fill="none" stroke="${bone}" stroke-width="5"/>
      <path d="M-130 54 C-90 34 -50 74 -10 54 C30 34 70 74 110 54" fill="none" stroke="${bone}" stroke-width="5" opacity=".8"/>
      <path d="M-130 82 C-90 62 -50 102 -10 82 C30 62 70 102 110 82" fill="none" stroke="${bone}" stroke-width="5" opacity=".55"/>
    </g>`,
};

function garment(kind, body, inkColour) {
  if (kind === "tee") {
    return `
      <path d="M236 168 L318 142 L482 142 L564 168 L652 264 L590 320 L548 282 L548 650 L252 650 L252 282 L210 320 L148 264 Z" fill="${body}"/>
      <path d="M318 142 C348 188 452 188 482 142" fill="none" stroke="${inkColour}" stroke-width="8" opacity=".7"/>`;
  }
  if (kind === "hoodie") {
    return `
      <path d="M228 188 L318 152 L482 152 L572 188 L672 292 L594 364 L552 316 L552 668 L248 668 L248 316 L206 364 L128 292 Z" fill="${body}"/>
      <path d="M318 152 C338 226 462 226 482 152 C446 118 354 118 318 152Z" fill="${body}" stroke="${inkColour}" stroke-width="4" opacity=".9"/>
      <path d="M350 208 L350 284 M450 208 L450 284" stroke="${inkColour}" stroke-width="6" opacity=".55"/>
      <path d="M290 500 L510 500 L510 610 L290 610 Z" fill="none" stroke="${inkColour}" stroke-width="5" opacity=".38"/>`;
  }
  if (kind === "sweatshirt") {
    return `
      <path d="M236 168 L318 142 L482 142 L564 168 L652 264 L590 320 L548 282 L548 650 L252 650 L252 282 L210 320 L148 264 Z" fill="${body}"/>
      <path d="M318 142 C348 188 452 188 482 142" fill="none" stroke="${inkColour}" stroke-width="8" opacity=".7"/>
      <path d="M252 612 L548 612" stroke="${inkColour}" stroke-width="10" opacity=".45"/>
      <path d="M148 264 L210 320 M652 264 L590 320" stroke="${inkColour}" stroke-width="8" opacity=".45"/>`;
  }
  return "";
}

const assets = [
  ["lunar-moth-tee", "tee", ink, night, "lunarMoth", 1.18],
  ["fern-fog-tee", "tee", bone, "#e9e1d2", "fernFog", 1.0],
  ["starpine-hoodie", "hoodie", ink, night, "stripePine", 0.86],
  ["owlkeeper-hoodie", "hoodie", moss, "#1b2a23", "owlkeeper", 0.88],
  ["nocturne-bloom-sweatshirt", "sweatshirt", "#101722", ink, "nocturneBloom", 0.86],
  ["dusk-tide-sweatshirt", "sweatshirt", "#17202e", ink, "duskTide", 0.8],
  ["lunar-moth-print", "print", "#e9e1d2", "#e9e1d2", "lunarMoth", 1.55],
  ["fern-fog-print", "print", "#e9e1d2", "#e9e1d2", "fernFog", 1.35],
  ["starpine-tee", "tee", bone, "#e9e1d2", "stripePine", 1.25],
  ["nocturne-bloom-tee", "tee", "#101722", ink, "nocturneBloom", 0.8],
];

for (const [slug, kind, body, bg, motif, scale] of assets) {
  const isPrint = kind === "print";
  const motifInk = body === bone || body === "#e9e1d2" ? ink : bone;
  const art = isPrint
    ? `<rect x="176" y="120" width="448" height="560" fill="#f6f0e5" stroke="${gold}" stroke-width="2"/>
       <g transform="translate(400 380) scale(${scale})">${motifs[motif]}</g>
       <text x="400" y="720" text-anchor="middle" font-family="Georgia, serif" font-size="20" fill="${ink}" letter-spacing="4">XALVANE</text>`
    : `<g transform="translate(400 380) scale(${scale})">${motifs[motif]}</g>
       <text x="400" y="722" text-anchor="middle" font-family="Inter, sans-serif" font-size="18" fill="${motifInk}" letter-spacing="6" opacity=".8">XALVANE</text>`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
  <rect width="800" height="800" fill="${bg}"/>
  <circle cx="660" cy="120" r="180" fill="${gold}" opacity=".05"/>
  ${isPrint ? "" : garment(kind, body, motifInk)}
  ${art}
</svg>`;
  writeFileSync(resolve(outDir, `${slug}.svg`), svg);
}
console.log(`Wrote ${assets.length} product SVGs`);
