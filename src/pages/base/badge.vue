<!--  -->
<template>
  <div class="badge-container">
    <z-header title="数字角标">
      <template v-slot:left>
        <div class="left-wrap flex justify-center aligin-center" @click="$router.back()">
          <z-icon icon-name="i-left"></z-icon>
        </div>
      </template>
    </z-header>
    <z-body>
      <z-title title="默认角标"></z-title>
      <div class="default-wrap">
        <z-badge :badge="1"></z-badge>
        <z-badge :badge="10"></z-badge>
        <z-badge :badge="100"></z-badge>
      </div>
      <z-title title="角标+自定义背景"></z-title>
      <div class="default-wrap">
        <z-badge :badge="1" background="green"></z-badge>
        <z-badge :badge="10" background="gray"></z-badge>
        <z-badge :badge="100" background="#f50"></z-badge>
      </div>
    </z-body>
  </div>
</template>

<script>
import ZBadge from '../../components/base/z-badge.vue'
export default {
  components: { ZBadge },
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
.badge-container {
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
    * {
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>