/* eslint-disable */
import Router from '@koa/router'
import * as webhook from '@/controllers/webhook'

const router = new Router({ prefix: '/webhook' })

router.post('/push', webhook.push)
router.get('/test', webhook.test)

export default router
