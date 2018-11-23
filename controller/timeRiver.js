/*
 * @Author: lixiang
 * @Date: 2018-09-13 16:02:28
 * @LastEditors: lixiang
 * @LastEditTime: 2018-11-23 17:48:23
 * @Description: 控制层 收到路由请求后来这运行函数
 */
const timeRiverService = require('../service/timeRiver')

module.exports = {

  async getSomeday (ctx) {
    let data = ctx.request.query.date
    let userDoc = `dateList${ctx.user._id}`
    let result = await timeRiverService.getSomeday(userDoc, data)
    result ? ctx.ok({data: result}) : ctx.error({code: '2000', msg: '找不到数据', status: 404})
  },

  async newDay (ctx) {
    let data = ctx.request.body
    let userDoc = `dateList${ctx.user._id}`
    let result = await timeRiverService.newDay(userDoc, data)
    ctx.ok({data: result, msg: '成功创立'})
  },

  async updateDay (ctx) {
    let data = ctx.request.body
    let userDoc = `dateList${ctx.user._id}`
    let result = await timeRiverService.updateDay(userDoc, data)
    result.n === 1 ? ctx.ok({data: result, msg: '更新成功'}) : ctx.error({code: '2001', msg: '更新失败'})
  }
}
