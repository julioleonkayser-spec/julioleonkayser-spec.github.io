import { REFLECTIONS } from '@/lib/content';

/**
 * Réplica del patrón de sección de Certifications (tag amarillo, subtítulo gris,
 * divisor gray-300) con las tres reflexiones de la entrega.
 *
 * Cada card se renderiza en uno de dos estados según `answer` en lib/content.ts:
 * vacío => placeholder visible "to be written"; con texto => la respuesta.
 * El contenido lo escribe Julio; aquí solo existe el sitio donde va.
 */
export default function Reflections() {
  return (
    <section id="reflections" className="pt-5 pb-16">
      <div className="container grid md:grid-cols-6 gap-8 items-center">
        <div className="md:col-start-3 md:col-span-4">
          <h2 className="inline-block bg-yellow-400 py-2 px-4 md:-ml-4 mb-2 text-lg font-bold uppercase">
            Reflections
          </h2>
        </div>
        <div className="md:col-start-2 md:col-span-4">
          <p className="ml-px text-xl text-gray-500">
            Written reflections on building this site and on the work behind it:
          </p>
        </div>
      </div>
      <div className="mx-6 mt-8 w-16 h-0.5 bg-gray-300 md:mx-auto md:relative md:-left-24" />
      <div className="container mt-8 grid gap-6 md:grid-cols-3">
        {REFLECTIONS.map((reflection) => (
          <article key={reflection.prompt} className="border-2 border-yellow-400 p-6">
            <h3 className="font-bold text-xl mb-3">
              <i className={`${reflection.icon} mr-2 text-yellow-600`} aria-hidden="true" />
              {reflection.prompt}
            </h3>
            {reflection.answer ? (
              <p className="leading-loose whitespace-pre-line">{reflection.answer}</p>
            ) : (
              <p className="leading-loose text-gray-500">
                <span className="inline-block border border-gray-300 px-2 py-0.5 text-xs font-bold uppercase text-gray-400 mb-2">
                  To be written
                </span>
                <br />
                {reflection.hint}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
