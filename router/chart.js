const router = require('koa-router')()

const chartController = require('../controller/chart')

router.get('/week', chartController.getWeek)
router.get('/tagLength', chartController.getTagLength)
module.exports = router
