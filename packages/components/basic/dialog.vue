<template>
    <transition name="dialog">
        <div class="dialog" :style="dialogStyle" v-show="isShowDialog">
            <div class="dialog-container" :style="styleList">
                <div class="dialog-header">
                    <div class="dialog-title">{{title}}</div>
                    <simon-icon icon-class="close" @click.native="closeDialog"
                        color="#979AA0" width="1em" height="1em"></simon-icon>
                </div>
                <slot></slot>
                <div class="dialog-footer">
                    <simon-button @click.native="cancel">{{cancelTxt}}</simon-button>
                    <simon-button @click.native="confirm" type="primary">{{confirmTxt}}</simon-button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import simonButton from './button.vue'
import simonIcon from './icon.vue'
export default {
    name:'simonDialog',
    props:{
        title:{
            type:String,
            default:'标题'
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
            default:'560px'
        },
        height:{
            type:String,
            default:'200px'
        },
        visible:{
            type:Boolean,
            default:false
        },
        mask:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            isShowDialog:false
        }
    },
    methods:{
        closeDialog(){
            this.cancel()
        },
        cancel(){
            this.$emit('cancel')
        },
        confirm(){
            this.$emit('confirm')
        }
    },
    watch:{
        visible(val){
            this.isShowDialog = val
        }
    },
    computed:{
        styleList(){
            let list = {}
            if(this.width){
                list['width'] = this.width
            }
            if(this.height){
                list['height'] = this.height
            }
            return list
        },
        dialogStyle(){
            let list = {}
            if(this.mask){
                list['backgroundColor'] = 'rgba(0,0,0,.5)'
            }
            return list
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
    justify-content: center;
    .dialog-container{
        margin-top: 15vh;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 10px 0 rgba(0,0,0,0.12);
        padding: 0 20px;
        .dialog-header{
            display: flex;
            justify-content: space-between;
            .dialog-title{
                color: #303133;
                font-size: 20px;
            }
        }
        .dialog-footer{
            display: flex;
            justify-content: flex-end;
            button:last-child{margin: 0 0 0 20px;}
        }
        >div{
            margin: 30px 0;
        }
    }
}
.dialog-enter-active,
.dialog-leave-active
{transition: all .2s;}

.dialog-enter,
.dialog-leave-to
{
    opacity: 0;
}
</style>