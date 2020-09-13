<template>
  <div id="app">
    <simon-button type="default"></simon-button>
    <simon-button type="primary"></simon-button>
    <simon-button type="success"></simon-button>
    <simon-button type="info"></simon-button>
    <simon-button type="warning"></simon-button>
    <simon-button type="danger"></simon-button>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="less">
#app{
  background-color: #ccc;
}
.simon-button{
  margin: 0 10px;
}
</style>
