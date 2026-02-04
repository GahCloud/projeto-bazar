# Mãos de Fé — MVP de loja online (Next.js 14)

Artesanato sob encomenda focado em simplicidade: sem banco de dados, dados estáticos, CTA direto para WhatsApp e deploy pronto para um único container.

## Requisitos
- Node.js 20
- Docker + Docker Compose

## Como rodar (docker)
1. Copie o arquivo de ambiente: `cp .env.example .env`
2. Edite `.env` e defina `WHATSAPP_NUMBER` no formato `55DD9XXXXXXXX`.
3. Suba o container de desenvolvimento: `docker compose up --build`
4. Acesse http://localhost:3000

## Como rodar localmente (sem docker)
1. `cp .env.example .env`
2. `npm install`
3. `npm run dev`
4. http://localhost:3000

## Estrutura
- `src/app` — Páginas (App Router). Sem server actions.
- `src/components` — Componentes UI reutilizáveis.
- `src/data/products.ts` — Lista estática de produtos (slug, title, description?, image).
- `src/lib/whatsapp.ts` — Helper para gerar links `https://wa.me/<numero>?text=<mensagem>` com `encodeURIComponent`.
- `public/portfolio/` — Imagens exibidas no portfólio.

## Editar produtos
1. Abra `src/data/products.ts`.
2. Ajuste/adicione itens no array `products` com `slug`, `title`, `description?`, `image`.
3. Use `image` apontando para um arquivo em `public/portfolio/` (ex.: `/portfolio/nome.svg`).

## Trocar imagens
1. Coloque seus arquivos em `public/portfolio/` (pode ser .jpg, .png ou .svg).
2. Atualize o campo `image` dos produtos para o novo caminho (ex.: `/portfolio/nova-foto.jpg`).
3. Rebuild se estiver em produção; em dev o hot reload atualiza sozinho.

## Páginas
- `/` Home: hero, destaque de produtos, CTA WhatsApp fixo.
- `/portfolio`: grid completo, cada card leva ao detalhe.
- `/portfolio/[slug]`: imagem grande, descrição e CTA "Encomendar pelo WhatsApp" com mensagem dinâmica contendo título e slug.
- `/como-comprar`: passo a passo simples (escolha, WhatsApp, combine, pague o sinal via PIX).

## WhatsApp
- Variável: `WHATSAPP_NUMBER` (formato `55DD9XXXXXXXX`).
- Link gerado pelo helper `src/lib/whatsapp.ts` com `encodeURIComponent`.
- Mensagem padrão do produto: `"Olá! Tenho interesse na peça <title> (slug: <slug>) da loja Mãos de Fé. Gostaria de fazer a encomenda e pagar o sinal via PIX. Pode me enviar a chave, por favor?"`

## Docker
- `Dockerfile` multi-stage (dev, builder, runner) para uma única imagem.
- `docker-compose.yml` sobe apenas `web` na porta 3000 com hot reload (`npm run dev`).
- Produção: `docker build -t maos-de-fe .` e `docker run -p 3000:3000 --env-file .env maos-de-fe` (usa stage `runner`).

## Scripts úteis
- `npm run dev` — modo desenvolvimento.
- `npm run build` — build de produção.
- `npm run start` — servir build de produção.
- `npm run lint` — lint do Next.

## Notas de arquitetura
- Sem banco de dados, NextAuth, Prisma ou server actions.
- Dados estáticos carregados em build-time para máxima simplicidade e custo mínimo.
- Compatível com deploy em EC2 ou container único.
