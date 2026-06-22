const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// In production, store admin credentials in DB + env
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@portfolio.dev'
const ADMIN_HASH  = process.env.ADMIN_HASH  || '$2a$10$examplehashchangethis'

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  if (email !== ADMIN_EMAIL) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }
  const valid = await bcrypt.compare(password, ADMIN_HASH)
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' })

  const token = jwt.sign({ email, role: 'admin' }, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '7d' })
  res.json({ token })
})

module.exports = router
