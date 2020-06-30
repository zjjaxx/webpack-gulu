<!--  -->
<template>
  <div class="menu-item-container">
    <z-header
      leftArrow
      @leftEvent="$router.back()"
      title="Cell单元格"
      bg="linear-gradient(45deg, #0081ff, #1cbbb4)"
    ></z-header>

    <z-title title="默认Cell单元格"></z-title>
    <z-cell-item title="个人信息"></z-cell-item>
    <z-title title="路由link+右插槽自定义"></z-title>
    <z-cell-item title="地址管理" route :to="{path:'/icon'}">
      <template v-slot:right>
        <z-icon classPrefix="gulu" iconName="arrow-right"></z-icon>
      </template>
    </z-cell-item>
    <z-title title="Cell单元格+左边自定义"></z-title>
    <z-cell-item title="金华市婺城区">
      <template v-slot:left>
        <z-icon classPrefix="gulu" iconName="location"></z-icon>
      </template>
    </z-cell-item>
    <z-title title="CellGroup"></z-title>
    <z-cell-group>
      <z-cell-item title="个人头像">
        <template v-slot:right>
          <span class="name">张果果</span>
        </template>
      </z-cell-item>
      <z-cell-item title="性别">
        <template v-slot:right>
          <span class="name">女</span>
        </template>
      </z-cell-item>
      <z-cell-item title="手机号">
        <template v-slot:right>
          <span class="name">17855827436</span>
        </template>
      </z-cell-item>
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
.menu-item-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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