'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { WhatsApp } from './icons'
import { whatsappLink } from '@/lib/site'

const mensaje = 'Hola Mirrow, vengo de la web y quiero consultar por venta mayorista.'

/**
 * Acceso flotante a WhatsApp. Aparece recién pasado el hero para no competir
 * con el CTA principal, y se esconde cuando el formulario está en pantalla.
 */
export default function BotonWhatsApp() {
  const [visible, setVisible] = useState(false)
  const quieto = useReducedMotion()

  useEffect(() => {
    const formulario = document.getElementById('contacto')

    const alScrollear = () => {
      const pasoElHero = window.scrollY > window.innerHeight * 0.7
      const enFormulario = formulario
        ? formulario.getBoundingClientRect().top < window.innerHeight * 0.9
        : false
      setVisible(pasoElHero && !enFormulario)
    }

    alScrollear()
    window.addEventListener('scroll', alScrollear, { passive: true })
    return () => window.removeEventListener('scroll', alScrollear)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappLink(mensaje)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Consultar por WhatsApp"
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-tinta py-3.5 pl-4 pr-5 text-white shadow-lg shadow-black/15 transition-colors hover:bg-carbon"
          initial={quieto ? false : { opacity: 0, y: 16, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.94 }}
          transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <WhatsApp className="h-5 w-5" />
          <span className="hidden text-sm font-bold sm:inline">Consultar</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
