/* eslint-disable */
import type { Context, Next } from 'koa'
import * as jwt from '@/services/jwt'

export async function register(ctx: Context, next: Next) {
  console.log('------>', ctx.request.body)
  const { _tk } = ctx.request.body ?? ({} as any)

  try {
    const res = await jwt.verify(_tk)
    console.log('----->', res)
    ctx.success('校验成功')
    console.log('------')
  } catch (error) {
    ctx.fail('没有登录1111')
  }
}

export async function login(ctx: Context, next: Next) {
  const token = jwt.createToken({ userId: 100001 })
  ctx.success('登录成功', { token })
}
