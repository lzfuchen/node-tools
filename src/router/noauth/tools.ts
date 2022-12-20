/* eslint-disable */
import Router from '@koa/router'
import * as tools from '@/controllers/tools'

const router = new Router({ prefix: '/tools' })

router.get('/topdf', tools.topdf)

export default router
