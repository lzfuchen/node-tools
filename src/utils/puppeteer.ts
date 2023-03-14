import puppeteer from 'puppeteer-core'
import path from 'path'
import os from 'os'
import fs from 'fs'

function getExecutablePath() {
  const CHROMIUM_ROOT_PATH = path.resolve(__dirname, '../../chromium')
  switch (os.platform()) {
    case 'linux':
      return path.resolve(CHROMIUM_ROOT_PATH, './chrome-linux/chrome')
    case 'darwin':
      return path.resolve(CHROMIUM_ROOT_PATH, './chrome-mac/Chromium.app/Contents/MacOS/Chromium')
    default:
      return path.resolve(CHROMIUM_ROOT_PATH, './chrome-win/chrome.exe')
  }
}

export function launch() {
  if (!fs.existsSync(getExecutablePath())) {
    throw new Error('请下载chromium到项目根路径chromium下')
  }
  return puppeteer.launch({
    executablePath: getExecutablePath(),
    // 是否以无头模式运行浏览器
    headless: true,
    ignoreHTTPSErrors: true,
    timeout: 30000,
    args: [
      '--no-sandbox', // 为通常被沙箱处理的所有进程类型禁用沙箱
      '--disable-setuid-sandbox', // 禁用setuid沙箱(仅限Linux)
      '--single-process', // 在与浏览器相同的进程中运行渲染器和插件
      '--disable-web-security', // 不要强制执行同源策略
      '--disable-gpu', // GPU硬件加速
      '--disable-dev-shm-usage', // 禁止使用/dev/shm，防止内存不够用 (仅限Linux)
      '--no-first-run', // 跳过 First Run 任务
      '--no-zygote', // 禁止zygote进程fork子进程
      '--disable-popup-blocking', // 禁止popup
      '--disable-client-side-phishing-detection', // 禁止危险页面检测
      '--disable-extensions', // 禁用拓展
      '--ignore-certificate-errors' // 忽略证书错误
    ]
  })
}
