/**
 * Xalvane Drop 01 catalog.
 *
 * Prices are in cents (AUD). Checkout re-reads every price from this file, so
 * client-side values are display-only.
 */

export type Product = {
  slug: string;
  name: string;
  /** Price in cents (AUD), e.g. 7900 = $79.00. */
  priceAUD: number;
  category: string;
  shortDescription: string;
  longDescription: string;
  /** Units on hand. 0 shows the product as out of stock. */
  stock: number;
  image: string;
  /** Available sizes. Prints omit this. */
  sizes?: string[];
  /** Show on the home page's featured row. */
  featured?: boolean;
  /** Internal design code. */
  design: string;
  /** Blank description. */
  blank: string;
};

const APPAREL_SIZES = ["S", "M", "L", "XL", "2XL"];

export const products: Product[] = [
  {
    slug: "lunar-moth-tee",
    name: "Lunar Moth Tee",
    priceAUD: 7900,
    category: "Tees",
    shortDescription: "Moon phases, moth wings and a small chest mark.",
    longDescription:
      "Our first design: a moth drawn around a crescent moon, printed on a mid-weight unisex tee. The back carries the full motif; the chest has a small mark. Printed to order on a 100% cotton blank, with a soft-hand finish that won't crack after a few washes.",
    stock: 999,
    image: "/images/products/lunar-moth-tee.svg",
    sizes: APPAREL_SIZES,
    featured: true,
    design: "XV-D01",
    blank: "Classic unisex tee / 100% cotton",
  },
  {
    slug: "fern-fog-tee",
    name: "Fern & Fog Tee",
    priceAUD: 7900,
    category: "Tees",
    shortDescription: "Understory ferns, low mist and a thin crescent.",
    longDescription:
      "A quieter piece for the front of a tee. Fern fronds sit under a thin crescent and a low band of mist. Printed on the same mid-weight cotton blank as Lunar Moth, with a small Xalvane mark at the hem.",
    stock: 999,
    image: "/images/products/fern-fog-tee.svg",
    sizes: APPAREL_SIZES,
    featured: true,
    design: "XV-D02",
    blank: "Classic unisex tee / 100% cotton",
  },
  {
    slug: "starpine-hoodie",
    name: "Starpine Hoodie",
    priceAUD: 11900,
    category: "Hoodies",
    shortDescription: "Pines, cold stars and a low horizon.",
    longDescription:
      "The Starpine scene wraps the back of a heavyweight pullover hoodie: a stand of pines, a low horizon and a scatter of stars. The front carries a small moon mark. Brushed fleece inside, ribbed cuffs and a double-layer hood.",
    stock: 999,
    image: "/images/products/starpine-hoodie.svg",
    sizes: APPAREL_SIZES,
    featured: true,
    design: "XV-D04",
    blank: "Heavyweight pullover hoodie / cotton-rich fleece",
  },
  {
    slug: "owlkeeper-hoodie",
    name: "Owlkeeper Hoodie",
    priceAUD: 11900,
    category: "Hoodies",
    shortDescription: "A guardian owl built from simple shapes and negative space.",
    longDescription:
      "An owl as a quiet guardian, drawn in two tones and negative space. It sits across the back of a heavyweight hoodie, with a small feather mark on the chest. The kind of piece that gets better the more it's worn.",
    stock: 999,
    image: "/images/products/owlkeeper-hoodie.svg",
    sizes: APPAREL_SIZES,
    design: "XV-D05",
    blank: "Heavyweight pullover hoodie / cotton-rich fleece",
  },
  {
    slug: "nocturne-bloom-sweatshirt",
    name: "Nocturne Bloom Sweatshirt",
    priceAUD: 9900,
    category: "Sweatshirts",
    shortDescription: "Night-blooming flowers and moths, printed on a crewneck.",
    longDescription:
      "A more decorative piece: night-blooming flowers, a pair of moths and a dark centre. Printed on a mid-weight crewneck sweatshirt with a soft brushed inside and ribbed trims. The print sits across the chest and upper back.",
    stock: 999,
    image: "/images/products/nocturne-bloom-sweatshirt.svg",
    sizes: APPAREL_SIZES,
    design: "XV-D03",
    blank: "Mid-weight crewneck sweatshirt / cotton blend",
  },
  {
    slug: "dusk-tide-sweatshirt",
    name: "Dusk Tide Sweatshirt",
    priceAUD: 9900,
    category: "Sweatshirts",
    shortDescription: "Moon over water, broken reflections, a darker palette.",
    longDescription:
      "A moon over water, broken into thin horizontal lines. The design is made for a darker garment: ivory ink on navy, with a small moon at the cuff. Printed on the same mid-weight crewneck blank as Nocturne Bloom.",
    stock: 999,
    image: "/images/products/dusk-tide-sweatshirt.svg",
    sizes: APPAREL_SIZES,
    design: "XV-D06",
    blank: "Mid-weight crewneck sweatshirt / cotton blend",
  },
  {
    slug: "lunar-moth-print",
    name: "Lunar Moth Print",
    priceAUD: 4900,
    category: "Prints",
    shortDescription: "The Lunar Moth artwork as a 300 × 450 mm matte print.",
    longDescription:
      "The full Lunar Moth illustration on 200 gsm matte paper. 300 × 450 mm, unframed, with a small Xalvane mark in the lower margin. Ships rolled in a rigid tube.",
    stock: 999,
    image: "/images/products/lunar-moth-print.svg",
    design: "XV-D01",
    blank: "200 gsm matte art print / 300 × 450 mm",
  },
  {
    slug: "fern-fog-print",
    name: "Fern & Fog Print",
    priceAUD: 4900,
    category: "Prints",
    shortDescription: "The Fern & Fog artwork as a 300 × 450 mm matte print.",
    longDescription:
      "The Fern & Fog illustration on 200 gsm matte paper. 300 × 450 mm, unframed, with a small Xalvane mark in the lower margin. Ships rolled in a rigid tube.",
    stock: 999,
    image: "/images/products/fern-fog-print.svg",
    design: "XV-D02",
    blank: "200 gsm matte art print / 300 × 450 mm",
  },
  {
    slug: "starpine-tee",
    name: "Starpine Tee",
    priceAUD: 7900,
    category: "Tees",
    shortDescription: "The Starpine scene on the front of a classic tee.",
    longDescription:
      "A smaller version of the Starpine scene, printed on the front of a mid-weight tee. Pines, stars and a low horizon in bone ink. The back stays plain, with a small mark at the neck.",
    stock: 999,
    image: "/images/products/starpine-tee.svg",
    sizes: APPAREL_SIZES,
    design: "XV-D04",
    blank: "Classic unisex tee / 100% cotton",
  },
  {
    slug: "nocturne-bloom-tee",
    name: "Nocturne Bloom Tee",
    priceAUD: 7900,
    category: "Tees",
    shortDescription: "A single night-blooming flower, printed small on the chest.",
    longDescription:
      "The quietest piece in Drop 01: one night-blooming flower, printed small on the left chest. The rest of the tee stays clean. Same mid-weight cotton blank and soft-hand print as the rest of the range.",
    stock: 999,
    image: "/images/products/nocturne-bloom-tee.svg",
    sizes: APPAREL_SIZES,
    design: "XV-D03",
    blank: "Classic unisex tee / 100% cotton",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(limit = 4): Product[] {
  return products.filter((p) => p.featured).slice(0, limit);
}

/** Category names in first-seen order, as the nav and filters show them. */
export function getCategories(): string[] {
  const seen: string[] = [];
  for (const p of products) {
    if (!seen.includes(p.category)) seen.push(p.category);
  }
  return seen;
}
