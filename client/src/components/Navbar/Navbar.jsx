import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      // Active section detection
      const sections = NAV_LINKS.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="navbar-inner">
        {/* Logo */}
        <a className="navbar-logo" href="#hero" onClick={() => handleNav('#hero')}>
          <div className="logo-icon">
            <Code2 size={18} strokeWidth={2.5} />
          </div>
          <span className="logo-text">Portfolio<span className="logo-accent">.</span></span>
        </a>

        {/* Desktop links */}
        <ul className="navbar-links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <button
                className={`nav-link ${active === href.slice(1) ? 'active' : ''}`}
                onClick={() => handleNav(href)}
              >
                {label}
                <span className="nav-link-indicator" />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/resume.pdf"
          download
          className="btn btn-primary navbar-cta"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>

        {/* Mobile toggle */}
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.button
                key={href}
                className={`mobile-nav-link ${active === href.slice(1) ? 'active' : ''}`}
                onClick={() => handleNav(href)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.06 }}
              >
                {label}
              </motion.button>
            ))}
            <a href="/resume.pdf" download className="btn btn-primary mobile-resume">
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
