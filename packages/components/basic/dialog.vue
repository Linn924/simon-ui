<template>
    <div class="dialog" v-show="showDialog">
        <div class="dialog-container" :style="styleList">
            <div class="dialog-header">
                <div class="dialog-title">{{title}}</div>
                <simon-icon icon-class="close" @click="closeDialog"></simon-icon>
            </div>
            <slot v-if="showDialog"></slot>
            <div class="dialog-footer">
                <simon-button @click="cancel">{{cancelTxt}}</simon-button>
                <simon-button @click="confirm" type="primary">{{confirmTxt}}</simon-button>
            </div>
        </div>
    </div>
</template>

<script>
import simonButton from './button.vue'
import simonIcon from './icon.vue'
export default {
    name:'simonDialog',
    props:{
        title:{
            type:String,
            default:'这是标题'
        },
        cancelTxt:{
            type:String,
            default:'取消'
        },
        confirmTxt:{
            type:String,
            default:'提交'
        },
        width:{
            type:String,
            default:'30vw'
        },
        visible:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            showDialog:false
        }
    },
    methods:{
        closeDialog(){
            this.showDialog = false
        },
        cancel(){
            this.$emit('cancel')
            this.closeDialog()
        },
        confirm(){
            this.$emit('confirm')
            this.closeDialog()
        }
    },
    computed:{
        styleList(){
            let list = {}
            if(this.width){
                list['width'] = this.width
            }
            return list
        }
    },
    watch:{
        visible(val){
            this.showDialog = val
        }
    }
}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.dialog{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: grid;
    height: 100vh;
    width: 100vw;
    place-content: center center;
    .dialog-container{
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 10px 0 rgba(0,0,0,0.12);
        // padding: 20px;
        .dialog-header{
            display: flex;
            justify-content: space-around;
        }
        .dialog-footer{
            display: flex;
            justify-content: space-around;
        }
    }
}
</style>