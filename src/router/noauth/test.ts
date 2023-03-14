/* eslint-disable */
import Router from '@koa/router'

const router = new Router({ prefix: '/test' })

router.get('/info', (ctx) => {
  ctx.success('测试成功')
})

export default router
