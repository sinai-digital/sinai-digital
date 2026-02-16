import { projects } from '@/lib/portfolio'
import SectionHeader from './SectionHeader'
import BrowserFrame from './BrowserFrame'
import LazyIframe from './LazyIframe'
import ScrollReveal from './ScrollReveal'

export default function PortfolioSection() {
  return (
    <section id="work" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          label="Our Work"
          title="Websites That Deliver Results"
          subtitle="Every project is custom-built from the ground up — designed to look great, load fast, and drive real business growth."
        />

        <div className="space-y-28 md:space-y-36">
          {projects.map((project, i) => {
            const reversed = i % 2 === 1

            return (
              <div
                key={project.name}
                className={`flex flex-col ${
                  reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } gap-10 lg:gap-16 items-center`}
              >
                {/* Info */}
                <ScrollReveal
                  delay={0}
                  direction={reversed ? 'right' : 'left'}
                  className="lg:w-5/12 text-center lg:text-left"
                >
                  <span className="brand-heading text-brand-flame/60 text-xs mb-3 block">
                    Project {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-text-blue mb-4">
                    {project.name}
                  </h3>
                  <p className="text-brand-text-blue/50 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-flame hover:text-brand-flame-hover font-semibold transition-all duration-300 group"
                  >
                    Visit Site
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <path d="M3 13L13 3M13 3H5M13 3v8" />
                    </svg>
                  </a>
                </ScrollReveal>

                {/* Browser Frame */}
                <ScrollReveal
                  delay={150}
                  direction={reversed ? 'left' : 'right'}
                  className="lg:w-7/12 w-full"
                >
                  <BrowserFrame url={project.displayUrl}>
                    <LazyIframe src={project.url} title={project.name} />
                  </BrowserFrame>
                </ScrollReveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
