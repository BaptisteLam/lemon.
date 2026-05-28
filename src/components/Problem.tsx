import React from 'react'

export const Problem: React.FC = () => (
  <section className="problem" id="problem">
    <div className="section-head">
      <div className="meta">
        <div className="num">01</div>
        <hr/>
        <span>Le sujet · The shift</span>
      </div>
      <h2 className="h-section reveal-up">
        Le SEO a vieilli<br/>de <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>vingt ans</em><br/>en dix-huit mois.
      </h2>
    </div>
    <div className="grid">
      <div className="stat reveal-up">
        <span className="source">— Similarweb · 2026</span>
        <div className="num"><span data-count="42" data-decimals="0">0</span><span className="pct">%</span></div>
        <p>du trafic Google s'est déjà déplacé vers les interfaces conversationnelles. La SERP n'est plus la première étape du parcours d'achat.</p>
      </div>
      <div className="stat reveal-up d1">
        <span className="source">— SparkToro · Q1 2026</span>
        <div className="num"><em>×</em><span data-count="4.7" data-decimals="1">0</span></div>
        <p>une marque citée dans une réponse de ChatGPT obtient en moyenne 4,7× plus de conversions qu'un clic depuis Google.</p>
      </div>
      <div className="stat reveal-up d2">
        <span className="source">— Étude Lemon · 230 marques</span>
        <div className="num"><span data-count="89" data-decimals="0">0</span><span className="pct">%</span></div>
        <p>des entreprises B2B n'apparaissent dans aucune réponse de ChatGPT, Perplexity ou Claude pour leurs propres mots-clés métier.</p>
      </div>
      <div className="stat reveal-up d3">
        <span className="source">— Lemon · indice GEO-Index</span>
        <div className="num"><em>0</em><span className="pct" style={{ color: 'rgba(11,11,9,0.55)' }}>/100</span></div>
        <p>le score GEO moyen d'une page d'accueil française non optimisée pour les moteurs génératifs. Le vôtre est sûrement à ce niveau.</p>
      </div>
    </div>
  </section>
)
