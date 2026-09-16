'use client';

import { useState } from 'react';
import { LINKS, NAV_ITEMS } from '@/lib/content';

/**
 * Nav sticky. Reusa los tokens ya existentes del sistema (DESIGN_SYSTEM.md):
 * barra yellow-400, tipografía uppercase font-bold del patrón de los tags de sección
 * y el hover:text-white de los iconos sociales del footer. No introduce color nuevo.
 *
 * Los iconos vienen de Font Awesome 6 Free (self-hosted vía npm, importado en
 * app/layout.tsx) — un icono por sección, para que el destino se lea de un vistazo.
 */
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-yellow-400">
      <nav aria-label="Main navigation" className="mx-auto max-w-[1200px] px-6 flex items-center justify-between gap-6 py-2">
        <a href="#header" className="font-marker text-lg font-bold whitespace-nowrap" onClick={() => setIsOpen(false)}>
          Julio León
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-xs font-bold uppercase whitespace-nowrap hover:text-white transition-colors"
              >
                <i className={`${item.icon} mr-1.5`} aria-hidden="true" />
                {item.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-3 border-l border-black/20 pl-4">
            <a href={LINKS.github} aria-label="GitHub" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github text-lg hover:text-white transition-colors" aria-hidden="true" />
            </a>
            <a href={LINKS.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin text-lg hover:text-white transition-colors" aria-hidden="true" />
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden p-2 text-xl"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          <i className={isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile panel */}
      <ul
        id="mobile-menu"
        className={`lg:hidden mx-auto max-w-[1200px] px-6 pb-4 ${isOpen ? 'block' : 'hidden'}`}
      >
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="block py-2 text-sm font-bold uppercase hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <i className={`${item.icon} mr-2 w-4`} aria-hidden="true" />
              {item.label}
            </a>
          </li>
        ))}
        <li className="flex items-center gap-4 pt-3 border-t border-black/20 mt-2">
          <a href={LINKS.github} aria-label="GitHub" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github text-xl hover:text-white transition-colors" aria-hidden="true" />
          </a>
          <a href={LINKS.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin text-xl hover:text-white transition-colors" aria-hidden="true" />
          </a>
          <a href={LINKS.email} aria-label="Email">
            <i className="fa-solid fa-envelope text-xl hover:text-white transition-colors" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </header>
  );
}
