import Koa from 'koa'
import jwt from '@/middleware/jwt'
import webhook from './noauth/webhook'
import user from './noauth/user'
import tools from './noauth/tools'

export default (app: Koa) => {
  app.use(webhook.routes()).use(webhook.allowedMethods())
  app.use(user.routes()).use(user.allowedMethods())
  app.use(tools.routes()).use(tools.allowedMethods())
  app.use(jwt)
}
