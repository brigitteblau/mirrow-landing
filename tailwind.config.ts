import type { Config } from 'tailwindcss'

/**
 * Paleta y escala tomadas del manual de marca (Mirrow — Rediseño, sec. 03).
 * Los nombres son los del manual para que diseño y código hablen igual.
 */
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: {
        // Rojo acción — el color de marca, sólo para acentos y CTA.
        rojo: {
          50: '#FFEBEC',
          100: '#FFBFC2',
          200: '#FF9398',
          300: '#FF676E',
          400: '#FF3B45',
          500: '#E52831',
          600: '#C3171F',
          700: '#A10911',
          800: '#7F0006',
          900: '#5D0005',
        },
        // Azul invierno — el secundario, sostiene fondos y bloques fríos.
        azul: {
          50: '#FAFDFF',
          100: '#E4F2FF',
          200: '#CCE5FC',
          300: '#B3CCE2',
          400: '#9BB3C8',
          500: '#849BAF',
          600: '#6D8395',
          700: '#3C5B76',
          800: '#334E66',
          900: '#293E51',
        },
        verde: {
          200: '#98E5AE',
          500: '#41CF69',
          800: '#067024',
        },
        // Neutros del manual: gris elegancia, gris premium y el negro del logo.
        tinta: '#1E1E1E',
        carbon: '#141414',
        premium: '#838383',
        elegancia: '#F2F3F4',
      },
      fontFamily: {
        // Anybody para títulos, Manrope para cuerpo. Las variables las define next/font.
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Escala fluida: un solo valor sirve de mobile a desktop.
        display: ['clamp(2.75rem, 7vw, 6rem)', { lineHeight: '0.94', letterSpacing: '-0.035em' }],
        titulo: ['clamp(2rem, 4.2vw, 3.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        subtitulo: ['clamp(1.35rem, 2.2vw, 1.875rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        lead: ['clamp(1.0625rem, 1.4vw, 1.25rem)', { lineHeight: '1.6' }],
      },
      maxWidth: {
        contenido: '1240px',
      },
      borderRadius: {
        marca: '14px',
      },
      transitionTimingFunction: {
        marca: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

export default config
