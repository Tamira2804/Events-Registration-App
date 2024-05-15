const { Schema, model } = require('mongoose')

const eventSchema = new Schema(
  {
    title: { type: String, required: [true, 'Set title for event'] },
    description: { type: String },
    date: { type: Date, required: [true, 'Set date for event'] },
    organizer: { type: String, required: [true, 'Set organizer for event'] },
    participants: { type: Array, default: [] },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const Event = model('Event', eventSchema)

module.exports = Event
