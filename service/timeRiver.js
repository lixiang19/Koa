/*
 * @Author: lixiang
 * @Date: 2018-09-13 15:45:38
 * @LastEditors: lixiang
 * @LastEditTime: 2018-11-27 17:30:42
 * @Description: 时间流数据库操作
 */
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
  async getSomeday (userDoc, data) {
    let EventList = mongoose.model(userDoc, eventSchema)
    let result = await EventList.find({'date': data}).sort({'startTime': 1})
    return result
  }
}

module.exports = timeRiver
