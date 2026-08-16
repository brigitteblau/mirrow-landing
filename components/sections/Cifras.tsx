import { Contador, Item, Stagger } from '../motion/primitives'
import { site } from '@/lib/site'
import { categorias } from '@/lib/productos'

const articulos = categorias.reduce((total, c) => total + c.articulos.length, 0)

const cifras = [
  { valor: site.years, sufijo: '', rotulo: 'Años de trayectoria' },
  { valor: articulos, sufijo: '+', rotulo: 'Artículos en catálogo' },
  { valor: categorias.length, sufijo: '', rotulo: 'Líneas de producto' },
  { valor: 23, sufijo: '', rotulo: 'Provincias con envío' },
]

export default function Cifras() {
  return (
    <section className="border-b border-black/10 bg-white">
      <Stagger className="contenedor grid grid-cols-2 divide-x divide-y divide-black/10 sm:grid-cols-4 sm:divide-y-0">
        {cifras.map((cifra) => (
          <Item
            key={cifra.rotulo}
            className="px-2 py-10 text-center first:border-l-0 sm:px-6 sm:py-14"
          >
            <p className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-none tracking-tight text-tinta">
              <Contador hasta={cifra.valor} sufijo={cifra.sufijo} />
            </p>
            <p className="mt-3 text-[0.8125rem] font-semibold uppercase tracking-wider text-premium">
              {cifra.rotulo}
            </p>
          </Item>
        ))}
      </Stagger>
    </section>
  )
}
