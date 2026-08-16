import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Productos from '@/components/sections/Productos'
import Contacto from '@/components/sections/Contacto'
import { Camion, Etiqueta, Flecha, Regla, WhatsApp } from '@/components/icons'
import { Item, Reveal, Stagger } from '@/components/motion/primitives'
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
      <section className="border-b border-black/10 bg-white">
        <div className="contenedor grid items-center gap-12 py-14 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:py-20">
          <div>
            <nav aria-label="Migas de pan" className="mb-7 text-sm text-premium">
              <Link href="/" className="transition-colors hover:text-tinta">
                Inicio
              </Link>
              <span className="mx-2 text-black/20">/</span>
              <span className="text-tinta">{provincia.nombre}</span>
            </nav>

            <Reveal distancia={14}>
              <h1 className="max-w-[16ch] text-display uppercase">
                Ropa mayorista en {provincia.nombre}
              </h1>
            </Reveal>

            <Reveal delay={0.08} className="mt-6 max-w-lg">
              <p className="text-lead text-premium">
                Abastecemos locales de toda la {provincia.region.toLowerCase()} desde nuestra
                fábrica en Buenos Aires. {provincia.logistica}
              </p>
            </Reveal>

            <Reveal delay={0.14} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contacto" className="btn-primario">
                Pedir lista para {provincia.nombre}
                <Flecha className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink(
                  `Hola Mirrow, tengo un local en ${provincia.nombre} y quiero consultar por venta mayorista.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-contorno"
              >
                <WhatsApp className="h-[18px] w-[18px]" />
                Hablar con un asesor
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1} direccion="izquierda" distancia={16}>
            <figure className="relative aspect-[4/3] overflow-hidden rounded-marca bg-elegancia">
              <Image
                src={site.heroFoto.src}
                alt={site.heroFoto.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </figure>
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
                <Icono className="h-7 w-7 text-tinta" />
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
