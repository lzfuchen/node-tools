import type koa from 'koa'
import { verify } from '@/services/jwt'
import { CommonCode, CommonMessage } from '@/constants'

export default async (ctx: koa.Context, next: koa.Next) => {
  try {
    const { _tk } = ctx.request.body ?? ({} as any)
    if (!_tk) {
      ctx.fail(CommonCode.EXPIRE_TOKEN, '请先登录')
    }
    await verify(_tk)
    await next()
  } catch {
    ctx.fail(CommonCode.EXPIRE_TOKEN, CommonMessage.EXPIRE_TOKEN)
  }
}
