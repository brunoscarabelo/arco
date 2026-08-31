# Instância — site

Landing page de aquisição de clientes para escritórios de advocacia
previdenciária. Next.js (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em http://localhost:3000.

Outros scripts: `npm run build` (build de produção), `npm start` (serve o build),
`npm run lint`.

## Estrutura

```
app/
  layout.tsx      fontes (next/font), metadata, tema dark
  page.tsx        a página inteira — todas as seções
  globals.css     tokens do tema e paleta da marca
  icon.svg        favicon
  robots.ts       robots.txt gerado
  sitemap.ts      sitemap.xml gerado
components/
  ui/             componentes shadcn e blocos
    hero-section-1.tsx   header + hero
    velaris.tsx          seção de contato (gradiente WebGL)
    button.tsx, animated-group.tsx, text-effect.tsx
  sections/
    site-footer.tsx
lib/
  utils.ts        cn()
  site.ts         URL canônica
legacy/           versão estática anterior (não entra no build)
```

## Deploy na Vercel

O projeto é um app Next.js padrão — a Vercel detecta tudo sozinha, sem
`vercel.json`.

**Pelo dashboard:** suba o repositório para o GitHub, entre em
[vercel.com/new](https://vercel.com/new), importe o repositório e clique em
Deploy. Framework, comando de build e diretório de saída vêm preenchidos.

**Pela CLI:**

```bash
npx vercel        # preview
npx vercel --prod # produção
```

### Variáveis de ambiente

Nenhuma é obrigatória. Sem configurar nada, a URL canônica (metadata, canonical,
Open Graph, `sitemap.xml`, `robots.txt`) vem de `VERCEL_PROJECT_PRODUCTION_URL`,
que a Vercel injeta automaticamente.

Ao ligar um domínio próprio, defina no painel do projeto:

```
NEXT_PUBLIC_SITE_URL=https://seudominio.com.br
```

Ela tem precedência sobre a URL da Vercel. Veja `.env.example`.

## Pendências

- **A página não capta lead.** A seção `#contato` é hoje apenas visual — o
  formulário foi removido. Todos os CTAs apontam para ela. Falta um canal de
  contato (WhatsApp, e-mail ou um formulário com Server Action).
