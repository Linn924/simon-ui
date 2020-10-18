<template>
  <div id="app">

    <!-- 默认按钮 -->
    <div class="default">
      <simon-button>默认按钮</simon-button>
      <simon-button type="primary">主要按钮</simon-button>
      <simon-button type="success">成功按钮</simon-button>
      <simon-button type="info">信息按钮</simon-button>
      <simon-button type="warning">警告按钮</simon-button>
      <simon-button type="danger">危险按钮</simon-button>
    </div>

    <!-- 圆角按钮 -->
    <div class="round">
      <simon-button round>默认按钮</simon-button>
      <simon-button type="primary" round>主要按钮</simon-button>
      <simon-button type="success" round>成功按钮</simon-button>
      <simon-button type="info" round>信息按钮</simon-button>
      <simon-button type="warning" round>警告按钮</simon-button>
      <simon-button type="danger" round>危险按钮</simon-button>
    </div>

    <!-- 禁用按钮 -->
    <div class="disabled">
      <simon-button disabled>默认按钮</simon-button>
      <simon-button type="primary" disabled>主要按钮</simon-button>
      <simon-button type="success" disabled>成功按钮</simon-button>
      <simon-button type="info" disabled>信息按钮</simon-button>
      <simon-button type="warning" disabled>警告按钮</simon-button>
      <simon-button type="danger" disabled>危险按钮</simon-button>
    </div>

    <!-- 定义按钮尺寸 -->
    <div class="size">
      <simon-button>默认按钮</simon-button>
      <simon-button size="medium">中等按钮</simon-button>
      <simon-button size="small">小型按钮</simon-button>
      <simon-button size="mini">超小按钮</simon-button>
    </div>

    <!-- 自定义按钮 -->
    <div class="custom">
      <simon-button bgColor="#00cec9" fontColor="#fff" size="small" disabled>自定义颜色</simon-button>
    </div>

    <!-- 带图标的按钮 -->
    <div class="icon">
      <simon-button type="primary">
        <simon-icon icon-class="share"></simon-icon>
      </simon-button>
      <simon-button type="primary">
        <simon-icon icon-class="search"></simon-icon>
      </simon-button>
      <simon-button type="primary">
        <simon-icon icon-class="edit"></simon-icon>
      </simon-button>
      <simon-button type="primary">
        <simon-icon icon-class="delete"></simon-icon>
      </simon-button>
      <simon-button type="primary">
        <simon-icon icon-class="check"></simon-icon>
      </simon-button>
      <simon-button type="primary">
        <simon-icon icon-class="letter"></simon-icon>
      </simon-button>
    </div>

    <!-- 按钮组 -->
    <div class="buttonGroup">
      <simon-button-group>
        <simon-button type="primary">
          <simon-icon icon-class="edit"></simon-icon>
        </simon-button>
        <simon-button type="primary">
          <simon-icon icon-class="delete"></simon-icon>
        </simon-button>
        <simon-button type="primary">
          <simon-icon icon-class="share"></simon-icon>
        </simon-button>
      </simon-button-group>
    </div>

    <!-- 卡片 -->
    <simon-card title="卡片名称">
      <simon-button type='primary'>按钮</simon-button>
      <div v-for="o in 4" :key="o">
        {{'列表内容 ' + o }}
      </div>
    </simon-card>

    <simon-card title="卡片名称" fontColor="#FFF" bgColor="#1e90ff" width="50vw">
      <simon-button type='primary' bgColor='#74b9ff'>按钮</simon-button>
      <div v-for="o in 4" :key="o">
        {{'列表内容 ' + o }}
      </div>
    </simon-card>

    <simon-button type='primary' @click.native="visible = true">展示dialog</simon-button>

    <!-- dialog -->
    <simon-dialog title="提示" cancelTxt="取消" confirmTxt="确认" width="560px" height="200px" 
      :visible="visible" @cancel="visible = false" @confirm="visible = false" :mask="true">
      <div>
        这是内容
      </div>
    </simon-dialog>


    <!-- 提示信息 -->
    <div>
      <simon-button type='primary' @click.native="success">点击显示正确信息</simon-button>
      <simon-button type='primary' @click.native="error">点击显示错误信息</simon-button>
    </div>
  
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        visible: false
      }
    },
    methods: {
      // clickCancel() {
      //   console.log('点击了取消')
      //   this.visible = false
      // },
      // clickConfirm() {
      //   console.log('点击了提交')
      //   this.visible = false
      // }
      success(){
        this.$message('success','这是一条成功信息',1000)
      },
      error(){
        this.$message('error','这是一条错误信息',1000)
      }
    }
  }

</script>

<style lang="less">
  #app {
    background-color: #ccc;
  }
  #app>div{margin: 20px 0;}
</style>
