const mongoose = require('mongoose')
const eventSchema = require('../models/event/event')
const timeRiver = {

  /**
   *
   *通过日期来查询符合的所有结果
   * @param {*} userDoc
   * @param {*} data 日期字符串
   * @returns 对象数组
   */
  async getDateTagList (userDoc, date, tag) {
    let EventList = mongoose.model(userDoc, eventSchema)
    let result = await EventList.find({$and: [{'date': date}, {'tag': tag}]})
    return result
  },
  async getTagList (userDoc, tag) {
    let EventList = mongoose.model(userDoc, eventSchema)
    let result = await EventList.find({'tag': tag})
    return result
  }
}

module.exports = timeRiver
