import React from 'react'

const LogoGroup: React.FC = () => (
  <span className="mq-group">
    <img className="mq-logo" src="assets/logos/chatgpt.png" alt="ChatGPT"/>
    <svg className="lemon-bullet" viewBox="0 0 80 100" aria-hidden="true"><use href="#i-lemon"/></svg>
    <img className="mq-logo" src="assets/logos/perplexity.png" alt="Perplexity"/>
    <svg className="lemon-bullet" viewBox="0 0 80 100" aria-hidden="true"><use href="#i-lemon"/></svg>
    <img className="mq-logo" src="assets/logos/gemini.png" alt="Gemini"/>
    <svg className="lemon-bullet" viewBox="0 0 80 100" aria-hidden="true"><use href="#i-lemon"/></svg>
    <img className="mq-logo" src="assets/logos/claude.png" alt="Claude"/>
    <svg className="lemon-bullet" viewBox="0 0 80 100" aria-hidden="true"><use href="#i-lemon"/></svg>
    <img className="mq-logo" src="assets/logos/copilot.png" alt="Copilot"/>
    <svg className="lemon-bullet" viewBox="0 0 80 100" aria-hidden="true"><use href="#i-lemon"/></svg>
    <img className="mq-logo" src="assets/logos/mistral.png" alt="Mistral"/>
    <svg className="lemon-bullet" viewBox="0 0 80 100" aria-hidden="true"><use href="#i-lemon"/></svg>
  </span>
)

export const AIEnginesMarquee: React.FC = () => (
  <div className="marquee" aria-hidden="true">
    <div className="marquee-track">
      <LogoGroup />
      <span aria-hidden="true">
        <LogoGroup />
      </span>
    </div>
  </div>
)
