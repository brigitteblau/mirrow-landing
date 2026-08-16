import Carrusel from '../Carrusel'
import { Reveal } from '../motion/primitives'
import { destacados, temporada } from '@/lib/productos'

export default function Destacados() {
  return (
    <section className="border-b border-black/10 bg-white py-20 sm:py-28">
      <div className="contenedor">
        <div className="mb-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal as="p" className="rotulo mb-5" distancia={12}>
              02 / Destacados
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="max-w-[16ch] text-titulo uppercase">Lo que más sale esta temporada</h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="max-w-sm">
            <p className="text-[0.9375rem] leading-relaxed text-premium">
              Selección de {destacados.length} artículos de {temporada.toLowerCase()}. Rota seguido:
              si te interesa alguno en particular, consultá stock antes de armar el pedido.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Carrusel />
        </Reveal>
      </div>
    </section>
  )
}
