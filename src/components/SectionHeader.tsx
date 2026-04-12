import ScrollReveal from './ScrollReveal'

interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
  light?: boolean
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  light = true,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-20">
      <ScrollReveal>
        <p className="brand-heading mb-4 text-brand-flame">{label}</p>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <h2
          className={`text-3xl md:text-4xl lg:text-[3.25rem] font-bold leading-tight ${
            light ? 'text-brand-dark-navy' : 'gradient-text'
          }`}
        >
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={200}>
          <p
            className={`mt-5 text-lg max-w-2xl mx-auto leading-relaxed ${
              light ? 'text-brand-dark-navy/50' : 'text-white/40'
            }`}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  )
}
