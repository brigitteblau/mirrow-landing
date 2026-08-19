'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Flecha } from './icons'
import { destacados } from '@/lib/productos'

/** Cada cuánto avanza sola una tarjeta. */
const INTERVALO_AUTOPLAY = 3500

/**
 * Carrusel de destacados.
 *
 * Es un scroller nativo con scroll-snap, no una librería: se arrastra con el
 * dedo en mobile, con la rueda o las flechas en desktop, y funciona aunque
 * el JS todavía no haya hidratado. Las flechas se desactivan solas en los
 * extremos para no dar un click muerto.
 *
 * Avanza solo cada INTERVALO_AUTOPLAY y vuelve al principio al llegar al
 * final, en loop. Se pausa mientras el mouse o el dedo están encima, y no
 * arranca si el sistema pide reducir animaciones.
 */
export default function Carrusel() {
  const pista = useRef<HTMLUListElement>(null)
  const [puedeIzquierda, setPuedeIzquierda] = useState(false)
  const [puedeDerecha, setPuedeDerecha] = useState(true)
  const [enPausa, setEnPausa] = useState(false)

  const revisarBordes = useCallback(() => {
    const el = pista.current
    if (!el) return
    // 2px de tolerancia: el scroll fraccionado nunca cierra exacto.
    setPuedeIzquierda(el.scrollLeft > 2)
    setPuedeDerecha(el.scrollLeft + el.clientWidth < el.scrollWidth - 2)
  }, [])

  useEffect(() => {
    revisarBordes()
    window.addEventListener('resize', revisarBordes)
    return () => window.removeEventListener('resize', revisarBordes)
  }, [revisarBordes])

  const mover = (direccion: 1 | -1) => {
    const el = pista.current
    if (!el) return
    // Avanza de a una tarjeta, tomando el ancho real del primer item.
    const tarjeta = el.firstElementChild as HTMLElement | null
    const paso = tarjeta ? tarjeta.offsetWidth + 16 : el.clientWidth * 0.8
    el.scrollBy({ left: paso * direccion, behavior: 'smooth' })
  }

  useEffect(() => {
    if (enPausa) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const id = window.setInterval(() => {
      const el = pista.current
      if (!el) return
      const alFinal = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2
      if (alFinal) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        mover(1)
      }
    }, INTERVALO_AUTOPLAY)

    return () => window.clearInterval(id)
  }, [enPausa])

  return (
    <div className="relative">
      <div className="mb-7 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => mover(-1)}
          disabled={!puedeIzquierda}
          aria-label="Ver anteriores"
          className="grid h-9 w-9 place-items-center text-tinta transition-colors duration-200 hover:text-rojo-500 disabled:pointer-events-none disabled:opacity-25"
        >
          <Flecha className="h-5 w-5 rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => mover(1)}
          disabled={!puedeDerecha}
          aria-label="Ver siguientes"
          className="grid h-9 w-9 place-items-center text-tinta transition-colors duration-200 hover:text-rojo-500 disabled:pointer-events-none disabled:opacity-25"
        >
          <Flecha className="h-5 w-5" />
        </button>
      </div>

      <ul
        ref={pista}
        onScroll={revisarBordes}
        onMouseEnter={() => setEnPausa(true)}
        onMouseLeave={() => setEnPausa(false)}
        onTouchStart={() => setEnPausa(true)}
        onTouchEnd={() => setEnPausa(false)}
        onFocus={() => setEnPausa(true)}
        onBlur={() => setEnPausa(false)}
        /* Sin scrollbar visible: la afordancia son las flechas y la tarjeta
           que asoma cortada a la derecha. */
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {destacados.map((producto) => (
          <li
            key={producto.id}
            className="w-[70vw] shrink-0 snap-start sm:w-[46vw] md:w-[30vw] lg:w-[266px]"
          >
            <article className="group h-full">
              <div className="relative aspect-[3/4] overflow-hidden bg-elegancia">
                <Image
                  src={producto.foto}
                  alt={producto.alt}
                  fill
                  sizes="(max-width: 640px) 70vw, (max-width: 1024px) 30vw, 266px"
                  className="object-contain p-6 transition-transform duration-500 ease-marca group-hover:scale-[1.03]"
                />
              </div>

              <p className="mt-4 text-[0.6875rem] font-bold uppercase tracking-wider text-premium">
                {producto.linea}
              </p>
              <h3 className="mt-1 text-base font-bold uppercase tracking-tight text-tinta">
                {producto.nombre}
              </h3>
              <p className="mt-1 text-[0.8125rem] text-premium">
                {producto.articulo} · Talles {producto.talles}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
