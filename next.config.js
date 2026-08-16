/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // Fotos de catálogo: son archivos locales, los sirve Vercel en AVIF/WebP.
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
