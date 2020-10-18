<template>
    <div>
        <svg :class="classList" :style="styleList" aria-hidden="true">
            <use :xlink:href="iconName"></use>
        </svg>
    </div>
</template>

<script>
export default {
    name:'simonIcon',
    props: {
      iconClass: {
        type: String,
        required: true
      },
      color:{
        type:String,
        default:''
      },
      width:{
        type:String,
        default:''
      },
      height:{
        type:String,
        default:''
      },
  },
  computed: {
    classList(){
      let list = ['simon-icon']
      return list
    },
    iconName() {
      return `#icon-${this.iconClass}`
    },
    styleList(){
      let list = {}

      if(this.color){
        list['color'] = this.color
      }
      if(this.width){
        list['width'] = this.width
      }
      if(this.height){
        list['height'] = this.height
      }

      return list
    }
  },
}
</script>

<style lang="less" scoped>
.simon-icon {
    width: 1.2em;
    height: 1.2em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    cursor: pointer;
}
</style>