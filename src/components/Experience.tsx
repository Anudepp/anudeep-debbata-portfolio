import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Building2 } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="relative py-24 sm:py-32" aria-label="Professional Experience">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Where I've <span className="text-gradient">shipped.</span>
            </>
          }
          description="Four roles across enterprise, cloud, and product — building SPAs that serve millions."
        />

        <div className="mt-12 space-y-4">
          {experiences.map((exp, i) => {
            const isExpanded = expanded === i;
            return (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl glass card-hover"
              >
                {/* Timeline dot */}
                <div className="absolute -left-3 top-8 hidden h-6 w-6 items-center justify-center rounded-full border-2 border-accent bg-ink-950 sm:flex">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>

                <button
                  onClick={() => setExpanded(isExpanded ? null : i)}
                  className="flex w-full items-start justify-between gap-4 p-6 text-left sm:p-8"
                  aria-expanded={isExpanded}
                  aria-controls={`exp-details-${i}`}
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-white sm:text-xl">{exp.role}</h3>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                      <span className="font-medium text-accent">{exp.company}</span>
                      <span className="text-ink-300">{exp.via}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-200">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Building2 className="h-3.5 w-3.5" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-1 flex-shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-ink-200" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={`exp-details-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-3 px-6 pb-6 sm:px-8 sm:pb-8">
                        {exp.achievements.map((achievement, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: j * 0.05 }}
                            className="flex gap-3 text-sm text-ink-100 sm:text-base"
                          >
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                            <span className="leading-relaxed">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
