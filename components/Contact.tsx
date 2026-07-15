import { LINKS } from '@/lib/content';

/**
 * Réplica del patrón #support del original (tag con border-b amarillo + texto gris),
 * con el contenido de contacto de Julio.
 */
export default function Contact() {
  return (
    <section id="contact" className="pt-8">
      <div className="container grid md:grid-cols-6 gap-8 items-center">
        <div className="md:col-start-3 md:col-span-4">
          <h2 className="inline-block border-b-2 border-yellow-400 py-2 px-4 md:-ml-4 mb-2 text-lg font-bold uppercase">
            Let&apos;s build something
          </h2>
        </div>
        <div className="md:col-start-2 md:col-span-4">
          <p className="ml-px text-xl text-gray-500">
            I&apos;m open to backend AI engineering opportunities, agentic systems work and
            interesting collaborations. Based in {LINKS.location}.
          </p>
          <div className="mt-4 text-center">
            <a href={LINKS.email} className="font-bold uppercase text-blue-400">
              julioleonkayser@gmail.com
            </a>
            <span className="mx-2 text-gray-400">|</span>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-bold uppercase text-blue-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
