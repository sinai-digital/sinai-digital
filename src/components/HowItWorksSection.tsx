import SectionHeader from './SectionHeader'
import ScrollReveal from './ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'We Build It',
    description:
      'We design and develop your custom website from scratch — no templates, no compromises.',
  },
  {
    number: '02',
    title: 'You Subscribe',
    description:
      'Simple monthly hosting keeps your site fast, secure, and always up to date.',
  },
  {
    number: '03',
    title: 'We Grow Together',
    description:
      'Need changes or new features? We handle ongoing development so you can focus on your business.',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="process" className="section-padding bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(28,63,90,1) 0%, transparent 70%)',
        }}
      />

      <div className="container-custom relative z-10">
        <SectionHeader
          label="Process"
          title="How It Works"
          subtitle="Three simple steps from idea to launch — and beyond."
        />

        <div className="relative grid md:grid-cols-3 gap-12 md:gap-6 lg:gap-10 max-w-4xl mx-auto">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-12 left-[25%] right-[25%] h-px bg-gradient-to-r from-brand-flame/0 via-brand-flame/20 to-brand-flame/0" />

          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 150}>
              <div className="text-center relative">
                {/* Step number */}
                <div className="relative z-10 w-24 h-24 mx-auto mb-8">
                  <div className="w-full h-full rounded-2xl bg-brand-dark-bg flex items-center justify-center border border-white/[0.06]">
                    <span className="text-brand-flame font-bold text-xl font-brand">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-text-blue mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-text-blue/50 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
