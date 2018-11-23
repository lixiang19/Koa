/*
 * @Author: lixiang
 * @Date: 2018-09-13 15:45:38
 * @LastEditors: lixiang
 * @LastEditTime: 2018-11-23 16:30:28
 * @Description: 时间流数据库操作
 */
const mongoose = require('mongoose')
const dataListSchema = require('../models/timeRiver/DateList')
const timeRiver = {
  /**
   *
   *
   * @param {string} date 日期
   * @returns {object|null} 结果列表
   */
  async getSomeday (userDoc, data) {
    let DateList = mongoose.model(userDoc, dataListSchema)
    let result = await DateList.findOne({'date': data}).exec()
    return result
  },

  async newDay (userDoc, data) {
    let DateList = mongoose.model(userDoc, dataListSchema)
    let dateList = new DateList(data)
    let result = await dateList.save()
    return result
  },
  async updateDay (userDoc, data) {
    let _id = data._id
    let DateList = mongoose.model(userDoc, dataListSchema)
    let result = await DateList.replaceOne({_id: _id}, data)
    return result
  }
}

module.exports = timeRiver
