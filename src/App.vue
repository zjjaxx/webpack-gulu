
<!--
 * @Author: zjj
 * @Date: 2020-01-20 16:42:20
 * @LastEditors  : zjj
 * @LastEditTime : 2020-01-22 15:33:56
 -->
<!--  -->
<template>
  <div id="app">
    <div class="test test1" :class="test">{{test}}</div>
    <span class="gulu">&#xe63a;</span>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      test: "33分为服费3"
    };
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
<style lang="less" scoped>
.test1{
  color: red;
}
</style>
