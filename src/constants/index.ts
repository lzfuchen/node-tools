/**
 * @constant 通用的状态码
 */
export enum CommonCode {
  SUCCESS = 200,
  FAILED = -1,
  SERVER_ERROR = -100,
  EXPIRE_TOKEN = -200
}

export enum CommonMessage {
  SUCCESS = '请求数据成功',
  FAILED = '获取数据失败',
  SERVER_ERROR = '服务内部错误',
  EXPIRE_TOKEN = 'token已过期，请重新登录'
}
