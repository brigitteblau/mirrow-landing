'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Flecha } from './icons'

/** Cada cuánto pasa sola a la siguiente foto. */
const INTERVALO_AUTOPLAY = 2800

/**
 * Carrusel de fotos para una tarjeta de producto individual.
 *
 * Vive dentro de un contenedor `relative` con aspect-ratio ya definido (lo
 * pone el padre) y ocupa todo el espacio con `absolute inset-0`. Con una
 * sola foto se comporta como una imagen fija, sin flechas ni puntos.
 *
 * Con más de una foto, pasa sola en loop cada INTERVALO_AUTOPLAY. El arranque
 * se desfasa un poco al azar por instancia para que no todas las tarjetas de
 * la grilla cambien de foto en el mismo instante. Se pausa con el mouse o el
 * dedo encima, y no arranca si el sistema pide reducir animaciones.
 */
export default function CarruselMini({
  fotos,
  alt,
  priority = false,
  sizes,
}: {
  fotos: string[]
  alt: string
  priority?: boolean
  sizes?: string
}) {
  const pista = useRef<HTMLDivElement>(null)
  const [indice, setIndice] = useState(0)
  const [enPausa, setEnPausa] = useState(false)

  const irA = useCallback((i: number) => {
    const el = pista.current
    const tarjeta = el?.children[i] as HTMLElement | undefined
    if (el && tarjeta) el.scrollTo({ left: tarjeta.offsetLeft, behavior: 'smooth' })
  }, [])

  const revisar = useCallback(() => {
    const el = pista.current
    if (!el || el.clientWidth === 0) return
    setIndice(Math.round(el.scrollLeft / el.clientWidth))
  }, [])

  useEffect(() => {
    if (fotos.length <= 1 || enPausa) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let idIntervalo: number | undefined

    // Desfasa el primer avance para que las tarjetas no queden sincronizadas.
    const idTimeout = window.setTimeout(() => {
      idIntervalo = window.setInterval(() => {
        setIndice((actual) => {
          const siguiente = (actual + 1) % fotos.length
          irA(siguiente)
          return siguiente
        })
      }, INTERVALO_AUTOPLAY)
    }, Math.random() * INTERVALO_AUTOPLAY)

    return () => {
      window.clearTimeout(idTimeout)
      if (idIntervalo) window.clearInterval(idIntervalo)
    }
  }, [fotos.length, enPausa, irA])

  if (fotos.length <= 1) {
    return (
      <Image
        src={fotos[0]}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain p-6 transition-transform duration-700 ease-marca group-hover:scale-[1.03]"
      />
    )
  }

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setEnPausa(true)}
      onMouseLeave={() => setEnPausa(false)}
      onTouchStart={() => setEnPausa(true)}
      onTouchEnd={() => setEnPausa(false)}
    >
      <div
        ref={pista}
        onScroll={revisar}
        className="flex h-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {fotos.map((foto, i) => (
          <div key={foto} className="relative h-full w-full shrink-0 snap-start">
            <Image
              src={foto}
              alt={`${alt} — foto ${i + 1} de ${fotos.length}`}
              fill
              priority={priority && i === 0}
              sizes={sizes}
              className="object-contain p-6"
            />
          </div>
        ))}
      </div>

      {/* Visibles siempre en mobile (no hay hover táctil confiable); en
          desktop aparecen solo al pasar el mouse. */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          irA(Math.max(indice - 1, 0))
        }}
        disabled={indice === 0}
        aria-label="Foto anterior"
        className="absolute left-0 top-1/2 -translate-y-1/2 touch-manipulation p-3 text-tinta opacity-100 transition-opacity duration-200 disabled:pointer-events-none disabled:opacity-0 sm:opacity-0 sm:group-hover:opacity-100"
      >
        <Flecha className="h-4 w-4 rotate-180" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          irA(Math.min(indice + 1, fotos.length - 1))
        }}
        disabled={indice === fotos.length - 1}
        aria-label="Foto siguiente"
        className="absolute right-0 top-1/2 -translate-y-1/2 touch-manipulation p-3 text-tinta opacity-100 transition-opacity duration-200 disabled:pointer-events-none disabled:opacity-0 sm:opacity-0 sm:group-hover:opacity-100"
      >
        <Flecha className="h-4 w-4" />
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {fotos.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              irA(i)
            }}
            aria-label={`Ir a la foto ${i + 1}`}
            className="touch-manipulation p-1.5"
          >
            <span
              className={`block h-1 rounded-full transition-all duration-200 ${
                i === indice ? 'w-4 bg-tinta' : 'w-1 bg-tinta/25'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
