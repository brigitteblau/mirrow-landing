# Sistema de diseño — Mirrow

Traducción a código del manual *Mirrow — Rediseño* (Sabrina Cinzer). Si algo de
acá contradice al manual, gana el manual.

La marca tiene que leerse **con trayectoria antes que joven**. Somos una fábrica
de 1969, no una marca lanzada el año pasado: el sitio lo tiene que decir sin
escribirlo. Eso significa tipografía contenida, mucho blanco, una sola nota de
color, fotos reales y datos concretos. Nada de degradés, sombras difusas,
tramas decorativas ni ilustraciones genéricas.

La referencia de tono es un proveedor industrial argentino de toda la vida
(casasco.com.ar): header blanco, dato de contacto siempre a la vista, foto real
del negocio, y el año de fundación como primer argumento.

---

## 1. Color

| Token | Hex | Uso |
|---|---|---|
| `rojo-500` | `#E52831` | **Rojo acción.** Sólo CTA, acentos y el swoosh. Nunca como fondo de sección grande. |
| `rojo-600` | `#C3171F` | Hover del CTA. |
| `azul-300` | `#B3CCE2` | **Azul invierno.** Fondo de la sección de marca. Un solo bloque por página. |
| `elegancia` | `#F2F3F4` | **Gris elegancia.** Fondo alterno de sección, barra institucional del header y franja de clientes. |
| `tinta` | `#1E1E1E` | Negro del logotipo. Texto y fondos oscuros. |
| `carbon` | `#141414` | Un escalón más oscuro: footer. |
| `premium` | `#838383` | **Gris premium.** Texto secundario. Nunca para texto principal. |
| `verde-*` | `#41CF69` y derivados | Sólo estados de éxito del formulario. |

La escala completa (`rojo-50` a `rojo-900`, `azul-50` a `azul-900`) está en
`tailwind.config.ts` con los valores exactos del manual.

**Regla de proporción:** ~80 % neutro (blanco / elegancia), ~15 % foto, ~5 %
rojo. El rojo quedó reducido a tres lugares: el CTA principal, la rayita del
rótulo de sección y el swoosh del logotipo. En ningún caso se usa para texto
corrido, íconos ni subtítulos — eso lo hacía ver a la marca ansiosa.

**Ritmo de fondos.** Las secciones alternan para que la página respire:
`blanco → elegancia → elegancia → blanco → blanco → azul-300 → blanco → tinta`.
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
| `text-display` | 2.125 → 3.375 rem | `h1`, uno por página |
| `text-titulo` | 1.625 → 2.25 rem | `h2` de sección |
| `text-subtitulo` | 1.125 → 1.375 rem | `h3` de tarjeta |
| `text-lead` | 1 → 1.125 rem | bajada del hero |

La escala es deliberadamente chica. Un titular de 96 px es un recurso de marca
nueva que necesita hacerse notar; acá el peso lo aporta la foto y el dato de los
57 años, no el cuerpo tipográfico.

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
  Las franjas de servicio (hero, clientes) usan menos: `py-14`.
- Separación entre tarjetas: `gap-4` (16 px). Es cerrado a propósito: el
  catálogo tiene que verse denso, como una percha llena.
- Radio: **4 px** (`rounded-marca`). El radio grande lee "app", no "fábrica".
  Se aplica a tarjetas, botones, campos y fotos. Sólo las flechas del carrusel
  y los botones sociales usan `rounded-full`.
- Bordes: `border-black/10` sobre claro, `border-white/15` sobre oscuro. Nunca
  `box-shadow` para separar bloques — el borde de 1 px es la herramienta.

---

## 4. Elementos de marca

**Badge de años.** Al lado del logotipo, en el header: `DESDE 1969` en dos
líneas, separado por una línea vertical. Es el elemento que más trabaja de toda
la página. No sacarlo.

**Barra institucional.** Franja gris arriba del header con horario de atención,
zona y email. Cuesta 36 px y comunica "atendemos por mostrador hace décadas"
mejor que cualquier párrafo.

**Swoosh.** `<Swoosh />` de `components/Logo.tsx`. Hoy sólo vive dentro del
logotipo y del favicon. Se retiraron las marcas de agua gigantes: sobre las
fotos reales del negocio competían y se veían de relleno.

**Retirados a propósito.** La trama diagonal y el skew de −11° estaban en
versiones anteriores. Se sacaron porque son gestos de marca joven y peleaban con
el objetivo de que el sitio parezca establecido. Si vuelven, que sea con motivo.

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
| `Elevar` | Tarjeta que sube 3 px en hover. |

Principios:
- **Una sola vez.** Todo usa `viewport={{ once: true }}`. Un elemento que se
  vuelve a animar cada vez que pasás por encima cansa a la tercera pasada.
- **Corto.** Desplazamientos de 12–16 px, duración 0.3–0.5 s, curva
  `cubic-bezier(0.22, 0.61, 0.36, 1)` (token `ease-marca`).
- **Escalonado suave.** `staggerChildren` entre 0.06 y 0.08. Más lento se siente
  perezoso.
- **Nada se mueve solo.** No hay bucles, marquesinas ni contadores. Todo lo que
  se mueve lo dispara el usuario, scrolleando o pasando el mouse. Un elemento
  que se anima solo mientras leés es un elemento que no confía en su contenido.
- **Se retiraron** `TituloAnimado` (título palabra por palabra), `Marquesina`
  (cinta infinita) y `Contador` (cifras que suben). Los tres eran correctos
  técnicamente y los tres hacían ver joven a la marca.
- **Respeta `prefers-reduced-motion`.** Todas las primitivas leen
  `useReducedMotion` y se apagan solas. No agregar animaciones fuera de las
  primitivas sin ese chequeo.

---

## 7. Fotografía

La foto es el activo más importante de la página y el que más falta hace. Una
foto propia del local de Once, del mostrador o del depósito vale más que
cualquier decisión tipográfica: es lo que prueba que la empresa existe.

- **Hero**: se configura en `site.heroFoto` (`lib/site.ts`), 4:3, 1400 × 1050.
  Hoy hay una foto de catálogo como provisorio. Reemplazar apenas haya foto del
  negocio. Archivos y formato: ver `public/hero/LEEME.txt`.
- Origen del resto: catálogo oficial de temporada.
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

`lib/marcas.js` tiene los clientes de la franja "Marcas que confían en
nosotros". Cada marca se muestra con su logo si hay archivo, o con el nombre en
tipografía si todavía no lo hay: la sección nunca se rompe por un archivo que
falta. Los logos van en `public/marcas/` — ver el `LEEME.txt` de esa carpeta.

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
