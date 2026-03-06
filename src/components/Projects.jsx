import { useEffect, useRef, useState } from 'react'
import './Projects.css'

const projects = [
  {
    id: '01',
    title: 'Weihnachtsmarkt Kassensystem',
    desc: 'Ein eigenentwickeltes POS-System für den Einsatz am Weihnachtsmarkt. Schnelle Abrechnung, Artikelverwaltung und Tagesabschluss — offline-fähig und auf Tablets lauffähig.',
    tags: ['JavaScript', 'PHP', 'Local Storage', 'PWA'],
    color: '#ff4d6d',
    icon: '🧾',
    links: { github: 'https://kurekhimself.github.io/KasseTT/', live: '#' },
  },
  {
    id: '02',
    title: 'TSG Move & Dance — Web-Shop',
    desc: 'Digitalisierung des Merch-Bestellprozesses für den Tanzverein. Der Web-Shop wurde ausschließlich mit PHP, TailwindCSS und JavaScript erstellt — von der Prozessanalyse bis zum fertigen Shop mit Größenauswahl, Bestellübersicht und Admin-Dashboard.',
    tags: ['PHP', 'TailwindCSS', 'JavaScript', 'MySQL', 'Web Development', 'E-Commerce', 'Process Optimization', 'Database Management'],
    color: '#7c3aed',
    icon: '👕',
    links: { github: '#', live: '#' },
  },
  {
    id: '03',
    title: 'TSG Move & Dance — Website',
    desc: 'Webmaster und Betreuer der offiziellen Vereins-Website. Pflege, SEO-Optimierung, Event-Verwaltung und regelmäßige Content-Updates für eine aktive Community.',
    tags: ['WordPress', 'SEO', 'HTML/CSS', 'Content Management', 'JavaScript'],
    color: '#06d6a0',
    icon: '🌐',
    links: { github: '#', live: 'https://tsg-move-and-dance.de' },
  },
]

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12
    setTilt({ x, y })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <div
      ref={cardRef}
      className="project-card reveal"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--card-color': project.color,
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div className="project-card-top">
        <span className="project-num">{project.id}</span>
        <span className="project-icon">{project.icon}</span>
        <div className="project-card-links">
          <a href={project.links.github} target="_blank" rel="noopener noreferrer" data-hover title="GitHub">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          {project.links.live !== '#' && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" data-hover title="Live ansehen">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          )}
        </div>
      </div>

      <div className="project-accent-line" />

      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.desc}</p>

      <div className="project-tags">
        {project.tags.map((tag, i) => (
          <span key={i} className="project-tag">{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">
            <span className="mono">//</span> Projekte
          </div>
          <h2 className="section-title">
            Was ich<br />
            <em>gebaut habe.</em>
          </h2>
          <p className="section-sub">
            Echte Projekte. Echte Nutzer. Echte Wirkung.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
