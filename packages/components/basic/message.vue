<template>
    <transition name="message">
        <div class="message-container" :style="styleList" v-if="isShowMessage">
            <div class="icon-container">
                <div class="icon-container-success" v-if="type === 'success'">
                    <simon-icon icon-class="success" color="#67C23A" width="1em" height="1em"></simon-icon>
                </div>
                <div class="icon-container-error" v-if="type === 'error'">
                    <simon-icon icon-class="error" color="#F56C6C" width="1em" height="1em"></simon-icon>
                </div>
            </div>
            <span class="message-text">{{ text }}</span>
        </div>
    </transition>
</template>

<script>
import simonIcon from './icon.vue'
export default {
    name:'message',
    props:{
        type: {// type控制是成功还是失败
            type: String,
            default: 'error',
        },
        text: {// 弹窗的文字信息
            type: String,
            default: '',
        },
        isShowMessage: {// 弹窗是否显示
            type: Boolean,
            default: false,
        },
    },
    computed:{
        styleList(){
            let list = {}
            if(this.type == 'success'){
                list['backgroundColor'] = '#F0F9EB'
                list['border'] = '1px solid #E1F3D8'
                list['color'] = '#67C23A'
            }
            if(this.type == 'error'){
                list['backgroundColor'] = '#FEF0F0'
                list['border'] = '1px solid #FDE2E2'
                list['color'] = '#F56C6C'
            }
            return list
        }
    },
    data(){
        return {

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
.message-container {
    position: absolute;
    top: 5vh;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    width: 380px;
    padding: 0 30px;
    height: 50px;
    border-radius: 5px;
}
.message-text {
  margin-left: 10px;
  font-size: 14px;
}
.message-enter-active,
.message-leave-active
{transition: all .75s;}

.message-enter,
.message-leave-to{
    opacity: 0;
}
</style>