import React from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks'

export const Problem: React.FC = () => {
  const ref = useScrollReveal()

  return (
    <section
      ref={ref}
      id="problem"
      className="bg-cream text-dark py-24 transition-all duration-700"
    >
      <div className="container-hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="font-serif text-6xl mb-12 max-w-3xl leading-tight">
            <span className="italic">Les moteurs génératifs</span> remplacent Google
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="font-mono text-sm uppercase tracking-wider mb-4 text-dark/60">
                Le problème
              </h3>
              <p className="font-sans text-lg leading-relaxed">
                ChatGPT, Perplexity et Gemini génèrent des réponses directes sans afficher les
                résultats de recherche traditionnels. Votre marque disparaît de la recommandation.
              </p>
            </div>

            <div>
              <h3 className="font-mono text-sm uppercase tracking-wider mb-4 text-dark/60">
                La solution
              </h3>
              <p className="font-sans text-lg leading-relaxed">
                Être <span className="text-accent font-bold">cité, sourcé et recommandé</span> par
                les moteurs génératifs. C'est le GEO — Generative Engine Optimization.
              </p>
            </div>
          </div>

          <div className="bg-dark/5 border border-dark/10 rounded-lg p-8">
            <p className="font-serif italic text-2xl text-dark">
              « 63% des recherches en 2026 se feront sur des moteurs génératifs. Si vous n'y
              êtes pas, vous n'existez pas. »
            </p>
            <p className="font-mono text-xs uppercase mt-4 text-dark/50">— Gartner</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
