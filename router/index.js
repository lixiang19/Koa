const router = require('koa-router')()
const timeRiver = require('./timeRiver')
const user = require('./user')

router.use('/timeRiver', timeRiver.routes())
router.use('/user', user.routes())
module.exports = router
