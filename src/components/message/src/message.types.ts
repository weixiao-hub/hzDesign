type Itype = 'success' | 'error' | 'warning' | 'info'
export interface IMessageOptions {
  // 没弹出一个窗口，给他做一个标识
  id?: number
  message: string
  type?: Itype
  durations?: number
  center?: boolean
  onClose?: () => void
  offset?: number
  onlyOne?: boolean
  showClose?: boolean
  icon?: boolean
}

export type IMessageParams = IMessageOptions | string
