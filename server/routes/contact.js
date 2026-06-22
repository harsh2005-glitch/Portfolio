const router = require('express').Router()
const nodemailer = require('nodemailer')
const Message = require('../models/Message')

router.post('/', async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' })
    }

    // Save to DB
    const msg = await Message.create({ name, email, subject, message })

    // Send email (optional — configure .env)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
      })
      await transporter.sendMail({
        from: `"Portfolio" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        subject: `📬 New message from ${name}: ${subject || 'No subject'}`,
        html: `
          <h2>New Portfolio Contact</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
          <hr/>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        `,
      })
    }

    res.status(201).json({ success: true, id: msg._id })
  } catch (err) {
    next(err)
  }
})

// Admin: get all messages
router.get('/', async (req, res, next) => {
  try {
    const msgs = await Message.find().sort({ createdAt: -1 })
    res.json(msgs)
  } catch (err) { next(err) }
})

module.exports = router
