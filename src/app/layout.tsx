import type { Metadata } from 'next'
import { Josefin_Sans, DM_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-josefin',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sinaidigital.dev'),
  title: {
    default: 'Sinai Digital | Custom Websites for Small Businesses',
    template: '%s | Sinai Digital',
  },
  description:
    'Sinai Digital builds custom, high-performance websites for small businesses. Professional web development, hosting, and ongoing support.',
  keywords: [
    'web development',
    'custom websites',
    'small business websites',
    'web design',
    'Next.js development',
    'portfolio website',
  ],
  authors: [{ name: 'Matt Pike' }],
  creator: 'Sinai Digital',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sinaidigital.dev',
    siteName: 'Sinai Digital',
    title: 'Sinai Digital | Custom Websites for Small Businesses',
    description:
      'Custom, high-performance websites for small businesses. Professional web development, hosting, and ongoing support.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sinai Digital - Custom Websites for Small Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sinai Digital | Custom Websites for Small Businesses',
    description:
      'Custom, high-performance websites for small businesses.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${josefin.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
