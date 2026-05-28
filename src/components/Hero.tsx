import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { LemonIcon } from './LemonIcon'

const ChatGPTLogo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="inline">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3-13H9v2h6V7zm0 4H9v2h6v-2z" />
  </svg>
)

export const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Le meilleur que je puisse te conseiller, c\'est : '
  const highlightText = 'votre entreprise'

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen bg-dark text-cream overflow-hidden relative flex flex-col justify-center pt-20">
      {/* Lemon decoration */}
      <div className="absolute -top-20 -right-40 w-96 h-96 opacity-40 pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <LemonIcon size="xl" />
        </motion.div>
      </div>

      <div className="container-hero">
        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-6xl lg:text-8xl font-italic leading-tight mb-12 max-w-2xl"
        >
          Soyez la réponse<br />
          <span className="text-accent">que l'IA donne</span>
        </motion.h1>

        {/* ChatGPT Mock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-cream/5 border border-cream/10 rounded-lg p-6 mb-16 max-w-2xl backdrop-blur-sm"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <ChatGPTLogo />
            </div>
            <div className="flex-1">
              <p className="font-serif italic text-lg">
                {displayedText}
                <span className="text-accent font-bold underline cursor-pointer hover:bg-accent hover:text-dark px-1 transition-colors">
                  {highlightText}
                </span>
                {displayedText === fullText && '.'}
              </p>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex items-center gap-2 bg-cream/5 rounded-full px-4 py-2 border border-cream/10">
            <span className="text-accent text-lg">+</span>
            <input
              type="text"
              placeholder="Poser une question"
              className="flex-1 bg-transparent outline-none text-cream placeholder-cream/50"
            />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent">
              <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mb-12"
        >
          <p className="font-sans text-lg leading-relaxed text-cream/80 mb-8">
            Lemon est l'agence qui rend les marques <span className="text-accent">citées, sourcées et recommandées</span> par ChatGPT, Perplexity, Gemini et Claude — pas seulement par Google.
          </p>
          <button className="btn-primary">VOIR UNE DÉMO LIVE</button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-20 right-12 text-right"
        >
          <div className="text-5xl font-mono font-bold text-accent mb-2">63%</div>
          <div className="font-mono text-xs uppercase text-cream/60 leading-tight max-w-32">
            Des recherches en 2026 se font sur un moteur génératif
          </div>
          <div className="font-mono text-xs text-cream/40 mt-2">— Gartner</div>
        </motion.div>
      </div>
    </section>
  )
}
