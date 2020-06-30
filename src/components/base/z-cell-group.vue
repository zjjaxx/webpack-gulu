<!--  -->
<template>
  <div class="z-cell-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.z-cell-group /deep/ .menu-item-wrap:not(:last-child) {
  position: relative;
  &::after {
    content: ' ';
    position: absolute;
    left: 16px;
    bottom: 0;
    width: 100%;
    transform-origin: 0 bottom;
    border-bottom: 1px solid #eee;
    border-radius: 0;
  }
}
@media (min-resolution: 2dppx) {
  .z-cell-group /deep/ .menu-item-wrap:not(:last-child) {
    &::after {
      width: 200%;
      height: 200%;
      transform: scale(0.5, 0.5);
    }
  }
}
@media (min-resolution: 3dppx) {
  .z-cell-group /deep/ .menu-item-wrap:not(:last-child) {
    &::after {
      width: 300%;
      height: 300%;
      transform: scale(0.33, 0.33);
    }
  }
}
.z-cell-group {
}
</style>