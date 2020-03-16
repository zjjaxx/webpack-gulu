<!--  -->
<template>
  <div class="z-menu-group">
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
.z-menu-group /deep/ .menu-item-wrap:not(:last-child) {
  border-bottom: 1px solid;
  border-image: svg(border-1px param(--color #ddd)) 1 stretch;
}
.z-menu-group {
}
</style>