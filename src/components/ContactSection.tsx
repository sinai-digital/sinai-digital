import ScrollReveal from './ScrollReveal'

export default function ContactSection() {
  return (
    <section id="contact" className="relative section-padding bg-brand-dark-bg noise-overlay overflow-hidden">
      {/* Ambient gradient */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-[0.08] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(237,109,51,0.6) 0%, transparent 70%)',
        }}
      />

      <div className="container-custom text-center relative z-10">
        <ScrollReveal>
          <p className="brand-heading text-brand-flame mb-4">Contact</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text leading-tight">
            Let&apos;s Build Something
            <br />
            <span className="gradient-text-flame">Great Together</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-white/40 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Ready to get started? Reach out and let&apos;s talk about your project.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <a
            href="mailto:matt@sinaidigital.dev"
            className="btn-flame text-lg group"
          >
            <span>matt@sinaidigital.dev</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
