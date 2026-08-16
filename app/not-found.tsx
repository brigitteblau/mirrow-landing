import Link from 'next/link'
import { Flecha } from '@/components/icons'
import { categorias } from '@/lib/productos'

export const metadata = {
  title: 'Página no encontrada',
  robots: { index: false, follow: true },
}

export default function NoEncontrada() {
  return (
    <section className="relative overflow-hidden bg-tinta text-white">

      <div className="contenedor relative flex min-h-[70vh] flex-col justify-center py-24">
        <p className="rotulo mb-6 text-white/50">Error 404</p>
        <h1 className="max-w-[16ch] text-display uppercase">Esta página no existe</h1>
        <p className="mt-7 max-w-md text-lead text-white/65">
          Puede que hayamos movido el contenido o que el link esté mal escrito. Estos son los
          accesos que sí funcionan.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn-primario">
            Volver al inicio
            <Flecha className="h-[18px] w-[18px]" />
          </Link>
          <Link href="/#contacto" className="btn-claro">
            Contactar a un asesor
          </Link>
        </div>

        <ul className="mt-14 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-8">
          {categorias.map((categoria) => (
            <li key={categoria.slug}>
              <Link
                href="/#productos"
                className="text-sm text-white/55 transition-colors hover:text-white"
              >
                {categoria.nombre}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
