import { Camion, Etiqueta, Fabrica, Regla, Reloj, Tijera } from '../icons'
import { Item, Reveal, Stagger } from '../motion/primitives'
import { site } from '@/lib/site'

const beneficios = [
  {
    Icono: Fabrica,
    titulo: 'Precio de fábrica',
    texto:
      'Producimos lo que vendemos. No hay importador ni distribuidor en el medio, y eso se nota en el margen que te queda.',
  },
  {
    Icono: Regla,
    titulo: 'Curva completa',
    texto:
      'Del S al 4XL y del 38 al 60 según la línea. Se arma el surtido con los talles que realmente rotan en tu zona.',
  },
  {
    Icono: Reloj,
    titulo: 'Reposición todo el año',
    texto:
      'Los básicos no son temporada. Mantenemos stock permanente de las líneas core para que nunca te quedes sin talle.',
  },
  {
    Icono: Camion,
    titulo: 'Logística resuelta',
    texto:
      'Despachos diarios por transporte y encomienda. Te pasamos el número de seguimiento el mismo día que sale el bulto.',
  },
  {
    Icono: Tijera,
    titulo: 'Personalización',
    texto:
      'Bordado y estampa sobre nuestras bases. Si tenés marca propia, la producimos con tu etiqueta desde cantidades bajas.',
  },
  {
    Icono: Etiqueta,
    titulo: 'Cuenta corriente',
    texto:
      'A partir del segundo pedido trabajamos con cuenta corriente y condiciones acordadas según volumen.',
  },
]

const pasos = [
  { n: '01', titulo: 'Nos escribís', texto: 'Contanos qué vendés y en qué zona. Formulario o WhatsApp, lo que te quede cómodo.' },
  { n: '02', titulo: 'Te pasamos la lista', texto: 'Catálogo con precios mayoristas, mínimos y condiciones de pago vigentes.' },
  { n: '03', titulo: 'Armamos el surtido', texto: 'Te ayudamos a elegir la mezcla de líneas y talles según tu público.' },
  { n: '04', titulo: 'Despachamos', texto: 'Sale de Once con seguimiento. Retiro en showroom también disponible.' },
]

export default function Mayoristas() {
  return (
    <section id="mayoristas" className="scroll-mt-24 border-b border-black/10 bg-white py-20 sm:py-28">
      <div className="contenedor">
        <div className="mb-14 max-w-2xl">
          <Reveal as="p" className="rotulo mb-5" distancia={12}>
            03 / Mayoristas
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-titulo uppercase">Por qué te conviene comprarnos directo</h2>
          </Reveal>
        </div>

        <Stagger className="grid gap-x-10 gap-y-11 sm:grid-cols-2 lg:grid-cols-3" paso={0.06}>
          {beneficios.map(({ Icono, titulo, texto }) => (
            <Item key={titulo}>
              <Icono className="h-8 w-8 text-rojo-500" />
              <h3 className="mt-5 text-lg font-bold uppercase tracking-tight text-tinta">{titulo}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-premium">{texto}</p>
            </Item>
          ))}
        </Stagger>

        {/* Cómo se compra, en cuatro pasos */}
        <div className="mt-24 rounded-marca bg-tinta p-8 text-white sm:p-12">
          <Reveal as="p" className="rotulo mb-5 text-white/50" distancia={12}>
            Cómo se compra
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="max-w-[18ch] text-subtitulo uppercase">
              De la primera consulta al despacho, sin vueltas
            </h3>
          </Reveal>

          <Stagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" paso={0.08}>
            {pasos.map((paso) => (
              <Item key={paso.n} className="border-t border-white/15 pt-6">
                <span className="inclinado inline-block font-display text-4xl font-extrabold text-rojo-500">
                  {paso.n}
                </span>
                <h4 className="mt-4 text-base font-bold uppercase tracking-tight">{paso.titulo}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{paso.texto}</p>
              </Item>
            ))}
          </Stagger>

          <Reveal delay={0.1} className="mt-11">
            <a href="#contacto" className="btn-primario">
              Empezar ahora
            </a>
            <p className="mt-4 text-xs text-white/45">
              Atención mayorista de lunes a viernes, de 9 a 18. Showroom en Once, CABA.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
