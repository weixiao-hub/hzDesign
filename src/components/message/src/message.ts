import type { IMessageParams } from './message.types'
import MessageComponent from './message.vue'
import { createVNode, render, RendererNode } from 'vue'

let id = 0
export const offsetMap = new Map()
const instance: RendererNode = []
const Message = (options: IMessageParams) => {
  const gap = 20
  const offsetTop = 20
  if (typeof options === 'string') {
    options = {
      message: options,
    }
  } else {
  }
  if (options.onlyOne && instance.length >= 1) return

  // 创建组件时，传入偏移量
  let offset = options.offset || offsetTop
  if (offsetMap.get(id - 1)) {
    offset = offsetMap.get(id - 1).offset
  }

  let userClose = options.onClose
  let opt = {
    ...options,
    offset,
    onClose: () => {
      userClose?.()
    },
  }

  //挂载元素
  // vue2 写法  new Vue(render:() => h(Message)).mount()

  //vue3 写法，先把组件变成虚拟节点,并传入数据
  const vm = createVNode(MessageComponent, opt as any)

  function move(index: number) {
    if (index > -1) {
      for (let i = index + 1; i < instance.length; i++) {
        instance[i].el!.style.top =
          parseInt(instance[i].el!.style.top) - offsetMap.get(index).height - gap + 'px'
      }
    }
    instance.splice(index, 1)
    id--
  }

  vm.props!.onDestory = () => {
    const index = instance.indexOf(vm)
    move(index)
    // 此render 函数会移除dom, vue2的协助不会移除。
    setTimeout(() => {
      render(null, div)
    }, 1000)
  }

  vm.props!.onHandleClose = () => {
    // 关闭时执行操作
  }

  const div = document.createElement('div')
  // 渲染组件
  render(vm, div)

  // 挂载组件
  document.body.appendChild(div.firstElementChild!)

  // 记录偏移量
  const height = vm.el!.offsetHeight
  offset += height + gap
  offsetMap.set(id, { offset, height })

  instance.push(vm)
  id++
}
export default Message
