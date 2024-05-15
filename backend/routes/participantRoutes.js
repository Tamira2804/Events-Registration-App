const express = require('express')
const router = express.Router()
const Participant = require('../models/Participant')

router.post('/', async (req, res) => {
  const participant = new Participant({
    name: req.body.name,
    email: req.body.email,
    dob: req.body.dob,
    source: req.body.source,
    event: req.body.eventId,
  })
  try {
    const newParticipant = await participant.save()
    res.status(201).json(newParticipant)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

module.exports = router
