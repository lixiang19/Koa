/*
 * @Author: lixiang
 * @Date: 2018-09-13 16:02:28
 * @LastEditors: lixiang
 * @LastEditTime: 2018-11-22 13:00:39
 * @Description: 控制层 收到路由请求后来这运行函数
 */
const timeRiverService = require('../service/timeRiver')

module.exports = {
  async getSomeday (ctx) {
    console.log('数据', ctx.user)
    let date = ctx.request.query.date
    let result = await timeRiverService.getSomeday(date)
    result ? ctx.ok({data: result}) : ctx.error({code: 'Bad Request', msg: '找不到数据'})
  },

  async newDay (ctx) {
    let date = ctx.request.body
    let result = await timeRiverService.newDay(date)
    ctx.ok({data: result, msg: '成功创立'})
  }
}
