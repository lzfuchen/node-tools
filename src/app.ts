import Koa from 'koa'
import middleware from './middleware'
import router from './router'

const app = new Koa()

// 中间件
middleware(app)
// 路由
router(app)

app.listen(3000, () => {
  console.log('server start on port: 3000')
})
