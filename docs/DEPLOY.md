# 🚀 Deploy Guide - Easy4me Moda

## Opções de Deploy

### 1. GitHub Pages ⭐

Hospedagem gratuita do GitHub para sites estáticos.

#### Configuração Automática

O projeto já está configurado para deploy automático no GitHub Pages. Cada push para a branch `main` fará o deploy automaticamente.

**URL do site**: https://avilainc.github.io/moda

#### Ativando o GitHub Pages (Primeira vez)

1. Acesse: https://github.com/avilainc/moda/settings/pages
2. Em **Source**, selecione: **GitHub Actions**
3. Salve as configurações

O deploy será feito automaticamente após o próximo push!

#### Verificar Deploy

- Acompanhe o progresso em: https://github.com/avilainc/moda/actions
- Veja o site publicado em: https://avilainc.github.io/moda

#### Configurações Aplicadas

- ✅ Exportação estática habilitada (`output: 'export'`)
- ✅ Base path configurado (`/moda`)
- ✅ Imagens otimizadas para build estático
- ✅ Workflow GitHub Actions configurado
- ✅ Arquivo `.nojekyll` para evitar processamento Jekyll

#### Deploy Manual

Se precisar fazer deploy manual:

```bash
# Build do projeto
npm run build

# O conteúdo estará na pasta 'out/'
# Faça upload manual da pasta 'out' para GitHub Pages
```

---

### 2. Vercel (Alternativa Recomendada)

A maneira mais fácil de fazer deploy de aplicações Next.js.

#### Deploy via GitHub

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Importe o repositório `avilainc/moda`
5. Mantenha as configurações padrão
6. Clique em "Deploy"

✅ **Pronto!** Sua aplicação estará no ar em segundos.

#### Deploy via CLI

```bash
# Instale Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy para produção
vercel --prod
```

**Variáveis de Ambiente** (se necessário):
- Configure em: Project Settings → Environment Variables
- Adicione as variáveis do arquivo `.env.example`

---

### 3. Netlify

Deploy fácil com integração GitHub.

#### Via GitHub

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "Add new site" → "Import an existing project"
3. Conecte com GitHub e selecione `avilainc/moda`
4. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Clique em "Deploy site"

#### Via CLI

```bash
# Instale Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Build
npm run build

# Deploy
netlify deploy --prod
```

---

### 3. GitHub Pages (Estático)

Para hospedar como site estático:

```bash
# 1. Adicione ao next.config.js:
output: 'export',
images: {
  unoptimized: true,
}

# 2. Build
npm run build

# 3. O output estará em 'out/'
# 4. Faça deploy para gh-pages
npm i -g gh-pages
gh-pages -d out
```

---

### 4. Docker

Para deploy em qualquer lugar com Docker.

#### Dockerfile já criado:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### Build e Run:

```bash
# Build
docker build -t easy4me-moda .

# Run
docker run -p 3000:3000 easy4me-moda
```

---

### 5. AWS (Amplify)

Deploy direto na AWS:

```bash
# Install Amplify CLI
npm i -g @aws-amplify/cli

# Configure
amplify configure

# Initialize
amplify init

# Add hosting
amplify add hosting

# Publish
amplify publish
```

---

### 6. Railway

Deploy rápido com Railway:

1. Acesse [railway.app](https://railway.app)
2. Clique em "New Project" → "Deploy from GitHub repo"
3. Selecione `avilainc/moda`
4. Railway detecta automaticamente Next.js
5. Deploy automático!

---

## Configurações Importantes

### Variáveis de Ambiente

Crie arquivo `.env.local` em produção:

```env
NEXT_PUBLIC_APP_URL=https://seudominio.com
NEXT_PUBLIC_GA_ID=seu-google-analytics-id
# Adicione outras variáveis necessárias
```

### Domínio Customizado

#### Vercel:
1. Project Settings → Domains
2. Adicione seu domínio
3. Configure DNS conforme instruções

#### Netlify:
1. Site Settings → Domain Management
2. Add custom domain
3. Configure DNS

### SSL/HTTPS

✅ Todos os provedores acima fornecem SSL grátis automaticamente!

---

## Checklist Pré-Deploy

Antes de fazer deploy, certifique-se:

- [ ] `npm run build` funciona localmente sem erros
- [ ] `npm run start` funciona após build
- [ ] Todas as variáveis de ambiente configuradas
- [ ] Imagens otimizadas
- [ ] Links testados
- [ ] Formulários funcionando
- [ ] Performance testada (Lighthouse > 90)
- [ ] Mobile responsivo testado
- [ ] SEO configurado

---

## Pós-Deploy

Após deploy bem-sucedido:

1. **Teste completo** em produção
2. **Configure Analytics**:
   - Google Analytics
   - Vercel Analytics (se Vercel)
3. **Configure Monitoring**:
   - Sentry para errors
   - LogRocket para sessions
4. **Submit Sitemap** ao Google Search Console
5. **Configure backup** automático

---

## Troubleshooting

### Erro de Build

```bash
# Limpe cache e reinstale
rm -rf .next node_modules
npm install --legacy-peer-deps
npm run build
```

### Erro 404 em produção

Verifique se o `next.config.js` está correto:
```js
module.exports = {
  reactStrictMode: true,
  // Não use 'output: export' para SSR
}
```

### Imagens não carregam

Use Next Image corretamente:
```tsx
import Image from 'next/image'

<Image
  src="/imagem.jpg"
  alt="Descrição"
  width={800}
  height={600}
/>
```

---

## URLs Úteis

- **Repositório**: https://github.com/avilainc/moda
- **Documentação Next.js**: https://nextjs.org/docs/deployment
- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com

---

## Suporte

Precisa de ajuda? Entre em contato:
- 📧 Email: contato@grdcompany.com
- 💬 Issues: https://github.com/avilainc/moda/issues

---

**Boa sorte com seu deploy! 🚀**
