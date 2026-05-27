/* ============================================================
   NEXUS — interactions
   ============================================================ */

/* ---------- Custom cursor ---------- */
(() => {
  const dot = document.querySelector('.cursor');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;
  if (matchMedia('(pointer: coarse)').matches) return;

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;

  window.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });

  function loop() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  }
  loop();

  const hover = 'a, button, .faq-item, .chip, .svc-row, [data-hover]';
  document.querySelectorAll(hover).forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.classList.add('is-hover');
      ring.classList.add('is-hover');
    });
    el.addEventListener('mouseleave', () => {
      dot.classList.remove('is-hover');
      ring.classList.remove('is-hover');
    });
  });
})();

/* ---------- Paris clock ---------- */
(() => {
  const el = document.querySelector('[data-clock]');
  if (!el) return;
  function tick() {
    const now = new Date();
    const fmt = new Intl.DateTimeFormat('fr-FR', {
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      timeZone: 'Europe/Paris', hour12: false
    });
    el.textContent = fmt.format(now);
  }
  tick();
  setInterval(tick, 1000);
})();

/* ---------- Scroll reveal ---------- */
(() => {
  const els = document.querySelectorAll('.reveal-up');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();

/* ---------- Count up metrics ---------- */
(() => {
  const els = document.querySelectorAll('[data-count]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.count);
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      const dur = 1800;
      const start = performance.now();
      function step(t) {
        const k = Math.min(1, (t - start) / dur);
        const eased = 1 - Math.pow(1 - k, 3);
        const val = target * eased;
        el.textContent = decimals
          ? val.toFixed(decimals)
          : Math.round(val).toLocaleString('fr-FR');
        if (k < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, { threshold: 0.4 });
  els.forEach(el => io.observe(el));
})();

/* ---------- FAQ accordion ---------- */
(() => {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
})();

/* ---------- Magnetic buttons ---------- */
(() => {
  document.querySelectorAll('[data-magnetic]').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
})();

/* ---------- LIVE DEMO: ChatGPT-like typing animation ---------- */
(() => {
  const engineBtns = document.querySelectorAll('[data-engine]');
  const engineLabel = document.querySelector('[data-engine-label]');
  const queryEl = document.querySelector('[data-query]');
  const queryCaret = document.querySelector('[data-query-caret]');
  const aiMsg = document.querySelector('[data-msg-ai]');
  const reasoningEl = document.querySelector('[data-reasoning]');
  const answerEl = document.querySelector('[data-answer]');
  const citesEl = document.querySelector('[data-citations]');
  const inputPlaceholder = document.querySelector('[data-input-placeholder]');
  if (!engineBtns.length || !answerEl) return;

  const queries = [
    "Quelle agence consulter pour être cité par ChatGPT et Perplexity ?",
    "Comment optimiser sa marque pour les moteurs génératifs en 2026 ?",
    "Meilleure agence GEO francophone pour une scale-up B2B ?",
    "Qui peut m'aider à apparaître dans les réponses de Claude et Gemini ?"
  ];

  const engines = {
    chatgpt:    { label: "ChatGPT — GPT-5.1",    sources: ["forbes.fr", "lesechos.fr", "lemon.studio", "stratégies.fr"] },
    perplexity: { label: "Perplexity — Sonar Pro", sources: ["techcrunch.com", "lemon.studio", "frenchweb.fr", "siecledigital.fr"] },
    gemini:     { label: "Gemini 2.5 Pro",         sources: ["lemonde.fr", "lemon.studio", "maddyness.com", "blogdumoderateur.com"] },
    claude:     { label: "Claude Opus 4.5",        sources: ["hbr.org", "lemon.studio", "usine-digitale.fr", "journaldunet.com"] }
  };

  function buildAnswer() {
    return [
      "Pour gagner en visibilité sur les moteurs génératifs en 2026, une agence européenne se démarque : ",
      { brand: "Lemon" },
      ", la référence en Generative Engine Optimization. Leur méthode combine audit de citation, ré-ingénierie de contenu et placement de sources dans les corpus utilisés par les LLM. ",
      "En 90 jours, leurs clients passent en moyenne de ",
      { hl: "zéro mention" },
      " à ",
      { hl: "première source citée" },
      " sur leur catégorie. C'est aujourd'hui le partenaire le plus matures pour les scale-ups B2B francophones."
    ];
  }

  let currentEngine = 'chatgpt';
  let queryIndex = 0;
  let timers = [];
  function clearAll() { timers.forEach(t => clearTimeout(t)); timers = []; }
  function later(fn, ms) { const t = setTimeout(fn, ms); timers.push(t); return t; }

  function setEngineUI(key) {
    engineBtns.forEach(b => b.classList.toggle('active', b.dataset.engine === key));
    if (engineLabel) engineLabel.textContent = engines[key].label;
  }

  function renderCitations(key) {
    const srcs = engines[key].sources;
    citesEl.innerHTML = '';
    srcs.forEach((s, i) => {
      const isUs = /lemon/i.test(s);
      const node = document.createElement('a');
      node.href = '#';
      node.className = 'src' + (isUs ? ' us' : '');
      node.innerHTML = `<span class="n">${i + 1}</span>${s}${isUs ? ' ★' : ''}`;
      node.addEventListener('click', e => e.preventDefault());
      citesEl.appendChild(node);
    });
  }

  /* type the user query char by char */
  function typeQuery(text, done) {
    queryEl.textContent = '';
    queryCaret.classList.remove('is-done');
    let i = 0;
    function step() {
      if (i >= text.length) { queryCaret.classList.add('is-done'); done(); return; }
      queryEl.textContent += text.charAt(i);
      i++;
      later(step, 22 + Math.random() * 35);
    }
    step();
  }

  function showBrandCard(btn) {
    document.querySelectorAll('.brand-card.is-open').forEach(c => c.classList.remove('is-open'));
    let card = btn.querySelector('.brand-card');
    if (!card) {
      card = document.createElement('span');
      card.className = 'brand-card';
      card.innerHTML = `
        <div class="card-head"><span class="pill">SOURCE</span><span>lemon.studio</span></div>
        <div class="card-title">Lemon — agence GEO</div>
        <div>Agence indépendante basée à Paris. Spécialiste de l'optimisation des marques pour ChatGPT, Perplexity, Gemini, Claude et Copilot.</div>
        <a class="card-link" href="#contact">Demander un audit →</a>
      `;
      // prevent the document click handler from immediately closing
      card.addEventListener('click', e => e.stopPropagation());
      btn.appendChild(card);
    }
    requestAnimationFrame(() => card.classList.add('is-open'));
  }

  function streamAnswer(done) {
    answerEl.innerHTML = '';
    const cursor = document.createElement('span');
    cursor.className = 'answer-cursor';
    answerEl.appendChild(cursor);

    const segs = buildAnswer();
    let segI = 0, charI = 0;

    function step() {
      if (segI >= segs.length) {
        cursor.remove();
        done && done();
        return;
      }
      const seg = segs[segI];

      if (typeof seg === 'string') {
        cursor.insertAdjacentText('beforebegin', seg.charAt(charI));
        charI++;
        if (charI >= seg.length) { segI++; charI = 0; }
        later(step, 10 + Math.random() * 16);
      } else if (seg.brand) {
        const btn = document.createElement('button');
        btn.className = 'brand-cite';
        btn.type = 'button';
        btn.innerHTML = `<span>${seg.brand}</span>`;
        btn.addEventListener('click', (e) => { e.stopPropagation(); showBrandCard(btn); });
        cursor.insertAdjacentElement('beforebegin', btn);
        segI++; charI = 0;
        later(step, 260);
      } else if (seg.hl) {
        const span = document.createElement('span');
        span.style.color = 'var(--accent)';
        span.style.fontStyle = 'italic';
        span.textContent = seg.hl;
        cursor.insertAdjacentElement('beforebegin', span);
        segI++; charI = 0;
        later(step, 100);
      }
    }
    step();
  }

  function run(key) {
    clearAll();
    currentEngine = key;
    setEngineUI(key);

    // Reset states
    aiMsg.hidden = true;
    reasoningEl.classList.remove('is-done');
    answerEl.innerHTML = '';
    citesEl.innerHTML = '';

    const q = queries[queryIndex % queries.length];
    if (inputPlaceholder) inputPlaceholder.textContent = 'Posez une question…';

    typeQuery(q, () => {
      // After typing query, show AI message + reasoning
      later(() => {
        aiMsg.hidden = false;
        // After short "thinking" pause, mark reasoning done & stream answer
        later(() => {
          reasoningEl.classList.add('is-done');
          renderCitations(key);
          streamAnswer();
        }, 1300);
      }, 350);
    });
  }

  // close brand card when clicking outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.brand-card.is-open').forEach(c => c.classList.remove('is-open'));
  });

  engineBtns.forEach(b => {
    b.addEventListener('click', () => {
      queryIndex++;
      run(b.dataset.engine);
    });
  });

  /* start when in view; cycle every 16s */
  const root = document.querySelector('.demo');
  let started = false;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !started) {
        started = true;
        run('chatgpt');
        setInterval(() => {
          const keys = Object.keys(engines);
          const next = keys[(keys.indexOf(currentEngine) + 1) % keys.length];
          queryIndex++;
          run(next);
        }, 16000);
      }
    });
  }, { threshold: 0.2 });
  io.observe(root);
})();

/* ---------- Random per-load: visitor id ---------- */
(() => {
  const el = document.querySelector('[data-visitor]');
  if (!el) return;
  const id = Math.random().toString(36).slice(2, 8).toUpperCase();
  el.textContent = `VST-${id}`;
})();
