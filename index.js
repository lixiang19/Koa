const Koa = require('koa')
const koaJwt = require('koa-jwt')
const app = new Koa()
const { connect, initSchemas } = require('./models/init')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const routers = require('./router/index')

app.use(bodyParser())
app.use(cors())
app.use(require('./middleware/response.js'))
app.use(require('./middleware/handler.js'))

// 加载路由中间件

app.use(koaJwt({
  secret: 'my_token'
}).unless({
  path: [/\/register/, /\/login/]
}))
app.use(require('./middleware/verify.js'))
app.use(routers.routes())
app.use(routers.allowedMethods())

;(async () => {
  await connect()
  initSchemas()
})()
app.on('error', function (err) {
  console.log('logging error ', err.message)
  console.log(err)
})
app.listen(3000, () => {
  console.log('[Server] starting at port 3000')
})
