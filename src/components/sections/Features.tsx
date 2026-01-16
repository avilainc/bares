'use client'

import { motion } from 'framer-motion'
import {
  Package,
  CreditCard,
  TrendingUp,
  FileText,
  Users,
  Zap,
  Shield,
  Clock,
} from 'lucide-react'

const Features: React.FC = () => {
  const features = [
    {
      icon: Package,
      title: 'Gestão de Estoque Inteligente',
      description:
        'Controle tamanhos, cores e variações com facilidade. Alertas automáticos de reposição.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: CreditCard,
      title: 'PDV Integrado',
      description:
        'Frente de caixa rápida e intuitiva. Múltiplas formas de pagamento em um só lugar.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FileText,
      title: 'Emissão Fiscal Automatizada',
      description:
        'NFC-e e NF-e com um clique. Conformidade fiscal garantida em todos os estados.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: TrendingUp,
      title: 'Relatórios em Tempo Real',
      description:
        'Dashboards completos com insights de vendas, margem e performance por categoria.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Gestão de Clientes',
      description:
        'Cadastro completo, histórico de compras e programas de fidelidade integrados.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Zap,
      title: 'Performance Otimizada',
      description:
        'Sistema rápido e responsivo. Funciona perfeitamente mesmo com internet instável.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Segurança Avançada',
      description:
        'Seus dados protegidos com criptografia de ponta e backups automáticos diários.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Clock,
      title: 'Suporte 24/7',
      description:
        'Equipe especializada sempre disponível para ajudar quando você precisar.',
      color: 'from-teal-500 to-cyan-500',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Tudo que sua loja de moda precisa,{' '}
            <span className="text-gradient">em um só lugar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Funcionalidades pensadas especialmente para o varejo de moda. Menos
            retrabalho, mais foco no cliente.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-luxury transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-full h-full text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Pronto para transformar sua gestão?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Começar Agora
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
