/*
 * @Author: lixiang
 * @Date: 2018-09-13 16:02:28
 * @LastEditors: lixiang
 * @LastEditTime: 2018-11-27 17:30:10
 * @Description: 控制层 收到路由请求后来这运行函数
 */
let until = require('../config/until')
const timeRiverService = require('../service/timeRiver')

module.exports = {

  /**
   *获取某天数据
   *
   * @param {*} ctx
   */
  async getSomeday (ctx) {
    let data = ctx.request.query.date
    let userDoc = `eventList${ctx.user._id}`
    let result = await timeRiverService.getSomeday(userDoc, data)
    // result.sort(until.compare('startTime'))
    result.length === 0 ? ctx.error({code: '2000', msg: '找不到数据', status: 204}) : ctx.ok({data: result})
  }
}
