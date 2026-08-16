import Image from 'next/image'
import { iconosPrenda, type IconoPrenda } from '../icons'
import { Elevar, Item, Reveal, Stagger } from '../motion/primitives'
import { categorias, temporada } from '@/lib/productos'
import { site } from '@/lib/site'

export default function Productos() {
  return (
    <section id="productos" className="scroll-mt-24 border-b border-black/10 bg-elegancia py-20 sm:py-28">
      <div className="contenedor">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal as="p" className="rotulo mb-5" distancia={12}>
              01 / Catálogo
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="max-w-[14ch] text-titulo uppercase">Nueve líneas, una sola cuenta</h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="max-w-sm">
            <p className="text-[0.9375rem] leading-relaxed text-premium">
              Catálogo {temporada.toLowerCase()} vigente. Todas las líneas se despachan juntas, con
              una sola factura y un solo envío.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" paso={0.06}>
          {categorias.map((categoria, i) => {
            const Icono = iconosPrenda[categoria.icono as IconoPrenda]

            return (
              <Item key={categoria.slug} as="article">
                <Elevar className="group flex h-full flex-col overflow-hidden rounded-marca border border-black/10 bg-white transition-colors duration-300 hover:border-tinta">
                  <div className="relative aspect-[4/3] overflow-hidden bg-elegancia">
                    <Image
                      src={categoria.foto}
                      alt={categoria.alt}
                      fill
                      /* Las tres primeras entran en el primer scroll en desktop. */
                      priority={i < 3}
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 380px"
                      className="object-cover object-top transition-transform duration-700 ease-marca group-hover:scale-[1.05]"
                    />
                    <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[0.6875rem] font-bold uppercase tracking-wider text-tinta backdrop-blur">
                      {categoria.articulos.length} art.
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <div className="mb-4 flex items-center gap-3">
                      <Icono className="h-7 w-7 shrink-0 text-tinta transition-colors duration-300 group-hover:text-rojo-500" />
                      <h3 className="text-subtitulo uppercase">{categoria.nombre}</h3>
                    </div>

                    <p className="text-sm font-semibold text-rojo-500">{categoria.claim}</p>
                    <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-premium">
                      {categoria.detalle}
                    </p>

                    <dl className="mt-6 flex items-baseline gap-2 border-t border-black/10 pt-5">
                      <dt className="text-[0.6875rem] font-bold uppercase tracking-wider text-premium">
                        Talles
                      </dt>
                      <dd className="text-sm font-bold text-tinta">{categoria.talles}</dd>
                    </dl>
                  </div>
                </Elevar>
              </Item>
            )
          })}
        </Stagger>

        <Reveal delay={0.1} className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="#contacto" className="btn-oscuro">
            Pedir catálogo con precios
          </a>
          <a href={site.tienda} target="_blank" rel="noopener noreferrer" className="btn-contorno">
            Ver la tienda minorista
          </a>
        </Reveal>
      </div>
    </section>
  )
}
