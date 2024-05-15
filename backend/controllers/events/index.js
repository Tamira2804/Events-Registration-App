const { ctrlWrapper } = require('../../helpers')
const getAllEvents = require('./getAllEvents')

module.exports = {
  getAllEvents: ctrlWrapper(getAllEvents),
}
