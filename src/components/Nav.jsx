import { useState, useEffect } from 'react'
import './Nav.css'

const links = [
  { label: 'Über mich', href: '#about' },
  { label: 'Projekte', href: '#projects' },
  { label: 'Skills', href: '#skills' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#" className="nav-logo">
          <span className="nav-logo-bracket">[</span>
          Kurek
          <span className="nav-logo-bracket">]</span>
        </a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {links.map((l, i) => (
            <li key={i}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>
                <span className="nav-link-num">0{i + 1}.</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`nav-burger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
