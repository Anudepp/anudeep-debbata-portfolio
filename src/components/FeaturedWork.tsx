import { motion } from 'framer-motion';
import { ExternalLink, Zap, Gauge, Smartphone, Cloud } from 'lucide-react';
import { freelanceProjects } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

const HIGHLIGHT_ICONS = [Zap, Smartphone, Gauge, Cloud];

export default function FeaturedWork() {
  return (
    <section id="work" className="relative py-24 sm:py-32" aria-label="Featured Work">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Work"
          title={
            <>
              Currently shipping <span className="text-gradient">freelance.</span>
            </>
          }
          description="Live client projects — built solo from wireframe to production."
        />

        <div className="mt-12 space-y-6">
          {freelanceProjects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="overflow-hidden rounded-3xl glass card-hover"
            >
              <div className="grid lg:grid-cols-2">
                {/* Left: Browser mockup */}
                <div className="relative p-8 sm:p-12">
                  <div className="rounded-2xl border border-ink-600/60 bg-ink-900 overflow-hidden shadow-2xl">
                    {/* Browser bar */}
                    <div className="flex items-center gap-2 border-b border-ink-600/60 bg-ink-850 px-4 py-3">
                      <div className="flex gap-1.5">
                        <span className="h-3 w-3 rounded-full bg-red-500/80" />
                        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                        <span className="h-3 w-3 rounded-full bg-green-500/80" />
                      </div>
                      <div className="ml-4 flex-1 truncate rounded-md bg-ink-800 px-3 py-1 text-xs text-ink-200">
                        {project.displayUrl}
                      </div>
                    </div>

                    {/* Actual Website Preview Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-ink-950">
                      <img
                        src={project.image}
                        alt={`${project.name} preview`}
                        className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Right: Details */}
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <span className="inline-flex w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {project.tagline}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                    {project.name}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-ink-100">
                    {project.description}
                  </p>

                  {/* Highlights with icons */}
                  <ul className="mt-6 space-y-3">
                    {project.highlights.map((highlight, i) => {
                      const IconComponent = HIGHLIGHT_ICONS[i] || Zap;

                      return (
                        <li key={i} className="flex gap-3 text-sm text-ink-100">
                          <IconComponent className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                          <span>{highlight}</span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Tech stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-ink-600 bg-ink-800/50 px-3 py-1.5 text-sm text-ink-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-300"
                  >
                    Visit {project.displayUrl}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}