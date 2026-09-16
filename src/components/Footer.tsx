import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import { personal } from '@/data/portfolio';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-ink-600/40 py-12" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium text-white">{personal.name}</p>
            <p className="mt-1 text-xs text-ink-200">
              {personal.title} · {personal.location}
            </p>
          </div>

          <div className="flex items-center gap-4">
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
                className="flex h-9 w-9 items-center justify-center rounded-full glass transition-all hover:border-accent/40 hover:text-accent"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full glass transition-all hover:border-accent/40 hover:text-accent"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-ink-300">
          Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
}
