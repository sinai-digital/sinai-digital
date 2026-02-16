import ScrollReveal from './ScrollReveal'

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  featured?: boolean
  delay?: number
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  featured = false,
  delay = 0,
}: PricingCardProps) {
  return (
    <ScrollReveal delay={delay} direction="scale">
      <div
        className={`relative rounded-2xl p-8 h-full flex flex-col transition-all duration-300 group ${
          featured
            ? 'bg-white/[0.08] border border-brand-flame/40 shadow-[0_0_40px_-8px_rgba(237,109,51,0.15)]'
            : 'glass-card hover:border-white/10 hover:bg-white/[0.05]'
        }`}
      >
        {featured && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="bg-brand-flame text-white text-xs font-semibold px-4 py-1 rounded-full shadow-[0_2px_12px_rgba(237,109,51,0.3)]">
              Most Popular
            </span>
          </div>
        )}

        <h3 className="text-lg font-bold text-white/90 mb-2">{name}</h3>
        <p className={`text-3xl font-bold mb-1 ${featured ? 'gradient-text-flame' : 'text-white'}`}>
          {price}
        </p>
        <p className="text-white/40 text-sm mb-6">{description}</p>

        <ul className="space-y-3 mb-8 flex-1">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-white/60 text-sm">
              <svg
                className="w-4 h-4 text-brand-flame flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`${featured ? 'btn-flame' : 'btn-outline'} text-center`}
        >
          Get Started
        </a>
      </div>
    </ScrollReveal>
  )
}
