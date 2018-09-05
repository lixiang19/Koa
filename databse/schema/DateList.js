const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dateListSchema = new Schema({
  id: {type: Schema.Types.ObjectId},
  date: {
    type: String,
    index: true,
    unique: true
  },
  items: [{
    event: String,
    desc: String,
    stamp: String,
    date: String,
    start: String,
    length: String,
    tag: {
      type: String,
      index: true
    }
  }]
})

mongoose.model('DateList', dateListSchema)
