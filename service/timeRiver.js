/*
 * @Author: lixiang
 * @Date: 2018-09-13 15:45:38
 * @LastEditors: lixiang
 * @LastEditTime: 2018-09-13 18:58:47
 * @Description: 时间流数据库操作
 */
const mongoose = require('mongoose')
const timeRiver = {
  /**
   *
   *
   * @param {string} date 日期
   * @returns {object|null} 结果列表
   */
  async getSomeday (date) {
    let DateList = mongoose.model('DateList')
    let result = await DateList.findOne({'date': date}).exec()
    // let result = await DateList.findById(date).exec()
    return result
  },

  async newDay (date) {
    let DateList = mongoose.model('DateList')
    let dateList = new DateList(date)
    let result = await dateList.save()
    return result
  }
}

module.exports = timeRiver
