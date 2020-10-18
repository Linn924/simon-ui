<template>
  <button 
    class="simon-btn" 
    :class="btnClass"
    :style="styleList">
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
// import $ from 'jquery'
export default {
  name: 'simonButton', // 注意这个name是必须的
  props:{//组件之间传值
    type:{
      type: String,
      default: 'default'
    },
    disabled:{
      type: Boolean,
      default: false
    },
    round:{
      type:Boolean,
      default: false
    },
    size:{
      type:String,
      default:''
    },
    bgColor: {
      type: String,
      default:''
    },
    fontColor: {
      type: String,
      default:'' 
    }
  },
  computed:{
    btnClass(){
      //初始状态下按钮的类名
      let list = [`simon-btn--${this.type}`]

      //切换圆角按钮
      if(this.round){
        //添加圆角按钮类
        list.push('round')
      }

      //切换禁用按钮
      if(this.disabled){
        list.push('disabled')
      }

      //切换按钮尺寸
      switch(this.size){
        case 'medium':
          list.push('simon-btn--medium')
          break
        case 'small':
          list.push('simon-btn--small')
          break
        case 'mini':
          list.push('simon-btn--mini')
          break
      }
      
      return list
    },
    styleList(){
      let list = {}
      if (this.bgColor) {
          list['background'] = this.bgColor
      }
      if (this.fontColor) {
          list['color'] = this.fontColor
      }
      return list
    }
  }
}
</script>
<style lang="less" scoped>
.simon-btn{
  display: inline-block;
  padding: 12px 20px;
  box-sizing: border-box;
  font-size: 14px;
  border: 1px solid #DCDFE6;
  color: #606266;
  background-color: #fff;
  border-radius: 4px;
  border: none;
  text-align: center;
  cursor: pointer;
  font-weight: 500;
  transition: .1s;
  &:focus{outline: none;}
}
.simon-btn--default{
  border: 1px solid #DCDFE6;
  &:hover{opacity: 0.8;}
}
.simon-btn--primary{
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover{opacity: 0.8;}
}
.simon-btn--success{
  color: #fff;
  background-color: #67C23A;
  border-color: #67C23A;
  &:hover{opacity: 0.8;}
}
.simon-btn--info{
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover{opacity: 0.8;}
}
.simon-btn--warning{
  color: #fff;
  background-color: #E6A23C;
  border-color: #E6A23C;
  &:hover{opacity: 0.8;}
}
.simon-btn--danger{
  color: #fff;
  background-color: #F56C6C;
  border-color: #F56C6C;
  &:hover{opacity: 0.8;}
}

.simon-btn.round{
  border-radius: 20px;
  padding: 12px 23px;
}

.simon-btn.disabled{
  opacity: 0.5;
  cursor: not-allowed;
}

.simon-btn--medium{
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.simon-btn--small{
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}
.simon-btn--mini{
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px;
}
</style>