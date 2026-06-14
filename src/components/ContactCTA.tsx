import { ArrowRight, Mail, MapPin, MessageCircleMore } from 'lucide-react'

import { company } from '../data/content'

export function ContactCTA() {
  const whatsappHref = company.whatsapp.startsWith('[')
    ? '#'
    : `https://wa.me/${company.whatsapp}`
  const mailHref = company.email.startsWith('[') ? '#' : `mailto:${company.email}`

  return (
    <section id="contato" className="section-shell pt-0">
      <div className="relative overflow-hidden rounded-[28px] bg-[#292929] px-6 py-10 text-white lg:px-10 lg:py-12">
        <div className="absolute inset-x-0 top-0 grid h-1 grid-cols-[1fr_1.4fr_1fr]">
          <span className="bg-[#8d1418]" />
          <span className="bg-[#c69a3a]" />
          <span className="bg-[#c0c0c0]" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div>
            <span className="eyebrow">Contato</span>
            <h2 className="mt-4 max-w-3xl font-heading text-4xl font-semibold leading-tight">
              {company.contactPrompt}
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#d7d7d7]">{company.contactCall}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappHref} className="button-primary">
                Solicitar proposta
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={mailHref} className="button-secondary-dark">
                Enviar mensagem
              </a>
            </div>
          </div>

          <div className="grid gap-4 rounded-[24px] border border-white/12 bg-white/6 p-6">
            <div className="contact-item">
              <MessageCircleMore className="h-5 w-5 text-[#d8b45f]" />
              <div>
                <p className="contact-label">WhatsApp</p>
                <p className="contact-value">{company.whatsapp}</p>
              </div>
            </div>
            <div className="contact-item">
              <Mail className="h-5 w-5 text-[#d8b45f]" />
              <div>
                <p className="contact-label">E-mail</p>
                <p className="contact-value">{company.email}</p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin className="h-5 w-5 text-[#d8b45f]" />
              <div>
                <p className="contact-label">Cidade / UF</p>
                <p className="contact-value">{company.city}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
