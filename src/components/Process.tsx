import React from 'react'

export const Process: React.FC = () => (
  <section className="process" id="process">
    <div className="section-head">
      <div className="meta">
        <div className="num">04</div>
        <hr/>
        <span>Méthode · How we work</span>
      </div>
      <h2 className="h-section reveal-up">
        Quatre étapes.<br/>Quatre-vingt-dix <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>jours</em>.<br/>Zéro bullshit.
      </h2>
    </div>
    <div className="proc-grid">
      <div className="step reveal-up">
        <div className="head"><span>Semaine 1–2</span><span className="n">01</span></div>
        <h3>Mesurer<br/><em style={{ fontStyle: 'italic', opacity: 0.5 }}>l'invisible</em></h3>
        <p>On lance 8 000 requêtes simulées sur 5 moteurs pour établir votre baseline de citation, par produit, par persona, par géographie.</p>
        <div className="check">
          <span>Rapport GEO-Index</span>
          <span>Matrice concurrentielle</span>
          <span>Quick wins</span>
        </div>
      </div>
      <div className="step reveal-up d1">
        <div className="head"><span>Semaine 3–6</span><span className="n">02</span></div>
        <h3>Réécrire<br/><em style={{ fontStyle: 'italic', opacity: 0.5 }}>le socle</em></h3>
        <p>Refonte des 12 pages que les LLM crawlent en priorité. On injecte structure, faits chiffrés, schema, et on supprime le bruit marketing.</p>
        <div className="check">
          <span>Pages produit</span>
          <span>About / Founders</span>
          <span>Pricing public</span>
        </div>
      </div>
      <div className="step reveal-up d2">
        <div className="head"><span>Semaine 6–10</span><span className="n">03</span></div>
        <h3>Semer<br/><em style={{ fontStyle: 'italic', opacity: 0.5 }}>les sources</em></h3>
        <p>Plan de placement dans les corpus consommés par les modèles : Wikipedia, Reddit, presse, comparateurs, GitHub readme, datasets HuggingFace.</p>
        <div className="check">
          <span>15 placements / mois</span>
          <span>Knowledge graph</span>
          <span>Backlinks IA-ready</span>
        </div>
      </div>
      <div className="step reveal-up d3">
        <div className="head"><span>Semaine 10–∞</span><span className="n">04</span></div>
        <h3>Surveiller<br/><em style={{ fontStyle: 'italic', opacity: 0.5 }}>en continu</em></h3>
        <p>Dashboard temps réel, alertes Slack, rituel mensuel. La citation IA est volatile : un index change, un modèle est ré-entraîné — on est dessus.</p>
        <div className="check">
          <span>Monitoring 24/7</span>
          <span>Revue mensuelle</span>
          <span>Slack dédié</span>
        </div>
      </div>
    </div>
  </section>
)
