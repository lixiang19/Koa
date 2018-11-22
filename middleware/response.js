/*
 * @Author: lixiang
 * @Date: 2018-09-07 12:28:54
 * @LastEditors: lixiang
 * @LastEditTime: 2018-11-21 15:37:35
 * @Description: 统一响应请求中间件
 */

module.exports = async (ctx, next) => {
  ctx.ok = ({data = {}, msg = '成功'}) => {
    ctx.status = 200
    ctx.body = {
      msg,
      data
    }
  }
  ctx.error = ({msg, code, status}) => {
    function ApiErr (msg, code, status) {
      this.msg = msg || '服务器错误'
      this.code = code || 'internal:unknown_error'
      this.status = status || 500
    }
    throw new ApiErr(msg, code, status)
  }
  await next()
}
