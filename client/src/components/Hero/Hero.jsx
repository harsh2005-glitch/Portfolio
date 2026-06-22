import { useRef } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Sparkles } from 'lucide-react'
import HeroCanvas from './HeroCanvas'

const GithubIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
const LinkedinIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
const MailIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
import './Hero.css'

const SOCIALS = [
  { icon: GithubIcon, href: 'https://github.com/harsh2005-glitch', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/harshit-maurya-93ab18313?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
  { icon: MailIcon, href: 'mailto:harshitmaurya849@gmail.com', label: 'Email' },
]

const STATS = [
  { value: '2+', label: 'Projects Built' },
  { value: '-', label: 'Years Experience' },
  { value: '1', label: 'Certifications' },
]

export default function Hero() {
  const heroRef = useRef(null)

  return (
    <section id="hero" ref={heroRef} className="hero-section">
      {/* Three.js canvas */}
      {/* Three.js canvas now in Home.jsx */}

      {/* Decorative blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      <motion.div className="hero-content">
        {/* Badge */}
        <motion.div
          className="hero-badge"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <Sparkles size={14} />
          <span>Open to opportunities</span>
          <span className="badge-dot" />
        </motion.div>

        {/* Name */}
        <motion.h1
          className="hero-title"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          Hi, I'm{' '}
          <span className="gradient-text hero-name">Harshit Maurya</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          className="hero-role"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span className="role-prefix">I build </span>
          <TypeAnimation
            sequence={[
              'Full Stack Web Apps', 2500,
              'MERN Stack Projects', 2500,
              'Beautiful UI/UX', 2500,
              'Scalable APIs', 2500,
            ]}
            speed={55}
            deletionSpeed={70}
            repeat={Infinity}
            className="role-typed"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          className="hero-description"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6 }}
        >
          A passionate Full Stack Developer crafting modern, performant, and
          delightful web experiences using the MERN stack. Currently building
          things that matter.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="hero-actions"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a href="#projects" className="btn btn-primary hero-btn">
            View My Work
            <ArrowDown size={16} />
          </a>
          <a href="#contact" className="btn btn-glass hero-btn">
            Let's Talk
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="hero-socials"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.5 }}
        >
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="hero-stats"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          {STATS.map(({ value, label }) => (
            <div key={label} className="stat-item">
              <span className="stat-value gradient-text">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>


    </section>
  )
}
