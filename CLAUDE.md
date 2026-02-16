# Sinai Digital Website - Claude Development Context

## Project Overview

**Owner:** Matt Pike | **Email:** matt@sinaidigital.dev
**Website:** sinaidigital.dev — portfolio site for Sinai Digital web development agency
**Design:** Single-page with anchor sections (Hero, Portfolio, Services, Process, Contact)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Animations:** CSS transitions + Intersection Observer (zero runtime libraries)
- **Deployment:** Vercel

## Brand Identity

- **Mountain Blue:** `#1c3f5a` | **Text Blue:** `#183550` | **Dark BG:** `#1a2332`
- **Flame Accent:** `#ed6d33` / `#ec7d2e`
- **Brand Font:** Josefin Sans 600, letter-spacing 5px, all caps (`.brand-heading`)
- **Body Font:** DM Sans (400, 500, 600, 700) — loaded via `next/font/google`
- **Lockup assets** in `public/images/` (inverse variants for dark backgrounds)

## File Structure

```
src/
├── app/
│   ├── layout.tsx           # Fonts, metadata, Nav + Footer wrapping
│   ├── page.tsx             # Composes all sections
│   ├── globals.css          # Tailwind directives, brand classes, reduced-motion
│   └── sitemap.ts
├── components/
│   ├── Nav.tsx              # Sticky dark nav, anchor links, mobile hamburger
│   ├── Footer.tsx           # Compact footer
│   ├── HeroSection.tsx      # Full-viewport dark hero with lockup + CTA
│   ├── PortfolioSection.tsx # Alternating layout with browser frame previews
│   ├── BrowserFrame.tsx     # Browser chrome (dots, URL bar)
│   ├── LazyIframe.tsx       # IO-based lazy iframe (placeholder on mobile)
│   ├── ServicesSection.tsx  # Pricing cards + add-ons
│   ├── PricingCard.tsx      # Individual pricing card
│   ├── HowItWorksSection.tsx# 3-step process
│   ├── ContactSection.tsx   # Mailto CTA
│   ├── SectionHeader.tsx    # Reusable section title with brand-heading label
│   └── ScrollReveal.tsx     # IO-based scroll animation wrapper
├── hooks/
│   └── useIntersectionObserver.ts
└── lib/
    └── portfolio.ts         # Portfolio project data
```

## Pricing Data

- Single Page: $1,500 | Multi-Page: $2,000 | Custom App: from $4,000
- Add-ons: CMS +$500-$750, Backend +$1,000, Hosting $50/mo, Dev Work $125/hr

## Portfolio Clients

Golden City Gymnastics, Peak Insulation, Duffy's Grooming, Certified Sweeps

## Key Conventions

- All animations use `transform` + `opacity` only (GPU-composited)
- `ScrollReveal` wrapper handles viewport-triggered animations
- `prefers-reduced-motion: reduce` disables all animations
- Iframes lazy-load via IO with 200px rootMargin; mobile shows placeholder
- Brand source assets in `assets/` — NOT deployed; web copies in `public/images/`

## Common Tasks

### Adding a portfolio project
1. Add entry to `src/lib/portfolio.ts`
2. Projects render automatically in alternating layout

### Changing pricing
1. Update data arrays in `src/components/ServicesSection.tsx`

### Running locally
```bash
npm run dev      # Starts on port 3000
npm run build    # Production build
```
