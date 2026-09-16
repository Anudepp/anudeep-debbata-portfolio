import { motion } from 'framer-motion';
import { summary, stats } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import AnimatedCounter from './AnimatedCounter';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32" aria-label="About">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              The engineer behind <span className="text-gradient">the pixels.</span>
            </>
          }
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <p className="text-lg leading-relaxed text-ink-100 sm:text-xl">{summary}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['React.js Expert', 'TypeScript Migrations', 'Performance Optimization', 'WCAG 2.1 AA'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-ink-600 bg-ink-800/50 px-4 py-2 text-sm font-medium text-ink-100"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative rounded-2xl glass p-5 text-center card-hover"
                >
                  <div className="text-3xl font-bold font-display text-accent sm:text-4xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 text-xs font-medium text-ink-200 sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
