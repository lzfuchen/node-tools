import puppeteer, { Browser } from 'puppeteer-core'
import genericPool, { Options, Factory } from 'generic-pool'
import { launch } from './puppetter'

type CustomBrowser = Browser & {
  $$useCount?: number
}

type PoolOptions = Options & {
  maxUses?: number
}

const defaultPoolOptions: PoolOptions = {
  maxUses: 2,
  testOnBorrow: true,
  idleTimeoutMillis: 3600000
}

export default function PuppeteerPool(options = defaultPoolOptions) {
  const { maxUses, ...poolOptions } = { ...defaultPoolOptions, ...options }

  const factory = {
    async create() {
      const browser: CustomBrowser = await launch()
      browser.$$useCount = 0
      return browser
    },
    destroy(browser) {
      return browser.close()
    },
    validate(browser) {
      return Promise.resolve(browser.$$useCount! < maxUses!)
    }
  } as Factory<CustomBrowser>

  const pool = genericPool.createPool(factory, poolOptions)
  const genericAcquire = pool.acquire.bind(pool)
  // 重写消费实例方法
  pool.acquire = () =>
    genericAcquire().then((browser) => {
      // eslint-disable-next-line
      browser.$$useCount! += 1
      return browser
    })
  return pool
}
