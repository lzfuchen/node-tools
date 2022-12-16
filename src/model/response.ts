/* eslint-disable no-redeclare */
/* eslint-disable no-nested-ternary */
import { CommonCode, CommonMessage } from '@/constants'

export default class BaseResponse {
  success

  code

  message

  data

  constructor(code: number, message: string, data?: object) {
    this.success = code === CommonCode.SUCCESS
    this.code = code
    this.message = message
    this.data = data
  }

  /**
   * 统一成功响应实体
   * @method BaseResponse.success()
   * @method BaseResponse.success('注册成功')
   * @method BaseResponse.success({ name: '张三'})
   * @method BaseResponse.success([{ name: '张三' },{ name: '李四' }])
   * @method BaseResponse.success('查询成功', [{ name: '张三' },{ name: '李四' }])
   */
  static success(message?: string): BaseResponse
  static success(data?: object): BaseResponse
  static success(message?: string, data?: object): BaseResponse
  static success(message?: string | object, data?: object) {
    return new BaseResponse(
      CommonCode.SUCCESS,
      typeof message === 'string' ? message : CommonMessage.SUCCESS,
      typeof message === 'object' ? message : data
    )
  }

  /**
   * 统一成功响应实体
   * @method BaseResponse.fail()
   * @method BaseResponse.fail(-360)
   * @method BaseResponse.fail('注册失败')
   * @method BaseResponse.fail({ reason: '关联数据', list:[{ name: '张三' }]})
   * @method BaseResponse.fail(-360,'token已失效，请重新登录')
   * @method BaseResponse.fail(-360,{ reason: '你已经在别的地方登录', ip: 'xxxx' })
   * @method BaseResponse.fail('token已过期',{ reason: '你已经在别的地方登录', ip: 'xxxx' })
   * @method BaseResponse.fail(-360, 'token已过期',{ reason: '你已经在别的地方登录', ip: 'xxxx' })
   */
  static fail(code?: number): BaseResponse
  static fail(message?: string): BaseResponse
  static fail(data?: object): BaseResponse
  static fail(code?: number, message?: string): BaseResponse
  static fail(code?: number, data?: object): BaseResponse
  static fail(message?: string, data?: object): BaseResponse
  static fail(code?: number, message?: string, data?: object): BaseResponse
  static fail(code?: number | string | object, message?: string | object, data?: object) {
    return new BaseResponse(
      typeof code === 'number' ? code : CommonCode.FAILED,
      typeof code === 'string' ? code : typeof message === 'string' ? message : CommonMessage.FAILED,
      typeof code === 'object' ? code : typeof message === 'object' ? message : data
    )
  }
}

export type success = typeof BaseResponse.success
export type fail = typeof BaseResponse.fail
