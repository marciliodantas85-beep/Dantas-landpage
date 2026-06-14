import { motion } from 'motion/react'

import technicalImage from '../assets/orcamento-propostas.png'
import { applications } from '../data/content'

export function Experience() {
  return (
    <section className="section-shell pt-0">
      <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-[#f1f1f1]">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
          <img
            src={technicalImage}
            alt="Representação visual de projeto, orçamento e modelagem estrutural"
            className="h-full min-h-[320px] w-full object-cover"
          />

          <div className="px-6 py-8 lg:px-10 lg:py-10">
            <div className="max-w-2xl">
              <span className="eyebrow">Onde atuamos</span>
              <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-[#292929]">
                Estruturas metálicas para aplicações industriais, comerciais e solares
              </h2>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
              Cada solução parte do uso previsto, das cargas, da geometria e
              das condições de fabricação e montagem.
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {applications.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="rounded-xl border border-white bg-white/90 px-4 py-4 text-sm font-medium leading-6 text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
