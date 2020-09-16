// 暴露组件
import simonButton from './basic/button.vue'
import simonIcon from './basic/icon.vue'
import simonButtonGroup from './basic/buttonGroup.vue' 
import simonCard from './basic/card.vue'

simonButton.install = vue => {
  vue.component(simonButton.name, simonButton)
}

simonIcon.install = vue => {
  vue.component(simonIcon.name, simonIcon)
}

simonButtonGroup.install = vue => {
  vue.component(simonButtonGroup.name, simonButtonGroup)
}

simonCard.install = vue => {
  vue.component(simonCard.name, simonCard)
}

const simonObj = {
  simonButton,
  simonIcon,
  simonButtonGroup,
  simonCard
}

export default simonObj