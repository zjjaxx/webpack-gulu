<!--  -->
<template>
  <div class="title-container">
    <z-header title="标题栏" bg="linear-gradient(45deg, #0081ff, #1cbbb4)">
    </z-header>
    <z-body>
      <z-title title="默认标题栏"></z-title>
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
.title-container {
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
  .test {
    padding: 20px;
    color: #f50;
  }
}
</style>