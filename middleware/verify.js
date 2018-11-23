const jwt = require('jsonwebtoken')
const util = require('util')
const verify = util.promisify(jwt.verify)

module.exports = async (ctx, next) => {
  try {
    if (ctx.header.authorization) {
      const token = ctx.header.authorization
      if (token) {
        let payload = await verify(token.split(' ')[1], 'my_token')
        ctx.user = {
          name: payload.name,
          _id: payload._id
        }
        await next()
      } else {
        await next()
      }
    } else {
      await next()
    }
  } catch (error) {
    throw error
  }
}
