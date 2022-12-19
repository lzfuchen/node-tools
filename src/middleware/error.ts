import type koa from 'koa'
import { CommonCode, CommonMessage } from '@/constants'
import { logger } from './log'

export default () => async (ctx: koa.Context, next: koa.Next) => {
  try {
    await next()
  } catch (error) {
    logger.error(error)
    ctx.fail(CommonCode.SERVER_ERROR, CommonMessage.SERVER_ERROR)
  }
}
