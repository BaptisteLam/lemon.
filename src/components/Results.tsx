import React from 'react'

export const Results: React.FC = () => (
  <section className="results">
    <div className="section-head">
      <div className="meta">
        <div className="num">05</div>
        <hr/>
        <span>Preuves · Numbers we like</span>
      </div>
      <h2 className="h-section reveal-up">
        Ce qu'on obtient<br/>en <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>90 jours</em><br/>en moyenne.
      </h2>
    </div>
    <div className="grid">
      <div className="metric reveal-up">
        <div className="v"><span className="sym">×</span><span data-count="6.3" data-decimals="1">0</span></div>
        <span className="label">Taux de citation</span>
        <p className="desc">multiplication du nombre de réponses IA où la marque est citée comme source.</p>
      </div>
      <div className="metric reveal-up d1">
        <div className="v"><span data-count="73" data-decimals="0">0</span><span className="sym">%</span></div>
        <span className="label">Part de voix LLM</span>
        <p className="desc">part de voix moyenne contre le concurrent direct, sur les requêtes catégorie.</p>
      </div>
      <div className="metric reveal-up d2">
        <div className="v"><span data-count="218" data-decimals="0">0</span><small>k €</small></div>
        <span className="label">Pipeline généré</span>
        <p className="desc">valeur du pipeline B2B attribué aux conversations IA (cohorte Q4 2025).</p>
      </div>
    </div>
    <div className="case reveal-up">
      <div>
        <span className="eyebrow"><span className="dot"/>Cas client · SaaS B2B / 80 personnes</span>
      </div>
      <div>
        <p className="quote">«&nbsp;On est passés de <em>zéro mention</em> à la première source citée par ChatGPT sur notre catégorie en moins de quatre mois. Le pipeline a doublé sans toucher au paid.&nbsp;»</p>
        <p className="by">— CMO · client français · Série B</p>
      </div>
    </div>
  </section>
)
