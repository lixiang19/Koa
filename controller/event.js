const eventService = require('../service/event')

module.exports = {
  async newEvent (ctx) {
    let event = ctx.request.body
    let userDoc = `eventList${ctx.user._id}`
    let result = await eventService.newEvent(userDoc, event)
    ctx.ok({data: result, msg: '成功创立'})
  },
  async updateEvent (ctx) {
    let event = ctx.request.body
    let eventId = ctx.request.body._id
    let userDoc = `eventList${ctx.user._id}`
    let result = await eventService.updateEvent(userDoc, eventId, event)
    if (result && result.ok === 1) {
      ctx.ok({data: result, msg: '成功更新'})
    } else {
      ctx.error({msg: '更新失败', code: '2001', status: 400})
    }
  }
}
