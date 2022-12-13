import Koa from 'koa'

import gitWebHook from './noauth/gitWebHook'

export default (app: Koa) => {
  app.use(gitWebHook.routes()).use(gitWebHook.allowedMethods())
}
