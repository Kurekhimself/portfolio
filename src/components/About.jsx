import { useEffect, useRef } from 'react'
import './About.css'

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    const els = sectionRef.current?.querySelectorAll('.reveal')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Obfuscated email parts (replace `MeinEchterName` with your real Gmail username)
  const emailUser = 'kureklaurenz+portfolio'
  const emailDomain = 'gmail'
  const emailTld = 'com'

  const handleEmailClick = (e) => {
    e.preventDefault()
    const addr = `${emailUser}@${emailDomain}.${emailTld}`
    window.location.href = `mailto:${addr}`
  }

  const stats = [
    { num: '3+', label: 'Jahre Erfahrung' },
    { num: '5+', label: 'Projekte' },
    { num: '100%', label: 'Leidenschaft' },
  ]

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          {/* Left: Visual */}
          <div className="about-visual reveal">
            <div className="about-card">
              <div className="about-card-inner">
                <div className="about-avatar">Kurek</div>
                <div className="about-card-tag">
                  <span className="status-dot" />
                  <span>Auf Anfrage</span>
                </div>
              </div>
              {/* Stats */}
              <div className="about-stats">
                {stats.map((s, i) => (
                  <div key={i} className="stat">
                    <span className="stat-num">{s.num}</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
              {/* Decorative corner */}
              <div className="corner-tl" /><div className="corner-tr" />
              <div className="corner-bl" /><div className="corner-br" />
            </div>
          </div>

          {/* Right: Text */}
          <div className="about-text">
            <div className="section-tag reveal">
              <span className="mono">//</span> Über mich
            </div>
            <h2 className="section-title reveal">
              Digitale Lösungen,<br />
              <em>die wirklich helfen.</em>
            </h2>

            <p className="about-p reveal">
              Ich bin ein leidenschaftlicher Entwickler aus der Praxis — ich baue keine Konzepte,
              sondern Dinge, die tatsächlich genutzt werden. Vom Kassensystem am Weihnachtsmarkt-Stand
              bis zum digitalen Bestellsystem für Vereins-Merch.
            </p>
            <p className="about-p reveal">
              Als <strong>Webmaster der TSG Move & Dance</strong> betreue ich eine aktive
              WordPress-Seite. Für den Verein habe ich einen kompletten Web-Shop aufgebaut;
              der Shop wurde ausschließlich mit PHP, TailwindCSS und JavaScript erstellt.
            </p>
            <p className="about-p reveal">
              Ich denke ganzheitlich: nicht nur Code, sondern auch der Prozess dahinter muss
              sauber sein.
            </p>

            <div className="about-links reveal">
              <a href="https://github.com/Kurekhimself" target="_blank" rel="noopener noreferrer" className="about-link" data-hover>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/laurenzszepan/" target="_blank" rel="noopener noreferrer" className="about-link" data-hover>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v13H0V8zm7.5 0H12v1.8h.1c.6-1.1 2-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.7V21h-5V14.1c0-1.6 0-3.6-2.2-3.6-2.2 0-2.6 1.7-2.6 3.5V21h-5V8z"/></svg>
                LinkedIn
              </a>
              <a href="#email" onClick={handleEmailClick} className="about-link" data-hover>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>
                E-Mail schreiben
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
