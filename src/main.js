import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
=======
>>>>>>> 955ad59d90991cb0f3bd92d4277d39d6b3f83ad5

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
