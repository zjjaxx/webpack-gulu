<!--  -->
<template>
  <div class="menu-item-container">
    <z-header title="Cell单元格" bg="linear-gradient(45deg, #0081ff, #1cbbb4)"></z-header>
    <z-body>
      <z-title title="默认Cell单元格"></z-title>
      <z-menu-item title="个人信息"></z-menu-item>
      <z-title title="Cell单元格+路由link"></z-title>
      <z-menu-item title="地址管理" :path="{path:'/icon'}">
        <template v-slot:right>
          <z-icon icon-name="i-arrow-right"></z-icon>
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
          <z-icon icon-name="i-arrow-right"></z-icon>
        </template>
      </z-menu-item>
      <z-title title="CellGroup"></z-title>
      <z-menu-group>
        <z-menu-item title="个人头像">
          <template v-slot:right>
            <span class="name">张果果</span>
          </template>
        </z-menu-item>
        <z-menu-item title="性别">
          <template v-slot:right>
            <span class="name">女</span>
          </template>
        </z-menu-item>
        <z-menu-item title="手机号">
          <template v-slot:right>
            <span class="name">17855827436</span>
          </template>
        </z-menu-item>
      </z-menu-group>
    </z-body>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
};
</script>
<style lang='less' scoped>
.menu-item-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  .name {
    color: #999;
    font-size: 14px;
  }
}
</style>