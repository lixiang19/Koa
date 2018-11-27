let until = require('../config/until')
const chartService = require('../service/chart')
module.exports = {
  async getWeek (ctx) {
    let nowTime = parseInt(ctx.request.query.nowTime)
    let tag = ctx.request.query.tag
    let userDoc = `eventList${ctx.user._id}`
    let dateArray = until.time.getWeekArray(nowTime)
    let resultArray = []
    for (let index = 0; index < dateArray.length; index++) {
      const date = dateArray[index]
      let result = await chartService.getDateTagList(userDoc, date, tag)
      resultArray.push(result)
    }
    console.log(resultArray)
    let chartData = resultArray.map(function (element) {
      let length = element.reduce((accumulator, currentValue) => accumulator + currentValue.lengthTime
        , 0)
      length = parseInt(length / 60000)
      return length
    })
    for (chartData.length; chartData.length < 7;) {
      chartData.push(0)
    }
    ctx.ok({data: chartData, msg: '获取成功'})
  },
  async getTagLength (ctx) {
    let tag = ctx.request.query.tag
    let userDoc = `eventList${ctx.user._id}`
    let result = await chartService.getTagList(userDoc, tag)
    let length = result.reduce((accumulator, currentValue) => accumulator + currentValue.lengthTime
      , 0)
    ctx.ok({data: length, msg: '获取成功'})
  }
}
