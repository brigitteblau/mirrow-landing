import Image from 'next/image'
import { Reveal } from '../motion/primitives'
import { marcas } from '@/lib/marcas'
import { site } from '@/lib/site'

export default function Marcas() {
  return (
    <section className="border-b border-black/10 bg-elegancia py-14">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
        <Reveal distancia={12} className="max-w-xs">
          <p className="rotulo mb-4">Clientes</p>
          <p className="text-[0.9375rem] leading-relaxed text-tinta">
            Marcas que trabajan con nosotros hace años, algunas desde antes de que existiera la
            web.
          </p>
        </Reveal>

        <Reveal delay={0.08} distancia={12}>
          <ul className="flex flex-wrap items-center gap-x-12 gap-y-8 lg:justify-end">
            {marcas.map((marca) => (
              <li key={marca.nombre}>
                {marca.logo ? (
                  <Image
                    src={marca.logo}
                    alt={marca.nombre}
                    width={150}
                    height={44}
                    className={`h-8 w-auto opacity-55 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-9 ${
                      /* Logos que vienen en blanco: sobre fondo claro hay que
                         darlos vuelta o no se ven. Ver lib/marcas.js */
                      marca.invertir ? 'invert' : ''
                    }`}
                  />
                ) : (
                  /* Provisorio hasta tener el archivo: ver lib/marcas.js */
                  <span className="font-display text-lg font-bold uppercase tracking-[0.06em] text-premium transition-colors duration-300 hover:text-tinta sm:text-xl">
                    {marca.nombre}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <p className="contenedor mt-8 text-xs text-premium lg:mt-10">
        ¿Tenés una marca y buscás quién te produzca? Escribinos a{' '}
        <a href={`mailto:${site.email}`} className="text-tinta underline underline-offset-2">
          {site.email}
        </a>
        .
      </p>
    </section>
  )
}
