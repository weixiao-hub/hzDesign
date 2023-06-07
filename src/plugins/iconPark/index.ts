import { install } from '@icon-park/vue-next/es/all'
export default function setupIconPark(Vue: any) {
  install(Vue)
  // 前缀
  install(Vue, 'i')
}
