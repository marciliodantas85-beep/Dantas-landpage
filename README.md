# Dantas Engenharia e Projetos

Landing page institucional criada com React, TypeScript, Vite, Tailwind CSS, Motion e Lucide React.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Lucide React

## Como instalar

```bash
npm install
```

## Como executar em desenvolvimento

```bash
npm run dev
```

Se quiser expor em rede local:

```bash
npm run dev -- --host
```

## Como gerar build

```bash
npm run build
```

## Onde editar o conteudo

Os textos comerciais e placeholders principais estão em:

- `src/data/content.ts`

## Estrutura principal

```text
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Differentials.tsx
│   ├── WorkProcess.tsx
│   ├── Experience.tsx
│   ├── ContactCTA.tsx
│   └── Footer.tsx
├── data/
│   └── content.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Personalização rápida

- Troque WhatsApp, e-mail e cidade em `src/data/content.ts`.
- Ajuste textos comerciais, serviços e diferenciais no mesmo arquivo.
- Revise as cores em `src/index.css`.
- Substitua a marca textual por logo quando o arquivo oficial estiver disponível.
- Configure o domínio e o deploy depois da validação final do layout.
