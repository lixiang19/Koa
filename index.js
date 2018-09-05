const Koa = require('koa')
const app = new Koa()
const { connect, initSchemas } = require('./databse/init.js')
// const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const Router = require('koa-router')

app.use(bodyParser())
app.use(cors())

let user = require('./appApi/user.js')
let dateList = require('./appApi/dateList.js')
// 装载所有子路由
let router = new Router()
router.use('/user', user.routes())
router.use('/dateList', dateList.routes())
// egg.js

// 加载路由中间件

app.use(router.routes())
app.use(router.allowedMethods())

;(async () => {
  await connect()
  initSchemas()
})()

app.use(async (ctx) => {
  ctx.body = '<h1>Hello Koa2</h1>'
})

app.listen(3000, () => {
  console.log('[Server] starting at port 3000')
})
