export interface Product {
  id: number
  name: string
  description: string
  category: string
  price: number
  originalPrice?: number
  images: string[]
  sizes: string[]
  colors: string[]
  inStock: boolean
  badge?: 'Novo' | 'Bestseller' | 'Destaque' | 'Promoção'
  rating: number
  reviews: number
  sku: string
}

export interface CartItem {
  product: Product
  quantity: number
  size: string
  color: string
}

export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  cpf?: string
  address?: Address
  createdAt: Date
}

export interface Address {
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
  zipCode: string
}

export interface Order {
  id: string
  customer: Customer
  items: CartItem[]
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  paymentMethod: string
  createdAt: Date
  updatedAt: Date
}

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  image: string
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
}
