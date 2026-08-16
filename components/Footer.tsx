import Link from 'next/link'
import { Wordmark } from './Logo'
import { Instagram, TikTok } from './icons'
import { categorias } from '@/lib/productos'
import { PROVINCIAS, site } from '@/lib/site'

const iconosSociales = { Instagram, TikTok } as const

export default function Footer() {
  return (
    <footer className="bg-carbon text-white">
      <div className="contenedor py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Wordmark className="h-5 w-auto text-white" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
              Fábrica de indumentaria masculina desde {site.foundingYear}. Básicos con identidad,
              producidos en Buenos Aires y despachados a todo el país.
            </p>
            <div className="mt-7 flex gap-3">
              {site.socials.map((red) => {
                const Icono = iconosSociales[red.label as keyof typeof iconosSociales]
                return (
                  <a
                    key={red.label}
                    href={red.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={red.label}
                    className="grid h-10 w-10 place-items-center rounded-marca border border-white/15 text-white/70 transition-colors hover:border-white hover:text-white"
                  >
                    <Icono className="h-[18px] w-[18px]" />
                  </a>
                )
              })}
            </div>
          </div>

          <nav aria-labelledby="pie-catalogo">
            <h2 id="pie-catalogo" className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
              Catálogo
            </h2>
            <ul className="mt-5 space-y-2.5">
              {categorias.map((categoria) => (
                <li key={categoria.slug}>
                  <Link
                    href="/#productos"
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {categoria.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="pie-empresa">
            <h2 id="pie-empresa" className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
              Empresa
            </h2>
            <ul className="mt-5 space-y-2.5">
              <li>
                <Link href="/#mayoristas" className="text-sm text-white/65 transition-colors hover:text-white">
                  Venta mayorista
                </Link>
              </li>
              <li>
                <Link href="/#marca" className="text-sm text-white/65 transition-colors hover:text-white">
                  La marca
                </Link>
              </li>
              <li>
                <Link href="/#locales" className="text-sm text-white/65 transition-colors hover:text-white">
                  Showrooms
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-sm text-white/65 transition-colors hover:text-white">
                  Contacto
                </Link>
              </li>
              <li>
                <a
                  href={site.tienda}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  Tienda minorista
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="pie-provincias">
            <h2 id="pie-provincias" className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
              Envíos por provincia
            </h2>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
              {Object.entries(PROVINCIAS).map(([slug, provincia]) => (
                <li key={slug}>
                  <Link
                    href={`/${slug}`}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {provincia.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.
          </p>
          <p>Castelli 334 y Sarmiento 2790 · Once, CABA, Argentina</p>
        </div>
      </div>
    </footer>
  )
}
