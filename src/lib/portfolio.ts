export interface PortfolioProject {
  name: string
  description: string
  url: string
  displayUrl: string
}

export const projects: PortfolioProject[] = [
  {
    name: 'Peak Insulation',
    description:
      'A clean, conversion-focused site for an insulation contractor — service pages, free inspection CTAs, and a streamlined contact flow.',
    url: 'https://peakinsulation.vercel.app/',
    displayUrl: 'peakinsulation.vercel.app',
  },
  {
    name: 'Golden City Gymnastics',
    description:
      'A vibrant, welcoming site for a gymnastics academy — class schedules, registration, and program details all in one place.',
    url: 'https://goldencitygymnastics.vercel.app/',
    displayUrl: 'goldencitygymnastics.vercel.app',
  },
  {
    name: "Duffy's Grooming",
    description:
      'A warm, approachable site for a pet grooming business — service menus, booking info, and gallery all presented beautifully.',
    url: 'https://duffysgrooming.vercel.app/',
    displayUrl: 'duffysgrooming.vercel.app',
  },
  {
    name: 'Certified Sweeps',
    description:
      'A trustworthy, professional site for a chimney sweep company — services, certifications, and scheduling made simple.',
    url: 'https://certifiedsweeps.vercel.app/',
    displayUrl: 'certifiedsweeps.vercel.app',
  },
]
