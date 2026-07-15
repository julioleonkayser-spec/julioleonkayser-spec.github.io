import { CERTIFICATIONS } from '@/lib/content';

/**
 * Fila de pills — deliberadamente más ligera que las cards de Projects para no
 * competir visualmente. Reusa los tokens existentes: tag amarillo de sección,
 * subtítulo text-xl gris, divisor gray-300 y el border amarillo del tag "support".
 */
export default function Certifications() {
  return (
    <section id="certifications" className="pt-5 pb-16">
      <div className="container grid md:grid-cols-6 gap-8 items-center">
        <div className="md:col-start-3 md:col-span-4">
          <h2 className="inline-block bg-yellow-400 py-2 px-4 md:-ml-4 mb-2 text-lg font-bold uppercase">
            Certifications
          </h2>
        </div>
        <div className="md:col-start-2 md:col-span-4">
          <p className="ml-px text-xl text-gray-500">
            Programs and simulations I&apos;ve completed along the way:
          </p>
        </div>
      </div>
      <div className="mx-6 mt-8 w-16 h-0.5 bg-gray-300 md:mx-auto md:relative md:-left-24" />
      <div className="container mt-8">
        <ul className="flex flex-wrap justify-center gap-4">
          {CERTIFICATIONS.map((cert) => (
            <li key={cert.name} className="border-2 border-yellow-400 py-2 px-4">
              <strong>{cert.name}</strong>
              {cert.issuer ? <span className="text-sm text-gray-500"> — {cert.issuer}</span> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
