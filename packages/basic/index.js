// 暴露组件
import simonButton from './src/button.vue'
simonButton.install = vue => {
  vue.component(simonButton.name, simonButton)
}
export default simonButton