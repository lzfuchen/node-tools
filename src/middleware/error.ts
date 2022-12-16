import type koa from 'koa'
import { CommonCode, CommonMessage } from '@/constants'

export default async (ctx: koa.Context, next: koa.Next) => {
  try {
    await next()
  } catch (error) {
    console.error('---->', error)
    ctx.fail(CommonCode.SERVER_ERROR, CommonMessage.SERVER_ERROR)
  }
}
