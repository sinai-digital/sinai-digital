import ScrollReveal from './ScrollReveal'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="relative section-padding bg-brand-dark-bg noise-overlay overflow-hidden">
      {/* Ambient gradient */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-[0.08] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(232,121,40,0.6) 0%, transparent 70%)',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
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
            <p className="text-white/40 text-lg max-w-xl mx-auto leading-relaxed">
              Tell me about your project and I&apos;ll get back to you with a tailored proposal.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300}>
          <ContactForm />
        </ScrollReveal>
      </div>
    </section>
  )
}
