import { Wordmark } from '../Logo'
import { Reveal } from '../motion/primitives'
import { site } from '@/lib/site'

/** Los tres pilares de la sec. 01.1 del manual de marca. */
const pilares = [
  { titulo: 'Autenticidad', texto: 'Ropa con personalidad.' },
  { titulo: 'Versatilidad', texto: 'Diseños que se adaptan a cada estilo.' },
  { titulo: 'Calidad', texto: 'Materiales y detalles que marcan la diferencia.' },
]

export default function Marca() {
  return (
    <section
      id="marca"
      className="relative scroll-mt-24 overflow-hidden border-b border-black/10 bg-azul-300 py-20 text-tinta sm:py-28"
    >

      <div className="contenedor relative grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <Reveal as="p" className="rotulo mb-5 text-tinta/55" distancia={12}>
            04 / La marca
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-titulo uppercase">Mirrow es ropa sin complicaciones</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-7 max-w-xl space-y-5 text-lead text-tinta/75">
            <p>
              Creemos en lo esencial, en la comodidad sin descuidar el estilo, en prendas que se
              sienten bien y funcionan en cualquier momento del día.
            </p>
            <p>
              No hacemos moda pasajera. Diseñamos básicos con identidad, prendas que trascienden
              temporadas y se integran fácilmente a cualquier guardarropa. Por eso rotan: no se
              vencen en marzo.
            </p>
          </Reveal>
        </div>

        <Reveal direccion="izquierda" delay={0.1}>
          <div className="rounded-marca bg-tinta p-9 text-white sm:p-11">
            <Wordmark className="h-6 w-auto text-white" />
            <ul className="mt-10 space-y-8">
              {pilares.map((pilar) => (
                <li key={pilar.titulo} className="border-t border-white/15 pt-5">
                  <h3 className="text-lg font-bold uppercase tracking-tight text-rojo-500">
                    {pilar.titulo}
                  </h3>
                  <p className="mt-1.5 text-[0.9375rem] text-white/70">{pilar.texto}</p>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-xs uppercase tracking-[0.16em] text-white/40">
              Desde {site.foundingYear} · Buenos Aires, Argentina
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
