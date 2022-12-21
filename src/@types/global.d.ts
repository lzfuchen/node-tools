import type { BaseContext } from 'koa'

declare module 'koa' {
  interface BaseContext {
    success(message?: string | object, data?: object): void
    fail(code?: number | string | object, message?: string | object, data?: object): void
  }
}
