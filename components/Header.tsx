'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Wordmark } from './Logo'
import { Cerrar, Menu, WhatsApp } from './icons'
import { site, whatsappLink } from '@/lib/site'

const enlaces = [
  { href: '/#productos', label: 'Productos' },
  { href: '/#mayoristas', label: 'Mayoristas' },
  { href: '/#marca', label: 'La marca' },
  { href: '/#locales', label: 'Locales' },
]

const consulta = 'Hola Mirrow, quiero pedir la lista mayorista.'

export default function Header() {
  const [abierto, setAbierto] = useState(false)
  // Todas las páginas arrancan con una sección oscura arriba (el hero), así
  // que el header arranca transparente y pasa a sólido recién cuando esa
  // sección termina de pasar por debajo suyo.
  const [solido, setSolido] = useState(false)
  const quieto = useReducedMotion()

  useEffect(() => {
    // El header flota transparente mientras la sección de arriba (marcada con
    // data-tema="oscuro", el hero) siga detrás suyo; en cuanto esa sección
    // termina de pasar se pone sólido, sin importar cuánto mida esa sección.
    const marcador = document.querySelector<HTMLElement>('[data-tema="oscuro"]')

    const alScrollear = () => {
      if (!marcador) {
        setSolido(window.scrollY > 12)
        return
      }
      const { bottom } = marcador.getBoundingClientRect()
      setSolido(bottom <= 73)
    }

    alScrollear()
    window.addEventListener('scroll', alScrollear, { passive: true })
    window.addEventListener('resize', alScrollear)
    return () => {
      window.removeEventListener('scroll', alScrollear)
      window.removeEventListener('resize', alScrollear)
    }
  }, [])

  // Con el panel abierto el fondo no debe scrollear detrás.
  useEffect(() => {
    document.body.style.overflow = abierto ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [abierto])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ease-marca ${
        solido
          ? 'border-black/10 bg-white/85 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="contenedor flex h-[72px] items-center justify-between gap-6">
        <Link href="/" aria-label="Mirrow, inicio" className="shrink-0">
          <Wordmark
            className={`h-[19px] w-auto transition-colors duration-300 ${solido ? 'text-tinta' : 'text-white'}`}
          />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {enlaces.map((enlace) => (
            <Link
              key={enlace.href}
              href={enlace.href}
              className={`group relative py-1 text-[0.9375rem] font-semibold transition-colors ${
                solido ? 'text-tinta/75 hover:text-tinta' : 'text-white/80 hover:text-white'
              }`}
            >
              {enlace.label}
              <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-rojo-500 transition-all duration-300 ease-marca group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.tienda}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden text-[0.9375rem] font-semibold transition-colors sm:inline ${
              solido ? 'text-tinta/75 hover:text-tinta' : 'text-white/80 hover:text-white'
            }`}
          >
            Tienda online
          </a>
          <a
            href="#contacto"
            className={`hidden !py-2.5 !text-sm lg:inline-flex ${solido ? 'btn-oscuro' : 'btn-claro'}`}
          >
            Pedir lista mayorista
          </a>
          <button
            type="button"
            onClick={() => setAbierto(true)}
            aria-label="Abrir menú"
            aria-expanded={abierto}
            className={`grid h-10 w-10 place-items-center rounded-marca border transition-colors duration-300 lg:hidden ${
              solido ? 'border-black/10 text-tinta' : 'border-white/25 text-white'
            }`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {abierto && (
          <motion.div
            className="fixed inset-0 z-50 bg-white lg:hidden"
            initial={quieto ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="contenedor flex h-[72px] items-center justify-between">
              <Wordmark className="h-[19px] w-auto text-tinta" />
              <button
                type="button"
                onClick={() => setAbierto(false)}
                aria-label="Cerrar menú"
                className="grid h-10 w-10 place-items-center rounded-marca border border-black/10 text-tinta"
              >
                <Cerrar className="h-5 w-5" />
              </button>
            </div>

            <nav aria-label="Móvil" className="contenedor flex flex-col pt-6">
              {[...enlaces, { href: site.tienda, label: 'Tienda online' }].map((enlace, i) => (
                <motion.div
                  key={enlace.href}
                  initial={quieto ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.35 }}
                >
                  <Link
                    href={enlace.href}
                    onClick={() => setAbierto(false)}
                    className="block border-b border-black/10 py-5 font-display text-3xl font-extrabold tracking-tight text-tinta"
                  >
                    {enlace.label}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-8 flex flex-col gap-3">
                <a href="#contacto" onClick={() => setAbierto(false)} className="btn-oscuro w-full">
                  Pedir lista mayorista
                </a>
                <a
                  href={whatsappLink(consulta)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-contorno w-full"
                >
                  <WhatsApp className="h-5 w-5" />
                  Escribir por WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
