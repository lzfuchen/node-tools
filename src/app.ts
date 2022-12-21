import Koa from 'koa'
import middleware from './middleware'
import router from './router'
import PuppeteerPool from './utils/puppeteerPool'

const app = new Koa()

app.context.puppeteerPool = PuppeteerPool()

// 中间件
middleware(app)
// 路由
router(app)
