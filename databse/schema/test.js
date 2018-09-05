// var mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/test')
// var db = mongoose.connection
// db.on('error', console.error.bind(console, '... connection error ...'))
// db.once('open', function callback () {
//   console.info('... db open ...')
// })
// const Schema = mongoose.Schema

// const dateListSchema = new Schema({
//   id: {type: Schema.Types.ObjectId},
//   date: {
//     type: String,
//     index: true,
//     unique: true
//   },
//   items: [{
//     id: {type: Schema.Types.ObjectId},
//     event: String,
//     date: String,
//     desc: String,
//     createAt: {type: Number, default: Date.now()},
//     tag: {
//       type: Array,
//       index: true
//     },
//     length: String
//   }]
// })
// var Test = mongoose.model('test', dateListSchema, 'test')
// let test = new Test({
//   date: '2018-07-29',
//   items: [{
//     event: '画画',
//     tag: [
//       '学习',
//       '绘画'
//     ]
//   }
//   ]
// })
// test.save()
// Test.update({'date': '2018-08-29'}, {$push: {items: {event: '学习',
//   tag: [
//     '编程',
//     '时间流'
//   ]}}}, function (err, res) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(res)
//   }
// })
// Test.findOne({'items._id': '5b866e7344fd94288878ab80'}, function (err, res) {
//   if (err) {
//     console.log(err)
//   }
//   console.log(res)
// })
// 查询特定id事件并返回本事件
// Test.findOne({'items._id': '5b866e7344fd94288878ab80'}, {'items.$': 1}, function (err, res) {
//   if (err) {
//     console.log(err)
//   }
//   console.log(res)
// })
// Test.findOne({'tag': '绘画'}, function (err, res) {
//   if (err) {
//     console.log(err)
//   }
//   console.log(res)
// })
const Koa = require('koa')

// 创建一个Koa对象表示web app本身:
const app = new Koa()

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
  console.log(`${ctx.request.method} ${ctx.request.url}`) // 打印URL
  await next() // 调用下一个middleware
})

app.use(async (ctx, next) => {
  const start = new Date().getTime() // 当前时间
  await next() // 调用下一个middleware
  const ms = new Date().getTime() - start // 耗费时间
  console.log('ms', ms)
})

app.use(async (ctx, next) => {
  await next()
  ctx.response.type = 'text/html'
  ctx.response.body = '<h1>Hello, koa2!</h1>'
})

// 在端口3000监听:
app.listen(3000)
console.log('app started at port 3000...')
