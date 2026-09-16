import { motion } from 'framer-motion';
import {
  Layout,
  GitBranch,
  Network,
  Gauge,
  FlaskConical,
  Cloud,
  Target,
  type LucideIcon,
} from 'lucide-react';
import { skillGroups } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  Layout,
  GitBranch,
  Network,
  Gauge,
  FlaskConical,
  Cloud,
  Target,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32" aria-label="Skills">
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0, 212, 255, 0.06), transparent 70%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              Tools I reach for <span className="text-gradient">every day.</span>
            </>
          }
          description="Seven years of sharpening a stack that ships fast, stays accessible, and scales to millions of users."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon] ?? Layout;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group rounded-2xl glass p-6 card-hover"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-ink-950">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-ink-600/60 bg-ink-800/40 px-3 py-1.5 text-sm text-ink-100 transition-all duration-200 hover:border-accent/40 hover:text-accent"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
