import Router from '@koa/router'

const router = new Router({
  prefix: '/webhook'
})

router.post('/push', (ctx, next) => {
  console.log(ctx.request.body)
  ctx.body = {
    success: true
  }
})

export default router
