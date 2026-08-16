/**
 * MARCAS QUE CONFÍAN EN NOSOTROS
 *
 * Cada marca se muestra de dos formas y el componente elige sola:
 *
 *   - Con `logo`: se muestra el archivo, en escala de grises, y toma color al
 *     pasar el mouse. Así conviven logos de distinto peso visual sin pelearse.
 *   - Sin `logo` (null): se muestra el nombre en tipografía neutra. Es el
 *     estado provisorio hasta conseguir el archivo original.
 *
 * Para activar una marca: dejar el archivo en /public/marcas/ y poner la ruta
 * acá. Ideal SVG; si es PNG, con fondo transparente y al menos 400 px de ancho.
 *
 * `invertir: true` es para logos que vienen en blanco. Sobre el fondo claro de
 * la sección un logo blanco no se ve, así que se invierte a oscuro. Es el caso
 * de Bravo, cuyo archivo es blanco sobre transparente.
 *
 * No bajar logos de Google Imágenes: vienen en baja, con fondo blanco pegado y
 * muchas veces son versiones viejas de la marca. Pedírselos a cada cliente.
 */

export const marcas = [
  { nombre: 'Rica Lewis', logo: null },
  { nombre: 'Bravo', logo: null, invertir: true },
  { nombre: 'Funic', logo: null },
  { nombre: 'Blau', logo: null },
]
