const router = require('express').Router()
const Project = require('../models/Project')

router.get('/', async (req, res, next) => {
  try {
    const { category } = req.query
    const filter = category && category !== 'all' ? { category } : {}
    const projects = await Project.find(filter).sort({ order: 1, createdAt: -1 })
    res.json(projects)
  } catch (err) { next(err) }
})

router.post('/', async (req, res, next) => {
  try {
    const project = await Project.create(req.body)
    res.status(201).json(project)
  } catch (err) { next(err) }
})

router.put('/:id', async (req, res, next) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(project)
  } catch (err) { next(err) }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await Project.findByIdAndDelete(req.params.id)
    res.json({ success: true })
  } catch (err) { next(err) }
})

module.exports = router
