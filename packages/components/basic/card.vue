<template>
    <div class="simon-card" :style="styleList">
        <div v-if="title" class="simon-card-title">{{title}}</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'simonCard',
    props:{
        title:String,
        bgColor:{
            type:String,
            default: '#fff' 
        },
        fontColor:{
            type:String,
            default:'#555'
        },
        width:{
            type:String,
            default:''
        }
    },
    computed:{
        styleList(){
            let list = {}
            if(this.bgColor){
                list['backgroundColor'] = this.bgColor
            }
            if(this.fontColor){
                list['color'] = this.fontColor
            }
            if(this.title){
                list['padding'] = '0 1rem 0.5rem 1rem!important'
            }
            if(this.width){
                list['width'] = this.width
            }
            return list
        }
    }

}
</script>

<style lang="less" scoped>
.simon-card{
    background: #fff;
    font-size: .8rem;
    padding: .5rem 1rem;
    margin-bottom: .5rem;
    border-radius: 2px;
    box-shadow: 0px 2px 12px 0 rgba(0,0,0,.1);
}
.simon-card-title {
    font-size: 1rem;
    margin: 1rem -1rem;
    padding: 1rem 1rem;
    border-bottom: 1px solid rgba(0,0,0,0.1);
}
</style>