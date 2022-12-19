/* eslint-disable prefer-spread */
import log4js from 'log4js'
import path from 'path'
import type koa from 'koa'
import { ENV_DEV } from '@/constants'

log4js.configure({
  appenders: {
    out: { type: 'stdout' },
    access: {
      type: 'dateFile',
      filename: path.resolve(__dirname, '../../../logs/access/access'),
      pattern: 'yyyy-MM-dd.log',
      maxLogSize: 1048576,
      numBackups: 100,
      alwaysIncludePattern: true
    },
    error: {
      type: 'dateFile',
      filename: path.resolve(__dirname, '../../../logs/error/error'),
      pattern: 'yyyy-MM-dd.log',
      maxLogSize: 1048576,
      numBackups: 100,
      alwaysIncludePattern: true
    }
  },
  categories: {
    default: { appenders: [ENV_DEV ? 'out' : 'access'], level: 'info' },
    access: { appenders: [ENV_DEV ? 'out' : 'access'], level: 'info' },
    error: { appenders: [ENV_DEV ? 'out' : 'error'], level: 'error' }
  }
})

const errorLogger = log4js.getLogger('error')
const accessLogger = log4js.getLogger('access')

export const logger = {
  info(...args: any) {
    accessLogger.info.apply(accessLogger, args)
  },
  error(...args: any) {
    errorLogger.error.apply(errorLogger, args)
  }
}

export default () => async (ctx: koa.Context, next: koa.Next) => {
  const { method, href, headers, query, rawBody } = ctx.request
  logger.info(`
------------------------------------
Address: ${href}
Http-Method: ${method}
Content-Type: ${ctx.request.get('Content-Type')}
payload: ${method === 'GET' ? JSON.stringify(query) : rawBody}
---------------------------------------------------
  `)
  await next()
  const { status } = ctx.response
  logger.info(`
------------------------------------
Response-Code: ${status}
Content-Type:${ctx.response.get('Content-Type')}
Payload: ${JSON.stringify(ctx.body)}
---------------------------------------------------
  `)
}
