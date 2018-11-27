const router = require('koa-router')()
const timeRiver = require('./timeRiver')
const user = require('./user')
const eventList = require('./event')
const chart = require('./chart')

router.use('/timeRiver', timeRiver.routes())
router.use('/user', user.routes())
router.use('/eventList', eventList.routes())
router.use('/chart', chart.routes())
module.exports = router
