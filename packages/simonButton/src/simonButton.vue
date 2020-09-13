<template>
  <button :class="classList" :style="styleList">{{message}}</button>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'simonButton', // 注意这个name是必须的
  props:{//组件之间传值
    type: {
        type: String,
        default: () => {
            return 'default'
        }
    },
    disabled: {
        type: Boolean,
        default: () => {
            return false
        }
    }
  },
  computed:{
    classList(){
      let list = ['simon-button']

      switch (this.type) {
      case 'primary':
          list.push('primary')
          break
      case 'default':
          list.push('default')
          break
      case 'success':
          list.push('success')
          break
      case 'info':
          list.push('info')
          break
      case 'warning':
          list.push('warning')
          break
      case 'danger':
          list.push('danger')
          break
      }

      if(this.disabled){
        list.push('is-disabled')
      }
      return list
    },
    styleList () {
      let list = {}
      switch (this.type) {
        case 'primary':
            list['background'] = '#409EFF'
            break
        case 'default':
            list['background'] = '#fff'
            list['color'] = '#606266'
            break
        case 'success':
            list['background'] = '#67C23A'
            break
        case 'info':
            list['background'] = '#909399'
            break
        case 'warning':
            list['background'] = '#E6A23C'
            break
        case 'danger':
            list['background'] = '#F56C6C'
            break
      }
      return list
    },
    message(){
      var str = ''
      switch (this.type) {
        case 'primary':
            str = '主要按钮'
            break
        case 'default':
            str = '默认按钮'
            break
        case 'success':
            str = '成功按钮'
            break
        case 'info':
            str = '信息按钮'
            break
        case 'warning':
            str = '警告按钮'
            break
        case 'danger':
            str = '危险按钮'
            break
      }
      return str
    }
  },
  mounted(){
    // console.log($('button'))
    var btns = document.querySelectorAll('button')
    let arr = []
    //map方法调用者必须是数组 不能是伪数组 call方法 this指向btns
    arr.map.call(btns,item => {
      if(!item.classList.contains('is-disabled')){
        item.addEventListener('mouseover',() => {
          item.style.opacity = 0.8
        })
        item.addEventListener('mouseout',() => {
          item.style.opacity = 1
        })
      }

      if(item.classList.contains('default') && !item.classList.contains('is-disabled')){
        item.addEventListener('mouseover',() => {
          item.style.border = '1px solid #409EFF'
          item.style.backgroundColor = 'rgba(64,158,255,0.125)'
          item.style.color = '#409EFF'
        })
        item.addEventListener('mouseout',() => {
          item.style.border = 0
          item.style.backgroundColor = '#fff'
          item.style.color = '#606266'
        })
      }
    })
  }

}
</script>
<style lang="less" scoped>
button{
  width: 100px;
  height: 40px;
  font-size: 14px;
  color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
button:focus{outline: none;}
.is-disabled{
  opacity: 0.5;
  cursor: not-allowed;
}
</style>