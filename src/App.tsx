import { useEffect } from 'react'
import {
  Navigation, Hero, AIEnginesMarquee, Problem, Demo,
  Services, Process, Results, Manifesto, FAQ, CTA, Footer,
} from '@/components'

function App() {
  useEffect(() => {
    const dot = document.querySelector('.cursor') as HTMLElement | null
    const ring = document.querySelector('.cursor-ring') as HTMLElement | null
    if (!dot || !ring) return
    if (matchMedia('(pointer: coarse)').matches) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx, ry = my

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
    }

    const loop = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      requestAnimationFrame(loop)
    }
    loop()
    window.addEventListener('mousemove', onMove)

    const addHover = () => {
      document.querySelectorAll('a, button, .faq-item, .chip, .svc-row, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', () => { dot.classList.add('is-hover'); ring.classList.add('is-hover') })
        el.addEventListener('mouseleave', () => { dot.classList.remove('is-hover'); ring.classList.remove('is-hover') })
      })
    }
    const hoverTimer = setTimeout(addHover, 800)

    return () => {
      window.removeEventListener('mousemove', onMove)
      clearTimeout(hoverTimer)
    }
  }, [])

  useEffect(() => {
    const els = document.querySelectorAll('.reveal-up')
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.12 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const els = document.querySelectorAll('[data-count]')
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        const el = e.target as HTMLElement
        const target = parseFloat(el.dataset['count']!)
        const decimals = parseInt(el.dataset['decimals'] || '0', 10)
        const dur = 1800
        const start = performance.now()
        const step = (t: number) => {
          const k = Math.min(1, (t - start) / dur)
          const val = target * (1 - Math.pow(1 - k, 3))
          el.textContent = decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString('fr-FR')
          if (k < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
        io.unobserve(el)
      })
    }, { threshold: 0.4 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const el = document.querySelector('[data-visitor]')
    if (!el) return
    el.textContent = `VST-${Math.random().toString(36).slice(2, 8).toUpperCase()}`
  }, [])

  return (
    <div>
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <symbol id="i-lemon" viewBox="0 0 80 100">
            <path d="M 44 14 C 55 4, 70 6, 72 16 C 64 22, 50 22, 44 14 Z" fill="#7fa31f"/>
            <path d="M 44 14 C 52 12, 62 12, 70 16" stroke="#5d7c14" strokeWidth="0.8" fill="none"/>
            <path d="M 40 14 C 18 16, 6 38, 10 62 C 14 84, 28 94, 40 94 C 52 94, 66 84, 70 62 C 74 38, 62 16, 40 14 Z" fill="#d5f723"/>
            <ellipse cx="28" cy="40" rx="10" ry="16" fill="#eaff6a" opacity="0.7"/>
            <path d="M 38 12 C 38 10, 42 10, 42 12 L 42 18 L 38 18 Z" fill="#d5f723"/>
            <path d="M 36 90 C 36 96, 44 96, 44 90 Z" fill="#b8d020"/>
          </symbol>
        </defs>
      </svg>
      <div className="cursor" />
      <div className="cursor-ring" />
      <Navigation />
      <Hero />
      <AIEnginesMarquee />
      <Problem />
      <Demo />
      <Services />
      <Process />
      <Results />
      <Manifesto />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
