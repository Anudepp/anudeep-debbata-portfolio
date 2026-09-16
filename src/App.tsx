import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CursorGlow from './components/CursorGlow';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const FeaturedWork = lazy(() => import('./components/FeaturedWork'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function SectionFallback() {
  return (
    <div className="flex items-center justify-center py-32" aria-hidden="true">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-ink-600 border-t-accent" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <CursorGlow />
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FeaturedWork />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Education />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </>
  );
}
