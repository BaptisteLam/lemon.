import React from 'react'
import { motion } from 'framer-motion'
import { LemonIcon } from './LemonIcon'

const engines = [
  { name: 'ChatGPT', logo: '🤖' },
  { name: 'Perplexity', logo: '🔍' },
  { name: 'Gemini', logo: '✨' },
  { name: 'Claude', logo: '🧠' },
  { name: 'Copilot', logo: '💻' },
  { name: 'Mistral', logo: '🌪️' },
]

export const AIEnginesMarquee: React.FC = () => {
  return (
    <section className="bg-dark py-12 border-y border-cream/10">
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...engines, ...engines, ...engines].map((engine, i) => (
            <div
              key={i}
              className="flex items-center gap-3 font-mono text-sm text-cream/60 flex-shrink-0"
            >
              <LemonIcon size="sm" className="text-accent" />
              <span>{engine.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
