import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Skills.css'

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    emoji: '🎨',
    skills: [
      { name: 'React.js',    level: 90, color: '#61dafb' },
      { name: 'JavaScript',  level: 88, color: '#f7df1e' },
      { name: 'HTML / CSS',  level: 92, color: '#e34f26' },
      { name: 'TypeScript',  level: 72, color: '#3178c6' },
      { name: 'Vite',        level: 85, color: '#646cff' },
    ]
  },
  {
    title: 'Backend',
    emoji: '⚙️',
    skills: [
      { name: 'Node.js',     level: 85, color: '#3c873a' },
      { name: 'Express.js',  level: 84, color: '#000000' },
      { name: 'MongoDB',     level: 80, color: '#4db33d' },
      { name: 'REST APIs',   level: 88, color: '#6366f1' },
      { name: 'JWT / Auth',  level: 78, color: '#22d3ee' },
    ]
  },
  {
    title: 'Tools & DevOps',
    emoji: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 88, color: '#f05032' },
      { name: 'VS Code',      level: 95, color: '#007acc' },
      { name: 'Postman',      level: 82, color: '#ff6c37' },
      { name: 'Vercel',       level: 80, color: '#000000' },
      { name: 'Docker',       level: 60, color: '#2496ed' },
    ]
  },
]

const TECH_ICONS = [
  { name: 'React',      icon: '⚛️' },
  { name: 'Node.js',   icon: '🟢' },
  { name: 'MongoDB',   icon: '🍃' },
  { name: 'Express',   icon: '🚀' },
  { name: 'JS',        icon: '🟨' },
  { name: 'TypeScript',icon: '🔷' },
  { name: 'Git',       icon: '🔀' },
  { name: 'Docker',    icon: '🐳' },
  { name: 'Vite',      icon: '⚡' },
  { name: 'Tailwind',  icon: '🎨' },
  { name: 'Postman',   icon: '📮' },
  { name: 'Vercel',    icon: '▲' },
]

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div ref={ref} className="skill-bar-item">
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          style={{ background: `linear-gradient(90deg, var(--primary), ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay * 0.08 + 0.3, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="section skills-section">
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.span>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          My <span className="gradient-text">Tech Stack</span>
        </motion.h2>

        {/* Icon marquee */}
        <div className="tech-marquee">
          <div className="tech-marquee-track">
            {[...TECH_ICONS, ...TECH_ICONS].map((t, i) => (
              <div key={i} className="tech-icon-chip">
                <span>{t.icon}</span>
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill bars grid */}
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="skill-category glass-card"
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: ci * 0.15 + 0.2, duration: 0.6 }}
            >
              <div className="category-header">
                <span className="category-emoji">{cat.emoji}</span>
                <h3 className="category-title">{cat.title}</h3>
              </div>
              <div className="skill-bars">
                {cat.skills.map((s, si) => (
                  <SkillBar key={s.name} {...s} delay={si + ci * 5} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
