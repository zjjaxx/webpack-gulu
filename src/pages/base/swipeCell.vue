<!--  -->
<template>
  <div class="swipe-cell-container">
    <div class="button-container">
      <z-header
        leftArrow
        @leftEvent="$router.back()"
        title="SwipeCell"
        bg="linear-gradient(45deg, #0081ff, #1cbbb4)"
      ></z-header>

      <z-title title="基础用法"></z-title>
      <z-swipe-cell></z-swipe-cell>
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