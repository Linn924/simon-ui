import Vue from 'vue'
import App from './App.vue'
import './assets/css/global.css'

// 引入组件
import simonui from '../packages'
Vue.use(simonui)

new Vue({
  render: h => h(App)
}).$mount('#app')
