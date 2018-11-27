// function groupBy (arr, property) {
//   return arr.reduce(function (memo, x) {
//     if (!memo[x[property]]) { memo[x[property]] = [] }
//     memo[x[property]].push(x)
//     return memo
//   }, {})
// }
// var arr = [
//   {type: 'orange', title: 'First'},
//   {type: 'orange', title: 'Second'},
//   {type: 'banana', title: 'Third'},
//   {type: 'banana', title: 'Fourth'}
// ]
// var o = groupBy(arr, 'type') // => {orange:[...], banana:[...]}
// console.log(o)
let chartData = [ { tag: '学习', length: 0 }, { tag: '学习', length: 12560096 } ]
for (chartData.length; chartData.length < 7;) {
  chartData.push({ tag: '学习', length: 0 })
}
console.log(chartData)
