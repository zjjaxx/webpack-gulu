<!--  -->
<template>
  <div class="icon-container">
    <z-header
      leftArrow
      @leftEvent="$router.back()"
      title="图标"
      bg="linear-gradient(45deg, #0081ff, #1cbbb4)"
    ></z-header>

    <z-title title="图标 默认"></z-title>
    <div class="default-wrap flex">
      <div>
        <z-icon size="20" classPrefix="gulu" iconName="wancheng"></z-icon>
      </div>
    </div>
    <z-title title="图标 提示信息"></z-title>
    <div class="default-wrap flex">
      <z-icon size="20" classPrefix="gulu" iconName="img" dot></z-icon>
      <z-icon size="20" classPrefix="gulu" iconName="img" info="10"></z-icon>
      <z-icon size="20" classPrefix="gulu" iconName="img" info="1"></z-icon>
    </div>
    <z-title title="图标 颜色填充"></z-title>
    <div class="default-wrap flex">
      <z-icon size="20" classPrefix="gulu" iconName="thumbs-up" color="#ee0a24" dot></z-icon>
    </div>
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
  height: 100%;
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