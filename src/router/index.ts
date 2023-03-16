import Koa from 'koa'
import requireDir from 'require-directory'
import jwt from '@/middleware/jwt'

function loaderRoutes(app: Koa, routes: Record<string, any>) {
  Object.keys(routes).forEach((name) => {
    const router = routes[name].default
    app.use(router.routes()).use(router.allowedMethods())
  })
}

export default (app: Koa) => {
  const noAuthRoutes: Record<string, any> = requireDir(module, './noauth', { include: /.ts$/, extensions: ['ts'] })
  const authRoutes: Record<string, any> = requireDir(module, './modules', { include: /.ts$/, extensions: ['ts'] })
  // 加载不用授权的路由
  loaderRoutes(app, noAuthRoutes)
  app.use(jwt)
  // 加载需要授权的路由
  loaderRoutes(app, authRoutes)
}
