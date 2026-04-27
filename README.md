# Sinai Digital — sinaidigital.dev

The portfolio and marketing site for [Sinai Digital](https://sinaidigital.dev), a small web development studio.

Single-page site with anchored sections (Hero → Portfolio → Approach → Process → Contact). Built lean — Next.js App Router, Tailwind, server-rendered, zero runtime animation libraries. All animations are CSS transitions gated by `IntersectionObserver`.

## Live

→ **[sinaidigital.dev](https://sinaidigital.dev)**

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | CSS transitions + IntersectionObserver (no libraries) |
| Email | Resend, via a Next.js Server Action |
| Hosting | Vercel |

## Sections

- **Hero** — full-viewport dark intro with the vertical icon + wordmark lockup
- **Portfolio** — alternating layout with live iframe previews of client sites in a browser-frame chrome (lazy-loaded; mobile shows static placeholders)
- **Approach** — three project-type cards leading into a tailored-proposal CTA
- **How It Works** — three-step engagement process
- **Contact** — Resend-backed form (server action, honeypot spam filter, replies routed to `matt@sinaidigital.dev`)

## Brand

The canonical brand sheet — palette, typography, logo variants, usage ratios — is checked in at [`brand/index.html`](brand/index.html). Open it directly in a browser; it's a self-contained reference that's not deployed with the site.

Logo: a mountain icon (`public/images/sinai-digital-icon.svg` and inverse / mono variants) composed in JSX with the "SINAI DIGITAL" wordmark rendered as Josefin Sans text — never baked into PNGs, so the lockup stays editable.

## Layout

```
brand/                       # Brand source of truth (NOT deployed)
  index.html                 # v3.1 brand guidelines
  logo-assets-v2/            # Current designer delivery (canonical)
  legacy/                    # v1 archive

public/
  images/                    # Deployed logo SVGs + PWA icons
  manifest.json, robots.txt

src/
  app/
    layout.tsx               # Fonts, metadata, Nav + Footer
    page.tsx                 # Composes all sections
    actions/contact.ts       # Server Action — validates + sends inquiry via Resend
    sitemap.ts
  components/
    HeroSection, PortfolioSection, ApproachSection, HowItWorksSection,
    ContactSection, ContactForm,
    Nav, Footer, BrowserFrame, LazyIframe, ScrollReveal, SectionHeader
  hooks/useIntersectionObserver.ts
  lib/portfolio.ts           # Portfolio project data
```

## Running locally

```bash
npm install
cp .env.local.example .env.local   # paste a Resend API key for contact-form testing
npm run dev                        # http://localhost:3000
```

The contact form requires `RESEND_API_KEY`. Get a free key at [resend.com](https://resend.com) and verify `sinaidigital.dev` as a sending domain.

## Conventions

- All animations use `transform` + `opacity` only (GPU-composited); `prefers-reduced-motion: reduce` disables them.
- Iframes lazy-load via `IntersectionObserver` with a 200px rootMargin; mobile drops to a static placeholder for performance.
- Portfolio projects are data-driven — add an entry to `src/lib/portfolio.ts` and it renders automatically.
