<template>
    <div>
        <svg class="simon-icon" aria-hidden="true">
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
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
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
}
</style>