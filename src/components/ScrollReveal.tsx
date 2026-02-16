'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

type RevealDirection = 'up' | 'left' | 'right' | 'scale'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: RevealDirection
  className?: string
}

const directionClass: Record<RevealDirection, string> = {
  up: 'scroll-reveal',
  left: 'scroll-reveal-left',
  right: 'scroll-reveal-right',
  scale: 'scroll-reveal-scale',
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollRevealProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
  })

  return (
    <div
      ref={ref}
      className={`${directionClass[direction]} ${isVisible ? 'revealed' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
