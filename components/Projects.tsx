import Image from 'next/image';
import { PROJECTS, type Project } from '@/lib/content';
import { CodeLinesVisual, StyleGuideVisual } from '@/components/ProjectVisuals';

/**
 * Carrusel horizontal del original: overflow-x-scroll con scrollbar oculta y banda
 * gris que arranca a 140px (gradiente inline exacto del sitio original).
 * Los proyectos con logo cuadrado se presentan centrados sobre fondo de marca para
 * ocupar el mismo espacio visual que la imagen ancha de los cards del original.
 */
function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === 'code-lines') {
    return <CodeLinesVisual label={project.title} />;
  }
  if (project.visual === 'style-guide') {
    return <StyleGuideVisual label={project.title} />;
  }
  if (project.image) {
    return (
      <Image
        className="w-full aspect-video object-cover"
        src={project.image}
        alt={project.title}
        width={1280}
        height={734}
        sizes="75vw"
      />
    );
  }
  if (project.logo) {
    return (
      <div
        className="w-full aspect-video flex items-center justify-center"
        style={{ backgroundColor: project.logo.bg }}
      >
        <Image src={project.logo.src} alt={project.title} width={300} height={300} />
      </div>
    );
  }
  return null;
}

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen pt-5">
      <div className="container grid md:grid-cols-6 gap-8 items-center">
        <div className="md:col-start-3 md:col-span-4">
          <h2 className="inline-block bg-yellow-400 py-2 px-4 md:-ml-4 mb-2 text-lg font-bold uppercase">
            Projects
          </h2>
        </div>
        <div className="md:col-start-2 md:col-span-4">
          <p className="ml-px text-xl text-gray-500">
            Selected projects I&apos;ve founded and built — from production SaaS to AI analysis
            pipelines.
          </p>
        </div>
      </div>
      <div className="mx-6 mt-8 w-16 h-0.5 bg-gray-300 md:mx-auto md:relative md:-left-24" />
      <div
        className="py-6 mt-4 md:mt-0 md:px-16 md:py-8 flex overflow-x-scroll hide-scroll-bar"
        style={{ background: 'linear-gradient(transparent 140px, rgb(229, 231, 235) 140px)' }}
      >
        <div className="flex flex-nowrap">
          {PROJECTS.map((project) => (
            <div key={project.title} className="w-[75vw] mx-6">
              <ProjectVisual project={project} />
              <div className="grid md:grid-cols-6 mt-8">
                <div className="md:col-start-2 md:col-span-4">
                  <h3 className="font-bold text-xl mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-8">{project.description}</p>
                  {project.rows.map((row) => (
                    <div key={row.label} className="grid md:grid-cols-4 mt-2">
                      <strong>{row.label}</strong>
                      {row.href ? (
                        <a href={row.href} className="col-span-3 text-blue-400" target="_blank" rel="noreferrer">
                          {row.value}
                        </a>
                      ) : (
                        <span className={`col-span-3 ${row.offline ? 'text-red-400' : ''}`}>
                          {row.value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
