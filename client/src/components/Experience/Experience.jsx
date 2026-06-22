import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import './Experience.css'

const TIMELINE = [
  {
    type: 'Education',
    title: 'Full Stack Web Development',
    org: 'Online',
    period: '2025',
    desc: 'Completed an intensive MERN stack course covering React, Express, MongoDB, and REST API design. Built 3 production-ready projects.',
    tags: ['MERN', 'REST', 'Authentication', 'Deployment'],
  },
  // {
  //   type: 'work',
  //   title: 'Full Stack Developer (Intern)',
  //   org: 'Tech Startup XYZ',
  //   period: 'Jun 2024 – Present',
  //   desc: 'Built and deployed MERN stack features, integrated third-party APIs, and improved app performance by 40%. Collaborated in agile sprints.',
  //   tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
  // },
  {
    type: 'Education',
    title: 'B.Tech Computer Science',
    org: 'Indian Institute of Engineering Science and technology , Shibpur',
    period: '2024 – 2028',
    desc: 'Studying core CS fundamentals — DSA, OS, DBMS, Networking. Maintaining a strong academic record while building real-world projects.',
    tags: ['DSA', 'DBMS', 'OS', 'Networking'],
  },
  // {
  //   type: 'work',
  //   title: 'Frontend Developer (Freelance)',
  //   org: 'Self-employed',
  //   period: 'Jan 2024 – May 2024',
  //   desc: 'Designed and developed responsive websites and dashboards for 5+ clients. Focused on clean UI, fast load times, and smooth UX.',
  //   tags: ['React', 'CSS', 'Figma', 'Vite'],
  // },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} className="section experience-section">
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
        >
          Experience
        </motion.span>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
        >
          My <span className="gradient-text">Journey</span>
        </motion.h2>

        <div className="timeline">
          {/* Center line */}
          <motion.div
            className="timeline-line"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          />

          {TIMELINE.map((item, i) => (
            <motion.div
              key={i}
              className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
              initial={{ x: i % 2 === 0 ? -60 : 60, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: i * 0.18 + 0.4, duration: 0.6 }}
            >
              {/* Dot */}
              <div className={`timeline-dot ${item.type === 'work' ? 'dot-work' : 'dot-edu'}`}>
                {item.type === 'work'
                  ? <Briefcase size={14} />
                  : <GraduationCap size={14} />
                }
              </div>

              {/* Card */}
              <div className="timeline-card glass-card">
                <div className="timeline-period">{item.period}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-org">{item.org}</div>
                <p className="timeline-desc">{item.desc}</p>
                <div className="timeline-tags">
                  {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
