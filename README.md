# MIRROW — Landing mayorista

Landing de captación de mayoristas para Mirrow, fábrica de indumentaria
masculina con showroom en Once, CABA.

Next.js 14 (App Router) · Tailwind · Motion · TypeScript.

## Arrancar

```bash
npm install
cp .env.example .env.local   # cargar el WhatsApp real
npm run dev                  # http://localhost:3000
```

## Variables de entorno

| Variable | Obligatoria | Qué es |
|---|---|---|
| `NEXT_PUBLIC_WHATSAPP` | **Sí** | Número de atención mayorista en formato internacional, sin `+` ni espacios. Ej: `5491123456789`. Sin esto el formulario abre un chat a un número inexistente. |

En Vercel se carga en *Settings → Environment Variables* para Production,
Preview y Development.

## Qué se toca para actualizar el sitio

| Archivo | Cuándo |
|---|---|
| `lib/productos.js` | Cambió el catálogo. Las 9 categorías (`categorias`) y los destacados que rotan (`destacados`). |
| `lib/site.ts` | Cambió una dirección, un horario, una red social o el listado de provincias. |
| `public/productos/` | Fotos nuevas. Formato y comando de conversión en [DESIGN.md](DESIGN.md#7-fotografía). |
| `DESIGN.md` | Antes de inventar un color, un ícono o una animación nueva. |

Los años de trayectoria y el año del footer se calculan solos: no hay ningún
número que se desactualice en enero.

## Estructura

```
app/
  layout.tsx          fuentes, metadata, header/footer
  page.tsx            home
  [provincia]/        19 landings por provincia (SSG)
  not-found.tsx       404 con marca
  sitemap.ts robots.ts
components/
  sections/           una sección de la home por archivo
  motion/primitives   Reveal, Stagger, TituloAnimado, Marquesina…
  icons.tsx           set de íconos propio (sin emojis)
  Logo.tsx            logotipo vectorizado
  Carrusel.tsx        destacados, scroll-snap nativo
lib/
  productos.js        catálogo
  site.ts             datos de la empresa
```

## Deploy

Push a la rama principal. Vercel corre `npm run build`; salen 27 páginas
estáticas (home + 19 provincias + sitemap, robots e íconos).

Antes de mergear:

```bash
npx tsc --noEmit && npm run build
```
