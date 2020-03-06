<!--  -->
<template>
  <div class="home">
    <z-header title="基本组件"></z-header>
    <z-body>
      <z-menu-item title="按钮" :path="{path:'/home/button'}"></z-menu-item>
      <z-menu-item title="标题栏" :path="{path:'/home/title'}"></z-menu-item>
      <z-menu-item title="图标" :path="{path:'/home/icon'}"></z-menu-item>
      <z-menu-item title="Cell单元格" :path="{path:'/home/menuItem'}"></z-menu-item>
      <z-menu-item title="输入框" :path="{path:'/home/input'}"></z-menu-item>
      <z-menu-item title="Toast" :path="{path:'/home/toast'}"></z-menu-item>
      <z-menu-item title="对话框" :path="{path:'/home/dialog'}"></z-menu-item>
      <z-menu-item title="粘性布局" :path="{path:'/home/sticky'}"></z-menu-item>
      <z-menu-item title="Tab标签页" :path="{path:'/home/tabs'}"></z-menu-item>
      <z-menu-item title="Popup弹出层" :path="{path:'/home/popup'}"></z-menu-item>
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
.home {
  position: relative;
  height: 100%;
}
</style>