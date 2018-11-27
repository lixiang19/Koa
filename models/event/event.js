const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
  date: String,
  tag: String,
  record: String,
  startTime: Number,
  endTime: Number,
  lengthTime: Number,
  icon: String
})

module.exports = eventSchema
