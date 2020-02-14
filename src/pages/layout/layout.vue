<!--  -->
<template>
  <div class="layout">
    <z-header title="布局"></z-header>
    <z-body>
      <z-menu-item title="导航栏" :path="{path:'/layout/header'}"></z-menu-item>
      <z-menu-item title="内容区" :path="{path:'/layout/body'}"></z-menu-item>
      <z-menu-item title="ROW-COL" :path="{path:'/layout/row-col'}"></z-menu-item>
    </z-body>
    <router-view></router-view>
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