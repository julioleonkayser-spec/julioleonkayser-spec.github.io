# DESIGN_SYSTEM.md — Réplica de pascalvangemert.nl

Extraído el 2026-07-15 del sitio en vivo (`curl` del bundle real + `getComputedStyle` vía Playwright).
Fuente de verdad: `index.cad1f07b.css` (12.998 bytes) + `index.474d6260.js` (73.644 bytes) + DOM renderizado completo.

> **Nota de herramientas:** Firecrawl MCP no estaba operativo (API key placeholder `fc-REPLACE...`, token inválido).
> Toda la extracción se hizo con el navegador (Playwright MCP) + descarga directa de los bundles con `curl`.
> Nada de este documento es aproximado a ojo salvo lo marcado como **NO EXTRAÍDO**.

## Stack original detectado

- **Framework:** Vue 3 SPA compilada con Vite (marcador `data-v-app`, refs `__vue` en bundle).
- **CSS:** Tailwind CSS v3 (variables `--tw-*`, clases utilitarias purgadas).
- **Librería de animación: NINGUNA.** Verificado por firma en el bundle JS:
  gsap=0, ScrollTrigger=0, framer=0, lenis=0, locomotive=0, barba=0, anime=0,
  ScrollReveal=0, AOS=0, IntersectionObserver=0, getBoundingClientRect=0, scrollY=0.
- **Cero animaciones de entrada por scroll.** Verificado en runtime: ningún elemento del DOM
  tiene `transition-duration != 0s` y el CSS no contiene `@keyframes` propios.
- El único "motion" del sitio:
  1. Parallax nativo del hero: `background-attachment: fixed` (clase `md:bg-fixed`, solo ≥768px).
  2. Carrusel de proyectos con scroll horizontal nativo (`overflow-x-scroll` + scrollbar oculto).
  3. Hovers instantáneos (sin transition): ver "Microinteracciones".

**Decisión de réplica:** no se añade Framer Motion ni GSAP — añadirlos sería inventar
animaciones que el original no tiene. Se replican los tres comportamientos reales.

## Tipografía (exacta, verificada)

- Carga real: Google Fonts
  - `fonts.googleapis.com/css?family=Work+Sans:400,700&display=swap`
  - `fonts.googleapis.com/css2?family=Permanent+Marker&display=swap`
- Regla global extraída del CSS: `h1, h2, .font-marker { font-family: "Permanent Marker","Work Sans",sans-serif }`
- Body: `font-family: "Work Sans", sans-serif`, 16px / line-height 24px (1.5).
- Icon font: **fontello** (5 glifos). Archivos descargados del sitio original
  (`fontello.woff2/woff/ttf`). Codepoints: `icon-star \e800`, `icon-star-empty \e801`,
  `icon-twitter-1 \f099`, `icon-github-circled \f09b`, `icon-linkedin-1 \f0e1`.
- Escala usada: text-5xl 48px/1 (hero h1, `tracking-wider` = 2.4px), text-2xl 24px (subtítulo hero),
  text-xl 20px (h3 y subtítulos gris), text-lg 18px (tags h2 y párrafo about con `leading-loose` = 2),
  text-sm 14px (meta gris), base 16px.

## Paleta (hex reales del CSS compilado)

| Token | Valor real | Uso |
|---|---|---|
| `yellow-400` (override) | `#fed96f` (rgb 254,217,111) | tags de sección, bloque social del footer, border del tag "support" |
| `yellow-600` (override) | `#fabd69` (rgb 250,189,105) | hover de estrellas (`group-hover:text-yellow-600`) |
| gradiente body | `radial-gradient(ellipse at 100% 0, #fed96f 0, #fabd69 50%, #f98e4a 115%)` | fondo del body, visible en el hero |
| `blue-400` (override) | `#317bd0` (rgb 49,123,208) | links |
| `red-400` (override) | `#c81e60` (rgb 200,30,96) | "Offline" en proyectos |
| texto | `#000` (body) / `#222` en utilidades | textos principales |
| `gray-500` | `#6b7280` (Tailwind default) | fechas, meta, subtítulos |
| `gray-400` | `#9ca3af` | copyright, estrellas vacías |
| `gray-600` | `#4b5563` | descripción de proyectos |
| `gray-300` | `#d1d5db` | línea del timeline, nodos, divisores |
| `gray-200` | `#e5e7eb` | banda de fondo del carrusel de proyectos |
| fondo contenido | `#fff` (`.bg-white` wrapper `relative z-10`) | todo excepto hero |

## Grid / spacing (valores reales)

- `.container`: `width:100%; margin-inline:auto; padding-inline:1.5rem (24px)`.
  Breakpoints custom del container: ≥600px→600px, ≥720px→720px, ≥920px→920px.
  (El CSS original tiene `max-width:1080` **sin unidad** en ≥1080 — regla inválida que el
  navegador ignora; el container efectivo es **920px máx**. Se replica el comportamiento válido: 920px.)
- Breakpoints de utilidades: Tailwind default (`md:` 768px, `lg:` 1024px).
- Patrón de layout: `grid md:grid-cols-3 gap-8 (32px)` — col 1 = fecha/avatar, col 2-3 = contenido.
  Abilities/Projects/Support usan `grid md:grid-cols-6` con `col-start-3 col-span-4` (tag) y
  `col-start-2 col-span-4` (texto).
- Secciones: `min-h-screen pt-5 (20px)`; about `py-16 (64px)`; entradas del timeline `mb-16 (64px)`;
  footer `mt-32 (128px)`. Skills grid: `py-8 px-6 md:px-16 gap-16`.

## Estructura de secciones (orden real del DOM)

1. `#header` — hero `h-screen flex items-center justify-center bg-cover md:bg-fixed bg-center`,
   imagen tintada sobre el gradiente amarillo del body. h1 48px Permanent Marker + p 24px `.font-marker`.
2. Wrapper `relative bg-white z-10`:
3. `#about-me` — `min-h-screen py-16` centrado; grid 3: avatar `rounded-full` + h2 tag + párrafo `text-lg leading-loose` con `<strong>`.
4. `#careers` (Careers) — timeline: línea vertical absoluta `w-0.5 bg-gray-300` en col 2;
   entradas con fecha `uppercase text-gray-500 md:text-right`, nodo `rounded-full bg-white border-2 border-gray-300 w-5 h-5 absolute mt-1.5 -ml-12`,
   h3 `font-bold text-xl`, meta `text-sm text-gray-500` con link `text-blue-400`, descripción `mt-6`.
5. `#careers` bis (Educations) — mismo patrón.
6. `#abilities` — tag + subtítulo `text-xl text-gray-500`; divisor `w-16 h-0.5 bg-gray-300`;
   dos columnas `grid md:grid-cols-2 gap-16` de `<dl class="group flex justify-between">` con
   5 estrellas fontello por skill.
7. `#projects` — tag + subtítulo; carrusel `flex overflow-x-scroll` con scrollbar oculto,
   fondo inline `linear-gradient(transparent 140px, rgb(229,231,235) 140px)`;
   cards `w-[75vw] mx-6`: imagen full-width + grid-6 con h3, descripción `text-gray-600`,
   y filas `grid md:grid-cols-4` Company/Link/Techniques (link azul, Offline rojo).
8. `#support` — tag variante `border-b-2 border-yellow-400` (sin fondo); texto `text-xl text-gray-500`.
9. `#footer` — `mt-32 md:px-16`; h2 centrado `-rotate-2` (Permanent Marker 16px);
   grid-5: copyright `text-gray-400` (2 col) + bloque `bg-yellow-400 p-6 text-center` con
   iconos fontello `text-3xl` y `hover:text-white`.

## Animaciones y microinteracciones (valores reales)

| Elemento | Trigger | Propiedad | Duración/easing |
|---|---|---|---|
| Hero background | scroll | `background-attachment: fixed` (parallax nativo, solo md+) | n/a (nativo) |
| Filas de skills | hover en `.group` | `dt` → `font-weight: 600`; estrellas → `color: #fabd69` | **instantáneo, 0s — sin transition** |
| Iconos footer | hover | `color: white` | **instantáneo, 0s** |
| Carrusel proyectos | drag/scroll nativo | scroll-x con scrollbar oculto | nativo del navegador |
| Links azules | hover | sin cambio de estilo definido en CSS | — |

- `scroll-behavior: auto` (no hay smooth scrolling CSS).
- No hay cursor custom, no hay transiciones entre secciones, no hay nav fija.

## NO EXTRAÍDO

- Valor de la regla `.hide-scroll-bar` (no localizada en el CSS compilado con el grep usado;
  el comportamiento observado es scrollbar oculta sobre `overflow-x-scroll`). Se replica con
  `::-webkit-scrollbar{display:none}` + `scrollbar-width:none` — comportamiento idéntico observable,
  declaración exacta no confirmada.
- El precio del template en `#support` figura como "€ ??.??" en el propio sitio original.
- El tinte exacto del PNG del hero original está horneado dentro de la imagen (no es CSS).
  Para el hero de Julio se reproduce el tratamiento con el gradiente extraído del body +
  blending sobre `Portada_Image.jpeg` — es una adaptación declarada, no un valor extraído.

## Screenshots de referencia

Guardadas en scratchpad (`pvg-extract/`): `ref-hero-desktop.png` (1440×900),
`ref-desktop-full.png` (1440×7599), `ref-mobile-full.png` (375×9957) + recortes por sección.

## AÑADIDOS PROPIOS (no existen en el original)

Elementos que el sitio de referencia no tiene y que aquí se construyen desde los tokens
ya extraídos. Se listan aparte para no contaminar la trazabilidad de arriba: ninguno es
un valor extraído, todos son composición sobre la paleta y la tipografía verificadas.

- **Nav sticky** (`components/Nav.tsx`). El original no lleva navegación. La barra usa
  `yellow-400` (#fed96f), el `uppercase font-bold` de los tags de sección y el
  `hover:text-white` de los iconos sociales del footer. Ancho propio (`max-w-[1200px]`)
  en lugar del container de 920px: es chrome, no contenido, y los 7 destinos no caben
  en 920px. Por debajo de `lg` colapsa en hamburguesa.
- **Font Awesome 6 Free** (`app/layout.tsx`). El original usa fontello, que aquí se
  conserva para las estrellas de Abilities y los sociales del footer — pero su subconjunto
  solo contiene 5 glifos (`\e800`, `\e801`, `\f099`, `\f09b`, `\f0e1`), insuficiente para
  la navegación. Font Awesome entra por npm y se sirve desde el bundle propio: sin CDN
  y sin recurso de terceros bloqueando el render.
- **Sección Reflections** (`components/Reflections.tsx`). Replica el patrón de sección de
  Certifications (tag amarillo, subtítulo `text-xl` gris, divisor `gray-300`, borde
  `yellow-400`) sin introducir tratamiento nuevo.
- **Visual `decision-flow`** (`components/ProjectVisuals.tsx`). Mismo contrato que los
  visuales ya existentes (viewBox 1280×720, `aspect-video`, tinte radial del hero por
  encima). Las aristas usan `blue-400` para YES y `red-400` para NO: el verde no existe
  en la paleta extraída, así que la rama afirmativa toma el azul de enlaces.
- **`scroll-margin-top` + `scroll-behavior`** (`app/globals.css`). Necesarios para que el
  nav sticky no tape el título de la sección al saltar por ancla. Con opt-out de
  `prefers-reduced-motion`.
