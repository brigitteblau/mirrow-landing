import Image from 'next/image'
import { Flecha, WhatsApp } from '../icons'
import { Reveal } from '../motion/primitives'
import { site, whatsappLink } from '@/lib/site'

/**
 * Hero institucional.
 *
 * La foto manda y el texto acompaña: es lo que separa a una fábrica con
 * trayectoria de una marca nueva que necesita explicarse con tipografía
 * gigante. La imagen se configura en `site.heroFoto`.
 */
export default function Hero() {
  return (
    <section className="border-b border-black/10 bg-white">
      <div className="contenedor grid items-center gap-12 py-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:py-20">
        <div>
          <p className="rotulo mb-6">Venta mayorista</p>

          <Reveal distancia={14}>
            {/* El año ya está en el badge del header: repetirlo acá alarga el
                titular a cuatro renglones sin agregar información. */}
            <h1 className="max-w-[20ch] text-display uppercase">
              Ropa de hombre por mayor, directo de fábrica
            </h1>
          </Reveal>

          <Reveal delay={0.08} className="mt-6 max-w-lg">
            <p className="text-lead text-premium">
              Producimos y vendemos directo a locales de todo el país. Remeras, jeans, camisas,
              buzos y pantalones con curva completa de talles y reposición durante todo el año.
            </p>
          </Reveal>

          <Reveal delay={0.14} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contacto" className="btn-primario">
              Pedir lista mayorista
              <Flecha className="h-4 w-4" />
            </a>
            <a
              href={whatsappLink('Hola Mirrow, quiero consultar por venta mayorista.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contorno"
            >
              <WhatsApp className="h-[18px] w-[18px]" />
              Hablar con un asesor
            </a>
          </Reveal>

          {/* Datos duros, no adjetivos. */}
          <Reveal delay={0.2}>
            <dl className="mt-11 grid max-w-lg grid-cols-3 gap-6 border-t border-black/10 pt-7">
              {[
                { valor: String(site.years), rotulo: 'Años de trayectoria' },
                { valor: String(site.locales.length), rotulo: 'Showrooms en Once' },
                { valor: '23', rotulo: 'Provincias con envío' },
              ].map((dato) => (
                <div key={dato.rotulo}>
                  <dt className="sr-only">{dato.rotulo}</dt>
                  <dd>
                    <span className="cifras-tabulares block font-display text-3xl font-extrabold leading-none text-tinta">
                      {dato.valor}
                    </span>
                    <span className="mt-2 block text-xs leading-snug text-premium">
                      {dato.rotulo}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1} direccion="izquierda" distancia={16}>
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-marca bg-elegancia">
              <Image
                src={site.heroFoto.src}
                alt={site.heroFoto.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-xs text-premium">{site.heroFoto.epigrafe}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
