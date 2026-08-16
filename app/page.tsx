import Hero from '@/components/sections/Hero'
import Cifras from '@/components/sections/Cifras'
import Productos from '@/components/sections/Productos'
import Destacados from '@/components/sections/Destacados'
import Mayoristas from '@/components/sections/Mayoristas'
import Marca from '@/components/sections/Marca'
import Locales from '@/components/sections/Locales'
import Contacto from '@/components/sections/Contacto'
import { PROVINCIAS, site } from '@/lib/site'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  '@id': `${site.url}/#negocio`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  email: site.email,
  foundingDate: String(site.foundingYear),
  description:
    'Fábrica de indumentaria masculina con venta mayorista. Remeras, jeans, camisas, buzos, pantalones y bermudas con curva completa de talles.',
  areaServed: Object.values(PROVINCIAS).map((provincia) => ({
    '@type': 'AdministrativeArea',
    name: provincia.nombre,
  })),
  address: site.locales.map((local) => ({
    '@type': 'PostalAddress',
    streetAddress: local.direccion.split(',')[0],
    addressLocality: 'Ciudad Autónoma de Buenos Aires',
    addressRegion: 'CABA',
    addressCountry: 'AR',
  })),
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: site.socials.map((red) => red.href),
}

export default function Home() {
  return (
    <>
      <Hero />
      <Cifras />
      <Productos />
      <Destacados />
      <Mayoristas />
      <Marca />
      <Locales />
      <Contacto origen="Home" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  )
}
