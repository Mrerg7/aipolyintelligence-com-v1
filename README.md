# aipolyintelligence.com

Premium domain sales site for **aipolyintelligence.com** — a conversion-optimized, SEO-ready Astro static site deployed on **Cloudflare Workers** (free plan compatible) with static assets.

Live: [https://aipolyintelligence.com/](https://aipolyintelligence.com/)

## Features

- Above-the-fold domain + price + Buy Now / Make Offer / Contact Agent CTAs
- Schema.org Product, Organization, WebPage, FAQ, and Breadcrumb markup
- XML sitemap (`@astrojs/sitemap`) + `robots.txt` + canonical apex HTTPS
- Security headers (HSTS, frame deny, nosniff) via Worker + `_headers`
- Blog insights for domain authority / content marketing
- Dark / light theme toggle, mobile nav, 48px tap targets
- Exit-intent email capture, escrow trust signals, FAQ
- Inquiry form opens a prefilled `mailto:` to the acquisition inbox

## Local development

Requires Node.js **≥ 22.12**.

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

```bash
npm run build
npm run preview
```

## Deploy (Cloudflare Workers)

This project uses Workers static assets (`wrangler.jsonc` → `assets.directory: ./dist`). Stay on the Cloudflare Workers & Pages free plan.

```bash
npx wrangler login
npm run deploy
```

GitHub → Workers Builds is already wired for `aipolyintelligence-com-v1`; pushes to `main` trigger production deploys.

Custom domain: `aipolyintelligence.com` (apex). The Worker 301s `www` and `http` to HTTPS apex.

## SEO & CRO checklist (shipped)

| Area | Status |
|------|--------|
| Title format `[Domain] \| Premium Domain for Sale \| [Brand]` | Yes |
| Meta description with price + CTA | Yes |
| H1 = domain name | Yes |
| Canonical + duplicate `/index.html` noindex | Yes |
| Structured data (Product / Org / FAQ) | Yes |
| Sitemap + robots.txt | Yes |
| Mobile tap targets ≥ 48px / 16px base type | Yes |
| Exit-intent + multi-CTA | Yes |
| Blog / internal links | Yes |

## Contact

Acquisition inquiries: **sales@desertrich.com**
