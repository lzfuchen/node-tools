/* eslint-disable */
import Router from '@koa/router'
import { exec } from 'child_process'

const router = new Router({
  prefix: '/webhook'
})

router.post('/push', (ctx, next) => {
  const {
    hook,
    repository: { full_name = '' } = {},
    head_commit: { message = '' } = {}
  } = ctx.request.body ?? ({} as any)
  console.log('params', message, full_name, hook)
  if (message === 'deploy' && full_name === 'lzfuchen/blog') {
    console.log('=====执行脚本====')
    // 执行脚本
    exec('sh /usr/local/src/myblog/docker-start-myblog.sh', (err, stdout, stderr) => {
      if (err) {
        console.error(err)
        return
      }
      console.log('stdout: ' + stdout)
      console.log('stderr: ' + stderr)
    })
  }
  ctx.body = {
    success: true
  }
})

export default router
