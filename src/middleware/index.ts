import type Koa from 'koa'
// import path from 'path'
import koaCors from '@koa/cors'
// import koaStatic from 'koa-static'
import koaBodyParse from 'koa-bodyparser'

export default (app: Koa) => {
  app.use(
    koaCors({
      origin: '*',
      maxAge: 600,
      credentials: true
    })
  )
  // app.use(koaStatic(path.resolve(__dirname, '../public')))
  app.use(koaBodyParse())
}
