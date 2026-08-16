# MIRROW Landing Page - Next.js + Tailwind + Vercel

Landing page SEO-optimizada para vender buzos polares, sweaters y ropa mayorista en Argentina.

## 🚀 Features

- ✅ **Next.js 14** - App Router, SSG, SSR
- ✅ **Tailwind CSS** - Diseño responsivo y moderno
- ✅ **SEO Optimizado**
  - Meta tags dinámicos
  - Schema Markup (JSON-LD)
  - Sitemap automático
  - Robots.txt
  - Canonical URLs
- ✅ **Multi-Provincia** - Rutas dinámicas para cada provincia de Argentina
- ✅ **Formulario WhatsApp** - Contacto directo sin intermediarios
- ✅ **Mobile-First** - Responsive en todos los dispositivos
- ✅ **Performance** - Optimizado para Core Web Vitals

## 📁 Estructura del Proyecto

```
mirrow-landing/
├── app/
│   ├── layout.tsx          # Layout raíz
│   ├── page.tsx            # Home page
│   ├── [provincia]/        # Páginas dinámicas por provincia
│   │   └── page.tsx
│   ├── globals.css         # Estilos globales
│   └── sitemap.ts          # Sitemap automático
├── components/
│   ├── Header.tsx          # Header con navegación
│   ├── Footer.tsx          # Footer con links
│   └── ContactForm.tsx     # Formulario WhatsApp
├── public/
│   └── robots.txt          # Robots.txt para SEO
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── postcss.config.js
```

## ⚙️ Configuración Inicial

### 1. Clonar y preparar

```bash
cd mirrow-landing
npm install
```

### 2. Completar variables

**En `components/ContactForm.tsx`, reemplaza:**

```typescript
const WHATSAPP_NUMBER = '{{WHATSAPP_NUMBER}}'
```

Por tu número de WhatsApp (ej: `5491123456789`)

### 3. Reemplazar placeholders

- **Logo:** Agregar en `public/logo.png`
- **Colores:** Ajustar en `tailwind.config.ts` (tema `mirrow`)
- **Email/Contacto:** Actualizar en Footer y Header

## 🏃 Desarrollo Local

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## 🔍 SEO y Keywords

La landing rankea para:

- ✅ "Buzos polares Argentina"
- ✅ "Sweaters mayorista"
- ✅ "Fábrica de ropa Once"
- ✅ "Ropa mayorista Buenos Aires"
- ✅ "Buzos polares [Provincia]" (dinámico)

### Meta Tags

- Cada página tiene `meta` titles y descriptions únicos
- Open Graph para redes sociales
- Twitter Cards
- Schema Markup (LocalBusiness, Product)

## 📱 Rutas y Páginas

| Ruta | Descripción |
|------|------------|
| `/` | Home page - Presentación general |
| `/buenos-aires` | Landing específica para Buenos Aires |
| `/cordoba` | Landing específica para Córdoba |
| ... | (19 provincias más) |

Cada provincia tiene:
- H1 optimizado: "Buzos y Sweaters en [Provincia]"
- Descripción localizada
- Formulario de contacto
- Schema Markup específico

## 🚀 Deploy en Vercel

### Opción 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Opción 2: GitHub + Vercel

1. Sube el repo a GitHub
2. Conecta con Vercel
3. Deploy automático en cada push

## 📊 Analytics y Tracking

Para agregar Google Analytics:

En `app/layout.tsx`, agregar:

```tsx
<script
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
  strategy="afterInteractive"
/>
<script
  id="gtag-init"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_ID');
    `,
  }}
/>
```

Reemplazar `GA_ID` con tu ID de Google Analytics.

## 🔧 Customización

### Cambiar colores

En `tailwind.config.ts`:

```typescript
mirrow: {
  blue: '#003366',      // Azul principal
  lightblue: '#0055AA', // Azul claro
  accent: '#FF6600',    // Naranja (CTAs)
  light: '#F5F5F5',     // Gris muy claro
}
```

### Agregar más provincias

En `app/[provincia]/page.tsx` y `app/sitemap.ts`, agregar objeto en `PROVINCES`.

### Cambiar logo

Crear archivo `public/logo.svg` y referenciar en `components/Header.tsx`.

## 📝 Content Optimization

Cada sección está optimizada para SEO:

- **H1:** Keyword principal (1 por página)
- **H2/H3:** Keywords secundarias
- **Paragraphs:** Contenido natural con LSI keywords
- **Links internos:** Estructura de silos
- **Schema:** Datos estructurados

## ✅ Checklist Pre-Producción

- [ ] Reemplazar número WhatsApp
- [ ] Agregar logo de MIRROW
- [ ] Actualizar colores de marca
- [ ] Revisar meta descriptions
- [ ] Agregar Google Analytics
- [ ] Revisar enlaces internos y externos
- [ ] Test en móvil
- [ ] Test en escritorio
- [ ] Validar con PageSpeed Insights
- [ ] Enviar sitemap a Google Search Console

## 📞 Soporte

Para cambios o mejoras, contactar al desarrollador.

---

**Construido con ❤️ para MIRROW**
