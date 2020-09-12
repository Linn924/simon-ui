import Vue from 'vue'
import App from './App.vue'
// 引入组件
import simonui from '../packages'
Vue.use(simonui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
