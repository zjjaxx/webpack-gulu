<!--  -->
<template>
  <div class="swipe-cell-container">
    <div class="button-container">
      <z-header title="SwipeCell">
        <template v-slot:left>
          <div class="left-wrap flex justify-center aligin-center" @click="$router.back()">
            <z-icon icon-name="i-left"></z-icon>
          </div>
        </template>
      </z-header>
      <z-body>
        <z-title title="基础用法"></z-title>
        <z-swipe-cell></z-swipe-cell>
      </z-body>
    </div>
  </div>
</template>

<script>
import ZSwipeCell from '../../components/base/z-swipe-cell.vue'
export default {
  components: { ZSwipeCell },
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
.swipe-cell-container {
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
    display: flex;
    padding: 10px;
    * {
      margin-right: 20px;
    }
  }
}
</style>