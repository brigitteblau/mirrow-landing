'use client'

import { FormEvent, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Check, WhatsApp } from './icons'
import { opcionesConsulta } from '@/lib/productos'
import { whatsappLink } from '@/lib/site'

type Campos = {
  nombre: string
  telefono: string
  email: string
  negocio: string
  localidad: string
  interes: string
  mensaje: string
}

const vacio: Campos = {
  nombre: '',
  telefono: '',
  email: '',
  negocio: '',
  localidad: '',
  interes: '',
  mensaje: '',
}

/**
 * El formulario no manda mails: arma el mensaje y abre WhatsApp, que es por
 * donde el mayorista realmente contesta. `origen` permite saber desde qué
 * página llegó la consulta (home o una provincia).
 */
export default function ContactForm({ origen }: { origen?: string }) {
  const [campos, setCampos] = useState<Campos>(vacio)
  const [enviado, setEnviado] = useState(false)

  const actualizar = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setCampos((previo) => ({ ...previo, [name]: value }))
  }

  const enviar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const etiqueta =
      opcionesConsulta.find((o) => o.value === campos.interes)?.label ?? 'Consulta general'

    const lineas = [
      '*Consulta mayorista — mirrow.com*',
      '',
      `Nombre: ${campos.nombre}`,
      `Teléfono: ${campos.telefono}`,
      campos.email && `Email: ${campos.email}`,
      campos.negocio && `Negocio: ${campos.negocio}`,
      campos.localidad && `Localidad: ${campos.localidad}`,
      `Interés: ${etiqueta}`,
      origen && `Página: ${origen}`,
      campos.mensaje && '',
      campos.mensaje && campos.mensaje,
    ].filter(Boolean)

    window.open(whatsappLink(lineas.join('\n')), '_blank', 'noopener,noreferrer')

    setCampos(vacio)
    setEnviado(true)
    window.setTimeout(() => setEnviado(false), 6000)
  }

  return (
    <form onSubmit={enviar} className="rounded-marca border border-black/10 bg-white p-7 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="etiqueta-campo">
            Nombre <span className="text-rojo-500">*</span>
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            autoComplete="name"
            value={campos.nombre}
            onChange={actualizar}
            placeholder="Tu nombre"
            className="campo"
          />
        </div>

        <div>
          <label htmlFor="telefono" className="etiqueta-campo">
            Teléfono <span className="text-rojo-500">*</span>
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            autoComplete="tel"
            value={campos.telefono}
            onChange={actualizar}
            placeholder="11 2345 6789"
            className="campo"
          />
        </div>

        <div>
          <label htmlFor="email" className="etiqueta-campo">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={campos.email}
            onChange={actualizar}
            placeholder="tu@email.com"
            className="campo"
          />
        </div>

        <div>
          <label htmlFor="negocio" className="etiqueta-campo">
            Negocio
          </label>
          <input
            id="negocio"
            name="negocio"
            type="text"
            autoComplete="organization"
            value={campos.negocio}
            onChange={actualizar}
            placeholder="Nombre de tu local"
            className="campo"
          />
        </div>

        <div>
          <label htmlFor="localidad" className="etiqueta-campo">
            Localidad
          </label>
          <input
            id="localidad"
            name="localidad"
            type="text"
            value={campos.localidad}
            onChange={actualizar}
            placeholder="Ciudad y provincia"
            className="campo"
          />
        </div>

        <div>
          <label htmlFor="interes" className="etiqueta-campo">
            Qué te interesa <span className="text-rojo-500">*</span>
          </label>
          <select
            id="interes"
            name="interes"
            required
            value={campos.interes}
            onChange={actualizar}
            className="campo"
          >
            <option value="">Elegí una línea</option>
            {opcionesConsulta.map((opcion) => (
              <option key={opcion.value} value={opcion.value}>
                {opcion.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="mensaje" className="etiqueta-campo">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          value={campos.mensaje}
          onChange={actualizar}
          placeholder="Cantidades aproximadas, talles que más vendés, si ya tenés local…"
          className="campo resize-none"
        />
      </div>

      <button type="submit" className="btn-primario mt-7 w-full">
        <WhatsApp className="h-5 w-5" />
        Enviar consulta por WhatsApp
      </button>

      <AnimatePresence>
        {enviado && (
          <motion.p
            role="status"
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2.5 overflow-hidden rounded-marca bg-verde-200/45 px-4 py-3 text-sm font-semibold text-verde-800"
          >
            <Check className="h-4 w-4 shrink-0" />
            Listo, se abrió WhatsApp con tu consulta cargada. Si no se abrió, revisá el bloqueador
            de ventanas emergentes.
          </motion.p>
        )}
      </AnimatePresence>

      <p className="mt-5 text-xs leading-relaxed text-premium">
        Los campos con <span className="text-rojo-500">*</span> son obligatorios. Respondemos de
        lunes a viernes de 9 a 18.
      </p>
    </form>
  )
}
