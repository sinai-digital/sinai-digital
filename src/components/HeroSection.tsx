import Image from 'next/image'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-brand-dark-bg overflow-hidden noise-overlay"
    >
      {/* Aurora gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-1/4 -left-1/4 w-[80vw] h-[80vw] rounded-full animate-aurora opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(28,63,90,0.8) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full animate-aurora-2 opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(237,109,51,0.6) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full animate-aurora-3 opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(28,63,90,0.6) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
        {/* Logo mark */}
        <div
          className="mb-8 flex justify-center animate-fade-in"
          style={{ animationDelay: '0ms' }}
        >
          <Image
            src="/images/sinai-digital-lockup-vertical-inverse-512.png"
            alt="Sinai Digital"
            width={280}
            height={280}
            priority
            className="drop-shadow-[0_0_40px_rgba(237,109,51,0.15)]"
          />
        </div>

        {/* Headline */}
        <h1
          className="text-[2.75rem] md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6 animate-fade-in-up"
          style={{ animationDelay: '200ms', opacity: 0 }}
        >
          <span className="gradient-text">Websites That Make</span>
          <br />
          <span className="gradient-text-flame">Small Businesses Shine</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '400ms', opacity: 0 }}
        >
          Custom-built, high-performance sites designed to grow your business
          — no templates, no page builders, no compromises.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: '600ms', opacity: 0 }}
        >
          <a href="#work" className="btn-flame">
            See Our Work
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </div>
      </div>

    </section>
  )
}
