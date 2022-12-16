import type koa from 'koa'
import response from '@/model/response'

export default async (ctx: koa.Context, next: koa.Next) => {
  ctx.success = (...args: any) => {
    ctx.body = response.success(...args)
  }
  ctx.fail = (...args: any) => {
    ctx.body = response.fail(...args)
  }
  await next()
}
