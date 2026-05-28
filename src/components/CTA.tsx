import React from 'react'

export const CTA: React.FC = () => (
  <section className="cta-block" id="contact">
    <h2 className="big reveal-up">
      Rendez-vous<br/>dans la <em>première<br/>phrase</em>.
    </h2>
    <div className="actions reveal-up d1">
      <a className="email" href="mailto:hello@lemon.studio" data-hover="">hello@lemon.studio</a>
      <span className="meta">Réponse en 24h · Audit gratuit · NDA possible</span>
      <a href="mailto:hello@lemon.studio" className="btn-primary" data-hover="" style={{ marginTop: 18 }}>
        <span>Demander un audit</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
    </div>
  </section>
)
