import './App.css'

const navItems = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Método', href: '#metodo' },
  { label: 'Atuação', href: '#atuacao' },
  { label: 'Contato', href: '#contato' },
]

const services = [
  {
    id: '01',
    title: 'Projetos estruturais',
    description:
      'Soluções dimensionadas com foco em segurança, viabilidade e detalhamento para execução.',
  },
  {
    id: '02',
    title: 'Laudos e vistorias',
    description:
      'Análises técnicas com leitura objetiva do cenário, dos riscos e das providências recomendadas.',
  },
  {
    id: '03',
    title: 'Acompanhamento de obra',
    description:
      'Suporte técnico para alinhar o planejamento com o que acontece no canteiro, sem improviso.',
  },
  {
    id: '04',
    title: 'Consultoria técnica',
    description:
      'Orientação clara para decisões de projeto, reforma, reforço e regularização.',
  },
]

const processSteps = [
  {
    id: '01',
    title: 'Leitura do desafio',
    description:
      'Entendemos o objetivo, a etapa da obra e as restrições técnicas antes de qualquer avanço.',
  },
  {
    id: '02',
    title: 'Definição das premissas',
    description:
      'Organizamos escopo, critérios e prioridades para reduzir ruído e retrabalho nas próximas etapas.',
  },
  {
    id: '03',
    title: 'Entrega técnica',
    description:
      'Documentação, projeto ou parecer entregues com linguagem objetiva e foco em execução.',
  },
  {
    id: '04',
    title: 'Apoio ao andamento',
    description:
      'Acompanhamos ajustes e dúvidas para manter a obra alinhada ao que foi planejado.',
  },
]

const principles = [
  'Escopo enxuto, definido desde o início.',
  'Documentação organizada para consulta rápida.',
  'Comunicação direta entre engenharia e obra.',
]

const areas = [
  {
    title: 'Residencial',
    description:
      'Novas construções, reformas e ampliações com atenção à segurança e ao custo de execução.',
  },
  {
    title: 'Comercial',
    description:
      'Espaços que precisam de prazo, clareza técnica e decisões compatíveis com operação.',
  },
  {
    title: 'Corporativo e industrial',
    description:
      'Demandas que pedem leitura de risco, organização documental e controle técnico mais rigoroso.',
  },
]

function App() {
  return (
    <div className="page">
      <div className="page__noise" aria-hidden="true" />
      <div className="page__orb page__orb--left" aria-hidden="true" />
      <div className="page__orb page__orb--right" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Dantas Engenharia">
          <span className="brand__mark" aria-hidden="true">
            DE
          </span>
          <span className="brand__text">
            <strong>Dantas Engenharia</strong>
            <span>Projetos, laudos e acompanhamento técnico</span>
          </span>
        </a>

        <nav className="topnav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="content">
        <section className="hero" id="inicio">
          <div className="hero__copy">
            <p className="eyebrow">Engenharia com visão de obra</p>
            <h1>Clareza técnica para decidir, aprovar e executar com segurança.</h1>
            <p className="hero__lead">
              A Dantas Engenharia organiza o caminho entre a ideia e a entrega com
              projetos, laudos e suporte técnico pensados para reduzir improviso,
              retrabalho e ruído na obra.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="#contato">
                Solicitar diagnóstico
              </a>
              <a className="button button--secondary" href="#servicos">
                Ver soluções
              </a>
            </div>

            <ul className="hero__chips" aria-label="Pilares da proposta">
              <li>Projeto enxuto</li>
              <li>Documentação rastreável</li>
              <li>Execução previsível</li>
            </ul>
          </div>

          <aside className="hero__visual" aria-label="Painel visual da proposta">
            <div className="hero__card hero__card--main">
              <span className="hero__cardLabel">Diagnóstico técnico</span>
              <strong>Do escopo ao canteiro, tudo com direção clara.</strong>
              <p>
                Leitura técnica, compatibilização e entrega organizada para orientar
                a próxima decisão.
              </p>
            </div>

            <div className="hero__stats">
              <article>
                <span>Foco</span>
                <strong>Segurança</strong>
              </article>
              <article>
                <span>Entrega</span>
                <strong>Clareza</strong>
              </article>
              <article>
                <span>Obra</span>
                <strong>Previsibilidade</strong>
              </article>
            </div>

            <div className="hero__matrix">
              <div className="hero__tile">
                <span>01</span>
                <strong>Levantamento</strong>
              </div>
              <div className="hero__tile">
                <span>02</span>
                <strong>Projeto</strong>
              </div>
              <div className="hero__tile">
                <span>03</span>
                <strong>Obra</strong>
              </div>
              <div className="hero__tile">
                <span>04</span>
                <strong>Entrega</strong>
              </div>
            </div>
          </aside>
        </section>

        <section className="section" id="servicos">
          <div className="section__head">
            <p className="eyebrow">Serviços</p>
            <h2>Soluções que cobrem o ciclo inteiro da obra.</h2>
            <p>
              Da análise inicial à execução, cada entrega é pensada para esclarecer
              riscos, organizar decisões e apoiar a obra com objetividade.
            </p>
          </div>

          <div className="grid grid--services">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-card__index">{service.id}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--split" id="metodo">
          <div className="section__panel section__panel--dark">
            <p className="eyebrow eyebrow--light">Método</p>
            <h2>Processo enxuto, comunicação clara e documentação que acompanha a obra.</h2>
            <p>
              Trabalhamos para transformar o briefing em decisões técnicas, com cada
              etapa alinhada antes de seguir para a próxima.
            </p>

            <ul className="process">
              {processSteps.map((step) => (
                <li className="process__item" key={step.title}>
                  <span className="process__step">{step.id}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="section__panel section__panel--light">
            <p className="eyebrow">Diferenciais</p>
            <h2>Uma engenharia que fala a linguagem da obra.</h2>

            <ul className="benefits">
              {principles.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>

            <div className="badge-grid">
              <article className="badge-card">
                <span>Escopo</span>
                <strong>Definido desde o início</strong>
              </article>
              <article className="badge-card">
                <span>Prazo</span>
                <strong>Planejado com critério</strong>
              </article>
              <article className="badge-card">
                <span>Qualidade</span>
                <strong>Leitura técnica consistente</strong>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="atuacao">
          <div className="section__head">
            <p className="eyebrow">Atuação</p>
            <h2>Aplicação em diferentes tipos de demanda.</h2>
            <p>
              Uma base técnica adaptável a obras novas, reformas, ampliações e
              demandas de regularização.
            </p>
          </div>

          <div className="grid grid--areas">
            {areas.map((area) => (
              <article className="area-card" key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta" id="contato">
          <div className="cta__content">
            <p className="eyebrow eyebrow--light">Próximo passo</p>
            <h2>Quer organizar o briefing e avançar com menos improviso?</h2>
            <p>
              Separe tipo de obra, etapa atual, prazo desejado e o material disponível.
              Com isso, a conversa já começa mais objetiva.
            </p>
          </div>

          <div className="cta__panel">
            <ul>
              <li>Tipo de obra ou demanda</li>
              <li>Fase atual do projeto</li>
              <li>Prazo ou urgência percebida</li>
              <li>Plantas, fotos ou referências</li>
            </ul>

            <a className="button button--primary" href="#inicio">
              Voltar ao topo
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>Dantas Engenharia</span>
        <span>Engenharia com precisão, previsibilidade e linguagem simples.</span>
      </footer>
    </div>
  )
}

export default App
