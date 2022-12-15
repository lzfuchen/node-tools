/* eslint-disable */
import { Context } from 'koa'
import { exec } from 'child_process'

export async function push(ctx: Context, next: () => Promise<any>) {
  const { repository: { full_name = '' } = {}, head_commit: { message = '' } = {} } = (ctx.request.body ?? {}) as any

  if (message === 'deploy') {
    if (full_name === 'lzfuchen/blog') {
      // 执行脚本
      exec('sh /usr/local/src/myblog/docker-start-myblog.sh', (err, stdout, stderr) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(`stdout: ${stdout}`)
        console.log(`stderr: ${stderr}`)
      })
    } else if (full_name === 'lzfuchen/tools-server') {
      exec('sh ../../deploy.sh', (err, stdout, stderr) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(`stdout: ${stdout}`)
        console.log(`stderr: ${stderr}`)
      })
    }
  }
  ctx.body = ctx.$success()
}

export async function test(ctx: Context, next: () => Promise<any>) {
  ctx.body = ctx.$success('测试成功')
}
