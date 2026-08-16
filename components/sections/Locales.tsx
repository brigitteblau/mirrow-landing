import { Flecha, Pin, Reloj } from '../icons'
import { Elevar, Item, Reveal, Stagger } from '../motion/primitives'
import { site } from '@/lib/site'

export default function Locales() {
  return (
    <section id="locales" className="scroll-mt-24 border-b border-black/10 bg-white py-20 sm:py-28">
      <div className="contenedor">
        <div className="mb-14 max-w-2xl">
          <Reveal as="p" className="rotulo mb-5" distancia={12}>
            05 / Showrooms
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-titulo uppercase">Vení a ver la mercadería</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lead text-premium">
              Dos puntos en Once con el muestrario completo de temporada. Se puede tocar la tela,
              armar el surtido y retirar en el momento.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid gap-4 md:grid-cols-2" paso={0.08}>
          {site.locales.map((local) => (
            <Item key={local.nombre}>
              <Elevar className="h-full rounded-marca border border-black/10 bg-elegancia p-8">
                <h3 className="text-subtitulo uppercase">{local.nombre}</h3>

                <dl className="mt-7 space-y-4">
                  <div className="flex gap-3.5">
                    <dt className="sr-only">Dirección</dt>
                    <Pin className="mt-0.5 h-5 w-5 shrink-0 text-premium" />
                    <dd className="text-[0.9375rem] font-semibold text-tinta">{local.direccion}</dd>
                  </div>
                  <div className="flex gap-3.5">
                    <dt className="sr-only">Horario</dt>
                    <Reloj className="mt-0.5 h-5 w-5 shrink-0 text-premium" />
                    <dd className="text-[0.9375rem] text-premium">{local.horario}</dd>
                  </div>
                </dl>

                <p className="mt-6 text-sm leading-relaxed text-premium">{local.nota}</p>

                <a
                  href={local.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-tinta"
                >
                  Cómo llegar
                  <Flecha className="h-4 w-4 transition-transform duration-300 ease-marca group-hover:translate-x-1" />
                </a>
              </Elevar>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
