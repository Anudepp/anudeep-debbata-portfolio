import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';
import { personal } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

export default function Contact() {

const [form, setForm] = useState({
  name: '',
  email: '',
  message: '',
});

const [status, setStatus] = useState<
  'idle' | 'sending' | 'success' | 'error'
>('idle');

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setStatus('sending');

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
body: JSON.stringify({
  access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
  subject: `Portfolio Contact — ${form.name}`,
  name: form.name,
  email: form.email,
  message: form.message,
  botcheck: false,
}),
    });

    const result = await response.json();

    if (result.success) {
      setStatus('success');

      setForm({
        name: '',
        email: '',
        message: '',
      });

      setTimeout(() => {
        setStatus('idle');
      }, 4000);
    } else {
      console.error('Web3Forms error:', result);
      setStatus('error');
    }
  } catch (error) {
    console.error('Contact form submission failed:', error);
    setStatus('error');
  }
};

  return (
    <section id="contact" className="relative py-24 sm:py-32" aria-label="Contact">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0, 212, 255, 0.06), transparent 70%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's build something <span className="text-gradient">fast.</span>
            </>
          }
          description="Open to new opportunities. Drop a message and I'll get back to you."
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="rounded-2xl glass p-8">
              <h3 className="text-xl font-bold text-white">Get in touch</h3>
              <p className="mt-2 text-ink-200">
                Whether it's a full-time role or a freelance project, I'd love to hear about it.
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3 text-ink-100 transition-colors hover:text-accent"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-sm">{personal.email}</span>
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ink-100 transition-colors hover:text-accent"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ink-100 transition-colors hover:text-accent"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Github className="h-5 w-5" />
                  </div>
                  <span className="text-sm">GitHub</span>
                </a>
                <div className="flex items-center gap-3 text-ink-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-sm">{personal.location}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl glass p-8"
              aria-label="Contact form"
            >
              <input
  type="checkbox"
  name="botcheck"
  className="hidden"
  tabIndex={-1}
  autoComplete="off"
/>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink-100">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full rounded-lg border border-ink-600 bg-ink-900 px-4 py-3 text-sm text-white placeholder-ink-300 transition-colors focus:border-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink-100">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full rounded-lg border border-ink-600 bg-ink-900 px-4 py-3 text-sm text-white placeholder-ink-300 transition-colors focus:border-accent"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink-100">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full rounded-lg border border-ink-600 bg-ink-900 px-4 py-3 text-sm text-white placeholder-ink-300 transition-colors focus:border-accent"
                    placeholder="What are you building?"
                  />
                </div>
<button
  type="submit"
  disabled={status === 'sending'}
  className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-300 disabled:cursor-not-allowed disabled:opacity-60"
>
  {status === 'sending' ? (
    <>
      <Send className="h-4 w-4 animate-pulse" />
      Sending...
    </>
  ) : status === 'success' ? (
    <>
      <CheckCircle className="h-4 w-4" />
      Message Sent!
    </>
  ) : status === 'error' ? (
    <>
      <Send className="h-4 w-4" />
      Try Again
    </>
  ) : (
    <>
      <Send className="h-4 w-4" />
      Send Message
    </>
  )}
                </button>
                {status === 'error' && (

  <p className="mt-3 text-center text-sm text-red-400">

    Something went wrong while sending your message. Please try again.

  </p>

)}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
