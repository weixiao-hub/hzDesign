import setupIconPark from './iconPark'
const setupPlugins = {
  install(Vue: any) {
    setupIconPark(Vue)
  }
}

export default setupPlugins
