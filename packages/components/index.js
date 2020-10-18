// 暴露组件
import simonButton from './basic/button.vue'
import simonIcon from './basic/icon.vue'
import simonButtonGroup from './basic/buttonGroup.vue' 
import simonCard from './basic/card.vue'
import simonDialog from './basic/dialog.vue'
import message from './basic/message.vue'

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

simonDialog.install = vue => {
  vue.component(simonDialog.name, simonDialog)
}

const simonMessage = {
  install : Vue => {
      // 将Vue组件利用Vue.extend方法变成一个组件构造器，相当于一个类
      const msgConstructor = Vue.extend(message)
      // 实例化这个组件
      const instance = new msgConstructor()
      // 将组件实例挂在到一个元素上面，如果不传参数就是挂载到body，或者也可以传入其他已经存在的元素的选择器
      instance.$mount(document.createElement('div'))
      // 通过组件实例的$el属性，可以访问到这个组件元素，然后把它拼接到body上。
      document.body.appendChild(instance.$el)
      
      Vue.prototype.$message = (type,text, duration = 1500) => {
          // 给这个实例传入参数
          instance.type = type
          instance.text = text
          instance.isShowMessage = true
          // 设置一个延迟，过了时间弹窗消失
          setTimeout(() => {
              instance.isShowMessage = false
          }, duration)
      }
  }
}

const simonObj = {
  simonButton,
  simonIcon,
  simonButtonGroup,
  simonCard,
  simonDialog,
  simonMessage
}


export default simonObj