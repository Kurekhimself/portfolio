import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const titleRef = useRef(null)

  useEffect(() => {
    // Typewriter-like stagger on letters
    const el = titleRef.current
    if (!el) return
    const text = el.textContent
    el.innerHTML = text.split('').map((char, i) =>
      `<span style="animation-delay:${0.05 * i}s">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('')
  }, [])

  return (
    <section className="hero">
      {/* Decorative background grid */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Floating blobs */}
      <div className="blob blob-1" aria-hidden="true" />
      <div className="blob blob-2" aria-hidden="true" />

      {/* Spinning badge */}
      <div className="hero-badge" aria-hidden="true">
        <svg viewBox="0 0 100 100" className="badge-ring">
          <path id="circle" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="none" />
          <text fontSize="11.5" fill="var(--text-muted)" letterSpacing="3.5">
            <textPath href="#circle">AVAILABLE FOR PROJECTS · OPEN TO WORK · </textPath>
          </text>
        </svg>
        <span className="badge-dot" />
      </div>

      <div className="hero-content container">
        <div className="hero-tag animate-in">
          <span className="mono">&lt;</span> Willkommen <span className="mono">/&gt;</span>
        </div>

        <h1 className="hero-title" ref={titleRef}>
          Kurek
        </h1>

        <div className="hero-subtitle animate-in animate-in-delay-2">
          <span className="hero-role">Webentwickler</span>
          <span className="hero-sep">·</span>
          <span className="hero-role">Prozessoptimierer</span>
          <span className="hero-sep">·</span>
          <span className="hero-role">Webmaster</span>
        </div>

        <p className="hero-desc animate-in animate-in-delay-3">
          Ich entwickle digitale Lösungen — von Kassensystemen für Märkte
          bis zu Web-Shops, die echte Prozesse vereinfachen.
        </p>

        <div className="hero-actions animate-in animate-in-delay-4">
          <a href="#projects" className="btn btn-primary">
            <span>Projekte ansehen</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
          <a href="#about" className="btn btn-ghost">Mehr über mich</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span className="mono scroll-text">scroll</span>
      </div>

      {/* Marquee */}
      <div className="marquee-wrapper" aria-hidden="true">
        <div className="marquee-track">
          {[...Array(2)].map((_, j) => (
            <span key={j} className="marquee-content">
              {['React', 'PHP', 'WordPress', 'JavaScript', 'Kassensystem', 'Web-Shop', 'CSS', 'HTML', 'Prozessoptimierung', 'GitHub'].map((t, i) => (
                <span key={i} className="marquee-item">
                  <span className="marquee-dot">◆</span> {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
