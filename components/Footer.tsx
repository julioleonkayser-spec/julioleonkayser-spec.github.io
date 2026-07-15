import { LINKS } from '@/lib/content';

export default function Footer() {
  return (
    <footer id="footer" className="mt-32 md:px-16">
      <h2 className="text-center mb-6 -rotate-2">Don&apos;t forget to follow me..</h2>
      <div className="grid md:grid-cols-5 gap-4 pb-6 md:pb-0">
        <div className="order-2 md:order-1 md:col-span-2 text-gray-400 md:py-6 text-center md:text-left">
          Julio León © <span className="md:hidden lg:inline-block">| all rights reserved</span>
        </div>
        <div className="order-1 md:order-2 bg-yellow-400 p-6 text-center font-bold mb-3 md:mb-0">
          <a href={LINKS.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <i className="text-3xl icon-linkedin-1 hover:text-white" />
          </a>
          <a href={LINKS.email} aria-label="Email">
            {/* fontello no incluye glifo de mail: SVG inline al mismo tamaño (adaptación declarada) */}
            <svg
              viewBox="0 0 24 24"
              className="inline-block w-[30px] h-[30px] mx-[0.2em] -mt-1 hover:fill-white"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Zm2.2.5 7.3 5.84a.8.8 0 0 0 1 0L19.8 6H4.2ZM20 7.92l-6.55 5.24a2.8 2.8 0 0 1-3.5 0L4 7.92V18h16V7.92Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
