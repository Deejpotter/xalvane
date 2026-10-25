/**
 * Xalvane brand and store copy.
 *
 * All prices are in cents (AUD). Checkout re-reads the catalog and never trusts
 * client-sent prices.
 */

const siteUrl = (process.env.NEXT_PUBLIC_BASE_URL || "https://xalvane.com").replace(
  /\/+$/,
  "",
);

export const site = {
  name: "Xalvane",
  tagline: "Original night-inspired artwork, printed to order in Australia.",
  description:
    "Xalvane is a small print-on-demand label: original artwork on tees, hoodies and prints, made to order in Australia.",
  url: siteUrl,
  phone: "",
  email: "hello@xalvane.com",
  address: {
    streetAddress: "",
    addressLocality: "Frankston North",
    addressRegion: "VIC",
    postalCode: "3200",
  },
  currency: "AUD",
  preset: "xalvane" as "xalvane" | "paper" | "workshop" | "coast",
  legalName: "Deej Potter trading as Lumendot",
  abn: "61 889 636 448",
  freeShippingCents: 15000,
  flatRateCents: 995,
  shippingCountries: ["AU"] as string[],
  shippingNotes:
    "Made to order. Standard shipping is A$9.95, free over A$150. Allow 6–10 business days for production and delivery in Australia.",
  returnsNotes:
    "Faulty or misprinted items are replaced or refunded. Change-of-mind returns are considered case by case; made-to-order items cannot be resold.",
  descriptorNote:
    "Your card statement will show LUMENDOT SERVICES. Xalvane is a Lumendot brand.",
};

export const content = {
  hero: {
    badge: "Drop 01 — original artwork, made to order",
    headline: "Clothes for the hour after everyone else has gone home.",
    sub:
      "Six original designs. Four carefully chosen blanks. Printed when you order, in Australia, in small runs that get retired.",
    cta: { label: "Shop Drop 01", href: "/shop" },
    secondaryCta: { label: "Read the story", href: "/about" },
  },

  home: {
    featuredTitle: "Drop 01",
    featuredIntro:
      "A short first collection: moths, ferns, cold stars and the last of the light.",
    categoriesTitle: "Choose your blank",
    principlesTitle: "Made the slow way",
    principles: [
      {
        title: "Original artwork",
        body: "Each design starts as a drawing, not a marketplace file. Nothing here is stock art.",
      },
      {
        title: "Printed to order",
        body: "We print after you order. No boxes of unsold shirts, no deadstock, no pretending otherwise.",
      },
      {
        title: "Small runs",
        body: "Designs are released in a drop and retired. When a design is gone, it stays gone.",
      },
      {
        title: "Honest materials",
        body: "We name the blank, the fabric and the print method. No vague sustainability claims.",
      },
    ],
  },

  shop: {
    title: "Drop 01",
    intro:
      "Original night-inspired artwork on tees, hoodies, sweatshirts and prints. Everything is made to order.",
    allLabel: "All",
    emptyLabel: "Nothing in this category yet.",
  },

  product: {
    addToCartLabel: "Add to cart",
    addedLabel: "Added",
    soldOutLabel: "Sold out",
    lowStockLabel: (n: number) => `${n} left`,
    inStockLabel: "Made to order",
    descriptionTitle: "The details",
    sizeLabel: "Size",
    chooseSize: "Choose a size",
  },

  cart: {
    title: "Your cart",
    intro: "Check your sizes, then head to checkout.",
    emptyTitle: "Your cart is empty",
    emptyBody: "Everything you add is saved on this device until you're ready.",
    emptyCta: { label: "Browse Drop 01", href: "/shop" },
    subtotalLabel: "Subtotal",
    shippingNote: "Shipping is calculated at checkout.",
    checkoutLabel: "Checkout",
    removeLabel: "Remove",
    quantityLabel: "Quantity",
    continueLabel: "Keep shopping",
    checkoutError:
      "Checkout isn't available right now. Please try again in a moment.",
  },

  checkout: {
    successTitle: "Thank you — your order is in",
    successBody:
      "A receipt from Stripe is on its way. We'll email production and tracking updates as the order moves.",
    successCta: { label: "Back to the shop", href: "/shop" },
    cancelTitle: "Checkout cancelled",
    cancelBody:
      "No payment was taken. Your cart is saved if you'd like to try again.",
    cancelCta: { label: "Back to your cart", href: "/cart" },
    referenceLabel: "Order reference",
  },

  footer: {
    note: "Xalvane is a Lumendot brand. ABN 61 889 636 448. Prices in AUD.",
    seller: "Deej Potter trading as Lumendot",
  },
};
