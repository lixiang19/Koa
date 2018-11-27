const mongoose = require('mongoose')
const eventSchema = require('../models/event/event')
const timeRiver = {
  async newEvent (userDoc, event) {
    let EventList = mongoose.model(userDoc, eventSchema)
    let eventList = new EventList(event)
    let result = await eventList.save()
    return result
  },
  async updateEvent (userDoc, eventId, event) {
    let EventList = mongoose.model(userDoc, eventSchema)
    // eventId = mongoose.Types.ObjectId(eventId)
    // console.log(eventId)
    let result = await EventList.replaceOne({'_id': eventId}, event)
    return result
  }
}

module.exports = timeRiver
