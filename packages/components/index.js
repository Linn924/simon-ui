// 暴露组件
import simonButton from './basic/button.vue'
import simonIcon from './basic/icon.vue'

simonButton.install = vue => {
  vue.component(simonButton.name, simonButton)
}
simonIcon.install = vue => {
  vue.component(simonIcon.name, simonIcon)
}
var obj = {simonButton,simonIcon}
export default obj