# Template - Landing Page SaaS

## 🚀 Stack de Tecnologias

### Core
- **Next.js 14.2** - Framework React com App Router
- **React 18.3** - Biblioteca de UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utility-first

### Bibliotecas e Ferramentas
- **Framer Motion 11.11** - Animações e transições
- **Lucide React** - Ícones modernos e leves
- **Zustand 5.0** - Gerenciamento de estado global
- **Swiper 11.1** - Carrosséis e sliders responsivos
- **clsx** - Utilitário para classes condicionais

### Configurações
- **ESLint** - Linting de código
- **PostCSS** - Processamento de CSS
- **Cross-env** - Variáveis de ambiente cross-platform

## 📁 Estrutura do Projeto

```
/
├── public/               # Arquivos estáticos
│   ├── CNAME            # Configuração de domínio customizado
│   └── .nojekyll        # Desabilita Jekyll no GitHub Pages
├── src/
│   ├── app/             # App Router do Next.js
│   │   ├── layout.tsx   # Layout raiz com fontes e metadata
│   │   └── page.tsx     # Página principal
│   ├── components/
│   │   ├── layout/      # Componentes de layout
│   │   │   ├── Header.tsx    # Cabeçalho fixo com navegação
│   │   │   └── Footer.tsx    # Rodapé com links e social
│   │   ├── sections/    # Seções da landing page
│   │   │   ├── Hero.tsx           # Seção hero com CTA
│   │   │   ├── Features.tsx       # Grid de benefícios
│   │   │   ├── Testimonials.tsx   # Depoimentos de clientes
│   │   │   ├── CallToAction.tsx   # CTA final
│   │   │   └── Products.tsx       # Showcase de produtos (opcional)
│   │   ├── ui/          # Componentes de UI reutilizáveis
│   │   │   ├── Button.tsx         # Botão com variantes
│   │   │   ├── Input.tsx          # Campo de input
│   │   │   └── Animations.tsx     # Wrappers de animação
│   │   ├── cart/        # Funcionalidade de carrinho (opcional)
│   │   │   └── CartDrawer.tsx
│   │   └── FacebookPixel.tsx # Integração com Meta Pixel
│   ├── lib/
│   │   ├── utils.ts     # Funções utilitárias (cn, formatters)
│   │   ├── constants.ts # Constantes da aplicação
│   │   └── fpixel.ts    # Funções do Facebook Pixel
│   ├── store/
│   │   └── cart.ts      # Store Zustand para carrinho (opcional)
│   ├── styles/
│   │   └── globals.css  # Estilos globais e Tailwind
│   └── types/
│       └── index.ts     # Definições de tipos TypeScript
├── next.config.js       # Configuração do Next.js
├── tailwind.config.ts   # Configuração do Tailwind
├── tsconfig.json        # Configuração do TypeScript
└── package.json         # Dependências e scripts
```

## 🎨 Estrutura Visual

### Paleta de Cores (Variáveis CSS)
- **Gradientes**: Purple/Pink para destaques
- **Neutros**: Gray-50 a Gray-900
- **Acentos**: Cores primárias personalizáveis via Tailwind

### Tipografia
- **Font Display**: Playfair Display (títulos elegantes)
- **Font Sans**: Inter (corpo de texto)
- **Font Mono**: Roboto Mono (código/técnico)

### Componentes de Design

#### 1. Header
- Fixo no topo com backdrop blur
- Menu responsivo com hambúrguer mobile
- Animação de entrada suave
- Ícones de ação (busca, usuário, carrinho)

#### 2. Hero Section
- Background com gradientes animados
- Badge de destaque (prova social)
- Headline em destaque com gradiente
- Subtítulo descritivo
- Duplo CTA (primário + secundário)
- Trust indicators com métricas

#### 3. Features Section
- Grid responsivo (1/2/4 colunas)
- Cards com hover effect
- Ícones com gradientes
- Animação de entrada em scroll
- Layout modular e reutilizável

#### 4. Testimonials
- Cards de depoimento com rating
- Avatar com iniciais geradas
- Quote icon decorativo
- Hover animation (elevação)
- Grid responsivo 3 colunas

#### 5. Call to Action
- Background escuro com overlay
- Gradientes animados no fundo
- Lista de benefícios com checkmarks
- CTA proeminente
- Garantias e trust signals

#### 6. Footer
- Newsletter section
- Links organizados por categoria
- Informações de contato
- Social media links
- Copyright com link para desenvolvedor

## ⚙️ Configurações Técnicas

### Next.js Config
```javascript
{
  output: 'export',           // Exportação estática
  basePath: '',              // Sem prefixo (domínio raiz)
  assetPrefix: '',           // Assets na raiz
  reactStrictMode: true,     // Modo strict do React
  images: {
    unoptimized: true        // Necessário para export estático
  },
  experimental: {
    optimizePackageImports   // Otimização de imports
  },
  trailingSlash: true        // URLs com / no final
}
```

### Tailwind Config
- Fontes customizadas com CSS variables
- Gradientes pré-configurados
- Sombras customizadas (shadow-luxury)
- Animações personalizadas
- Container com padding responsivo

### Variáveis de Ambiente (.env.local)
```bash
NEXT_PUBLIC_APP_URL=         # URL da aplicação
NEXT_PUBLIC_APP_NAME=        # Nome da aplicação
NEXT_PUBLIC_API_URL=         # URL da API
NEXT_PUBLIC_GA_ID=           # Google Analytics ID
NEXT_PUBLIC_GTM_ID=          # Google Tag Manager ID
NEXT_PUBLIC_FB_PIXEL_ID=     # Facebook Pixel ID
```

## 🎯 Funcionalidades

### Animações (Framer Motion)
- **Fade in on scroll**: Elementos aparecem ao rolar
- **Hover effects**: Scale, elevação em hover
- **Background animations**: Gradientes rotativos
- **Stagger animations**: Entrada sequencial de elementos
- **Page transitions**: Transições suaves entre estados

### Responsividade
- **Mobile First**: Design otimizado para mobile
- **Breakpoints Tailwind**: sm, md, lg, xl, 2xl
- **Menu hamburger**: Navegação mobile com animação
- **Grid adaptativo**: Colunas ajustáveis por tamanho
- **Imagens responsivas**: Tamanhos otimizados

### Performance
- **Static Generation**: Páginas pré-renderizadas
- **Code Splitting**: Carregamento sob demanda
- **Lazy Loading**: Componentes carregados quando necessário
- **Optimized Fonts**: Fontes com display swap
- **Minification**: CSS e JS minificados

### SEO
- **Metadata completa**: Title, description, keywords
- **Open Graph**: Tags para redes sociais
- **Sitemap gerado**: Automaticamente pelo Next.js
- **Semantic HTML**: Tags semânticas corretas
- **Structured Data**: Pronto para Schema.org

## 🚢 Deploy

### GitHub Pages
1. Build estático com `npm run build`
2. Deploy da pasta `out/` para branch `gh-pages`
3. Arquivo CNAME para domínio customizado
4. `.nojekyll` para evitar processamento Jekyll

### Domínio Customizado
- Adicionar registro CNAME no DNS
- Apontar para `username.github.io`
- Arquivo CNAME na raiz do deploy

## 🔧 Como Usar este Template

### 1. Clonar e Instalar
```bash
git clone [repo]
cd [projeto]
npm install
```

### 2. Customizar Conteúdo
- **app/layout.tsx**: Metadata, título, fontes
- **sections/Hero.tsx**: Headline, subtítulo, CTAs
- **sections/Features.tsx**: Benefícios e features
- **sections/Testimonials.tsx**: Depoimentos
- **layout/Header.tsx**: Menu de navegação
- **layout/Footer.tsx**: Links e informações

### 3. Ajustar Estilos
- **globals.css**: Variáveis CSS, cores base
- **tailwind.config.ts**: Tema, cores, fontes
- Componentes: Classes Tailwind inline

### 4. Configurar
- **.env.local**: Variáveis de ambiente
- **next.config.js**: BasePath, domínio
- **public/CNAME**: Domínio customizado

### 5. Build e Deploy
```bash
npm run build      # Gera build em /out
# Deploy manual ou CI/CD para GitHub Pages
```

## 📦 Scripts Disponíveis

```bash
npm run dev        # Servidor de desenvolvimento
npm run build      # Build de produção
npm run start      # Servidor de produção
npm run lint       # Linting do código
npm run type-check # Verificação de tipos TypeScript
```

## 🎨 Padrões de Código

### Componentes
- Functional components com TypeScript
- Props tipadas com interfaces
- Export default para components de página
- Export named para componentes reutilizáveis

### Estilos
- Tailwind classes utility-first
- Função `cn()` para classes condicionais
- CSS Modules para estilos específicos quando necessário
- Variáveis CSS para temas

### State Management
- Zustand para estado global
- useState para estado local
- Context API quando necessário
- Props drilling evitado

### Performance
- Memoization com useMemo/useCallback quando necessário
- Lazy loading de componentes pesados
- Otimização de imagens
- Code splitting automático do Next.js

## 🔄 Atualizações Futuras

Este template pode ser expandido com:
- Integração com CMS (Contentful, Sanity)
- Formulários com validação (React Hook Form + Zod)
- Internacionalização (i18n)
- Blog integrado
- Dashboard de admin
- Autenticação (NextAuth.js)
- Pagamentos (Stripe)
- Analytics avançado

## 📝 Licença

Template base configurado para projetos comerciais. Ajuste conforme necessário.

---

**Desenvolvido por**: GRDCompany  
**Website**: https://grdcompany.com.br
