import jwt from 'jsonwebtoken'

const PRIVATE_KEY = 'yigiaowoligiaogiao'
const AUTH_KEY = '_tk'

export const createToken = (payload: string | object | Buffer) => {
  return jwt.sign(payload, PRIVATE_KEY, { algorithm: 'HS512', expiresIn: '7d' })
}

export const verify = (token: string) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, PRIVATE_KEY, { algorithms: ['HS512'] }, (error, decoded) => {
      error ? reject(error) : resolve(decoded)
    })
  })
}
