import { useEffect, useRef } from 'react'
import './Skills.css'

const skillCategories = [
  {
    title: 'Frontend',
    icon: '⬡',
    color: '#ff4d6d',
    skills: [
      { name: 'HTML / CSS', level: 90 },
      { name: 'JavaScript', level: 75 },
      { name: 'React', level: 60 },
      { name: 'WordPress / Elementor', level: 85 },
    ],
  },
  {
    title: 'Backend & Tools',
    icon: '⬢',
    color: '#7c3aed',
    skills: [
      { name: 'PHP', level: 70 },
      { name: 'Git / GitHub', level: 65 },
      { name: 'MySQL', level: 60 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: '◈',
    color: '#06d6a0',
    skills: [
      { name: 'Prozessanalyse', level: 100 },
      { name: 'Digitalisierung', level: 80 },
      { name: 'Projektmanagement', level: 80 },
      { name: 'Problemlösung', level: 75 },
    ],
  },
]

const tools = [
  'VS Code', 'GitHub', 'Figma', 'WordPress',
  'Chrome DevTools', 'Notion', 'Docker', 'phpMyAdmin', 'FileZilla' , 'tailwindcss',
]

function SkillBar({ name, level, color, index }) {
  const barRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (barRef.current) {
                barRef.current.style.width = level + '%'
              }
            }, index * 100)
          }
        })
      },
      { threshold: 0.5 }
    )
    if (barRef.current) observer.observe(barRef.current.parentElement)
    return () => observer.disconnect()
  }, [level, index])

  return (
    <div className="skill-row">
      <div className="skill-meta">
        <span className="skill-name">{name}</span>
        <span className="skill-level" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          ref={barRef}
          className="skill-bar-fill"
          style={{ '--bar-color': color, width: '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
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
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">
            <span className="mono">//</span> Skills
          </div>
          <h2 className="section-title">
            Womit ich<br />
            <em>arbeite.</em>
          </h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, ci) => (
            <div key={ci} className="skill-category reveal" style={{ '--cat-color': cat.color, transitionDelay: `${ci * 0.15}s` }}>
              <div className="skill-category-header">
                <span className="skill-category-icon" style={{ color: cat.color }}>{cat.icon}</span>
                <h3 className="skill-category-title">{cat.title}</h3>
              </div>
              <div className="skill-list">
                {cat.skills.map((s, si) => (
                  <SkillBar key={si} {...s} color={cat.color} index={si} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="tools-section reveal">
          <div className="tools-label">
            <span className="mono">tools =</span>
            <span style={{ color: 'var(--accent)' }}>[</span>
          </div>
          <div className="tools-grid">
            {tools.map((tool, i) => (
              <span key={i} className="tool-chip" data-hover>
                {tool}
              </span>
            ))}
          </div>
          <div className="tools-close">
            <span style={{ color: 'var(--accent)' }}>]</span>
          </div>
        </div>
      </div>
    </section>
  )
}
