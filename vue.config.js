// vue.config.js
const path = require('path');
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({ /* options */ }),
    ],
  },
  chainWebpack:(config) => {
    config.resolve.alias.set('@',path.resolve(__dirname,'src'))
  }
}