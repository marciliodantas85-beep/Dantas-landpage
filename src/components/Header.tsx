import { MoveRight } from 'lucide-react'

import logoDantas from '../assets/logo-dantas.png'
import { company, navItems } from '../data/content'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[rgba(255,255,255,0.94)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 lg:px-10">
        <a href="#top" className="block min-w-0">
          <img
            src={logoDantas}
            alt={company.name}
            className="h-14 w-auto max-w-[220px] object-contain sm:h-16 sm:max-w-[300px]"
          />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#4b4b4b] lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-[#8d1418]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contato" className="button-primary hidden sm:inline-flex">
            {company.ctaPrimary}
            <MoveRight className="h-4 w-4" />
          </a>
          <a
            href="#servicos"
            className="hidden h-11 items-center justify-center rounded-lg border border-black/10 px-4 text-sm font-medium text-[#4b4b4b] md:inline-flex lg:hidden"
          >
            Soluções
          </a>
        </div>
      </div>
    </header>
  )
}
