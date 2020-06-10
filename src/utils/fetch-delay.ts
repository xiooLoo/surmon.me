/**
 * @file 模拟延时器
 * @module services/fetch-delay
 * @author Surmon <https://github.com/surmon-china>
 */

import { DEFAULT_FETCH_DELAY } from '/@/config/app.config'

export const fetchDelay = (delay: number) => {
  // 一个卑鄙的手段
  delay = delay != null ? delay : DEFAULT_FETCH_DELAY
  const start = new Date().getTime()

  return (action: $TODO) => {
    // 卑鄙手段
    const end = new Date().getTime()
    const time = end - start
    const timeout = delay - time
    const isDelay = timeout > 0
    isDelay ? window.setTimeout(action, timeout) : action()
  }
}
