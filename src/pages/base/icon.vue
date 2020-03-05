<!--  -->
<template>
  <div class="icon-container">
    <z-header title="图标">
      <template v-slot:left>
        <div class="left-wrap flex justify-center aligin-center" @click="$router.back()">
          <z-icon iconName="i-left"></z-icon>
        </div>
      </template>
    </z-header>
    <z-body>
      <z-title title="图标 默认"></z-title>
      <div class="default-wrap flex">
        <div>
          <z-icon iconName="i-setting"></z-icon>
        </div>
      </div>
      <z-title title="图标 提示信息"></z-title>
      <div class="default-wrap flex">
        <z-icon iconName="i-setting" dot></z-icon>
        <z-icon iconName="i-setting" info="10"></z-icon>
        <z-icon iconName="i-setting" info="1"></z-icon>
      </div>
      <z-title title="图标 颜色填充"></z-title>
      <div class="default-wrap flex">
        <z-icon iconName="i-setting" color="#ee0a24" dot></z-icon>
      </div>
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
.default-wrap /deep/ .icon {
  height: 1.5em;
  width: 1.5em;
}
.icon-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% + 50px);
  background: #fff;
  z-index: 210;
  .left-wrap {
    height: 100%;
  }
  .default-wrap {
    padding: 10px;
    flex-wrap: wrap;
    * {
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>