<template>
    <div class="simon-btn-group">
        <slot></slot>
    </div>
</template>

<script>
export default {   
    name:'simonButtonGroup'
}
</script>

<style lang="less" scoped>
.simon-btn-group{
    display: inline-block;
}
.simon-btn-group>.simon-btn{
    margin: 0 0.8px;
}
.simon-btn-group>.simon-btn:first-child:not(:last-child){
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
}
.simon-btn-group>.simon-btn:last-child:not(:first-child){
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    margin-left: 0.5px;
}
.simon-btn-group>.simon-btn:not(:first-child):not(:last-child){
    border-radius: 0;
}
</style>