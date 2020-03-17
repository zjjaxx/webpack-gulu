<!--  -->
<template>
  <div class="person-container">
    <z-header title="特炫组件" bg="linear-gradient(45deg, #0081ff, #1cbbb4)"></z-header>
    <z-body>
      <z-menu-item title="特炫按钮" :path="{path:'/superButton'}"></z-menu-item>
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
.person-container {
}
</style>