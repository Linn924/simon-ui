// 暴露组件
import simonButton from './basic/button.vue'
import simonIcon from '../components/basic/icon.vue'
 
simonButton.install = vue => {
  vue.component(simonButton.name, simonButton)
}

simonIcon.install = vue => {
  vue.component(simonIcon.name, simonIcon)
}

var simonObj = {
  simonButton,
  simonIcon
}

export default simonObj