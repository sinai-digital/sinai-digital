# Sinai Digital Website - Claude Development Context

## Project Overview

**Owner:** Matt Pike | **Email:** matt@sinaidigital.dev
**Website:** sinaidigital.dev — portfolio site for Sinai Digital web development agency
**Design:** Single-page with anchor sections (Hero, Portfolio, Approach, Process, Contact)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Animations:** CSS transitions + Intersection Observer (zero runtime libraries)
- **Email:** Resend (via Server Action) for contact form inquiries
- **Deployment:** Vercel

## Brand Identity (v3.1 — Logo v2)

Canonical brand sheet lives in `brand/index.html` (open as static HTML).

**Core palette:**
- **Dark Navy:** `#1b2e3f` — primary brand color
- **Slate Blue:** `#2d556e` — secondary accent
- **Flame:** `#e87928` — primary accent
- **Burnt Sienna:** `#a5391a` — deeper accent / gradient endpoint
- **Dark BG:** `#131f2a` — dark section background
- **Off-White / Light Gray / Mid Gray:** `#f4f5f7` / `#e8eaed` / `#8b95a1`

**Usage ratios** (from brand sheet): dark-navy 5 : slate-blue 3 : flame 1.5 : burnt-sienna 0.5

**Fonts:**
- **Display:** Josefin Sans 600 — uppercase, 0.28–0.4em letter-spacing (`.brand-heading`)
- **Body:** Outfit (300, 400, 500, 600, 700) — loaded via `next/font/google`

**Logo:** v2 is icon-only (mountain mark, 204×167 viewBox). The "SINAI DIGITAL" wordmark is rendered as Josefin Sans text in the components, NOT baked into the image. Three icon variants in `public/images/`:
- `sinai-digital-icon.svg` — primary (full color, for light backgrounds)
- `sinai-digital-icon-inverse.svg` — white mountain + colored flame (for dark backgrounds)
- `sinai-digital-icon-mono-white.svg` — all white (for flame-colored backgrounds)

## File Structure

```
brand/                       # Non-deployed: brand source of truth
├── index.html               # v3.1 brand guidelines (canonical reference)
├── logo-assets-v1/          # Original designer delivery (historical)
├── logo-assets-v2/          # Current designer delivery (CANONICAL)
└── legacy/                  # Old v1 source assets (archived)

public/
├── images/                  # Deployed logo SVGs + PWA icons
├── manifest.json            # PWA manifest
└── robots.txt

src/
├── app/
│   ├── layout.tsx           # Fonts (Josefin + Outfit), metadata, Nav + Footer
│   ├── page.tsx             # Composes all sections
│   ├── globals.css          # Tailwind directives, brand classes, reduced-motion
│   ├── sitemap.ts
│   ├── icon.png             # Auto-discovered favicon (Next.js convention)
│   ├── apple-icon.png       # Auto-discovered apple touch icon
│   └── actions/
│       └── contact.ts       # Server Action: validates + sends inquiry via Resend
├── components/
│   ├── Nav.tsx              # Sticky nav, icon + wordmark lockup, scroll-state crossfade
│   ├── Footer.tsx           # Compact footer with composed lockup
│   ├── HeroSection.tsx      # Full-viewport dark hero, vertical icon+wordmark lockup
│   ├── PortfolioSection.tsx # Alternating layout with browser frame previews
│   ├── BrowserFrame.tsx     # Browser chrome (dots, URL bar)
│   ├── LazyIframe.tsx       # IO-based lazy iframe (placeholder on mobile)
│   ├── ApproachSection.tsx  # 3 project-type cards (no pricing) + tailored proposal CTA
│   ├── HowItWorksSection.tsx# 3-step process
│   ├── ContactSection.tsx   # Heading + ContactForm
│   ├── ContactForm.tsx      # Client form, calls sendContactInquiry Server Action
│   ├── SectionHeader.tsx    # Reusable section title with brand-heading label
│   └── ScrollReveal.tsx     # IO-based scroll animation wrapper
├── hooks/
│   └── useIntersectionObserver.ts
└── lib/
    └── portfolio.ts         # Portfolio project data
```

## Portfolio Clients

Golden City Gymnastics, Peak Insulation, Duffy's Grooming, Certified Sweeps

## Key Conventions

- All animations use `transform` + `opacity` only (GPU-composited)
- `ScrollReveal` wrapper handles viewport-triggered animations
- `prefers-reduced-motion: reduce` disables all animations
- Iframes lazy-load via IO with 200px rootMargin; mobile shows placeholder
- Brand source assets in `brand/` — NOT deployed; web copies in `public/images/`
- Lockups are composed in JSX (icon image + wordmark text), not baked into PNGs
- Pricing is intentionally NOT public — the Approach section communicates project shapes without numbers, and the contact form drives tailored proposals

## Contact Form (Resend)

- The form lives in `ContactForm.tsx` and POSTs via the `sendContactInquiry` Server Action.
- Inquiries are sent from `noreply@sinaidigital.dev` to `matt@sinaidigital.dev`, with the inquirer's email set as `replyTo` so you can hit reply to respond.
- Honeypot field (`website`) provides basic spam filtering.
- Requires `RESEND_API_KEY` env var. See `.env.local.example`.

### Setup checklist (one-time)
1. Sign up at [resend.com](https://resend.com)
2. Verify `sinaidigital.dev` as a sending domain (add the SPF/DKIM DNS records Resend provides)
3. Generate an API key
4. Local: `cp .env.local.example .env.local` and paste the key
5. Production: add `RESEND_API_KEY` in Vercel → Settings → Environment Variables

## Common Tasks

### Adding a portfolio project
1. Add entry to `src/lib/portfolio.ts`
2. Projects render automatically in alternating layout

### Adjusting project types in the Approach section
1. Update the `projectTypes` array in `src/components/ApproachSection.tsx`

### Running locally
```bash
npm run dev      # Starts on port 3000
npm run build    # Production build
```
