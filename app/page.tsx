import Hero from '@/components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Abilities from '@/components/Abilities';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { CAREERS } from '@/lib/content';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative bg-white z-10">
        <About />
        <Timeline id="careers" heading="Careers" entries={CAREERS} />
        <Abilities />
        <Certifications />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
