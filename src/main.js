import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js';
import '@/assets/font/font.css'

Vue.config.productionTip = false

// bus通信
export const eventBus = new Vue()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
