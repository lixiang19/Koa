const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dateListSchema = new Schema({
  date: {
    type: String,
    index: true,
    unique: true
  },
  items: [{
    tag: String,
    record: String,
    startTime: Number,
    endTime: Number,
    lengthTime: Number,
    icon: String
  }]
})

module.exports = dateListSchema
