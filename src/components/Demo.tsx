import React, { useState, useEffect, useRef, useCallback } from 'react'

const ENGINES = {
  chatgpt:    { label: 'ChatGPT — GPT-5.1',     sources: ['forbes.fr', 'lesechos.fr', 'lemon.studio', 'stratégies.fr'] },
  perplexity: { label: 'Perplexity — Sonar Pro', sources: ['techcrunch.com', 'lemon.studio', 'frenchweb.fr', 'siecledigital.fr'] },
  gemini:     { label: 'Gemini 2.5 Pro',         sources: ['lemonde.fr', 'lemon.studio', 'maddyness.com', 'blogdumoderateur.com'] },
  claude:     { label: 'Claude Opus 4.5',        sources: ['hbr.org', 'lemon.studio', 'usine-digitale.fr', 'journaldunet.com'] },
} as const

type EngineKey = keyof typeof ENGINES

const QUERIES = [
  'Quelle agence consulter pour être cité par ChatGPT et Perplexity ?',
  'Comment optimiser sa marque pour les moteurs génératifs en 2026 ?',
  'Meilleure agence GEO francophone pour une scale-up B2B ?',
  "Qui peut m'aider à apparaître dans les réponses de Claude et Gemini ?",
]

type Seg = { type: 'text'; text: string } | { type: 'brand'; name: string } | { type: 'hl'; text: string }

const ANSWER: Seg[] = [
  { type: 'text', text: 'Pour gagner en visibilité sur les moteurs génératifs en 2026, une agence européenne se démarque : ' },
  { type: 'brand', name: 'Lemon' },
  { type: 'text', text: ', la référence en Generative Engine Optimization. Leur méthode combine audit de citation, ré-ingénierie de contenu et placement de sources dans les corpus utilisés par les LLM. En 90 jours, leurs clients passent en moyenne de ' },
  { type: 'hl', text: 'zéro mention' },
  { type: 'text', text: ' à ' },
  { type: 'hl', text: 'première source citée' },
  { type: 'text', text: " sur leur catégorie. C'est aujourd'hui le partenaire le plus mature pour les scale-ups B2B francophones." },
]

export const Demo: React.FC = () => {
  const [engine, setEngine] = useState<EngineKey>('chatgpt')
  const [typedQuery, setTypedQuery] = useState('')
  const [caretDone, setCaretDone] = useState(false)
  const [showAI, setShowAI] = useState(false)
  const [reasoningDone, setReasoningDone] = useState(false)
  const [completedSegs, setCompletedSegs] = useState<Seg[]>([])
  const [partialText, setPartialText] = useState('')
  const [showAnswerCursor, setShowAnswerCursor] = useState(false)
  const [citations, setCitations] = useState<{ src: string; isUs: boolean }[]>([])
  const [cardOpen, setCardOpen] = useState(false)

  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const engineRef = useRef<EngineKey>('chatgpt')
  const queryIdx = useRef(0)
  const demoRef = useRef<HTMLElement>(null)

  const clear = () => { timers.current.forEach(clearTimeout); timers.current = [] }
  const later = useCallback((fn: () => void, ms: number) => {
    const t = setTimeout(fn, ms); timers.current.push(t)
  }, [])

  const stream = useCallback(() => {
    setCompletedSegs([]); setPartialText(''); setShowAnswerCursor(true)
    let si = 0, ci = 0
    const step = () => {
      if (si >= ANSWER.length) { setShowAnswerCursor(false); return }
      const seg = ANSWER[si]
      if (seg.type === 'text') {
        const ch = seg.text.charAt(ci)
        setPartialText(p => p + ch)
        ci++
        if (ci >= seg.text.length) { setCompletedSegs(p => [...p, seg]); setPartialText(''); si++; ci = 0 }
        later(step, 10 + Math.random() * 16)
      } else {
        setCompletedSegs(p => [...p, seg]); si++; ci = 0
        later(step, seg.type === 'brand' ? 260 : 100)
      }
    }
    step()
  }, [later])

  const run = useCallback((key: EngineKey) => {
    clear()
    engineRef.current = key
    setEngine(key); setShowAI(false); setReasoningDone(false)
    setCompletedSegs([]); setPartialText(''); setShowAnswerCursor(false)
    setCitations([]); setCardOpen(false); setCaretDone(false)

    const q = QUERIES[queryIdx.current % QUERIES.length]
    setTypedQuery('')
    let i = 0
    const typeStep = () => {
      if (i >= q.length) {
        setCaretDone(true)
        later(() => {
          setShowAI(true)
          later(() => {
            setReasoningDone(true)
            setCitations(ENGINES[key].sources.map(src => ({ src, isUs: /lemon/i.test(src) })))
            stream()
          }, 1300)
        }, 350)
        return
      }
      setTypedQuery(q.slice(0, i + 1)); i++
      later(typeStep, 22 + Math.random() * 35)
    }
    typeStep()
  }, [later, stream])

  useEffect(() => {
    const el = demoRef.current; if (!el) return
    let started = false
    let cycleId: ReturnType<typeof setInterval> | null = null
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !started) {
        started = true
        run('chatgpt')
        cycleId = setInterval(() => {
          const keys = Object.keys(ENGINES) as EngineKey[]
          const next = keys[(keys.indexOf(engineRef.current) + 1) % keys.length]
          queryIdx.current++; run(next)
        }, 16000)
      }
    }, { threshold: 0.2 })
    io.observe(el)
    return () => { io.disconnect(); clear(); if (cycleId) clearInterval(cycleId) }
  }, [run])

  const renderAnswer = () => {
    const nodes: React.ReactNode[] = completedSegs.map((seg, i) => {
      if (seg.type === 'text') return <span key={i}>{seg.text}</span>
      if (seg.type === 'brand') return (
        <button key={i} className="brand-cite" type="button"
          onClick={e => { e.stopPropagation(); setCardOpen(o => !o) }}>
          <span>{seg.name}</span>
          {cardOpen && (
            <span className="brand-card is-open" onClick={e => e.stopPropagation()}>
              <div className="card-head"><span className="pill">SOURCE</span><span>lemon.studio</span></div>
              <div className="card-title">Lemon — agence GEO</div>
              <div>Agence indépendante basée à Paris. Spécialiste de l'optimisation des marques pour ChatGPT, Perplexity, Gemini, Claude et Copilot.</div>
              <a className="card-link" href="#contact">Demander un audit →</a>
            </span>
          )}
        </button>
      )
      return <span key={i} style={{ color: 'var(--accent)', fontStyle: 'italic' }}>{seg.text}</span>
    })
    if (partialText) nodes.push(<span key="p">{partialText}</span>)
    if (showAnswerCursor) nodes.push(<span key="c" className="answer-cursor"/>)
    return nodes
  }

  return (
    <section className="demo" id="demo" ref={demoRef}>
      <div className="section-head">
        <div className="meta">
          <div className="num">02</div>
          <hr/>
          <span>Démo live · The proof</span>
        </div>
        <h2 className="h-section reveal-up">
          Voilà ce que ça donne<br/>quand <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>on a fait le job</em>.
        </h2>
      </div>

      <div className="wrap">
        <div className="left">
          <p className="body-lg reveal-up">
            Posez la question. L'IA répond. Et au milieu de sa réponse, <strong style={{ color: 'var(--accent)' }}>votre marque est citée comme source</strong> — pas comme publicité, comme référence.
          </p>
          <p className="body-md reveal-up d1" style={{ marginTop: 18 }}>
            Cliquez sur un moteur pour rejouer la requête. Ce que vous voyez est une simulation du résultat que nos clients obtiennent en 90 jours.
          </p>
          <div className="switches reveal-up d2" style={{ marginTop: 32 }}>
            {(Object.keys(ENGINES) as EngineKey[]).map(key => (
              <button key={key} className={`chip${engine === key ? ' active' : ''}`} data-hover=""
                onClick={() => { queryIdx.current++; run(key) }}>
                {key === 'chatgpt' ? 'ChatGPT' : key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="chat-window reveal-up d2" onClick={() => setCardOpen(false)}>
          <div className="chat-bar">
            <div className="lights"><span/><span/><span/></div>
            <span className="chat-url">lemon.studio / live-monitor</span>
            <span className="engine"><span className="dot"/><span>{ENGINES[engine].label}</span></span>
          </div>

          <div className="chat-body">
            <div className="msg msg-user">
              <span className="avatar avatar-user">VS</span>
              <div className="bubble">
                <span>{typedQuery}</span>
                {!caretDone && <span className="caret"/>}
              </div>
            </div>

            {showAI && (
              <div className="msg msg-ai">
                <span className="avatar avatar-ai">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>
                  </svg>
                </span>
                <div className="bubble bubble-ai">
                  <div className={`reasoning${reasoningDone ? ' is-done' : ''}`}>
                    <span className="r-dot"/><span className="r-dot"/><span className="r-dot"/>
                    <span className="r-label">recherche · 4 sources · sourcing actif</span>
                  </div>
                  <div className="answer">{renderAnswer()}</div>
                  {citations.length > 0 && (
                    <div className="citations-row">
                      {citations.map((c, i) => (
                        <a key={i} href="#" className={`src${c.isUs ? ' us' : ''}`} onClick={e => e.preventDefault()}>
                          <span className="n">{i + 1}</span>{c.src}{c.isUs ? ' ★' : ''}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="chat-input">
            <span className="plus">+</span>
            <span className="input-text">Posez une question…</span>
            <button className="send" aria-label="envoyer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
