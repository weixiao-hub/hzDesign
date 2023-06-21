export function copyCode(value: string, callback?: Function): void {
  navigator.clipboard.writeText(value).then(
    (res) => {
      callback && callback()
      popup('复制成功')
    },
    (err) => {
      console.log(err)
      popup('复制失败')
    }
  )
}

export function popup(value: string): Function {
  return function () {
    const div = document.createElement('div')
    div.innerText = value
    div.className = 'popup'
    div.style.position = 'absolute'
    div.style.left = '50%'
    div.style.top = '5%'
    div.style.boxShadow = `0px 2px 2px rgba(0, 0, 0, 0.1)`
    div.style.transform = `translate(-50%,20px)`
    div.style.padding = '8px 12px'
    div.style.color = '#000'
    div.style.background = `#fff`
    div.style.border = '1px solid rgba(0,0,0,.3)'
    div.style.transition = 'all .3s'
    div.style.borderRadius = '0.4rem'
    document.body.appendChild(div)

    setTimeout(() => {
      div.style.transform = 'translate(-50%,0)'
    }, 1000)
    setTimeout(() => {
      document.body.removeChild(div)
    }, 1100)
  }
}
