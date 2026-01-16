import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Products from '@/components/sections/Products'
import Testimonials from '@/components/sections/Testimonials'
import CallToAction from '@/components/sections/CallToAction'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  )
}
