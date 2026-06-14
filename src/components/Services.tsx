import { motion } from 'motion/react'
import {
  Blocks,
  Building2,
  Calculator,
  ChartNoAxesCombined,
  DraftingCompass,
  Layers3,
  SunMedium,
  Warehouse,
} from 'lucide-react'

import { services, type ServiceIcon } from '../data/content'

const iconMap: Record<ServiceIcon, typeof Building2> = {
  building: Building2,
  warehouse: Warehouse,
  layers: Layers3,
  sun: SunMedium,
  calculator: Calculator,
  drafting: DraftingCompass,
  blocks: Blocks,
  chart: ChartNoAxesCombined,
}

export function Services() {
  return (
    <section id="servicos" className="section-shell">
      <div className="section-header">
        <span className="eyebrow">Soluções de engenharia</span>
        <h2 className="section-title">
          Projeto e cálculo estrutural para transformar o escopo em uma solução executável
        </h2>
        <p className="section-copy">
          Serviços concentrados no desenvolvimento de estruturas metálicas,
          documentação executiva e soluções estruturais para energia solar.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon]

          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#f3f1ec] text-[#8d1418]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-[#292929]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.description}
              </p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
