import logoDantas from '../assets/logo-dantas.png'
import { company, navItems } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#292929] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div className="max-w-xl">
          <div className="inline-flex rounded-lg bg-white p-2">
            <img src={logoDantas} alt={company.name} className="h-14 w-auto" />
          </div>
          <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[#c0c0c0]">
            {company.tagline}
          </p>
          <p className="mt-4 text-sm leading-7 text-[#c0c0c0]">
            Informações comerciais sujeitas à validação técnica conforme o escopo do projeto.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#c0c0c0]">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
