// 暴露组件
import simonButton from './basic/button.vue'
import simonIcon from './basic/icon.vue'
import simonButtonGroup from './basic/buttonGroup.vue' 

simonButton.install = vue => {
  vue.component(simonButton.name, simonButton)
}

simonIcon.install = vue => {
  vue.component(simonIcon.name, simonIcon)
}

simonButtonGroup.install = vue => {
  vue.component(simonButtonGroup.name, simonButtonGroup)
}

const simonObj = {
  simonButton,
  simonIcon,
  simonButtonGroup
}

export default simonObj