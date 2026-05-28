import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks'

const services = [
  {
    title: 'Audit GEO',
    description: 'Analyse complète de votre visibilité dans ChatGPT, Perplexity, Gemini et Claude.',
  },
  {
    title: 'Stratégie de contenu',
    description: 'Création d\'une stratégie de contenu optimisée pour les moteurs génératifs.',
  },
  {
    title: 'Optimisation technique',
    description: 'Configuration des métadonnées et des flux de données pour le GEO.',
  },
  {
    title: 'Relations IA',
    description: 'Partenariats directs avec les équipes d\'OpenAI, Google et Anthropic.',
  },
]

export const Services: React.FC = () => {
  const ref = useScrollReveal()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section
      ref={ref}
      id="services"
      className="bg-dark py-24 transition-all duration-700"
    >
      <div className="container-hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="font-serif text-6xl mb-16 text-cream">Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ backgroundColor: 'rgba(213, 247, 35, 0.1)' }}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="border border-cream/20 rounded-lg p-8 cursor-pointer transition-colors duration-300"
              >
                <h3 className="font-serif text-2xl mb-4 text-accent">{service.title}</h3>
                <motion.p
                  initial={false}
                  animate={{ height: activeIndex === i ? 'auto' : 0 }}
                  className="font-sans text-cream/70 overflow-hidden"
                >
                  {service.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
