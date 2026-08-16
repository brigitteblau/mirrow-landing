/**
 * Configuración única del sitio. Todo lo que cambia con el negocio vive acá,
 * no repartido por los componentes.
 */

export const site = {
  name: 'MIRROW',
  legalName: 'Mirrow Indumentaria',
  url: 'https://mirrow.vercel.app',
  tienda: 'https://tiendamirrow.com',
  foundingYear: 1969,
  /** Se calcula sola: no hay que tocar el número de años cada enero. */
  get years() {
    return new Date().getFullYear() - this.foundingYear
  },
  email: 'mirrowba@gmail.com',
  /**
   * Número de WhatsApp en formato internacional sin +, espacios ni guiones.
   * Se configura en Vercel como NEXT_PUBLIC_WHATSAPP.
   */
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? '5491100000000',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/mirrow.oficial' },
    { label: 'TikTok', href: 'https://tiktok.com/@mirrow' },
  ],
  locales: [
    {
      nombre: 'Showroom Castelli',
      direccion: 'Castelli 334, Once, CABA',
      horario: 'Lunes a viernes, 9:00 a 18:00',
      nota: 'Atención mayorista con muestrario completo de temporada.',
      maps: 'https://maps.google.com/?q=Castelli+334+CABA',
    },
    {
      nombre: 'Showroom Sarmiento',
      direccion: 'Sarmiento 2790, Once, CABA',
      horario: 'Lunes a viernes, 9:00 a 18:00',
      nota: 'Retiro de pedidos y armado de surtidos en el momento.',
      maps: 'https://maps.google.com/?q=Sarmiento+2790+CABA',
    },
  ],
} as const

/** Link a WhatsApp con mensaje prellenado. */
export function whatsappLink(mensaje: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`
}

export const PROVINCIAS = {
  'buenos-aires': { nombre: 'Buenos Aires', region: 'Provincia de Buenos Aires', logistica: 'Despachos diarios por transporte propio y encomienda.' },
  'cordoba': { nombre: 'Córdoba', region: 'Provincia de Córdoba', logistica: 'Salida semanal a capital e interior cordobés.' },
  'santa-fe': { nombre: 'Santa Fe', region: 'Provincia de Santa Fe', logistica: 'Envíos a Rosario, Santa Fe capital y toda la provincia.' },
  'mendoza': { nombre: 'Mendoza', region: 'Provincia de Mendoza', logistica: 'Transporte a Cuyo con entrega en 48 a 72 horas.' },
  'catamarca': { nombre: 'Catamarca', region: 'Provincia de Catamarca', logistica: 'Cobertura del NOA vía transportes asociados.' },
  'chaco': { nombre: 'Chaco', region: 'Provincia de Chaco', logistica: 'Despachos al NEA con seguimiento de bultos.' },
  'corrientes': { nombre: 'Corrientes', region: 'Provincia de Corrientes', logistica: 'Envíos a capital e interior correntino.' },
  'entre-rios': { nombre: 'Entre Ríos', region: 'Provincia de Entre Ríos', logistica: 'Ruta semanal por Paraná, Concordia y Gualeguaychú.' },
  'formosa': { nombre: 'Formosa', region: 'Provincia de Formosa', logistica: 'Cobertura del NEA con consolidado semanal.' },
  'la-pampa': { nombre: 'La Pampa', region: 'Provincia de La Pampa', logistica: 'Entrega en Santa Rosa y localidades del interior.' },
  'misiones': { nombre: 'Misiones', region: 'Provincia de Misiones', logistica: 'Despachos a Posadas, Oberá y Eldorado.' },
  'neuquen': { nombre: 'Neuquén', region: 'Provincia de Neuquén', logistica: 'Transporte patagónico con salida semanal.' },
  'rio-negro': { nombre: 'Río Negro', region: 'Provincia de Río Negro', logistica: 'Cobertura del Alto Valle y la costa rionegrina.' },
  'salta': { nombre: 'Salta', region: 'Provincia de Salta', logistica: 'Ruta al NOA con entrega puerta a puerta.' },
  'san-juan': { nombre: 'San Juan', region: 'Provincia de San Juan', logistica: 'Envíos a Cuyo consolidados con Mendoza.' },
  'san-luis': { nombre: 'San Luis', region: 'Provincia de San Luis', logistica: 'Entrega en capital, Villa Mercedes y alrededores.' },
  'santiago-del-estero': { nombre: 'Santiago del Estero', region: 'Provincia de Santiago del Estero', logistica: 'Cobertura del NOA con transportes asociados.' },
  'tierra-del-fuego': { nombre: 'Tierra del Fuego', region: 'Provincia de Tierra del Fuego', logistica: 'Envíos a Río Grande y Ushuaia por vía terrestre.' },
  'tucuman': { nombre: 'Tucumán', region: 'Provincia de Tucumán', logistica: 'Salida semanal a San Miguel de Tucumán e interior.' },
} as const

export type ProvinciaSlug = keyof typeof PROVINCIAS
