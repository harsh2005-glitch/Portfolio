import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, MapPin, Phone, CheckCircle, Loader } from 'lucide-react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import './Contact.css'

// ─── EmailJS credentials ───────────────────────────────────────────────────
// Fill these in after setting up your EmailJS account (see instructions below)
const EMAILJS_SERVICE_ID  = 'service_6bdpiwk'   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_h7wlvci'  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'DtVj-3zXsNUX4FnHX'   // e.g. 'abcDEFghiJKL'
// ────────────────────────────────────────────────────────────────────────────

const INFO = [
  { icon: Mail,   label: 'Email',    value: 'harshitmaurya849@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'India' },
  { icon: Phone,  label: 'Phone',    value: '+91 9044997538' },
]

export default function Contact() {
  const ref     = useRef(null)
  const formRef = useRef(null)
  const inView  = useInView(ref, { once: true, margin: '-80px' })
  const [form,   setForm]   = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | done

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields')
      return
    }
    if (
      EMAILJS_SERVICE_ID  === 'YOUR_SERVICE_ID' ||
      EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
      EMAILJS_PUBLIC_KEY  === 'YOUR_PUBLIC_KEY'
    ) {
      toast.error('EmailJS not configured yet — see Contact.jsx for instructions')
      return
    }
    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('done')
      toast.success("Message sent! I'll get back to you soon 🚀")
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('idle')
      toast.error('Failed to send. Please email me directly at harshitmaurya849@gmail.com')
    }
  }

  return (
    <section id="contact" ref={ref} className="section contact-section">
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
        >
          Contact
        </motion.span>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
        >
          Let's <span className="gradient-text">Work Together</span>
        </motion.h2>

        <motion.p
          className="section-desc"
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Have a project in mind? I'm open to freelance opportunities, internships,
          and full-time roles. Let's build something great together.
        </motion.p>

        <div className="contact-grid">
          {/* Info column */}
          <motion.div
            className="contact-info"
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="contact-info-card glass-card">
              <h3>Get in Touch</h3>
              <p>I usually respond within 24 hours. Don't be shy!</p>

              <div className="info-items">
                {INFO.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="info-item">
                    <div className="info-icon">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="info-label">{label}</div>
                      <div className="info-value">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative orb */}
              <div className="contact-orb" />
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <form ref={formRef} className="contact-form glass-card" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    id="name" name="name" type="text"
                    placeholder="John Doe"
                    value={form.name} onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="john@example.com"
                    value={form.email} onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject" name="subject" type="text"
                  placeholder="Project Inquiry / Job Opportunity"
                  value={form.subject} onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message" name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={form.message} onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={status === 'sending' || status === 'done'}
              >
                {status === 'idle' && <><Send size={16} /> Send Message</>}
                {status === 'sending' && <><Loader size={16} className="spin" /> Sending...</>}
                {status === 'done' && <><CheckCircle size={16} /> Sent!</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
