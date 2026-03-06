import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import './Nav.css'

const links = [
  { label: 'Über mich', id: 'about' },
  { label: 'Projekte', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Testimonials', id: 'testimonials' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  // Close menu on navigation and handle scrolling
  useEffect(() => {
    setMenuOpen(false)

    // Handle scrolling from location state (after cross-page navigation)
    if (location.pathname === '/' && location.state?.scrollTo) {
      const id = location.state.scrollTo
      // Clear state to prevent re-scrolling on refresh
      window.history.replaceState({}, document.title)
      setTimeout(() => scrollToSection(id), 100)
    }
  }, [location, scrollToSection])

  const handleLinkClick = (e, id) => {
    setMenuOpen(false)
    if (location.pathname === '/') {
      e.preventDefault()
      scrollToSection(id)
    } else {
      // For cross-page navigation, navigate to home and pass the target id in state
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav-inner container">
        <Link to="/" className="nav-logo">
          <span className="nav-logo-bracket">[</span>
          Kurek
          <span className="nav-logo-bracket">]</span>
        </Link>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {links.map((l, i) => (
            <li key={i}>
              <Link
                to="/"
                onClick={(e) => handleLinkClick(e, l.id)}
              >
                <span className="nav-link-num">0{i + 1}.</span>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className={`theme-toggle ${isDark ? 'dark' : 'light'}`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <span className="toggle-slider"></span>
          </button>

          <button
            className={`nav-burger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
