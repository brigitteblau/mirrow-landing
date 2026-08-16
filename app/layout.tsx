import type { Metadata, Viewport } from 'next'
import { Anybody, Manrope } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BotonWhatsApp from '@/components/BotonWhatsApp'
import { site } from '@/lib/site'

/** Títulos. Manual de marca, sec. 03.4. */
const anybody = Anybody({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

/** Cuerpo. Manual de marca, sec. 03.4. */
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'MIRROW | Fábrica de indumentaria mayorista en Argentina',
    template: '%s | MIRROW',
  },
  description:
    'Fábrica de indumentaria masculina con showroom en Once, CABA. Remeras, jeans, camisas, buzos y pantalones al por mayor, con curva completa de talles y envíos a todo el país.',
  keywords: [
    'ropa mayorista argentina',
    'fábrica de indumentaria',
    'remeras por mayor',
    'jeans por mayor',
    'proveedor de ropa hombre',
    'mayorista once caba',
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: site.url,
    siteName: site.name,
    title: 'MIRROW | Fábrica de indumentaria mayorista',
    description:
      'Básicos con identidad para tu local. Curva completa, reposición todo el año y envíos a todo Argentina.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MIRROW | Fábrica de indumentaria mayorista',
    description: 'Básicos con identidad para tu local. Curva completa y envíos a todo Argentina.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#1E1E1E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={`${anybody.variable} ${manrope.variable}`}>
      <body>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-marca focus:bg-tinta focus:px-5 focus:py-3 focus:text-white"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <BotonWhatsApp />
      </body>
    </html>
  )
}
