import type { Config } from 'tailwindcss';

/**
 * Valores extraídos del CSS compilado de pascalvangemert.nl — ver DESIGN_SYSTEM.md.
 * yellow-400 #fed96f · yellow-600 #fabd69 · blue-400 #317bd0 · red-400 #c81e60.
 * Container: 600/720/920px con padding 1.5rem (la regla 1080 del original es inválida y el
 * navegador la ignora, por eso el máximo real es 920px).
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: { sm: '600px', md: '720px', lg: '920px' },
    },
    extend: {
      colors: {
        yellow: { 400: '#fed96f', 600: '#fabd69' },
        blue: { 400: '#317bd0' },
        red: { 400: '#c81e60' },
      },
      fontFamily: {
        sans: ['var(--font-work-sans)', 'sans-serif'],
        marker: ['var(--font-marker)', 'var(--font-work-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
