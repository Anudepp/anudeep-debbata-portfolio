import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Mail, Github, Linkedin, Download, MapPin } from 'lucide-react';
import { personal } from '@/data/portfolio';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % personal.rotatingTaglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
      aria-label="Hero"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 212, 255, 0.12), transparent 70%)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-950 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <span className="text-xs font-medium text-ink-100">Open to new opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl"
        >
          {personal.name.split(' ').map((word, i) => (
            <span key={i} className="block">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-lg font-medium text-ink-100 sm:text-xl md:text-2xl"
        >
          {personal.title} —{' '}
          <span className="text-gradient-animated font-semibold">{personal.specialties}</span>
        </motion.p>

        {/* Rotating tagline */}
        <div className="mt-6 h-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={taglineIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-lg font-semibold text-accent sm:text-xl"
            >
              {personal.rotatingTaglines[taglineIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Hook */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-base text-ink-200 sm:text-lg"
        >
          {personal.hook}
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 flex items-center justify-center gap-2 text-sm text-ink-200"
        >
          <MapPin className="h-4 w-4 text-accent" />
          {personal.location}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="#experience" variant="primary">
            View Work
            <ArrowDown className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton href="#contact" variant="secondary">
            Get in Touch
            <Mail className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton
            href="/Anudeep_Debbata_Resume.pdf"
            download="Anudeep_Debbata_Resume.pdf"
            variant="ghost"
          >
            <Download className="h-4 w-4" />
            Resume
          </MagneticButton>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          {[
            { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
            { icon: Github, href: personal.github, label: 'GitHub' },
            { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={social.label}
              className="group flex h-11 w-11 items-center justify-center rounded-full glass transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 hover:scale-110"
            >
              <social.icon className="h-5 w-5 text-ink-100 transition-colors group-hover:text-accent" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-ink-400 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}