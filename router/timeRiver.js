/*
 * @Author: lixiang
 * @Date: 2018-09-10 14:43:21
 * @LastEditors: lixiang
 * @LastEditTime: 2018-09-13 16:37:33
 * @Description: 时间流路由
 */
const router = require('koa-router')()

const timeRiverController = require('../controller/timeRiver')
router.get('/dayList/list', timeRiverController.getSomeday)
router.post('/dayList/list', timeRiverController.newDay)
router.put('/dayLIst/list', timeRiverController.updateDay)

module.exports = router
