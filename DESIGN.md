# Sistema de diseño — Mirrow

Traducción a código del manual *Mirrow — Rediseño* (Sabrina Cinzer). Si algo de
acá contradice al manual, gana el manual.

La marca tiene que leerse **jovial pero con trayectoria**: tipografía grande y
angulada, mucho aire, una sola nota de color y fotos de producto reales. Nada de
degradés, sombras difusas ni ilustraciones genéricas.

---

## 1. Color

| Token | Hex | Uso |
|---|---|---|
| `rojo-500` | `#E52831` | **Rojo acción.** Sólo CTA, acentos y el swoosh. Nunca como fondo de sección grande. |
| `rojo-600` | `#C3171F` | Hover del CTA. |
| `azul-300` | `#B3CCE2` | **Azul invierno.** Fondo de la sección de marca. Un solo bloque por página. |
| `tinta` | `#1E1E1E` | Negro del logotipo. Texto y fondos oscuros. |
| `carbon` | `#141414` | Un escalón más oscuro: footer y cinta del hero. |
| `premium` | `#838383` | **Gris premium.** Texto secundario. Nunca para texto principal. |
| `elegancia` | `#F2F3F4` | **Gris elegancia.** Fondo alterno de sección. |
| `verde-*` | `#41CF69` y derivados | Sólo estados de éxito del formulario. |

La escala completa (`rojo-50` a `rojo-900`, `azul-50` a `azul-900`) está en
`tailwind.config.ts` con los valores exactos del manual.

**Regla de proporción:** ~70 % neutro (blanco / elegancia / tinta), ~25 % azul o
foto, ~5 % rojo. Si el rojo empieza a competir con el producto, sobra rojo.

**Ritmo de fondos.** Las secciones alternan para que la página respire:
`tinta → blanco → elegancia → blanco → blanco → azul-300 → blanco → tinta`.
Nunca dos fondos oscuros seguidos.

---

## 2. Tipografía

| Rol | Familia | Dónde |
|---|---|---|
| Títulos | **Anybody** ExtraBold, mayúsculas, `tracking` negativo | `h1`, `h2`, `h3` |
| Cuerpo | **Manrope** 400–700 | todo lo demás |

Las dos se cargan con `next/font/google` en `app/layout.tsx`, sin request a un
CDN externo y sin salto de fuente al cargar.

Escala fluida definida en `tailwind.config.ts` — un solo token sirve de mobile a
desktop, no hace falta escribir breakpoints de tamaño:

| Token | Rango | Uso |
|---|---|---|
| `text-display` | 2.75 → 6 rem | `h1`, uno por página |
| `text-titulo` | 2 → 3.5 rem | `h2` de sección |
| `text-subtitulo` | 1.35 → 1.875 rem | `h3` de tarjeta |
| `text-lead` | 1.06 → 1.25 rem | bajada del hero |

**Títulos siempre en mayúsculas** (`uppercase`). Anybody está dibujada con un
ángulo que sólo se aprecia en caja alta, y es lo que emparenta el texto con el
logotipo.

**Rótulo de sección.** La clase `.rotulo` reproduce el `01 / Marca` del manual:
línea roja de 32 px, número, barra y nombre en versalitas. Numerar en orden y
sin saltos: si se agrega una sección en el medio, hay que renumerar las de abajo.

---

## 3. Espaciado y grilla

- Ancho de contenido: `max-w-contenido` = **1240 px**, con 20 px de padding en
  mobile y 32 px desde `sm`. La clase es `.contenedor`.
- Aire vertical de sección: `py-20` en mobile, `py-28` desde `sm`. Constante.
- Separación entre tarjetas: `gap-4` (16 px). Es cerrado a propósito: el
  catálogo tiene que verse denso, como una percha llena.
- Radio: **14 px** (`rounded-marca`) en tarjetas, botones y campos. Los avatares
  circulares y las flechas del carrusel usan `rounded-full`.
- Bordes: `border-black/10` sobre claro, `border-white/15` sobre oscuro. Nunca
  `box-shadow` para separar bloques — el borde de 1 px es la herramienta.

---

## 4. Elementos de marca

**Swoosh.** `<Swoosh />` de `components/Logo.tsx`. Se usa de dos maneras:
como marca de agua gigante al 7 % de opacidad sobre fondo oscuro, o como
separador de 10 px en la cinta del hero. Nunca a tamaño intermedio, nunca
recortado por la mitad de forma que pierda la punta.

**Trama diagonal.** `.trama-diagonal` (sobre claro) y `.trama-diagonal-clara`
(sobre oscuro). Líneas a −68°, el mismo ángulo de la itálica del logotipo. Es un
detalle de textura: si se nota, está demasiado fuerte.

**Skew.** `.inclinado` aplica −11° y se reserva para números grandes (los pasos
`01`–`04`). No usar en texto corrido: no se lee.

**Logotipo.** `<Wordmark />` usa `currentColor` para el texto y rojo fijo para el
swoosh, así el mismo componente funciona sobre blanco y sobre tinta sin duplicar
archivos. Está vectorizado del original, no es una tipografía.

---

## 5. Íconos

Set propio en `components/icons.tsx`. **No se usan emojis en ningún lado** — un
emoji se renderiza distinto en cada sistema operativo y rompe la marca.

Reglas del set:
- Grilla de 24, trazo de 1.5, extremos y uniones redondeados.
- `fill="none"`, color heredado con `currentColor`.
- Las prendas tienen que distinguirse **por silueta**, no por detalle interno: a
  36 px un buzo y una remera con el mismo contorno se ven idénticos. Por eso el
  buzo tiene capucha y bolsillo canguro, la camisa está doblada y el sweater
  tiene mangas largas con puño.

Para agregar una prenda: dibujarla, registrarla en `iconosPrenda` y usar esa
clave en el campo `icono` de `lib/productos.js`.

---

## 6. Movimiento

Primitivas en `components/motion/primitives.tsx`, sobre `motion` (Framer Motion).

| Primitiva | Para qué |
|---|---|
| `Reveal` | Bloque que aparece al entrar en viewport. El 90 % de los casos. |
| `Stagger` + `Item` | Grillas y listas: los hijos entran escalonados. |
| `TituloAnimado` | Sólo el `h1`. Entra palabra por palabra. |
| `Marquesina` | Cinta infinita de argumentos. |
| `Elevar` | Tarjeta que sube 6 px en hover. |
| `Contador` | Cifras que suben al entrar en pantalla. |

Principios:
- **Una sola vez.** Todo usa `viewport={{ once: true }}`. Un elemento que se
  vuelve a animar cada vez que pasás por encima cansa a la tercera pasada.
- **Corto.** Desplazamientos de 12–20 px, duración 0.3–0.7 s, curva
  `cubic-bezier(0.22, 0.61, 0.36, 1)` (token `ease-marca`).
- **Escalonado suave.** `staggerChildren` entre 0.06 y 0.08. Más lento se siente
  perezoso.
- **`TituloAnimado` es un recurso escaso.** Uno por página. Usado en cada título
  deja de ser un gesto y pasa a ser ruido.
- **Respeta `prefers-reduced-motion`.** Todas las primitivas leen
  `useReducedMotion` y se apagan solas. No agregar animaciones fuera de las
  primitivas sin ese chequeo.

---

## 7. Fotografía

- Origen: catálogo oficial de temporada.
- Categorías: 3:4, **900 × 1200**, `.webp`, en `public/productos/`.
- Destacados: 3:4, **700 × 933**, `.webp`, en `public/productos/destacados/`.
- Fondo blanco o gris muy claro, producto sobre modelo, encuadre de cintura
  para arriba o cuerpo entero. Recorte desde arriba (`object-top`) para que la
  prenda quede siempre en el tercio superior.
- Toda foto lleva `alt` descriptivo en `lib/productos.js`. No es opcional:
  además de accesibilidad, es lo que indexa Google Imágenes.

Para procesar una foto nueva al formato correcto:

```bash
magick original.jpg -background white -alpha remove -alpha off \
  -resize 900x1200^ -gravity north -extent 900x1200 \
  -quality 82 public/productos/nombre.webp
```

---

## 8. Contenido

`lib/productos.js` es la **única fuente de verdad** del catálogo. Tiene dos
listas con propósitos distintos:

- **`categorias`** — las 9 líneas de producto. Cambia poco (una o dos veces al
  año). Alimenta la grilla de la home, el `<select>` del formulario y el footer.
- **`destacados`** — los artículos que rotan. Pensada para editarse seguido.
  Alimenta el carrusel. Entre 6 y 12 items: con menos no llena la fila en
  desktop, con más nadie llega al final.

`lib/site.ts` tiene los datos de la empresa: direcciones, redes, WhatsApp y el
listado de provincias. Los años de trayectoria se calculan solos desde
`foundingYear`, no hay un número hardcodeado que se desactualice en enero.

**Por qué grilla y no carrusel para las categorías.** El menú del catálogo tiene
que verse completo de un vistazo: un mayorista quiere confirmar en dos segundos
que tenemos su rubro. Lo que se esconde en un carrusel, no se ve. El carrusel se
reserva para los destacados, que son justamente lo que cambia y lo que se mira
por curiosidad, no por necesidad.

---

## 9. Tono de voz

Español rioplatense, voseo, segunda persona. Frases cortas.

Le hablamos a alguien que tiene un local y necesita saber si le conviene, no a
un consumidor final. Concreto antes que aspiracional:

- ✅ «Curva completa, del S al 4XL.»
- ❌ «Calidad premium para el hombre moderno.»
- ✅ «Te pasamos el número de seguimiento el mismo día que sale el bulto.»
- ❌ «Logística de excelencia.»

Sin signos de exclamación, sin mayúsculas para gritar, sin «¡No te lo pierdas!».
La trayectoria se demuestra con datos, no con adjetivos.
