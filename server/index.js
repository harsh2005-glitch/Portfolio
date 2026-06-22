const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// Security
app.use(helmet())
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}))
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }))
app.use(express.json())

// MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err))

// Routes
app.use('/api/contact',  require('./routes/contact'))
app.use('/api/projects', require('./routes/projects'))
app.use('/api/skills',   require('./routes/skills'))
app.use('/api/auth',     require('./routes/auth'))

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok', ts: new Date() }))

// Error handler
app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).json({ error: err.message || 'Server error' })
})

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`))
