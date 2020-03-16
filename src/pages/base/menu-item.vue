<!--  -->
<template>
  <div class="menu-item-container">
    <z-header title="Cell单元格">
      <template v-slot:left>
        <div class="left-wrap flex justify-center aligin-center" @click="$router.back()">
          <z-icon icon-name="i-left"></z-icon>
        </div>
      </template>
    </z-header>
    <z-body>
      <z-title title="默认Cell单元格"></z-title>
      <z-menu-item title="个人信息"></z-menu-item>
      <z-title title="Cell单元格+路由link"></z-title>
      <z-menu-item title="地址管理" :path="{path:'/icon'}">
        <template v-slot:right>
          <z-icon icon-name="i-right"></z-icon>
        </template>
      </z-menu-item>
      <z-title title="Cell单元格+左边自定义"></z-title>
      <z-menu-item title="金华市婺城区">
        <template v-slot:left>
          <z-icon iconName="i-location"></z-icon>
        </template>
      </z-menu-item>
      <z-title title="Cell单元格+右边自定义"></z-title>
      <z-menu-item title="个人中心">
        <template v-slot:right>
          <span>跳转</span>
          <z-icon icon-name="i-right"></z-icon>
        </template>
      </z-menu-item>
    </z-body>
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
.menu-item-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  background: #fff;
  z-index: 210;
  .left-wrap {
    height: 100%;
  }
  .default-wrap {
    padding: 10px;
    * {
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>