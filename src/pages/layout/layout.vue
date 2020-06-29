<!--  -->
<template>
  <div class="layout">
    <z-header    leftArrow
      @leftEvent="$router.back()" title="布局" bg="linear-gradient(45deg, #0081ff, #1cbbb4)"></z-header>
    <z-menu-item title="导航栏" :path="{path:'/header'}"></z-menu-item>
    <z-menu-item title="tabbar 标签栏" :path="{path:'/tabbar'}"></z-menu-item>
    <z-menu-item title="Grid栅格" :path="{path:'/row-col'}"></z-menu-item>
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