export interface PortfolioProject {
  name: string
  kind: string
  description: string
  url: string
  displayUrl: string
  /** Static screenshot, for sites that refuse to be framed (X-Frame-Options) or sit behind a login. */
  image?: string
  note?: string
}

export const projects: PortfolioProject[] = [
  {
    name: 'Peak Insulation',
    kind: 'Client Website',
    description:
      'A conversion-focused site for an Omaha insulation contractor — service and service-area pages, free-inspection calls to action, and local SEO built to win searches across a 90-mile radius.',
    url: 'https://www.peakinsulationne.com/',
    displayUrl: 'peakinsulationne.com',
  },
  {
    name: "Duffy's Grooming",
    kind: 'Client Website',
    description:
      'A warm, welcoming site for a family dog groomer serving Brandon, FL since 1981 — grooming and boarding services, a photo gallery, and customer reviews, all built around one goal: making the phone ring.',
    url: 'https://www.duffysgrooming.com/',
    displayUrl: 'duffysgrooming.com',
  },
  {
    name: 'Redeemer Church Directory',
    kind: 'Custom Web App',
    description:
      'A private member directory and community hub for a local church — invite-only sign-in, family and member profiles with photos, community groups and ministries, a discussion forum, and admin tools for church staff.',
    url: 'https://directory.redeemerriverview.org/',
    displayUrl: 'directory.redeemerriverview.org',
    image: '/images/portfolio/redeemer-directory.png',
    note: 'Members only',
  },
  {
    name: 'Proverbs Trading',
    kind: 'Our Own Product',
    description:
      'A full-stack platform for options traders — brokerage account sync, a stock screener with live charts and scoring, and roll signals on every open position, refreshed through the trading day. Designed, built, and run in-house.',
    url: 'https://www.proverbstrading.com/',
    displayUrl: 'proverbstrading.com',
    image: '/images/portfolio/proverbs-trading.png',
    note: 'Private beta',
  },
]
