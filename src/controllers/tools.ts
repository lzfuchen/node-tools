import type { Context, Next } from 'koa'

export async function topdf(ctx: Context, next: Next) {
  let browser: any
  try {
    browser = await ctx.puppeteerPool.acquire()
    const [page] = await browser.pages()
    await page.goto('https://www.baidu.com')
    const pdfbuf = await page.pdf({
      format: 'a4',
      printBackground: true
    })
    ctx.response.set('Content-Disposition', 'attachment; filename=baidu.pdf')
    ctx.body = pdfbuf
  } catch (e) {
    console.log(e)
  } finally {
    browser && ctx.puppeteerPool.release(browser)
  }
}
