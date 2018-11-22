/*
 * @Author: lixiang
 * @Date: 2018-09-10 14:43:21
 * @LastEditors: lixiang
 * @LastEditTime: 2018-09-13 16:37:33
 * @Description: 用户路由
 */
const router = require('koa-router')()

const userController = require('../controller/user')

router.post('/register', userController.register)
router.post('/login', userController.login)

module.exports = router
