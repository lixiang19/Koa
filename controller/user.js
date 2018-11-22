/*
 * @Author: lixiang
 * @Date: 2018-09-13 16:02:28
 * @LastEditors: lixiang
 * @LastEditTime: 2018-11-21 20:17:20
 * @Description: 控制层 收到路由请求后来这运行函数
 */
const userService = require('../service/user')

module.exports = {
  async register (ctx) {
    let userData = ctx.request.body
    let result = await userService.register(userData)
    ctx.ok({data: result, msg: '成功创立'})
  },
  async login (ctx) {
    let userData = ctx.request.body
    let result = await userService.login(ctx, userData)
    if (result) {
      ctx.ok({data: result, msg: '登录成功'})
    }
  }
}
