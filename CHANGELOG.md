# Changelog

## [FIX]: Mobile nav hamburger — 2026-09-29

- Header Buy Now / Make Offer now `lg+` only so they no longer collide with the hamburger on narrow viewports
- Menu button uses `type="button"`, `preventDefault` / `stopPropagation`, and sits above the drawer
- Mobile drawer starts below the sticky nav (`top-20`) so the toggle stays clickable

## [FEAT]: Optimization improvements — 2026-09-29

### Technical foundation
- Enforced HSTS and additional security headers in the Worker response path
- Preserved apex HTTPS + www canonicalization
- Extended robots.txt disallow for `/404` variants; kept sitemap discovery URL
- Confirmed `/index.html` → `/` redirect with `noindex` on the alias path

### SEO
- Title: `aipolyintelligence.com | Premium Domain for Sale | Desert Rich Domains`
- Meta description includes price, availability, escrow CTA, and UVP
- Keywords aligned to domain marketplace / premium / investment intents
- FAQPage + BreadcrumbList schema; Product Offer `priceValidUntil` + `url`
- Blog collection with valuation, trends, and case-study posts for DA building
- Internal links: nav, footer, insights grid, post CTAs

### CRO
- Hero shows domain, **$199,999**, Buy Now / Make Offer / Contact Agent
- Trust pills: Escrow.com, SSL, instant transfer
- Pricing and footer multi-CTA parity
- Working inquiry form via prefilled mailto
- Exit-intent priority-terms capture (session-gated)
- Soft urgency copy without fake inventory counters
- `domain_cta` CustomEvent hooks for analytics pixels / GTM

### Mobile & UX
- 16px base type, min 48px tap targets, collapsible nav
- Dark/light theme toggle with `localStorage` + system preference
- Scroll reveal animations (respects `prefers-reduced-motion`)
- Font swap to Outfit + Space Grotesk; async Google Fonts load
- Hero image preload for LCP

### Ops
- README runbook for local + Workers deploy
- `npm run deploy` script (`astro build` + `wrangler deploy`)
