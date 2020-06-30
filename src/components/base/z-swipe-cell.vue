<!--  -->
<template>
  <div class="z-swipe-cell">
    <z-cell-item class="menu-item" title="单元格"></z-cell-item>
    <slot name="right">
      <div class="right-wrap flex">
        <z-button block size="large" type="custom">删除</z-button>
        <z-button block size="large"  bg="#07c160">收藏</z-button>
      </div>
    </slot>
    <slot name="left"></slot>
  </div>
</template>

<script>
import ZMenuItem from '../../components/base/z-cell-item.vue'
import ZButton from '../../components/base/z-button.vue'
export default {
  components: { ZMenuItem, ZButton },
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
.z-swipe-cell {
  position: relative;
  .menu-item{
      z-index: 10;
  }
  .right-wrap{
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 120px;
  }
}
</style>