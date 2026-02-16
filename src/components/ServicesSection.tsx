import SectionHeader from './SectionHeader'
import PricingCard from './PricingCard'
import ScrollReveal from './ScrollReveal'

const mainPlans = [
  {
    name: 'Single Page',
    price: '$1,500',
    description: 'Perfect for getting started',
    features: [
      'Custom design & development',
      'Mobile responsive',
      'SEO optimized',
      'Contact form',
      'Fast performance',
    ],
  },
  {
    name: 'Multi-Page',
    price: '$2,000',
    description: 'For businesses that need more',
    features: [
      'Everything in Single Page',
      'Up to 5 pages',
      'Advanced layouts',
      'Service/product pages',
      'Analytics setup',
    ],
    featured: true,
  },
  {
    name: 'Custom App',
    price: 'From $4,000',
    description: 'Full-stack web applications',
    features: [
      'Custom functionality',
      'User authentication',
      'Database integration',
      'API development',
      'Admin dashboard',
    ],
  },
]

const addons = [
  { name: 'CMS Integration', price: '+$500–$750' },
  { name: 'Backend / API', price: '+$1,000' },
  { name: 'Hosting & Support', price: '$50/mo' },
  { name: 'Dev Work', price: '$125/hr' },
]

export default function ServicesSection() {
  return (
    <section id="services" className="relative section-padding bg-brand-dark-bg noise-overlay overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.07] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(237,109,51,0.8) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 container-custom">
        <SectionHeader
          label="Services"
          title="Simple, Transparent Pricing"
          subtitle="No hidden fees, no surprises. Pick a plan that fits your business and let's get started."
          light={false}
        />

        {/* Main pricing cards */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-16">
          {mainPlans.map((plan, i) => (
            <PricingCard
              key={plan.name}
              {...plan}
              delay={i * 100}
            />
          ))}
        </div>

        {/* Add-ons */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="glass-card rounded-xl p-5 text-center transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05]"
              >
                <p className="text-white/80 font-medium text-sm mb-1">{addon.name}</p>
                <p className="text-brand-flame font-bold">{addon.price}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
