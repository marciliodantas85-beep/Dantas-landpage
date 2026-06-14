import { motion } from 'motion/react'
import {
  ArrowDownRight,
  Calculator,
  CircleCheckBig,
  DraftingCompass,
  SunMedium,
} from 'lucide-react'

import heroImage from '../assets/estrutura-metalica-tecnica.png'
import { company, metrics } from '../data/content'

const technicalCards = [
  {
    icon: Calculator,
    title: 'Cálculo estrutural',
    text: 'Dimensionamento orientado por segurança, eficiência e viabilidade construtiva.',
  },
  {
    icon: DraftingCompass,
    title: 'Projeto executivo',
    text: 'Documentação clara para orçamento, fabricação e montagem da estrutura.',
  },
  {
    icon: SunMedium,
    title: 'Engenharia para energia solar',
    text: 'Verificação de coberturas, suportes metálicos e soluções de reforço.',
  },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <img
        src={heroImage}
        alt="Projeto técnico de um galpão em estrutura metálica"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,20,20,0.98)_0%,rgba(31,31,31,0.92)_44%,rgba(32,32,32,0.48)_76%,rgba(32,32,32,0.3)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,20,20,0.18)_0%,rgba(24,24,24,0.76)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-[linear-gradient(90deg,#8d1418_0%,#c69a3a_42%,#c0c0c0_100%)]" />

      <div className="relative mx-auto grid w-full min-w-0 max-w-7xl gap-14 px-6 py-18 lg:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)] lg:px-10 lg:py-24">
        <motion.div
          initial={false}
          className="w-[calc(100vw_-_3rem)] min-w-0 max-w-[calc(100vw_-_3rem)] overflow-hidden sm:w-full sm:max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#c69a3a]/40 bg-black/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#f3d998]">
            Projetista e calculista estrutural
          </span>

          <h1 className="mt-7 w-full max-w-full font-heading text-4xl font-semibold leading-[1.08] text-white sm:text-5xl md:text-6xl">
            {company.heroTitle}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#e2e2e2]">
            {company.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 text-sm sm:flex-row">
            <a href="#contato" className="button-primary">
              {company.ctaPrimary}
              <ArrowDownRight className="h-4 w-4" />
            </a>
            <a href="#servicos" className="button-secondary">
              {company.ctaSecondary}
            </a>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {company.heroHighlights.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/12 bg-black/35 px-4 py-4 text-sm leading-6 text-[#e4e4e4] shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-sm"
              >
                <CircleCheckBig className="mb-3 h-5 w-5 text-[#d5ad54]" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial={false} className="hidden min-w-0 gap-5 lg:grid">
          <div className="overflow-hidden rounded-[28px] border border-white/15 bg-black/38 p-5 shadow-[0_22px_80px_rgba(0,0,0,0.28)] backdrop-blur-md">
            <div className="grid gap-4">
              {technicalCards.map((card) => {
                const Icon = card.icon

                return (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-white/10 bg-[#242424]/78 p-5"
                  >
                    <div className="mb-4 inline-flex rounded-xl bg-[#c69a3a]/12 p-3 text-[#e5c36e]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="font-heading text-xl font-semibold text-white">
                      {card.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[#cfcfcf]">
                      {card.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((item) => (
              <div
                key={item.value}
                className="rounded-2xl border border-white/12 bg-black/35 px-4 py-5 backdrop-blur-sm"
              >
                <p className="font-heading text-2xl font-semibold text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#d3d3d3]">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
