import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { LemonIcon } from './LemonIcon'

export const Navigation: React.FC = () => {
  const [time, setTime] = useState<string>('--')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const parisTime = now.toLocaleTimeString('fr-FR', {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
      })
      setTime(parisTime)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-cream/10">
      <div className="container-hero py-4 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 hover:text-accent transition-colors">
          <LemonIcon size="sm" />
          <span className="font-serif text-lg">
            Lemon<span className="text-accent">.</span>
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex gap-8 font-mono text-sm">
          <a href="#problem" className="hover:text-accent transition-colors">
            Le sujet
          </a>
          <a href="#demo" className="hover:text-accent transition-colors">
            Démo live
          </a>
          <a href="#services" className="hover:text-accent transition-colors">
            Services
          </a>
          <a href="#process" className="hover:text-accent transition-colors">
            Méthode
          </a>
          <a href="#manifesto" className="hover:text-accent transition-colors">
            Manifeste
          </a>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-6">
          <span className="font-mono text-xs text-cream/60">
            {time} · PARIS
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-mono text-sm px-4 py-2 bg-accent text-dark rounded hover:bg-accent-light transition-colors"
          >
            Prendre un café
          </motion.button>
        </div>
      </div>
    </nav>
  )
}
