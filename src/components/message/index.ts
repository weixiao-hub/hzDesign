import Message from './src/message'
import type { App } from 'vue'
;(Message as any).install = function (app: App): void {
  // 兼容vue2写法，否则无法在this上使用
  app.config.globalProperties.$message = Message
}

function setupMessage(app: App): void {
  app.use(Message as any)
}

export default setupMessage
export { Message }
