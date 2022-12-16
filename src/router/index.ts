import Koa from 'koa'
import jwt from '@/middleware/jwt'
import webhook from './noauth/webhook'
import user from './noauth/user'
import test from './test'

export default (app: Koa) => {
  app.use(test.routes()).use(test.allowedMethods())
  app.use(webhook.routes()).use(webhook.allowedMethods())
  app.use(user.routes()).use(user.allowedMethods())
  // app.use(jwt)
}
