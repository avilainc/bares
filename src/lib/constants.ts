export const SITE_CONFIG = {
  name: 'Easy4me Moda',
  description:
    'Gestão que veste sua loja pra crescer de verdade. Sistema completo para lojas de moda.',
  url: 'https://easy4me.com.br',
  ogImage: 'https://easy4me.com.br/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/easy4me',
    instagram: 'https://instagram.com/easy4me',
    facebook: 'https://facebook.com/easy4me',
    linkedin: 'https://linkedin.com/company/easy4me',
  },
  contact: {
    email: 'contato@easy4me.com.br',
    phone: '(11) 99999-9999',
    whatsapp: '5511999999999',
  },
}

export const CATEGORIES = [
  { id: 1, name: 'Feminino', slug: 'feminino' },
  { id: 2, name: 'Masculino', slug: 'masculino' },
  { id: 3, name: 'Acessórios', slug: 'acessorios' },
  { id: 4, name: 'Novidades', slug: 'novidades' },
  { id: 5, name: 'Promoções', slug: 'promocoes' },
]

export const SIZES = ['PP', 'P', 'M', 'G', 'GG', 'XG']

export const COLORS = [
  { name: 'Preto', hex: '#000000' },
  { name: 'Branco', hex: '#FFFFFF' },
  { name: 'Azul', hex: '#1E40AF' },
  { name: 'Vermelho', hex: '#DC2626' },
  { name: 'Verde', hex: '#059669' },
  { name: 'Rosa', hex: '#DB2777' },
  { name: 'Bege', hex: '#D6C4A1' },
  { name: 'Cinza', hex: '#6B7280' },
]

export const PAYMENT_METHODS = [
  { id: 'credit_card', name: 'Cartão de Crédito' },
  { id: 'debit_card', name: 'Cartão de Débito' },
  { id: 'pix', name: 'PIX' },
  { id: 'boleto', name: 'Boleto Bancário' },
]

export const DELIVERY_OPTIONS = [
  {
    id: 'standard',
    name: 'Entrega Padrão',
    description: '5-7 dias úteis',
    price: 0,
  },
  {
    id: 'express',
    name: 'Entrega Expressa',
    description: '2-3 dias úteis',
    price: 15.9,
  },
  {
    id: 'same_day',
    name: 'Entrega no Mesmo Dia',
    description: 'Apenas para SP capital',
    price: 29.9,
  },
]
