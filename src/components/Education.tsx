import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { education } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32" aria-label="Education">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              Where it <span className="text-gradient">started.</span>
            </>
          }
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl glass p-6 card-hover sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-ink-950">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{edu.institution}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-200">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {edu.location}
                    </span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
