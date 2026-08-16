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
  const [scrolleado, setScrolleado] = useState(false)
  const quieto = useReducedMotion()

  useEffect(() => {
    const alScrollear = () => setScrolleado(window.scrollY > 12)
    alScrollear()
    window.addEventListener('scroll', alScrollear, { passive: true })
    return () => window.removeEventListener('scroll', alScrollear)
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
      className={`sticky top-0 z-50 border-b border-black/10 bg-white transition-shadow duration-300 ease-marca ${
        scrolleado ? 'shadow-[0_1px_0_rgba(0,0,0,0.06),0_8px_24px_-16px_rgba(0,0,0,0.25)]' : ''
      }`}
    >
      {/* Barra institucional: horarios y dirección arriba de todo, como en
          cualquier proveedor que atiende por mostrador hace décadas. */}
      <div className="hidden border-b border-black/10 bg-elegancia lg:block">
        <div className="contenedor flex h-9 items-center justify-between text-xs text-premium">
          <p>Atención mayorista: lunes a viernes de 9 a 18 · Once, CABA</p>
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-tinta">
            {site.email}
          </a>
        </div>
      </div>

      <div className="contenedor flex h-[72px] items-center justify-between gap-6">
        <Link href="/" aria-label="Mirrow, inicio" className="flex shrink-0 items-center gap-3">
          <Wordmark className="h-[18px] w-auto text-tinta" />
          <span className="hidden border-l border-black/15 pl-3 text-[0.625rem] font-bold uppercase leading-tight tracking-[0.12em] text-premium sm:block">
            Desde
            <br />
            {site.foundingYear}
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {enlaces.map((enlace) => (
            <Link
              key={enlace.href}
              href={enlace.href}
              className="group relative py-1 text-[0.9375rem] font-semibold text-tinta/75 transition-colors hover:text-tinta"
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
            className="hidden text-[0.9375rem] font-semibold text-tinta/75 transition-colors hover:text-tinta sm:inline"
          >
            Tienda online
          </a>
          <a href="#contacto" className="btn-primario hidden !py-2.5 lg:inline-flex">
            Pedir lista mayorista
          </a>
          <button
            type="button"
            onClick={() => setAbierto(true)}
            aria-label="Abrir menú"
            aria-expanded={abierto}
            className="grid h-10 w-10 place-items-center rounded-marca border border-black/10 text-tinta lg:hidden"
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
                    className="block border-b border-black/10 py-4 font-display text-xl font-extrabold uppercase tracking-tight text-tinta"
                  >
                    {enlace.label}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-8 flex flex-col gap-3">
                <a href="#contacto" onClick={() => setAbierto(false)} className="btn-primario w-full">
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
