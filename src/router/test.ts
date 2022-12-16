/* eslint-disable */
import Router from '@koa/router'
import * as webhook from '@/controllers/webhook'

const router = new Router({ prefix: '/test' })

router.post('/test', webhook.test)

export default router
