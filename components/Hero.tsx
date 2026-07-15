import { LINKS } from '@/lib/content';

/**
 * Réplica del #header original: h-screen, bg-cover md:bg-fixed bg-center.
 * El original lleva la imagen tintada sobre el gradiente del body; aquí el tinte se
 * reproduce con el mismo gradiente radial extraído, superpuesto sobre Portada_Image
 * (adaptación declarada en DESIGN_SYSTEM.md).
 */
export default function Hero() {
  return (
    <section
      id="header"
      className="relative flex flex-col items-center justify-center h-screen bg-cover md:bg-fixed bg-center"
      style={{ backgroundImage: 'url(/images/portada.jpeg)' }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 100% 0, rgba(254,217,111,0.88) 0, rgba(250,189,105,0.86) 50%, rgba(249,142,74,0.88) 115%)',
        }}
      />
      <div className="md:ml-6 z-10 text-center">
        <h1 className="text-5xl mb-2 tracking-wider font-bold">Julio León</h1>
        <p className="ml-px text-2xl text-black font-marker">..AI Engineer &amp; Product Builder</p>
        <p className="mt-4 max-w-xl px-6 text-lg">
          I build agentic AI pipelines, production RAG systems and full-stack products — from
          backend to interface.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-block bg-yellow-400 py-2 px-4 text-lg font-bold uppercase font-marker"
          >
            Projects
          </a>
          <a
            href={LINKS.email}
            className="inline-block bg-yellow-400 py-2 px-4 text-lg font-bold uppercase font-marker"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
