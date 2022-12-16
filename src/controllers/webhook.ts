/* eslint-disable */
import { Context } from 'koa'
import path from 'path'
import { exec } from 'child_process'

export async function push(ctx: Context, next: () => Promise<any>) {
  const { repository: { full_name = '' } = {}, head_commit: { message = '' } = {} } = (ctx.request.body ?? {}) as any

  if (message === 'deploy') {
    if (full_name === 'lzfuchen/blog') {
      // 执行脚本
      exec(
        'sh myblog/docker-start-myblog.sh',
        {
          cwd: path.resolve(__dirname, '../../../')
        },
        (err, stdout, stderr) => {
          if (err) {
            console.error(err)
            return
          }
          console.log(`stdout: ${stdout}`)
          console.log(`stderr: ${stderr}`)
        }
      )
    } else if (full_name === 'lzfuchen/tools-server') {
      exec(
        `sh deploy.sh`,
        {
          cwd: path.resolve(__dirname, '../../')
        },
        (err, stdout, stderr) => {
          if (err) {
            console.error(err)
            return
          }
          console.log(`stdout: ${stdout}`)
          console.log(`stderr: ${stderr}`)
        }
      )
    }
  }
  ctx.success()
}

export async function test(ctx: Context, next: () => Promise<any>) {
  ctx.success('测试git deploy success3')
}
