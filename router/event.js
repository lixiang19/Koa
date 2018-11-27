
const router = require('koa-router')()

const eventController = require('../controller/event')
router.post('/event', eventController.newEvent)
router.put('/event', eventController.updateEvent)
module.exports = router
