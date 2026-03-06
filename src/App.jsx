import { useEffect, useRef, useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Impressum from './components/Impressum'
import Datenschutz from './components/Datenschutz'
import Nav from './components/Nav'
import BackToTop from './components/BackToTop'
import { ThemeProvider } from './contexts/ThemeContext'
import './App.css'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
    </>
  )
}

function App() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const [hovering, setHovering] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX + 'px'
        ringRef.current.style.top = e.clientY + 'px'
      }
    }

    const handleHoverIn = () => setHovering(true)
    const handleHoverOut = () => setHovering(false)

    window.addEventListener('mousemove', moveCursor)
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', handleHoverIn)
      el.addEventListener('mouseleave', handleHoverOut)
    })

    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <ThemeProvider>
      <div ref={cursorRef} className={`cursor${hovering ? ' hovering' : ''}`} />
      <div ref={ringRef} className="cursor-ring" />
      <Nav />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-left">
              <span className="footer-mono">© 2025 — Kurek</span>
              <div className="footer-links">
                <Link to="/impressum" className="footer-link">Impressum</Link>
                <Link to="/datenschutz" className="footer-link">Datenschutz</Link>
              </div>
            </div>
            <div className="footer-right">
              <div className="footer-social">
                <a href="https://github.com/Kurekhimself" target="_blank" rel="noopener noreferrer" className="footer-social-link" data-hover>
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/laurenzszepan/" target="_blank" rel="noopener noreferrer" className="footer-social-link" data-hover>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v13H0V8zm7.5 0H12v1.8h.1c.6-1.1 2-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.7V21h-5V14.1c0-1.6 0-3.6-2.2-3.6-2.2 0-2.6 1.7-2.6 3.5V21h-5V8z"/></svg>
                </a>
              </div>
              <span className="footer-mono">Made with React + Vite</span>
            </div>
          </div>
        </div>
      </footer>
      <BackToTop />
    </ThemeProvider>
  )
}

export default App
