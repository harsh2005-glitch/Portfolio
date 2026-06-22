const router = require('express').Router()

router.get('/', (req, res) => res.json([]))
router.post('/', (req, res) => res.json({ message: 'Skills endpoint — coming soon' }))

module.exports = router
