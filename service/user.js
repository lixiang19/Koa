/*
 * @Author: lixiang
 * @Date: 2018-09-13 15:45:38
 * @LastEditors: lixiang
 * @LastEditTime: 2018-11-23 17:42:30
 * @Description: 用户数据库操作
 */
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const user = {
  async register (userData) {
    let User = mongoose.model('User')
    userData.tags = {
      '交通': '', '睡觉': '', '吃饭': '', '娱乐': '', '学习': ''
    }
    let newUser = new User(userData)
    let result = await newUser.save()
    return result
  },
  async login (ctx, userData) {
    let User = mongoose.model('User')
    const result = await User.findOne({name: userData.name})
    if (!result) ctx.error({msg: '用户名错误', code: '1000', status: 400})
    let newUSer = new User()
    let isMatch = await newUSer.comparePassword(userData.password, result.password)
    if (!isMatch) ctx.error({msg: '密码错误', code: '1001', status: 400})
    const token = jwt.sign({
      name: result.userName,
      _id: result._id
    }, 'my_token', {expiresIn: '7 days'})
    return token
  },
  async getUserInfo (userId) {
    let User = mongoose.model('User')
    const result = await User.findById(userId)
    return {
      userName: result.userName,
      tags: result.tags
    }
  }
}

module.exports = user
