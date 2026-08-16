'use client'

import { motion, useReducedMotion, type Variants } from 'motion/react'

/**
 * Primitivas de animación de la marca.
 *
 * Regla de la casa: la animación acompaña la lectura, no la interrumpe. Todo
 * entra una sola vez, con desplazamientos cortos y una curva suave. Nada se
 * mueve solo, nada se repite en bucle, nada llama la atención sobre sí mismo.
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
  distancia = 16,
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
      transition={{ duration: 0.5, delay, ease: EASE }}
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
  oculto: { opacity: 0, y: 14 },
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
      whileHover={quieto ? undefined : { y: -3 }}
      transition={{ duration: 0.3, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

