import Router from '@koa/router'
import * as user from '@/controllers/user'

const router = new Router({ prefix: '/user' })

router.post('/register', user.register)
router.post('/login', user.login)

export default router
