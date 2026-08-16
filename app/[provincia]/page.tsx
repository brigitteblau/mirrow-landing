import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Productos from '@/components/sections/Productos'
import Contacto from '@/components/sections/Contacto'
import { Swoosh } from '@/components/Logo'
import { Camion, Etiqueta, Flecha, Regla, WhatsApp } from '@/components/icons'
import { Item, Reveal, Stagger, TituloAnimado } from '@/components/motion/primitives'
import { PROVINCIAS, site, whatsappLink, type ProvinciaSlug } from '@/lib/site'

type Props = { params: { provincia: string } }

function buscar(slug: string) {
  return Object.prototype.hasOwnProperty.call(PROVINCIAS, slug)
    ? PROVINCIAS[slug as ProvinciaSlug]
    : undefined
}

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(PROVINCIAS).map((provincia) => ({ provincia }))
}

export function generateMetadata({ params }: Props): Metadata {
  const provincia = buscar(params.provincia)
  if (!provincia) return {}

  const title = `Ropa mayorista en ${provincia.nombre}`
  const description = `Proveedor de indumentaria masculina para locales de ${provincia.nombre}. Remeras, jeans, camisas y buzos de fábrica con curva completa. ${provincia.logistica}`

  return {
    title,
    description,
    alternates: { canonical: `/${params.provincia}` },
    openGraph: { title: `${title} | MIRROW`, description, url: `${site.url}/${params.provincia}` },
  }
}

export default function PaginaProvincia({ params }: Props) {
  const provincia = buscar(params.provincia)
  if (!provincia) notFound()

  const ventajas = [
    {
      Icono: Camion,
      titulo: `Logística a ${provincia.nombre}`,
      texto: provincia.logistica,
    },
    {
      Icono: Etiqueta,
      titulo: 'Precio de fábrica',
      texto: `Comprás directo a la fábrica, sin distribuidor intermedio encareciendo la prenda antes de que llegue a ${provincia.nombre}.`,
    },
    {
      Icono: Regla,
      titulo: 'Surtido según tu zona',
      texto: 'Armamos la mezcla de líneas y talles con lo que efectivamente rota en tu localidad, no con lo que nos sobra.',
    },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: `${site.name} — Mayorista en ${provincia.nombre}`,
    url: `${site.url}/${params.provincia}`,
    description: `Venta mayorista de indumentaria masculina con envíos a ${provincia.region}.`,
    areaServed: { '@type': 'AdministrativeArea', name: provincia.nombre },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Castelli 334',
      addressLocality: 'Ciudad Autónoma de Buenos Aires',
      addressRegion: 'CABA',
      addressCountry: 'AR',
    },
  }

  return (
    <>
      <section className="relative overflow-hidden bg-tinta text-white">
        <div className="trama-diagonal-clara absolute inset-0" aria-hidden="true" />
        <Swoosh
          className="pointer-events-none absolute -right-24 top-8 hidden w-[42rem] text-rojo-500/[0.07] md:block"
          aria-hidden="true"
        />

        <div className="contenedor relative pb-16 pt-16 sm:pb-24 sm:pt-20">
          <Reveal as="p" className="mb-8 text-sm text-white/45" distancia={10}>
            <Link href="/" className="transition-colors hover:text-white">
              Inicio
            </Link>
            <span className="mx-2 text-white/25">/</span>
            <span className="text-white/70">{provincia.nombre}</span>
          </Reveal>

          <TituloAnimado
            texto={`Ropa mayorista en ${provincia.nombre}`}
            className="max-w-[15ch] text-display uppercase"
          />

          <Reveal delay={0.3} className="mt-8 max-w-xl">
            <p className="text-lead text-white/70">
              Abastecemos locales de toda la {provincia.region.toLowerCase()} desde nuestra fábrica
              en Buenos Aires. {provincia.logistica}
            </p>
          </Reveal>

          <Reveal delay={0.4} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contacto" className="btn-primario">
              Pedir lista para {provincia.nombre}
              <Flecha className="h-[18px] w-[18px]" />
            </a>
            <a
              href={whatsappLink(
                `Hola Mirrow, tengo un local en ${provincia.nombre} y quiero consultar por venta mayorista.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-claro"
            >
              <WhatsApp className="h-5 w-5" />
              Hablar con un asesor
            </a>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white py-20 sm:py-24">
        <div className="contenedor">
          <Reveal as="p" className="rotulo mb-5" distancia={12}>
            Envíos a {provincia.nombre}
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-[20ch] text-titulo uppercase">
              Cómo trabajamos con clientes de {provincia.nombre}
            </h2>
          </Reveal>

          <Stagger className="mt-14 grid gap-x-10 gap-y-11 md:grid-cols-3" paso={0.07}>
            {ventajas.map(({ Icono, titulo, texto }) => (
              <Item key={titulo}>
                <Icono className="h-8 w-8 text-rojo-500" />
                <h3 className="mt-5 text-lg font-bold uppercase tracking-tight text-tinta">
                  {titulo}
                </h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-premium">{texto}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <Productos />

      <Contacto
        titulo={`Pedí la lista para ${provincia.nombre}`}
        bajada={`Contanos qué vendés en ${provincia.nombre} y te pasamos catálogo con precios, mínimos y costo de envío a tu localidad.`}
        origen={provincia.nombre}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  )
}
