import { useEffect, useRef } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Max Mustermann',
    role: 'Vereinsvorstand TSG Move & Dance',
    text: 'Laurenz hat unsere Website komplett überarbeitet und ein professionelles E-Commerce-System implementiert. Die Mitglieder lieben die neue Benutzerfreundlichkeit!',
    avatar: '👤',
  },
  {
    name: 'Anna Schmidt',
    role: 'Projektmanagerin',
    text: 'Das Kassensystem für den Weihnachtsmarkt läuft einwandfrei. Laurenz denkt immer einen Schritt voraus und optimiert Prozesse effizient.',
    avatar: '👩‍💼',
  },
  {
    name: 'Thomas Weber',
    role: 'Geschäftsführer',
    text: 'Von der Idee bis zur Umsetzung – Laurenz liefert zuverlässig und kreativ. Unsere digitale Transformation war ein voller Erfolg.',
    avatar: '👨‍💼',
  },
]

function TestimonialCard({ testimonial, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className="testimonial-card reveal"
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <div className="testimonial-avatar">
        {testimonial.avatar}
      </div>
      <div className="testimonial-content">
        <p className="testimonial-text">"{testimonial.text}"</p>
        <div className="testimonial-author">
          <span className="testimonial-name">{testimonial.name}</span>
          <span className="testimonial-role">{testimonial.role}</span>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
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
    <section id="testimonials" className="testimonials" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">
            <span className="mono">//</span> Testimonials
          </div>
          <h2 className="section-title">
            Was andere<br />
            <em>sagen.</em>
          </h2>
          <p className="section-sub">
            Feedback von Kunden und Partnern.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}