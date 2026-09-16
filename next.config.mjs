/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Static export: la misma salida sirve en Vercel y en GitHub Pages.
   * El sitio no usa API routes, middleware, server actions ni rutas dinámicas,
   * así que el export es completo (verificado antes de activarlo).
   */
  output: 'export',
  images: {
    // Obligatorio con `output: 'export'`: no hay servidor que optimice on-demand.
    unoptimized: true,
  },
  // GitHub Pages sirve /about-me/ mejor con index.html por carpeta.
  trailingSlash: true,
};

export default nextConfig;
