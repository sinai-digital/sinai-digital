import SectionHeader from './SectionHeader'
import ScrollReveal from './ScrollReveal'

const projectTypes = [
  {
    name: 'Single Page',
    description:
      'One beautifully crafted page that does its job perfectly. Ideal for service businesses, landing pages, and focused brand showcases.',
    bullets: [
      'Custom design from scratch',
      'Mobile-first responsive layout',
      'SEO foundations baked in',
      'Built-in inquiry form',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    name: 'Multi-Page Site',
    description:
      'A complete website with the room to grow. For businesses with multiple offerings, detailed services, or rich content to showcase.',
    bullets: [
      'Everything in Single Page',
      'Layered information architecture',
      'Service & product pages',
      'Analytics & conversion tracking',
    ],
    featured: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="13" height="16" rx="2" />
        <path d="M16 8h5v12h-13" />
        <path d="M7 9h5M7 13h5" />
      </svg>
    ),
  },
  {
    name: 'Custom Web App',
    description:
      'Full-stack applications with real functionality. For when you need more than a brochure — auth, databases, dashboards, integrations.',
    bullets: [
      'Custom application logic',
      'User accounts & authentication',
      'Database & API integration',
      'Admin tools and dashboards',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 6h16v12H4z" />
        <path d="M4 10h16" />
        <circle cx="7" cy="8" r="0.5" fill="currentColor" />
        <circle cx="9" cy="8" r="0.5" fill="currentColor" />
        <path d="M10 14l2 2 2-2M12 16v-4" />
      </svg>
    ),
  },
]

export default function ApproachSection() {
  return (
    <section id="approach" className="relative section-padding bg-brand-dark-bg noise-overlay overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.07] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(232,121,40,0.8) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 container-custom">
        <SectionHeader
          label="Approach"
          title="Built Around Your Business"
          subtitle="Every project is unique. I work in a few core shapes — but the details, scope, and investment are tailored to what you actually need."
          light={false}
        />

        {/* Project type cards */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-16">
          {projectTypes.map((type, i) => (
            <ScrollReveal key={type.name} delay={i * 100} direction="scale">
              <div
                className={`relative rounded-2xl p-8 h-full flex flex-col transition-all duration-300 group ${
                  type.featured
                    ? 'bg-white/[0.08] border border-brand-flame/40 shadow-[0_0_40px_-8px_rgba(232,121,40,0.15)]'
                    : 'glass-card hover:border-white/10 hover:bg-white/[0.05]'
                }`}
              >
                <div className="w-11 h-11 mb-6 text-brand-flame">
                  {type.icon}
                </div>

                <h3 className={`text-xl font-bold mb-3 ${type.featured ? 'gradient-text-flame' : 'text-white'}`}>
                  {type.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{type.description}</p>

                <ul className="space-y-3 flex-1">
                  {type.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-white/60 text-sm">
                      <svg
                        className="w-4 h-4 text-brand-flame flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tailored proposal callout */}
        <ScrollReveal>
          <div className="glass-card rounded-2xl p-8 md:p-10 text-center max-w-3xl mx-auto">
            <p className="brand-heading text-brand-flame text-xs mb-4">Tailored Proposals</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Every project starts with a conversation
            </h3>
            <p className="text-white/50 leading-relaxed mb-8 max-w-xl mx-auto">
              Tell me about your business and what you&apos;re trying to build. I&apos;ll put together
              a tailored proposal with a clear scope and a fair, fixed quote — no surprises.
            </p>
            <a href="#contact" className="btn-flame">
              Start a Conversation
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
