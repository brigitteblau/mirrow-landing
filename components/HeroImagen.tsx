'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'

const EASE = [0.22, 0.61, 0.36, 1] as const

/**
 * Foto de producto real del hero, con leve zoom continuo (Ken Burns) para
 * que la pantalla completa no se sienta estática. Foto ya viene graduada en
 * tonos oscuros — se agrega un degradé + un toque de rojo de marca en
 * multiply, nada de color plano ni saturado.
 */
export default function HeroImagen() {
  const quieto = useReducedMotion()

  return (
    <div className="relative mt-10 aspect-[4/3] w-full shrink-0 overflow-hidden rounded-marca border border-white/10 shadow-2xl shadow-black/40 sm:aspect-[3/4] sm:mt-0 lg:h-[540px] lg:w-[400px]">
      <motion.div
        className="absolute inset-0"
        initial={quieto ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
      >
        <motion.div
          className="absolute inset-0"
          animate={quieto ? undefined : { scale: [1, 1.07, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            src="/productos/destacados/remera-perception.webp"
            alt="Remera Perception de Mirrow colgada en percha de fábrica"
            fill
            priority
            sizes="(max-width: 1024px) 92vw, 400px"
            className="object-cover"
          />
        </motion.div>

        {/* Degradé + toque de rojo de marca en multiply: profundidad, no color plano. */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-tinta/70 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-rojo-900/15 mix-blend-multiply" />
      </motion.div>
    </div>
  )
}
