<!--  -->
<template>
  <div class="layout">
    <z-header
      leftArrow
      @leftEvent="$router.back()"
      title="布局"
      bg="linear-gradient(45deg, #0081ff, #1cbbb4)"
    ></z-header>
    <z-cell-group>
      <z-cell-item route title="导航栏" :to="{path:'/header'}"></z-cell-item>
      <z-cell-item route title="tabbar 标签栏" :to="{path:'/tabbar'}"></z-cell-item>
      <z-cell-item route title="Grid栅格" :to="{path:'/row-col'}"></z-cell-item>
    </z-cell-group>
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
.layout {
  position: relative;
  height: 100%;
}
</style>