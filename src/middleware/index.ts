/* eslint-disable no-param-reassign */
import Koa from 'koa'
import koaCors from '@koa/cors'
import koaBodyParse from 'koa-bodyparser'
import Response from '@/model/response'
// import path from 'path'
// import koaStatic from 'koa-static'

export default (app: Koa) => {
  // 挂载响应方法
  app.context.$success = Response.success
  app.context.$fail = Response.fail
  // cors
  app.use(
    koaCors({
      origin: '*',
      maxAge: 600,
      credentials: true
    })
  )
  // app.use(koaStatic(path.resolve(__dirname, '../public')))
  // body-parse
  app.use(koaBodyParse())
}
