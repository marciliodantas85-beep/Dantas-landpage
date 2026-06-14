import { motion } from 'motion/react'
import { Calculator, DraftingCompass, Factory, ShieldCheck } from 'lucide-react'

import { differentials, type DifferentialIcon } from '../data/content'

const iconMap: Record<DifferentialIcon, typeof Calculator> = {
  calculator: Calculator,
  shield: ShieldCheck,
  drafting: DraftingCompass,
  factory: Factory,
}

export function Differentials() {
  return (
    <section id="diferenciais" className="section-shell pt-0">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="rounded-[28px] bg-[#292929] p-8 text-white shadow-[0_24px_80px_rgba(2,12,27,0.24)]">
          <span className="eyebrow">Diferenciais</span>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight">
            Engenharia orientada ao cálculo, à execução e ao resultado do projeto
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#cfcfcf]">
            A Dantas Engenharia e Projetos aproxima análise estrutural,
            detalhamento e realidade de fabricação para entregar soluções
            tecnicamente sólidas e bem comunicadas.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {differentials.map((item, index) => {
            const Icon = iconMap[item.icon]

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="inline-flex rounded-xl bg-[#fff7df] p-3 text-[#9b741d]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-[#292929]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
