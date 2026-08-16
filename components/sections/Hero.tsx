import { Swoosh } from '../Logo'
import { Flecha, WhatsApp } from '../icons'
import { Marquesina, Reveal, TituloAnimado } from '../motion/primitives'
import { site, whatsappLink } from '@/lib/site'
import { temporada } from '@/lib/productos'

const cinta = [
  'Curva completa de talles',
  'Reposición todo el año',
  'Envíos a todo el país',
  'Producción propia',
  'Sin intermediarios',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-tinta text-white">
      <div className="trama-diagonal-clara absolute inset-0" aria-hidden="true" />
      <Swoosh
        className="pointer-events-none absolute -right-24 top-4 hidden w-[46rem] text-rojo-500/[0.07] md:block"
        aria-hidden="true"
      />

      <div className="contenedor relative pb-16 pt-20 sm:pb-24 sm:pt-28">
        <Reveal as="p" className="rotulo mb-7 text-white/55" distancia={12}>
          {/* Mayoristas · {temporada} */}
          Mayoristas
        </Reveal>

        <TituloAnimado
          texto="Ropa de hombre por mayor"
          className="max-w-[16ch] text-display uppercase"
        />

        <Reveal delay={0.35} className="mt-8 max-w-xl">
          <p className="text-lead text-white/70">
            Somos fábrica. {site.years} años produciendo indumentaria masculina en Buenos Aires y
            abasteciendo a locales de todo el país. Vos elegís el surtido, nosotros lo tenemos en
            stock.
          </p>
        </Reveal>

        <Reveal delay={0.45} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#contacto" className="btn-primario">
            Pedir lista mayorista
            <Flecha className="h-[18px] w-[18px]" />
          </a>
          <a
            href={whatsappLink('Hola Mirrow, quiero consultar por venta mayorista.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-claro"
          >
            <WhatsApp className="h-5 w-5" />
            Hablar con un asesor
          </a>
        </Reveal>
      </div>

      {/* Cinta de argumentos: repite el ángulo del logotipo. */}
      <div className="relative border-y border-white/10 bg-carbon py-3.5">
        <Marquesina duracion={38} className="[mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
          {cinta.map((texto) => (
            <span
              key={texto}
              className="flex shrink-0 items-center gap-6 whitespace-nowrap px-6 text-xs font-bold uppercase tracking-[0.16em] text-white/45"
            >
              {texto}
              <Swoosh className="h-2.5 w-auto text-rojo-500" />
            </span>
          ))}
        </Marquesina>
      </div>
    </section>
  )
}
