import React, { useState, useEffect } from 'react'

export const Navigation: React.FC = () => {
  const [time, setTime] = useState('--:--:--')

  useEffect(() => {
    const tick = () => {
      setTime(new Intl.DateTimeFormat('fr-FR', {
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        timeZone: 'Europe/Paris', hour12: false,
      }).format(new Date()))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <nav className="nav">
      <a href="#" className="brand" data-hover="">
        <svg className="brand-mark" viewBox="0 0 80 100" aria-hidden="true">
          <use href="#i-lemon" />
        </svg>
        <span>Lemon<span style={{ color: 'var(--accent)' }}>.</span></span>
      </a>

      <div className="links">
        <a href="#problem">Le sujet</a>
        <a href="#demo">Démo live</a>
        <a href="#services">Services</a>
        <a href="#process">Méthode</a>
        <a href="#manifesto">Manifeste</a>
      </div>

      <div className="meta">
        <span>{time} · PARIS</span>
        <a href="#contact" className="cta" data-hover="">Prendre un café</a>
      </div>
    </nav>
  )
}
