'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Approach', href: '#approach' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight - 72)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white border-b border-brand-dark-navy/[0.08] shadow-[0_1px_8px_rgba(0,0,0,0.06)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between h-[72px]">
        {/* Lockup: icon + wordmark composed in code (v2 brand: icon-only mark + Josefin wordmark) */}
        <a href="#hero" className="flex-shrink-0 flex items-center gap-3 group">
          <span className="relative w-9 h-[30px]">
            {/* Inverse (color flame on white mountain) for dark hero */}
            <Image
              src="/images/sinai-digital-icon-inverse.svg"
              alt=""
              width={36}
              height={30}
              priority
              className={`absolute inset-0 transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}
            />
            {/* Primary (full color) for scrolled white nav */}
            <Image
              src="/images/sinai-digital-icon.svg"
              alt=""
              width={36}
              height={30}
              priority
              className={`absolute inset-0 transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
            />
          </span>
          <span
            className={`brand-heading text-[13px] !tracking-[0.28em] transition-colors duration-500 ${
              scrolled ? 'text-brand-dark-navy' : 'text-white'
            }`}
          >
            Sinai Digital
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={scrolled ? 'nav-link-scrolled' : 'nav-link'}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 transition-colors ${
            scrolled
              ? 'text-brand-dark-navy/70 hover:text-brand-dark-navy'
              : 'text-white/70 hover:text-white'
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className={`md:hidden border-t ${
            scrolled
              ? 'bg-white border-brand-dark-navy/[0.08]'
              : 'bg-brand-dark-bg/95 backdrop-blur-xl border-white/[0.06]'
          }`}
        >
          <div className="container-custom py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-body text-base py-3 px-2 rounded-lg transition-all ${
                  scrolled
                    ? 'text-brand-dark-navy/60 hover:text-brand-dark-navy hover:bg-brand-dark-navy/5'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
