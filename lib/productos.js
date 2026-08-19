/**
 * CATÁLOGO MIRROW — fuente de verdad de la landing.
 *
 * Este archivo es el único lugar que hay que tocar cuando cambia la temporada.
 * Agregá, sacá o reordená categorías y la grilla de la home se reacomoda sola.
 *
 * Campos:
 *   slug       identificador único, también se usa en el <select> del formulario
 *   foto       archivo en /public/productos, 3:4, 900x1200, .webp
 *   fotos      opcional, array de fotos para el mini carrusel de la tarjeta.
 *              si no está, la tarjeta muestra solo `foto`.
 *   alt        descripción de la foto para lectores de pantalla y Google Imágenes
 *   nombre     título visible
 *   claim      una línea corta, va debajo del título
 *   detalle    dos o tres renglones, describe el producto para un mayorista
 *   icono      clave del set de íconos en components/icons.tsx
 *              (remera | chomba | bermuda | jogger | camisa | jean | pantalon | buzo | sweater)
 *   talles     rango real de curva de talles
 *   articulos  códigos de artículo del catálogo vigente
 */

export const temporada = 'Verano 2025'

export const categorias = [
  {
    slug: 'remeras',
    foto: '/productos/remeras.webp',
    alt: 'Remera de algodón lisa, cuello redondo, sobre modelo',
    nombre: 'Remeras',
    claim: 'Lisas, estampadas y oversize',
    detalle:
      'Algodón 24/1 y 16/1, línea premium con estampa y relieve. Regular y oversize en la misma curva de talles.',
    icono: 'remera',
    talles: 'S al 4XL',
    articulos: ['1100', '1102', '1103', '1104', '1105', '1201', '1202', '1203', '1204', '1205', '1206', '1601', '1602', '1604'],
  },
  {
    slug: 'buzos',
    foto: '/productos/buzos.webp',
    alt: 'Buzo de frisa negro con logo bordado al pecho',
    nombre: 'Buzos y hoodies',
    claim: 'El producto que más nos piden',
    detalle:
      'Buzo polar y frisa de algodón. Base de la línea Originals Studio, lista para bordar o estampar con tu marca.',
    icono: 'buzo',
    talles: 'S al XXL',
    articulos: ['3001'],
    fotos: [
      '/hoodie/hoodie1.png',
      '/hoodie/hoodie2.png',
      '/hoodie/hoodie3.png',
      '/hoodie/hoodie4.png',
      '/hoodie/hoodie5.png',
    ],
  },
  {
    slug: 'chombas',
    foto: '/productos/chombas.webp',
    alt: 'Chomba de algodón micro piqué celeste',
    nombre: 'Chombas',
    claim: 'Micro piqué y jersey',
    detalle:
      'Algodón micro piqué, jersey y rayada. También en set de nylon con bermuda, ideal para uniformes y promocional.',
    icono: 'chomba',
    talles: 'S al XXL',
    articulos: ['5429', '5450', '5485', '5495', '5497'],
    fotos: [
      '/chombas/chomba1.png',
      '/chombas/chomba2.png',
      '/chombas/chomba3.png',
      '/chombas/chomba4.png',
      '/chombas/chomba5.png',
      '/chombas/chomba6.png',
    ],
  },
  {
    slug: 'camisas',
    foto: '/productos/camisas.webp',
    alt: 'Camisa leñadora a cuadros en blanco y negro',
    nombre: 'Camisas',
    claim: 'Lino, rayada y leñadora',
    detalle:
      'Manga corta y larga, corte slim y recto. Lino, hawaiana, rayada, cuadros y leñadora en curva completa.',
    icono: 'camisa',
    talles: 'S al XXL · 38 al 48',
    articulos: ['10.001', '10.002', '10.003', '10.004', '10.005', '10.010', 'CA1103'],
  },
  {
    slug: 'jeans',
    foto: '/productos/jeans.webp',
    alt: 'Jean elastizado azul índigo sobre modelo',
    nombre: 'Jeans',
    claim: 'Elastizado, classic y 18 oz.',
    detalle:
      'Regular y elastizado en índigo, azul, celeste, gris y negro. Línea 18 oz. RL95 y Blue Black para el cliente que busca peso.',
    icono: 'jean',
    talles: '38 al 60',
    articulos: ['2330', '2337', '2339', '2548', '2606', '2620', '2664'],
  },
  {
    slug: 'pantalones',
    foto: '/productos/pantalones.webp',
    alt: 'Pantalón chino beige de corte recto',
    nombre: 'Pantalones',
    claim: 'Gabardina y chino',
    detalle:
      'Gabardina clásica en curva ancha y chino de vestir informal. Los dos caballos de batalla de cualquier local de barrio.',
    icono: 'pantalon',
    talles: '38 al 60',
    articulos: ['1800', '2600', '14N', '14B'],
  },
  {
    slug: 'joggers',
    foto: '/productos/joggers.webp',
    alt: 'Jogger cargo verde militar con puño',
    nombre: 'Joggers',
    claim: 'Cargo con puño y recto',
    detalle:
      'Gabardina pesada con puño y nylon spandex de corte recto. Línea Core, la que más rota en temporada.',
    icono: 'jogger',
    talles: '38 al 50',
    articulos: ['3985', '4796', '9271'],
  },
  {
    slug: 'bermudas',
    foto: '/productos/bermudas.webp',
    alt: 'Bermuda cargo de gabardina beige',
    nombre: 'Bermudas y shorts',
    claim: 'Cargo, china, jean y lino',
    detalle:
      'Gabardina cargo y china, jean clásica, lino y shorts deportivos. Incluye mallas estampadas para la punta del verano.',
    icono: 'bermuda',
    talles: '38 al 60 · S al XXL',
    articulos: ['8200', 'BE24', 'BE242', 'BE25', 'BE28', 'BE2674', 'BE2675', 'SH8800', 'MA1900', '6840'],
    fotos: [
      '/productos/bermudas.webp',
      '/malla/malla1.png',
      '/malla/malla2.png',
      '/malla/malla3.png',
      '/malla/malla4.png',
      '/malla/malla5.png',
    ],
  },
  {
    slug: 'sweaters',
    foto: '/productos/sweaters.webp',
    alt: 'Medio cierre polar azul marino',
    nombre: 'Sweaters y abrigo',
    claim: 'Lo más vendido en invierno',
    detalle:
      'Sweater liso, chaleco y campera inflable. Se arma la temporada fría con la misma cuenta corriente.',
    icono: 'sweater',
    talles: 'S al XXL',
    articulos: ['7260'],
  },
]

/**
 * DESTACADOS DE TEMPORADA
 *
 * Esta es la lista que rota. Va en el carrusel de la home y está pensada para
 * editarse seguido: agregás, sacás o reordenás y el carrusel se ajusta solo.
 * Las fotos van en /public/productos/destacados en 3:4 (700x933, .webp).
 *
 * Sugerencia: mantener entre 6 y 12 items. Con menos el carrusel no llena la
 * fila en desktop, con más nadie llega hasta el final.
 */
export const destacados = [
  {
    id: 'remera-oversize-available',
    nombre: 'Remera oversize Available',
    linea: 'Remeras',
    articulo: 'ART 1601',
    talles: 'S al XXL',
    foto: '/productos/destacados/remera-oversize-available.webp',
    alt: 'Remera oversize blanca con estampa en relieve',
  },
  {
    id: 'remera-perception',
    nombre: 'Remera Perception',
    linea: 'Remeras',
    articulo: 'ART 1601',
    talles: 'M al XXL',
    foto: '/productos/destacados/remera-perception.webp',
    alt: 'Remera deportiva negra con paneles y estampa Perception',
  },
  {
    id: 'remera-lisa-negra',
    nombre: 'Remera lisa premium',
    linea: 'Remeras',
    articulo: 'ART 1100',
    talles: 'S al 4XL',
    foto: '/productos/destacados/remera-lisa-negra.webp',
    alt: 'Remera lisa negra de algodón sobre modelo',
  },
  {
    id: 'medio-cierre-celeste',
    nombre: 'Medio cierre jersey',
    linea: 'Sweaters',
    articulo: 'ART 7260',
    talles: 'S al XXL',
    foto: '/productos/destacados/medio-cierre-celeste.webp',
    alt: 'Sweater celeste de medio cierre sobre modelo',
  },
  {
    id: 'jogger-gabardina',
    nombre: 'Jogger cargo con puño',
    linea: 'Joggers',
    articulo: 'ART 3985',
    talles: '38 al 50',
    foto: '/productos/destacados/jogger-gabardina.webp',
    alt: 'Jogger cargo beige de gabardina pesada con puño',
  },
  {
    id: 'bermuda-lino',
    nombre: 'Bermuda de lino',
    linea: 'Bermudas',
    articulo: 'ART BE28',
    talles: '38 al 56',
    foto: '/productos/destacados/bermuda-lino.webp',
    alt: 'Bermuda de lino color crudo con cordón',
  },
  {
    id: 'short-deportivo',
    nombre: 'Short deportivo',
    linea: 'Bermudas',
    articulo: 'ART 6840',
    talles: 'S al XXL',
    foto: '/productos/destacados/short-deportivo.webp',
    alt: 'Short deportivo verde militar sobre modelo',
  },
  {
    id: 'jean-elastizado-celeste',
    nombre: 'Jean elastizado celeste',
    linea: 'Jeans',
    articulo: 'ART 2620',
    talles: '38 al 56',
    foto: '/productos/destacados/jean-elastizado-celeste.webp',
    alt: 'Jean elastizado celeste de corte recto',
  },
  {
    id: 'jean-regular-negro',
    nombre: 'Jean regular negro',
    linea: 'Jeans',
    articulo: 'ART 2548',
    talles: '38 al 60',
    foto: '/productos/destacados/jean-regular-negro.webp',
    alt: 'Jean regular negro sobre modelo',
  },
]

/** Para el <select> del formulario de contacto. */
export const opcionesConsulta = [
  ...categorias.map((c) => ({ value: c.slug, label: c.nombre })),
  { value: 'surtido', label: 'Surtido armado / temporada completa' },
  { value: 'personalizacion', label: 'Personalización con mi marca' },
  { value: 'general', label: 'Consulta general' },
]

export function categoriaPorSlug(slug) {
  return categorias.find((c) => c.slug === slug)
}
