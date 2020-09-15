import simonObj from './components'
import './js/iconfont.js'

// 所有组件列表
const components = [simonObj.simonButton,simonObj.simonIcon]
// 定义install方法，接收Vue作为参数
const install = Vue => {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return
  install.installed = true
  // 遍历注册所有组件
  components.map(component => Vue.use(component))
}

// 检测到Vue才执行，毕竟我们是基于Vue的
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
console.log(components)

export default {
  install,
  // 所有组件，必须具有install，才能使用Vue.use()
  ...components
}


