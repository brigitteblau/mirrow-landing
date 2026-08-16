import ContactForm from '../ContactForm'
import { Swoosh } from '../Logo'
import { Instagram, Pin, WhatsApp } from '../icons'
import { Reveal } from '../motion/primitives'
import { site, whatsappLink } from '@/lib/site'

export default function Contacto({
  titulo = 'Pedí la lista mayorista',
  bajada = 'Contanos qué vendés y te pasamos catálogo con precios, mínimos y condiciones. Sin compromiso.',
  origen,
}: {
  titulo?: string
  bajada?: string
  origen?: string
}) {
  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden bg-tinta py-20 text-white sm:py-28"
    >
      <div className="trama-diagonal-clara absolute inset-0" aria-hidden="true" />
      <Swoosh
        className="pointer-events-none absolute -bottom-16 -left-24 w-[34rem] text-rojo-500/[0.07]"
        aria-hidden="true"
      />

      <div className="contenedor relative grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
        <div>
          <Reveal as="p" className="rotulo mb-5 text-white/50" distancia={12}>
            06 / Contacto
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-titulo uppercase">{titulo}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-lead text-white/65">{bajada}</p>
          </Reveal>

          <Reveal delay={0.15} className="mt-11 space-y-6 border-t border-white/15 pt-9">
            <a
              href={whatsappLink('Hola Mirrow, quiero pedir la lista mayorista.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3.5"
            >
              <WhatsApp className="mt-0.5 h-5 w-5 shrink-0 text-rojo-500" />
              <span>
                <span className="block text-[0.6875rem] font-bold uppercase tracking-wider text-white/45">
                  WhatsApp
                </span>
                <span className="text-[0.9375rem] font-semibold group-hover:underline">
                  Escribinos directo
                </span>
              </span>
            </a>

            <a href={`mailto:${site.email}`} className="group flex items-start gap-3.5">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center text-rojo-500">@</span>
              <span>
                <span className="block text-[0.6875rem] font-bold uppercase tracking-wider text-white/45">
                  Email
                </span>
                <span className="text-[0.9375rem] font-semibold group-hover:underline">
                  {site.email}
                </span>
              </span>
            </a>

            <div className="flex items-start gap-3.5">
              <Pin className="mt-0.5 h-5 w-5 shrink-0 text-rojo-500" />
              <span>
                <span className="block text-[0.6875rem] font-bold uppercase tracking-wider text-white/45">
                  Showrooms
                </span>
                {site.locales.map((local) => (
                  <span key={local.nombre} className="block text-[0.9375rem] text-white/75">
                    {local.direccion}
                  </span>
                ))}
              </span>
            </div>

            <a
              href={site.socials[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3.5"
            >
              <Instagram className="mt-0.5 h-5 w-5 shrink-0 text-rojo-500" />
              <span>
                <span className="block text-[0.6875rem] font-bold uppercase tracking-wider text-white/45">
                  Instagram
                </span>
                <span className="text-[0.9375rem] font-semibold group-hover:underline">
                  @mirrow.oficial
                </span>
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal direccion="izquierda" delay={0.1} className="text-tinta">
          <ContactForm origen={origen} />
        </Reveal>
      </div>
    </section>
  )
}
