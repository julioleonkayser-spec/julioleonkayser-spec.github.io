import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Abilities from '@/components/Abilities';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Reflections from '@/components/Reflections';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { CAREERS, EDUCATION } from '@/lib/content';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="relative bg-white z-10">
        <About />
        <Timeline id="careers" heading="Careers" entries={CAREERS} />
        <Timeline id="education" heading="Education" entries={EDUCATION} fillViewport={false} />
        <Abilities />
        <Certifications />
        <Projects />
        <Reflections />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
