import CarruselMini from '../CarruselMini'
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

        <Stagger className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3" paso={0.06}>
          {categorias.map((categoria, i) => {
            const Icono = iconosPrenda[categoria.icono as IconoPrenda]

            return (
              <Item key={categoria.slug} as="article">
                <Elevar className="group flex h-full flex-col">
                  <div className="relative aspect-[4/5] overflow-hidden bg-elegancia">
                    <CarruselMini
                      fotos={categoria.fotos ?? [categoria.foto]}
                      alt={categoria.alt}
                      /* Las tres primeras entran en el primer scroll en desktop. */
                      priority={i < 3}
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 380px"
                    />
                  </div>

                  <div className="flex flex-1 flex-col pt-6">
                    <div className="mb-3 flex items-center gap-3">
                      <Icono className="h-6 w-6 shrink-0 text-tinta transition-colors duration-300 group-hover:text-rojo-500" />
                      <h3 className="text-subtitulo uppercase">{categoria.nombre}</h3>
                    </div>

                    <p className="text-sm font-semibold text-rojo-500">{categoria.claim}</p>
                    <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-premium">
                      {categoria.detalle}
                    </p>

                    <p className="mt-6 border-t border-black/10 pt-5 text-[0.8125rem] text-premium">
                      <span className="font-bold text-tinta">Talles {categoria.talles}</span>
                      {' · '}
                      {categoria.articulos.length} artículos
                    </p>
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
