const Event = require('../../models/Event')

const getAllEvents = async (req, res, next) => {
  const events = await Event.find()
  console.log(events)
  res.status(200).json(events)
}

module.exports = getAllEvents
