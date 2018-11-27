/*
 * @Author: lixiang
 * @Date: 2018-09-13 15:45:38
 * @LastEditors: lixiang
 * @LastEditTime: 2018-11-26 22:50:09
 * @Description: 用户数据库操作
 */
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const user = {
  async register (userData) {
    let User = mongoose.model('User')
    userData.tags = [
      {name: '吃饭',
        icon: 'fas fa-utensils',
        children: []},
      {name: '睡觉',
        icon: 'fas fa-bed',
        children: []},
      {name: '交通',
        icon: 'fas fa-bus',
        children: []},
      {name: '娱乐',
        icon: 'fas fa-gamepad',
        children: []},
      {name: '学习',
        icon: 'fas fa-book',
        children: []},
      {name: '锻炼',
        icon: 'fas fa-dumbbell',
        children: []},
      {name: '社交',
        icon: 'fas fa-user-friends',
        children: []},
      {name: '工作',
        icon: 'fas fa-briefcase',
        children: []},
      {name: '其他',
        icon: 'fas fa-dizzy',
        children: []}
    ]
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
  },
  async updateTags (userId, tags) {
    let User = mongoose.model('User')
    console.log(tags)
    let result = await User.findOneAndUpdate({'_id': userId}, {$set: {tags: tags}})
    return result
  }
}

module.exports = user
