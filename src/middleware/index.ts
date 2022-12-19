import Koa from 'koa'
import koaCors from '@koa/cors'
import koaBodyParse from 'koa-bodyparser'
import path from 'path'
import koaStatic from 'koa-static'
import error from './error'
import response from './response'
import logger from './log'

export default (app: Koa) => {
  // 挂载响应方法
  app.use(response())
  // 错误处理
  app.use(error())
  // cors
  app.use(
    koaCors({
      origin: '*',
      maxAge: 600,
      credentials: true
    })
  )
  // body-parse
  app.use(koaBodyParse())
  // log
  app.use(logger())
  // 静态资源
  app.use(koaStatic(path.resolve(__dirname, '../public')))
}
