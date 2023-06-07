import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/index.less'
import setupPlugins from './plugins'
const app = createApp(App)
app.use(setupPlugins)
app.use(store).use(router).mount('#app')
