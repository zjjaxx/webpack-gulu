<!--
 * @Author: zjj
 * @Date: 2020-01-21 08:58:23
 * @LastEditors  : zjj
 * @LastEditTime : 2020-01-21 14:08:34
 -->
<!--
 * @Author: zjj
 * @Date: 2020-01-20 16:42:20
 * @LastEditors  : zjj
 * @LastEditTime : 2020-01-21 09:34:49
 -->
<!--  -->
<template>
  <div id="app">
    <div class="test" :class="test">{{test}}</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      test:"33分为服费3"
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
<style scoped lang="less">
#app{
  height: 100%;
}
</style>