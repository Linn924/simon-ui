<template>
  <button :class="classList"><slot></slot></button>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'simonButton', // 注意这个name是必须的
  props:{//组件之间传值
    type:{
      type: String,
      default: () => {
          return 'default'
      }
    },
    disabled:{
      type: Boolean,
      default: () => {
        return false
      }
    },
    plain:{
      type:Boolean,
      default: () => {
        return false
      }
    },
    round:{
      type:Boolean,
      default: () => {
        return false
      }
    }
  },
  computed:{
    classList(){
      //初始状态下按钮的类名
      let list = ['simon-button',`simon-button--${this.type}`]

      //切换朴素按钮
      if(this.plain){
        //添加朴素按钮类
        list.push('plain')
      }

      //切换圆角按钮
      if(this.round){
        //添加朴素按钮类
        list.push('round')
      }

      //切换禁用按钮
      if(this.disabled){
        list.push('disabled')
      }
      
      return list
    }
  },
  mounted(){
    if(this.type === 'default' && this.plain && this.disabled){
      this.$el.style.color = '#606266'
      this.$el.style.background = '#fff'
      this.$el.style.border = '1px solid #dcdfe6'
    }
    if(this.type === 'primary' && this.plain && this.disabled){
      this.$el.style.color = '#409eff'
      this.$el.style.background = '#ecf5ff'
      this.$el.style.border = '1px solid #b3d8ff'
    }
    if(this.type === 'success' && this.plain && this.disabled){
      this.$el.style.color = '#67C23A'
      this.$el.style.background = '#f0f9eb'
      this.$el.style.border = '1px solid #c2e7b0'
    }
    if(this.type === 'info' && this.plain && this.disabled){
      this.$el.style.color = '#909399'
      this.$el.style.background = '#f4f4f5'
      this.$el.style.border = '1px solid #d3d4d6'
    }
    if(this.type === 'warning' && this.plain && this.disabled){
      this.$el.style.color = '#e6a23c'
      this.$el.style.background = '#fdf6ec'
      this.$el.style.border = '1px solid #f5dab1'
    }
    if(this.type === 'danger' && this.plain && this.disabled){
      this.$el.style.color = '#f56c6c'
      this.$el.style.background = '#fef0f0'
      this.$el.style.border = '1px solid #fbc4c4'
    }
  },
}
</script>
<style lang="less" scoped>
.simon-button{
  display: inline-block;
  padding: 12px 20px;
  box-sizing: border-box;
  font-size: 14px;
  border: 1px solid #dcdfe6;
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
.simon-button--default{
  &:hover{
    color:#409eff;
    background: #ecf5ff;
    border:1px solid #b3d8ff;
  }
}
.simon-button--primary{
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover{opacity: 0.8;}
}
.simon-button--success{
  color: #fff;
  background-color: #67C23A;
  border-color: #67C23A;
  &:hover{opacity: 0.8;}
}
.simon-button--info{
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover{opacity: 0.8;}
}
.simon-button--warning{
  color: #fff;
  background-color: #E6A23C;
  border-color: #E6A23C;
  &:hover{opacity: 0.8;}
}
.simon-button--danger{
  color: #fff;
  background-color: #F56C6C;
  border-color: #F56C6C;
  &:hover{opacity: 0.8;}
}
.simon-button--default.plain{
  &:hover{
    color:#409eff;
    background: #fff;
    border:1px solid #409eff;
  }
}
.simon-button--primary.plain{
  color:#409eff;
  background: #ecf5ff;
  border:1px solid #b3d8ff;
  &:hover{
    background:#409eff;
    color: #fff;
    border: 1px solid #409eff;
  }
}
.simon-button--success.plain{
  color:#67C23A;
  background: #f0f9eb;
  border:1px solid #c2e7b0;
  &:hover{
    background:#67C23A;
    color: #fff;
    border: 1px solid #67C23A;
  }
}
.simon-button--info.plain{
  color:#909399;
  background: #f4f4f5;
  border:1px solid #d3d4d6;
  &:hover{
    background:#909399;
    color: #fff;
    border: 1px solid #909399;
  }
}
.simon-button--warning.plain{
  color:#e6a23c;
  background: #fdf6ec;
  border:1px solid #f5dab1;
  &:hover{
    background:#e6a23c;
    color: #fff;
    border: 1px solid #e6a23c;
  }
}
.simon-button--danger.plain{
  color:#f56c6c;
  background: #fef0f0;
  border:1px solid #fbc4c4;
  &:hover{
    background:#f56c6c;
    color: #fff;
    border: 1px solid #f56c6c;
  }
}
.simon-button--default.round,
.simon-button--primary.round,
.simon-button--success.round,
.simon-button--info.round,
.simon-button--warning.round,
.simon-button--danger.round{
  border-radius: 20px;
  padding: 12px 23px;
}
.simon-button--default.disabled{
  opacity: 0.5;
  cursor: not-allowed;
  border: 1px solid #dcdfe6;
  color: #606266;
  background-color: #fff;
}
.simon-button--primary.disabled,
.simon-button--success.disabled,
.simon-button--info.disabled,
.simon-button--warning.disabled,
.simon-button--danger.disabled{
  opacity: 0.5;
  cursor: not-allowed;
}
</style>