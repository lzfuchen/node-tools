import Koa from 'koa'

import webhook from './noauth/webhook'

export default (app: Koa) => {
  app.use(webhook.routes()).use(webhook.allowedMethods())
}
