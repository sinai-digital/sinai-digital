'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { useState, useEffect, useRef, useCallback } from 'react'

interface LazyIframeProps {
  src: string
  title: string
}

export default function LazyIframe({ src, title }: LazyIframeProps) {
  const { ref, isVisible } = useIntersectionObserver({
    rootMargin: '200px',
    triggerOnce: true,
  })
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [scale, setScale] = useState(0.5)

  const updateScale = useCallback(() => {
    setIsMobile(window.innerWidth < 768)
    if (containerRef.current) {
      setScale(containerRef.current.offsetWidth / 1440)
    }
  }, [])

  useEffect(() => {
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [updateScale])

  return (
    <div ref={ref} className="absolute inset-0">
      <div ref={containerRef} className="w-full h-full">
        {isMobile ? (
          <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
            <p className="text-sm text-slate-400 font-body">
              Visit site to preview
            </p>
          </div>
        ) : isVisible ? (
          <iframe
            src={src}
            title={title}
            className="pointer-events-none border-0 origin-top-left"
            style={{
              width: '1440px',
              height: '900px',
              transform: `scale(${scale})`,
            }}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
          />
        ) : (
          <div className="w-full h-full bg-slate-100 animate-pulse" />
        )}
      </div>
    </div>
  )
}
