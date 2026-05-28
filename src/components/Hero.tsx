import React from 'react'

export const Hero: React.FC = () => (
  <header className="hero">
    <svg className="lemon-peel" viewBox="0 0 600 700" aria-hidden="true">
      <defs>
        <radialGradient id="lemon-grad" cx="230" cy="260" r="320" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f9ff90"/>
          <stop offset="55%" stopColor="#e6fa2f"/>
          <stop offset="100%" stopColor="#c9e520"/>
        </radialGradient>
        <radialGradient id="lemon-shine" cx="190" cy="230" r="170" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
        </radialGradient>
        <filter id="lemon-pores" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="2.6" numOctaves={2} seed={4} result="t"/>
          <feColorMatrix in="t" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1.1 -0.9"/>
          <feComposite in2="SourceGraphic" operator="in"/>
        </filter>
        <linearGradient id="leaf-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a8d017"/>
          <stop offset="100%" stopColor="#5a7d0c"/>
        </linearGradient>
      </defs>
      <g transform="translate(310 90) rotate(-28)">
        <path d="M 0 0 C 60 -50, 180 -50, 220 10 C 170 50, 50 50, 0 0 Z" fill="url(#leaf-grad)"/>
        <path d="M 8 4 C 60 -10, 160 -10, 210 12" stroke="#3e5808" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M 50 -2 L 60 -22 M 95 -2 L 105 -28 M 140 -2 L 150 -28 M 180 0 L 185 -18" stroke="#3e5808" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.7"/>
      </g>
      <rect x="297" y="100" width="6" height="38" rx="2" fill="#5d7c14"/>
      <path d="M 300 130 C 175 145, 95 240, 90 380 C 85 520, 165 610, 300 615 C 435 610, 515 520, 510 380 C 505 240, 425 145, 300 130 Z" fill="url(#lemon-grad)"/>
      <path d="M 300 130 C 175 145, 95 240, 90 380 C 85 520, 165 610, 300 615 C 435 610, 515 520, 510 380 C 505 240, 425 145, 300 130 Z" fill="url(#lemon-shine)"/>
      <path d="M 300 130 C 175 145, 95 240, 90 380 C 85 520, 165 610, 300 615 C 435 610, 515 520, 510 380 C 505 240, 425 145, 300 130 Z" fill="#7a9a08" filter="url(#lemon-pores)" opacity="0.35"/>
      <path d="M 300 130 C 175 145, 95 240, 90 380 C 85 520, 165 610, 300 615 C 435 610, 515 520, 510 380 C 505 240, 425 145, 300 130 Z" fill="none" stroke="#b8d520" strokeWidth="2" opacity="0.7"/>
      <ellipse cx="300" cy="612" rx="12" ry="6" fill="#a3bf12"/>
    </svg>

    <svg className="hero-grain" aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 400 400">
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} seed={5}/>
        <feColorMatrix values="0 0 0 0 0.84  0 0 0 0 0.97  0 0 0 0 0.14  0 0 0 0.18 0"/>
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)"/>
    </svg>

    <div className="top-line">
      <div>
        <span className="eyebrow"><span className="dot"/>Agence GEO indépendante · est. 2024</span>
      </div>
      <div className="center">Paris · Lisbonne · remote</div>
      <div className="right">N° <span data-visitor="">VST-XXXXXX</span></div>
    </div>

    <h1 className="h-display hero-title">
      <span className="line reveal"><span>Soyez la réponse</span></span>
      <span className="line reveal"><span><i className="mark-accent">que l'IA</i> donne.</span></span>
    </h1>

    <div className="gpt-mock reveal-up d1">
      <div className="gpt-answer">
        <p>
          <img className="gpt-inline-mark" src="assets/logos/chatgpt-mark.png" alt=""/>
          Le meilleur que je puisse te conseiller, c'est&nbsp;: <a className="gpt-pill" href="#contact" data-hover="">votre entreprise</a>.
        </p>
      </div>
      <div className="gpt-actions">
        <button aria-label="copy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg></button>
        <button aria-label="like"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7 11v9H4v-9zM7 11l4-7c1.5 0 2.5 1 2.5 2.5V10h5.5a2 2 0 0 1 2 2.3l-1.2 6.4A2 2 0 0 1 19.8 20H7"/></svg></button>
        <button aria-label="dislike"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M17 13V4h3v9zM17 13l-4 7c-1.5 0-2.5-1-2.5-2.5V14H5a2 2 0 0 1-2-2.3l1.2-6.4A2 2 0 0 1 6.2 4H17"/></svg></button>
        <button aria-label="share"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 16V4M7 9l5-5 5 5M5 16v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3"/></svg></button>
        <button aria-label="refresh"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5"/></svg></button>
        <button aria-label="more"><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/></svg></button>
      </div>
      <div className="gpt-input">
        <span className="gpt-plus">+</span>
        <span className="gpt-ph">Poser une question</span>
        <button className="gpt-mic" aria-label="mic">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>
        </button>
        <button className="gpt-send" aria-label="envoyer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        </button>
      </div>
    </div>

    <div className="sub-grid">
      <div className="left">
        <p className="lede">
          Lemon est l'agence qui rend les marques <em>citées, sourcées et recommandées</em> par ChatGPT, Perplexity, Gemini et Claude — pas seulement par Google.
        </p>
        <a href="#demo" className="btn-primary" data-hover="">
          <span>Voir une démo live</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </div>
      <div className="right">
        <div className="num"><span data-count="63" data-decimals="0">0</span><small>%</small></div>
        <div>des recherches en 2026 se font<br/>sur un moteur génératif</div>
        <div className="mono" style={{ marginTop: 8, opacity: 0.55, fontSize: 10 }}>source — Gartner · Janv. 2026</div>
      </div>
    </div>
  </header>
)
