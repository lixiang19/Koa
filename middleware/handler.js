/*
 * @Author: lixiang
 * @Date: 2018-09-05 14:50:40
 * @LastEditors: lixiang
 * @LastEditTime: 2018-11-21 23:33:40
 * @Description: 统一捕获内部错误
 */

module.exports = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = err
    ctx.app.emit('错误', err, ctx)
  }
}
