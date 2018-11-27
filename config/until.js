// 排序函数由小到大
function compare (key) {
  return function (obj1, obj2) {
    let value1 = obj1[key]
    let value2 = obj2[key]
    return value1 - value2
  }
}
const time = {
  getTime (time) {
    let date = new Date(time)
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    let d = date.getDate()
    let h = date.getHours()
    let mn = date.getMinutes()
    // let s = date.getSeconds()
    m = m < 10 ? ('0' + m) : m
    d = d < 10 ? ('0' + d) : d
    h = h < 10 ? ('0' + h) : h
    mn = mn < 10 ? ('0' + mn) : mn
    // s = s < 10 ? ('0' + s) : s
    let dateNumber = parseInt(y.toString() + m.toString() + d.toString())
    let dateTime = `${y}年${m}月${d}日`
    let specificTime = `${h}:${mn}`
    return { dateTime, specificTime, dateNumber }
  },
  format (time) {
    let date = new Date(time)
    let h = date.getHours()
    let mn = date.getMinutes()

    h = h < 10 ? ('0' + h) : h
    mn = mn < 10 ? ('0' + mn) : mn
    let specificTime = `${h}:${mn}`
    return specificTime
  },
  getDayEnd (t) {
    let date = new Date(t)
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    let d = date.getDate()
    let time = new Date(y, m, d, 23, 59, 59).getTime()
    return time
  },
  getDayStart (t) {
    let date = new Date(t)
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    let d = date.getDate()
    let time = new Date(y, m, d, 0, 0, 0).getTime()
    return time
  },
  getWeekArray (t) {
    let d = new Date(t)
    let weekDay = d.getDay() === 0 ? 7 : d.getDay()
    let diff = 24 * 60 * 60 * 1000
    let arr = []
    for (weekDay; weekDay > 0; weekDay--) {
      let time = t - (weekDay - 1) * diff
      let date = new Date(time)
      arr.push(this.getTime(date).dateNumber)
    }
    return arr
  }
}
function groupBy (arr, property) {
  return arr.reduce(function (memo, x) {
    if (!memo[x[property]]) { memo[x[property]] = [] }
    memo[x[property]].push(x)
    return memo
  }, {})
}
module.exports = {
  compare,
  time,
  groupBy
}
