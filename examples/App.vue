<template>
  <div id="app">
    <div class="default">
      <simon-button>默认按钮</simon-button>
      <simon-button type="primary">主要按钮</simon-button>
      <simon-button type="success">成功按钮</simon-button>
      <simon-button type="info">信息按钮</simon-button>
      <simon-button type="warning">警告按钮</simon-button>
      <simon-button type="danger">危险按钮</simon-button>
    </div>
    <br>
    <div class="round">
      <simon-button round>默认按钮</simon-button>
      <simon-button type="primary" round>主要按钮</simon-button>
      <simon-button type="success" round>成功按钮</simon-button>
      <simon-button type="info" round>信息按钮</simon-button>
      <simon-button type="warning" round>警告按钮</simon-button>
      <simon-button type="danger" round>危险按钮</simon-button>
    </div>
    <br>
    <div class="disabled">
      <simon-button disabled>默认按钮</simon-button>
      <simon-button type="primary" disabled>主要按钮</simon-button>
      <simon-button type="success" disabled>成功按钮</simon-button>
      <simon-button type="info" disabled>信息按钮</simon-button>
      <simon-button type="warning" disabled>警告按钮</simon-button>
      <simon-button type="danger" disabled>危险按钮</simon-button>
    </div>
    <br>
    <div class="size">
      <simon-button>默认按钮</simon-button>
      <simon-button size="medium">中等按钮</simon-button>
      <simon-button size="small">小型按钮</simon-button>
      <simon-button size="mini">超小按钮</simon-button>
    </div>
    <br>
    <div class="custom">
      <simon-button color="#00cec9" fontColor="#fff" size="small" disabled>自定义颜色</simon-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      
    }
  }
}
</script>

<style lang="less">
#app{
  background-color: #ccc;
}
button{
  margin: 10px 10px;
}
</style>
