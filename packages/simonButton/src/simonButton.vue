<template>
  <button :class="classList" :style="styleList">成功按钮</button>
</template>
<script>
export default {
  name: 'simonButton', // 注意这个name是必须的
  props:{
    type: {
        type: String,
        default: () => {
            return 'default'
        }
    },
    disabled: {
        type: Boolean,
        default () {
            return false
        }
    },
    color: {
        type: String,
        default () {
            return ''
        }
    },
  },
  computed:{
    classList(){
      let list = []
      switch (this.type) {
        case 'primary':
            list.push('primary')
            break
        case 'default':
            list.push('default')
            break
        case 'ghost':
            list.push('ghost')
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
      return list
    },
    styleList () {
      let list = {}
      if (this.color) {
          list['background'] = this.color
      }
      return list
    }
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
</style>