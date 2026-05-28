import React, { useState } from 'react'

const FAQS = [
  {
    n: 'Q/01',
    q: "Le GEO, ce n'est pas juste du SEO version 2026 ?",
    a: "Non. Le SEO optimise pour un algorithme de ranking ; le GEO optimise pour un modèle de langage qui synthétise et cite. Les leviers, les métriques et la temporalité sont différents — un bon SEO peut être un mauvais GEO et inversement.",
  },
  {
    n: 'Q/02',
    q: 'Combien de temps avant les premiers résultats ?',
    a: 'Perplexity et Claude, qui crawlent en quasi temps réel : 30 à 45 jours. ChatGPT et Gemini, dont les index sont moins fréquents : 60 à 90 jours.',
  },
  {
    n: 'Q/03',
    q: "Vous travaillez avec quel type d'entreprise ?",
    a: "Scale-ups B2B (10–500 personnes), éditeurs SaaS, cabinets de conseil, marques DTC premium. Pas de e-commerce mass market, pas de SEO black hat, pas d'agences concurrentes.",
  },
  {
    n: 'Q/04',
    q: 'Et si les moteurs génératifs changent leur ranking demain ?',
    a: "Ils le font tous les trois mois. C'est exactement pour ça que le monitoring continu fait partie de toutes nos missions — et qu'on facture en abonnement, pas en one-shot.",
  },
  {
    n: 'Q/05',
    q: "C'est combien ?",
    a: "L'audit GEO-Index : 8 500 € HT, livré en deux semaines. L'accompagnement full-stack démarre à 12 000 € HT / mois sur engagement 6 mois. On envoie un devis transparent en 48h.",
  },
]

export const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="faq">
      <div className="section-head">
        <div className="meta">
          <div className="num">06</div>
          <hr/>
          <span>FAQ · Le pour &amp; le contre</span>
        </div>
        <h2 className="h-section reveal-up">
          Questions<br/><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>honnêtes</em>.
        </h2>
      </div>
      <div className="list">
        {FAQS.map((f, i) => (
          <div key={i} className={`faq-item${open === i ? ' open' : ''}`} data-hover=""
            onClick={() => setOpen(open === i ? null : i)}>
            <div className="head">
              <span className="n">{f.n}</span>
              <span className="q">{f.q}</span>
              <span className="toggle"/>
            </div>
            <div className="a">
              <span/>
              <div>{f.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
