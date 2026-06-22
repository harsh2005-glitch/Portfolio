import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { User, MapPin, Calendar, Coffee } from 'lucide-react'
import './About.css'

const FACTS = [
  { icon: MapPin,    text: 'Varanasi' },
  { icon: Calendar,  text: 'CS Engineering Student' },
  { icon: Coffee,    text: 'Coffee → Code → Repeat' },
]

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i = 0) => ({
    y: 0, opacity: 1,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  })
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="section about-section">
      <div className="container">
        <motion.span
          className="section-label"
          variants={fadeUp} custom={0}
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
        >
          About Me
        </motion.span>

        <div className="about-grid">
          {/* Image column */}
          <motion.div
            className="about-image-wrapper"
            variants={fadeUp} custom={1}
            initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            <div className="about-image-frame glass-card" style={{ padding: 0 }}>
              <img 
                src="/profile.jpeg" 
                alt="Profile" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', borderRadius: 'inherit' }} 
              />
              <div className="about-image-glow" />
            </div>
            {/* Floating chips */}
            <motion.div
              className="float-chip chip-react"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              ⚛️ React Dev
            </motion.div>
            <motion.div
              className="float-chip chip-node"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              🟢 Node.js
            </motion.div>
          </motion.div>

          {/* Text column */}
          <div className="about-text">
            <motion.h2
              variants={fadeUp} custom={2}
              initial="hidden" animate={inView ? 'visible' : 'hidden'}
            >
              Crafting digital experiences
              <span className="gradient-text"> with purpose</span>
            </motion.h2>

            <motion.p
              variants={fadeUp} custom={3}
              initial="hidden" animate={inView ? 'visible' : 'hidden'}
            >
              I'm a passionate Full Stack Developer with a love for building clean,
              performant, and accessible web applications. My stack is centered around
              the MERN ecosystem, and I'm always exploring new tools to level up.
            </motion.p>

            <motion.p
              variants={fadeUp} custom={4}
              initial="hidden" animate={inView ? 'visible' : 'hidden'}
            >
              When I'm not coding, I'm learning system design, contributing to open
              source, or obsessing over UI details that most people never notice — but
              always appreciate.
            </motion.p>

            {/* Quick facts */}
            <motion.div
              className="about-facts"
              variants={fadeUp} custom={5}
              initial="hidden" animate={inView ? 'visible' : 'hidden'}
            >
              {FACTS.map(({ icon: Icon, text }) => (
                <div key={text} className="fact-item">
                  <Icon size={16} />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="about-actions"
              variants={fadeUp} custom={6}
              initial="hidden" animate={inView ? 'visible' : 'hidden'}
            >
              <a href="#contact" className="btn btn-primary">Hire Me</a>
              <a href="/resume.pdf" download className="btn btn-glass">Download CV</a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
