# Xalvane

Original night-inspired artwork on print-on-demand garments and prints. A
Lumendot brand.

This is the first working storefront: catalog, size-aware cart, Stripe Checkout,
content pages and an internal studio overview.

## Run

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Production build:

```bash
npm run build
npm start
```

The app is configured with `output: "standalone"` for the Docker/Coolify image.

## What is implemented

- Xalvane brand colours, typography and copy.
- Drop 01: six designs across ten products.
- Local SVG product artwork.
- Home, shop, product, cart, checkout success/cancel.
- Product sizes stored on the cart line and validated server-side.
- Stripe Checkout with catalog pricing and shipping threshold.
- About, materials, sizing, shipping, returns, privacy, terms, contact.
- Read-only `/studio` overview.
- Sitemap, robots, structured product data, generated OG image.

## What is deliberately not implemented yet

- Postgres order persistence.
- Better Auth customer accounts.
- Invoice PDFs.
- Gelato order submission and tracking.
- Real admin authentication.

The full design and backend plan is in
`../krasus/docs/projects/xalvane/TECHNICAL-PLAN.md`.

## Environment

Copy `.env.example` to `.env.local` and set:

```ini
NEXT_PUBLIC_BASE_URL=http://localhost:3000
STRIPE_SECRET_KEY=sk_test_...
```

Without a Stripe key the storefront works; checkout returns 503.

## Seller

Deej Potter trading as Lumendot, ABN 61 889 636 448.
