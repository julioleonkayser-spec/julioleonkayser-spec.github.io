import Image from 'next/image';
import type { TimelineEntry } from '@/lib/content';

interface TimelineProps {
  id: string;
  heading: string;
  entries: TimelineEntry[];
  /**
   * El original da a cada sección la altura del viewport. Con una sola entrada
   * eso deja una pantalla casi vacía, así que las listas cortas lo desactivan.
   */
  fillViewport?: boolean;
}

/**
 * Réplica exacta del patrón #careers del original: línea vertical absoluta en la
 * columna 2, nodos circulares, fecha a la derecha en la col 1, contenido en col 2-3.
 */
export default function Timeline({ id, heading, entries, fillViewport = true }: TimelineProps) {
  return (
    <section id={id} className={`pt-5 ${fillViewport ? 'min-h-screen' : 'pb-16'}`}>
      <div className="relative pb-5">
        <div className="absolute inset-0">
          <div className="container grid md:grid-cols-3 gap-8 items-center h-full">
            <div className="md:col-start-2 h-full pt-16 ml-2">
              <div className="w-0.5 bg-gray-300 h-full" />
            </div>
          </div>
        </div>
        <div className="container grid md:grid-cols-3 gap-8 items-center mb-4">
          <div className="md:col-start-2 md:col-span-2">
            <h2 className="inline-block bg-yellow-400 py-2 px-4 md:-ml-4 mb-4 text-lg font-bold uppercase">
              {heading}
            </h2>
          </div>
        </div>
        {entries.map((entry) => (
          <div key={entry.title} className="container grid md:grid-cols-3 gap-4 md:gap-8 mb-16">
            <div className="pl-12 md:pl-0 md:text-right md:leading-loose uppercase text-gray-500">
              {entry.period}
            </div>
            <div className="pl-12 md:col-span-2 relative">
              <div className="rounded-full bg-white border-2 border-gray-300 w-5 h-5 absolute mt-1.5 -ml-12" />
              <h3 className="font-bold text-xl">
                {entry.logo ? (
                  <Image
                    src={entry.logo}
                    alt=""
                    width={28}
                    height={28}
                    className="inline-block rounded-full mr-2 -mt-1 align-middle"
                  />
                ) : null}
                {entry.title}
              </h3>
              <p className="text-sm text-gray-500">
                {entry.place}
                {entry.extra ? (
                  <span>
                    {' | '}
                    {entry.extra.href ? (
                      <a className="text-blue-400" href={entry.extra.href} target="_blank" rel="noreferrer">
                        {entry.extra.label}
                      </a>
                    ) : (
                      entry.extra.label
                    )}
                  </span>
                ) : null}
              </p>
              <p className="mt-6">{entry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
