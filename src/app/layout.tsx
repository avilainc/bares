import type { Metadata } from 'next'
import { Inter, Playfair_Display, Roboto_Mono } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const robotoMono = Roboto_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Easy4me Moda | Gestão que veste sua loja pra crescer de verdade',
  description: 'Controle estoque, vendas, notas e financeiro sem ficar preso no papel ou Excel. Sistema especializado para moda varejista.',
  keywords: ['gestão moda', 'sistema loja roupas', 'controle estoque', 'PDV moda', 'NFC-e', 'Easy4me'],
  authors: [{ name: 'GRD Company' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://easy4me.com.br',
    siteName: 'Easy4me Moda',
    title: 'Easy4me Moda | Sistema de Gestão para Lojas de Roupas',
    description: 'Sistema completo de gestão para lojas de moda. Controle estoque, vendas e financeiro em um só lugar.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Easy4me Moda',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Easy4me Moda | Gestão para Lojas de Roupas',
    description: 'Sistema completo de gestão para lojas de moda.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} ${robotoMono.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
