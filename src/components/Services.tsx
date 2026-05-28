import React from 'react'

const SERVICES = [
  {
    num: 'S/01', prefix: 'Audit ', em: 'GEO-Index',
    meta: 'Nous interrogeons chaque moteur génératif avec vos 100 requêtes stratégiques et mesurons votre taux de citation, votre poids sémantique et la qualité de vos sources.',
    tags: ['Diagnostic', '2 semaines'],
  },
  {
    num: 'S/02', prefix: 'Content ', em: 're-engineering',
    meta: "Réécriture chirurgicale de vos pages clés pour qu'elles soient parseables, citables et résumables. Structure, schema, densité, micro-faits.",
    tags: ['Rédaction', 'Schema.org', 'Continu'],
  },
  {
    num: 'S/03', prefix: 'Source ', em: 'seeding',
    meta: 'Placement éditorial dans les corpus utilisés par les LLM : Wikipedia, Reddit, presse spécialisée, GitHub, comparateurs B2B, datasets ouverts.',
    tags: ['PR digitale', 'Réputation'],
  },
  {
    num: 'S/04', prefix: 'Citation ', em: 'monitoring',
    meta: 'Un dashboard qui suit en temps réel vos mentions sur ChatGPT, Perplexity, Gemini, Claude et Copilot. Alertes Slack quand un concurrent vous remplace.',
    tags: ['SaaS', 'Slack', 'API'],
  },
]

export const Services: React.FC = () => (
  <section className="services" id="services">
    <div className="section-head">
      <div className="meta">
        <div className="num">03</div>
        <hr/>
        <span>Services · What we do</span>
      </div>
      <h2 className="h-section reveal-up">
        Quatre <em style={{ fontStyle: 'italic' }}>leviers</em><br/>pour devenir une<br/>source <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>de confiance</em>.
      </h2>
    </div>
    <div className="svc-list">
      {SERVICES.map((s, i) => (
        <div key={i} className="svc-row reveal-up" data-hover="">
          <div className="svc-num">{s.num}</div>
          <h3 className="svc-title">{s.prefix}<em>{s.em}</em></h3>
          <p className="svc-meta">{s.meta}</p>
          <div className="svc-tags">{s.tags.map(t => <span key={t} className="t">{t}</span>)}</div>
        </div>
      ))}
    </div>
  </section>
)
