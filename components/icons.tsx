/**
 * Set de íconos propio, dibujado sobre una grilla de 24 con trazo de 1.5.
 * Todos heredan el color del texto y escalan con currentColor: nada de emojis.
 */

type IconProps = React.SVGProps<SVGSVGElement>

function Icon({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  )
}

/* ── Prendas ─────────────────────────────────────────────────────────── */

export const Remera = (p: IconProps) => (
  <Icon {...p}>
    <path d="M9 3.5 6 4.8 3 7l2.2 2.6L7 8.4V20a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V8.4l1.8 1.2L21 7l-3-2.2-3-1.3" />
    <path d="M9 3.5a3 3 0 0 0 6 0" />
  </Icon>
)

export const Buzo = (p: IconProps) => (
  <Icon {...p}>
    {/* Capucha, mangas largas y bolsillo canguro: la silueta del hoodie. */}
    <path d="M9 6.4C9 3 15 3 15 6.4" />
    <path d="M9 6.4 6 7.6 3.6 15.6l2.8 1L7 15v5.5h10V15l.6 1.6 2.8-1L18 7.6l-3-1.2" />
    <path d="M8.8 16.6h6.4v2.2H8.8z" />
    <path d="M10.8 7v1.8M13.2 7v1.8" />
  </Icon>
)

export const Sweater = (p: IconProps) => (
  <Icon {...p}>
    {/* Cuello redondo, manga larga y puños y bajo con elástico. */}
    <path d="M8.8 4.2 5.6 5.6 3.4 16.2l2.9 1 .7-2.2v5.2h10V15l.7 2.2 2.9-1L18.4 5.6 15.2 4.2" />
    <path d="M8.8 4.2c.5 1.8 1.6 2.7 3.2 2.7s2.7-.9 3.2-2.7" />
    <path d="M7 18.2h10" />
  </Icon>
)

export const Chomba = (p: IconProps) => (
  <Icon {...p}>
    {/* Manga corta ancha, cuello chico con tapeta de dos botones. */}
    <path d="M9 3.8 5.4 5.2 2.6 8.4l2.6 2.8L7 9.6V20.2h10V9.6l1.8 1.6 2.6-2.8-2.8-3.2L15 3.8" />
    <path d="m9 3.8 3 2.8 3-2.8" />
    <path d="M10.7 6.4v4.2h2.6V6.4" />
  </Icon>
)

export const Camisa = (p: IconProps) => (
  <Icon {...p}>
    {/* Camisa doblada: cuello en punta y las dos mangas plegadas a los lados. */}
    <rect x="3.8" y="4.6" width="16.4" height="14.8" rx="1.2" />
    <path d="M8.6 4.6v14.8M15.4 4.6v14.8" />
    <path d="m9.6 4.6 2.4 3.4 2.4-3.4" />
    <path d="M12 8v11.4" />
  </Icon>
)

export const Jean = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 3h12l.6 17.6a.4.4 0 0 1-.4.4h-3.3a.4.4 0 0 1-.4-.36L12.6 10h-1.2l-1.9 10.64a.4.4 0 0 1-.4.36H5.8a.4.4 0 0 1-.4-.4Z" />
    <path d="M6 7h12" />
    <path d="M8.4 3v2.4" />
  </Icon>
)

export const Pantalon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6.4 3h11.2l.4 17.6a.4.4 0 0 1-.4.4h-3a.4.4 0 0 1-.4-.34L12.4 9h-.8l-1.8 11.66a.4.4 0 0 1-.4.34h-3a.4.4 0 0 1-.4-.4Z" />
    <path d="M6.4 5.6h11.2" />
  </Icon>
)

export const Jogger = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6.2 3.4h11.6L18 17.4h-4L12.6 9h-1.2L10 17.4H6Z" />
    <path d="M6 17.4h4.2v3H6.4a.4.4 0 0 1-.4-.4Z" />
    <path d="M13.8 17.4H18v2.6a.4.4 0 0 1-.4.4h-3.8Z" />
    <path d="M6.2 6h11.6" />
  </Icon>
)

export const Bermuda = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 3.6h12l.4 11.8a.4.4 0 0 1-.4.4h-3.2a.4.4 0 0 1-.4-.35L12.5 9h-1l-1.9 6.45a.4.4 0 0 1-.4.35H6a.4.4 0 0 1-.4-.4Z" />
    <path d="M6 6.6h12" />
  </Icon>
)

/** Se usa desde productos.js con la clave `icono`. */
export const iconosPrenda = {
  remera: Remera,
  buzo: Buzo,
  sweater: Sweater,
  chomba: Chomba,
  camisa: Camisa,
  jean: Jean,
  pantalon: Pantalon,
  jogger: Jogger,
  bermuda: Bermuda,
} as const

export type IconoPrenda = keyof typeof iconosPrenda

/* ── Interfaz y beneficios ───────────────────────────────────────────── */

export const Etiqueta = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3.6 11.4 11.4 3.6a2 2 0 0 1 1.4-.6H19a2 2 0 0 1 2 2v6.2a2 2 0 0 1-.6 1.4l-7.8 7.8a2 2 0 0 1-2.8 0l-6.2-6.2a2 2 0 0 1 0-2.8Z" />
    <circle cx="16.2" cy="7.8" r="1.4" />
  </Icon>
)

export const Camion = (p: IconProps) => (
  <Icon {...p}>
    <path d="M2.5 6.5h10.6a.4.4 0 0 1 .4.4v9.6H2.5Z" />
    <path d="M13.5 10h3.7a1 1 0 0 1 .8.4l2.3 3a1 1 0 0 1 .2.6v2.5h-7Z" />
    <circle cx="6.6" cy="18" r="1.9" />
    <circle cx="16.4" cy="18" r="1.9" />
  </Icon>
)

export const Tijera = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="6.2" cy="17.8" r="2.7" />
    <circle cx="17.8" cy="17.8" r="2.7" />
    <path d="M8.1 15.9 19 3.5" />
    <path d="M15.9 15.9 5 3.5" />
  </Icon>
)

export const Regla = (p: IconProps) => (
  <Icon {...p}>
    <rect x="2.5" y="8.5" width="19" height="7" rx="1" />
    <path d="M6.5 8.5v3M10 8.5v2M13.5 8.5v3M17 8.5v2" />
  </Icon>
)

export const Reloj = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 6.8V12l3.4 2" />
  </Icon>
)

export const Fabrica = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 20.5V9.6l5.4 3.4V9.6l5.4 3.4V6.5h2.8l.9 6.5H21v7.5Z" />
    <path d="M7 17h2M13 17h2" />
  </Icon>
)

export const Pin = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 21.5s7-5.9 7-11a7 7 0 1 0-14 0c0 5.1 7 11 7 11Z" />
    <circle cx="12" cy="10.2" r="2.6" />
  </Icon>
)

export const WhatsApp = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M12.04 2.4c-5.3 0-9.6 4.3-9.6 9.6 0 1.7.45 3.34 1.3 4.8L2.4 21.6l4.94-1.29a9.56 9.56 0 0 0 4.7 1.2h.01c5.29 0 9.6-4.3 9.6-9.6 0-2.56-1-4.97-2.82-6.78a9.52 9.52 0 0 0-6.79-2.82Zm0 1.62c2.13 0 4.13.83 5.64 2.34a7.93 7.93 0 0 1 2.34 5.64c0 4.4-3.58 7.98-7.99 7.98a7.96 7.96 0 0 1-4.06-1.11l-.29-.17-3.01.79.8-2.94-.19-.3a7.92 7.92 0 0 1-1.22-4.25c0-4.4 3.58-7.98 7.98-7.98Zm-2.9 4.05c-.14 0-.36.05-.55.26-.19.2-.72.7-.72 1.72 0 1.01.74 1.99.84 2.13.1.13 1.43 2.19 3.47 3.07.49.21.86.34 1.16.43.49.16.93.13 1.28.08.39-.06 1.2-.49 1.37-.97s.17-.88.12-.97c-.05-.08-.19-.13-.39-.23-.2-.1-1.2-.59-1.39-.66-.18-.07-.32-.1-.45.1-.13.2-.51.66-.63.79-.11.14-.23.15-.43.05-.2-.1-.85-.31-1.62-1-.6-.53-1-1.19-1.12-1.39-.11-.2-.01-.3.09-.4.09-.09.2-.23.3-.35.1-.12.13-.2.2-.34.06-.13.03-.25-.02-.35-.05-.1-.44-1.11-.62-1.51-.16-.4-.33-.34-.45-.35h-.38Z" />
  </svg>
)

export const Instagram = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none" />
  </Icon>
)

export const TikTok = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M16.6 2.4h-3.1v12.9a2.6 2.6 0 1 1-2.6-2.6c.24 0 .47.03.7.09V9.6a5.7 5.7 0 1 0 5.1 5.66V8.9a6.6 6.6 0 0 0 3.9 1.28V7.02a3.6 3.6 0 0 1-3.6-3.6v-1Z" />
  </svg>
)

export const Flecha = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4.5 12h15" />
    <path d="m13.5 6 6 6-6 6" />
  </Icon>
)

export const Menu = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
  </Icon>
)

export const Cerrar = (p: IconProps) => (
  <Icon {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Icon>
)

export const Check = (p: IconProps) => (
  <Icon {...p}>
    <path d="m4.5 12.5 5 5 10-11" />
  </Icon>
)
