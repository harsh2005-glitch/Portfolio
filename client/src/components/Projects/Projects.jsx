import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Layers } from 'lucide-react'

const GithubIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
import './Projects.css'

const PROJECTS = [
  {
    id: 1,
    title: 'WanderLust',
    description: 'A full-stack travel listing web application where users can explore, create, and manage travel destinations. Features user authentication, image uploads, reviews, and an interactive map — built with Node.js, Express, MongoDB, and EJS.',
    tags: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Passport.js', 'Cloudinary', 'Mapbox'],
    category: 'fullstack',
    github: 'https://github.com/harsh2005-glitch',
    live: 'https://github.com/harsh2005-glitch',
    emoji: '🌍',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)',
  },
  {
    id: 2,
    title: 'Sun Squad Solar',
    description: 'A professional solar energy company website built for Sun Squad Solar. Features service listings, solar product showcase, contact forms, and a clean modern UI to drive customer engagement for real-world solar installations.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Node.js'],
    category: 'frontend',
    github: 'https://github.com/harsh2005-glitch/Sun-Squad-Solar-Project',
    live: 'https://sunsquadsolar.in',
    emoji: '☀️',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
  },
]

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Frontend', value: 'frontend' },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter)

  return (
    <section id="projects" ref={ref} className="section projects-section">
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
        >
          Projects
        </motion.span>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
        >
          Things I've <span className="gradient-text">Built</span>
        </motion.h2>

        <motion.p
          className="section-desc"
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          A selection of projects I've crafted — from MVPs to full-scale production apps.
        </motion.p>

        {/* Filter tabs */}
        <motion.div
          className="filter-tabs"
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {FILTERS.map(f => (
            <button
              key={f.value}
              className={`filter-tab ${filter === f.value ? 'active' : ''}`}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
              {filter === f.value && (
                <motion.span className="filter-pip" layoutId="filter-pip" />
              )}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                className="project-card glass-card"
                layout
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                {/* Card top gradient banner */}
                <div
                  className="project-banner"
                  style={{ background: project.gradient }}
                >
                  <span className="project-emoji">{project.emoji}</span>
                  <div className="project-banner-blur" />
                </div>

                {/* Card body */}
                <div className="project-body">
                  <div className="project-meta">
                    <Layers size={14} />
                    <span className="tag">{project.category}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  {/* Tags */}
                  <div className="project-tags">
                    {project.tags.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                      <GithubIcon />
                      Code
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="project-link project-link-live">
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
