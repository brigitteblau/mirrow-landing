'use client'

import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import CarruselMini from './CarruselMini'
import { Cerrar, WhatsApp, iconosPrenda, type IconoPrenda } from './icons'
import { whatsappLink } from '@/lib/site'

/**
 * Ficha ampliada de una categoría del catálogo.
 *
 * Se abre al clickear una tarjeta en `Productos`. Full-screen en mobile
 * (una sola columna con scroll), a dos columnas centrado en desktop —
 * fotos a la izquierda, info a la derecha con scroll propio.
 */
export default function ModalProducto({
  categoria,
  onClose,
}: {
  categoria: {
    slug: string
    foto: string
    fotos?: string[]
    alt: string
    nombre: string
    claim: string
    detalle: string
    icono: string
    talles: string
    articulos: string[]
  } | null
  onClose: () => void
}) {
  const cerrarRef = useRef<HTMLButtonElement>(null)
  const quieto = useReducedMotion()

  useEffect(() => {
    if (!categoria) return

    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    cerrarRef.current?.focus()

    const alTeclear = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', alTeclear)

    return () => {
      document.body.style.overflow = original
      window.removeEventListener('keydown', alTeclear)
    }
  }, [categoria, onClose])

  const Icono = categoria ? iconosPrenda[categoria.icono as IconoPrenda] : null

  return (
    <AnimatePresence>
      {categoria && (
        <motion.div
          className="fixed inset-0 z-50 flex items-stretch justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-tinta/70"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-producto-titulo"
            className="relative flex h-full w-full flex-col overflow-y-auto bg-white sm:h-auto sm:max-h-[85vh] sm:max-w-3xl sm:flex-row sm:overflow-hidden sm:rounded-marca"
            initial={quieto ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={quieto ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <button
              ref={cerrarRef}
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-2 top-2 z-10 grid h-11 w-11 touch-manipulation place-items-center text-tinta transition-colors hover:text-rojo-500"
            >
              <Cerrar className="h-5 w-5" />
            </button>

            <div className="relative aspect-[4/5] w-full shrink-0 self-stretch bg-elegancia sm:aspect-auto sm:w-1/2">
              <CarruselMini
                fotos={categoria.fotos ?? [categoria.foto]}
                alt={categoria.alt}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>

            <div className="flex flex-col gap-5 p-7 sm:w-1/2 sm:overflow-y-auto sm:p-9">
              <div className="flex items-center gap-3">
                {Icono && <Icono className="h-7 w-7 shrink-0 text-tinta" />}
                <h3 id="modal-producto-titulo" className="text-subtitulo uppercase text-tinta">
                  {categoria.nombre}
                </h3>
              </div>

              <p className="-mt-2 text-sm font-semibold text-rojo-500">{categoria.claim}</p>

              <p className="text-[0.9375rem] leading-relaxed text-premium">{categoria.detalle}</p>

              <div className="space-y-3 border-t border-black/10 pt-5 text-[0.8125rem]">
                <p>
                  <span className="font-bold uppercase tracking-wider text-tinta">Talles</span>{' '}
                  <span className="text-premium">{categoria.talles}</span>
                </p>
                <p>
                  <span className="font-bold uppercase tracking-wider text-tinta">Artículos</span>{' '}
                  <span className="text-premium">{categoria.articulos.join(', ')}</span>
                </p>
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-4 sm:flex-row">
                <a
                  href={whatsappLink(`Hola Mirrow, quiero consultar por ${categoria.nombre}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-oscuro touch-manipulation"
                >
                  <WhatsApp className="h-4 w-4" />
                  Consultar por WhatsApp
                </a>
                <a href="#contacto" onClick={onClose} className="btn-contorno touch-manipulation">
                  Pedir catálogo con precios
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
