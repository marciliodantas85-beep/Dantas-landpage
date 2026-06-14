export type ServiceIcon =
  | 'building'
  | 'warehouse'
  | 'layers'
  | 'sun'
  | 'calculator'
  | 'drafting'
  | 'blocks'
  | 'chart'

export type DifferentialIcon =
  | 'calculator'
  | 'shield'
  | 'drafting'
  | 'factory'

export const company = {
  name: 'Dantas Engenharia e Projetos',
  tagline: 'Projetos e cálculo de estruturas metálicas',
  heroTitle: 'Engenharia estrutural que transforma ideias em projetos executáveis',
  heroSubtitle:
    'Projetos, cálculo e detalhamento de estruturas metálicas para galpões, coberturas, mezaninos e reforços destinados à instalação de sistemas fotovoltaicos.',
  heroHighlights: [
    'Dimensionamento estrutural com critérios técnicos claros',
    'Projetos executivos orientados à fabricação e montagem',
    'Análise de coberturas e reforços para energia solar',
  ],
  ctaPrimary: 'Solicitar orçamento',
  ctaSecondary: 'Conhecer soluções',
  contactPrompt:
    'Precisa calcular uma estrutura, desenvolver um projeto executivo ou verificar uma cobertura para energia solar?',
  contactCall: 'Apresente seu escopo à Dantas Engenharia e Projetos.',
  whatsapp: '[INSERIR_WHATSAPP]',
  email: '[INSERIR_EMAIL_PROFISSIONAL]',
  city: '[INSERIR_CIDADE_UF]',
}

export const navItems = [
  { label: 'Soluções', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Processo', href: '#processo' },
  { label: 'Contato', href: '#contato' },
]

export const services = [
  {
    icon: 'calculator' as const,
    title: 'Cálculo de Estruturas Metálicas',
    description:
      'Dimensionamento de elementos, ligações e sistemas estruturais com foco em segurança, desempenho, economia e viabilidade construtiva.',
  },
  {
    icon: 'building' as const,
    title: 'Projetos Estruturais Executivos',
    description:
      'Documentação técnica organizada para orçamento, fabricação, montagem e acompanhamento das decisões de engenharia.',
  },
  {
    icon: 'warehouse' as const,
    title: 'Galpões e Coberturas Metálicas',
    description:
      'Projetos para novas estruturas, ampliações e adequações de coberturas industriais, comerciais e logísticas.',
  },
  {
    icon: 'layers' as const,
    title: 'Mezaninos Metálicos',
    description:
      'Soluções para ampliação de área útil, considerando cargas de uso, estabilidade e integração com a estrutura existente.',
  },
  {
    icon: 'sun' as const,
    title: 'Estruturas para Energia Solar',
    description:
      'Verificação de coberturas, estruturas de suporte e soluções metálicas destinadas à implantação de módulos fotovoltaicos.',
  },
  {
    icon: 'chart' as const,
    title: 'Reforço Estrutural para Fotovoltaico',
    description:
      'Análise da capacidade existente e definição dos reforços necessários para receber as novas ações do sistema solar.',
  },
  {
    icon: 'drafting' as const,
    title: 'Detalhamento para Fabricação',
    description:
      'Pranchas, especificações e detalhamentos que reduzem dúvidas e apoiam a fabricação e a montagem da estrutura.',
  },
  {
    icon: 'blocks' as const,
    title: 'Modelagem e Compatibilização',
    description:
      'Modelagem técnica para comunicar a solução, antecipar interferências e integrar estrutura, arquitetura e instalações.',
  },
]

export const differentials = [
  {
    icon: 'calculator' as const,
    title: 'Visão de projetista e calculista',
    description:
      'A solução nasce do equilíbrio entre comportamento estrutural, consumo de aço, execução e objetivo do cliente.',
  },
  {
    icon: 'shield' as const,
    title: 'Segurança e rastreabilidade técnica',
    description:
      'Premissas, cargas e critérios são organizados para sustentar decisões e facilitar futuras verificações.',
  },
  {
    icon: 'drafting' as const,
    title: 'Projeto executivo claro',
    description:
      'Entregas pensadas para quem precisa orçar, fabricar, montar e acompanhar a estrutura com menos incerteza.',
  },
  {
    icon: 'factory' as const,
    title: 'Apoio à fabricação e montagem',
    description:
      'Compatibilização e suporte técnico para aproximar o cálculo da realidade produtiva e do canteiro.',
  },
]

export const processSteps = [
  'Recebimento do escopo e levantamento das informações',
  'Definição das premissas e ações de projeto',
  'Modelagem, análise e dimensionamento estrutural',
  'Detalhamento e desenvolvimento do projeto executivo',
  'Entrega técnica e suporte para dúvidas do projeto',
]

export const applications = [
  'Galpões industriais e logísticos',
  'Coberturas metálicas',
  'Mezaninos e plataformas',
  'Estruturas de suporte fotovoltaico',
  'Reforço de coberturas existentes',
  'Empresas integradoras de energia solar',
  'Construtoras e fabricantes',
  'Ampliações e adequações estruturais',
]

export const metrics = [
  { value: 'Cálculo', label: 'premissas e dimensionamento alinhados ao uso real' },
  { value: 'Projeto', label: 'documentação clara para fabricar e montar' },
  { value: 'Solar', label: 'estrutura e reforços para sistemas fotovoltaicos' },
]
