'use client'

import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type Variants,
} from 'motion/react'
import { useMemo } from 'react'

/**
 * Primitivas de animación de la marca.
 *
 * Regla de la casa: la animación acompaña la lectura, no la interrumpe.
 * Todo entra una sola vez, con desplazamientos cortos y una curva suave.
 * Si el sistema pide menos movimiento, las primitivas se apagan solas.
 */

const EASE = [0.22, 0.61, 0.36, 1] as const

type Direccion = 'arriba' | 'abajo' | 'izquierda' | 'derecha'

function offset(direccion: Direccion, distancia: number) {
  switch (direccion) {
    case 'arriba':
      return { y: distancia }
    case 'abajo':
      return { y: -distancia }
    case 'izquierda':
      return { x: distancia }
    case 'derecha':
      return { x: -distancia }
  }
}

/** Aparece al entrar en viewport. El bloque más usado del sitio. */
export function Reveal({
  children,
  className,
  delay = 0,
  distancia = 20,
  direccion = 'arriba',
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  distancia?: number
  direccion?: Direccion
  as?: 'div' | 'section' | 'li' | 'span' | 'p' | 'header'
}) {
  const quieto = useReducedMotion()
  const M = motion[Tag]

  return (
    <M
      className={className}
      initial={quieto ? false : { opacity: 0, ...offset(direccion, distancia) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </M>
  )
}

/** Contenedor que escalona a sus hijos. Combinar con <Item>. */
export function Stagger({
  children,
  className,
  paso = 0.07,
  delay = 0,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  paso?: number
  delay?: number
  as?: 'div' | 'ul' | 'section'
}) {
  const quieto = useReducedMotion()
  const M = motion[Tag]

  return (
    <M
      className={className}
      initial={quieto ? false : 'oculto'}
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        visible: { transition: { staggerChildren: paso, delayChildren: delay } },
      }}
    >
      {children}
    </M>
  )
}

const itemVariants: Variants = {
  oculto: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

export function Item({
  children,
  className,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'li' | 'article'
}) {
  const M = motion[Tag]
  return (
    <M className={className} variants={itemVariants}>
      {children}
    </M>
  )
}

/**
 * Titular que entra palabra por palabra. Reservado para los h1:
 * usado de más pierde el efecto y cansa.
 */
export function TituloAnimado({
  texto,
  className,
  delay = 0,
}: {
  texto: string
  className?: string
  delay?: number
}) {
  const quieto = useReducedMotion()
  const palabras = useMemo(() => texto.split(' '), [texto])

  if (quieto) return <h1 className={className}>{texto}</h1>

  return (
    <motion.h1
      className={className}
      initial="oculto"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.045, delayChildren: delay } } }}
    >
      {palabras.map((palabra, i) => (
        <span key={`${palabra}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              oculto: { y: '105%' },
              visible: { y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
          >
            {palabra}
            {i < palabras.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  )
}

/**
 * Cinta infinita. Duplica los hijos una vez para que el bucle cierre sin salto;
 * `duracion` es lo que tarda en recorrer una copia completa.
 */
export function Marquesina({
  children,
  duracion = 32,
  className,
}: {
  children: React.ReactNode
  duracion?: number
  className?: string
}) {
  const quieto = useReducedMotion()

  return (
    <div className={`flex overflow-hidden ${className ?? ''}`}>
      {[0, 1].map((copia) => (
        <motion.div
          key={copia}
          aria-hidden={copia === 1}
          className="flex shrink-0 items-center"
          animate={quieto ? undefined : { x: ['0%', '-100%'] }}
          transition={{ duration: duracion, ease: 'linear', repeat: Infinity }}
        >
          {children}
        </motion.div>
      ))}
    </div>
  )
}

/** Tarjeta que se levanta apenas al pasar el mouse. */
export function Elevar({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const quieto = useReducedMotion()

  return (
    <motion.div
      className={className}
      whileHover={quieto ? undefined : { y: -6 }}
      transition={{ duration: 0.3, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/** Contador que sube al entrar en pantalla. Para la tira de cifras. */
export function Contador({ hasta, sufijo = '' }: { hasta: number; sufijo?: string }) {
  const quieto = useReducedMotion()
  const valor = useMotionValue(0)
  const redondeado = useTransform(valor, (v) => Math.round(v).toString())

  if (quieto) {
    return (
      <span>
        {hasta}
        {sufijo}
      </span>
    )
  }

  return (
    <motion.span
      onViewportEnter={() => animate(valor, hasta, { duration: 1.4, ease: EASE })}
      viewport={{ once: true }}
    >
      <motion.span>{redondeado}</motion.span>
      {sufijo}
    </motion.span>
  )
}
