import { motion } from 'motion/react'

import { processSteps } from '../data/content'

export function WorkProcess() {
  return (
    <section id="processo" className="section-shell pt-0">
      <div className="section-header">
        <span className="eyebrow">Processo</span>
        <h2 className="section-title">Do escopo ao projeto executivo</h2>
        <p className="section-copy">
          Um fluxo objetivo para transformar requisitos, cargas e condicionantes em documentação
          clara para orçamento, fabricação e montagem.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-5">
        {processSteps.map((step, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="relative rounded-lg border border-[#d5d5d5] bg-[#f5f5f5] p-6"
          >
            <span className="font-heading text-sm font-semibold uppercase tracking-[0.24em] text-[#8d1418]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="mt-4 text-base font-medium leading-7 text-[#292929]">{step}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
