import { useEffect, useRef, useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Nav from './components/Nav'
import './App.css'

function App() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const [hovering, setHovering] = useState(false)

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
    <>
      <div ref={cursorRef} className={`cursor${hovering ? ' hovering' : ''}`} />
      <div ref={ringRef} className="cursor-ring" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <span className="footer-mono">© 2025 — Kurek</span>
            <span className="footer-mono footer-right">Made with React + Vite</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
