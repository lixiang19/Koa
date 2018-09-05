const Router = require('koa-router')
const mongoose = require('mongoose')

let router = new Router()

router.get('/list', async (ctx, next) => {
  try {
    let DateList = mongoose.model('DateList')
    let date = ctx.request.query.date
    let product = await DateList.findOne({'date': date}).exec()
    if (product === null) {
      ctx.body = {
        code: 200,
        message: '未找到'
      }
    } else {
      ctx.body = {
        code: 200,
        message: product
      }
    }
  } catch (err) {
    ctx.body = {
      code: 500,
      message: err
    }
  }
})

router.post('/list', async (ctx, next) => {
  try {
    let DateList = mongoose.model('DateList')
    console.log('ctx', ctx.request.body)
    let dateList = new DateList(ctx.request.body)
    let product = await dateList.save()
    ctx.body = {
      code: 200,
      id: product._id,
      message: '储存成功'
    }
  } catch (err) {
    console.log('err', err)
    ctx.body = {
      code: 500,
      message: err
    }
  }
})

router.post('/item', async (ctx, next) => {
  try {
    let DateList = mongoose.model('DateList')
    let product = await DateList.findById(ctx.request.body.id).exec()
    product.items.push(ctx.request.body.item)
    await product.save()
    ctx.body = {
      code: 200
    }
  } catch (error) {
    ctx.body = {
      code: 500,
      message: error
    }
  }
})
module.exports = router
