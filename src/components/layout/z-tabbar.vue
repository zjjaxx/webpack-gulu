<template>
  <div :class="{'placeholder':isPlaceholder}">
    <div class="z-tabbar flex">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      activeColor: this.activeColor,
      inactiveColor: this.inactiveColor
    }
  },
  components: {},
  props: {
    //是否有占位符空间
    isPlaceholder: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    //激活颜色
    activeColor: {
      type: String,
      default: () => {
        return '#07c160'
      }
    },
    //未激活颜色
    inactiveColor: {
      type: String,
      default: () => {
        return '#000'
      }
    }
  },
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
.z-tabbar {
  position: fixed;
  left: 0;
  bottom: 0;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  width: 100%;
  height: calc(50px + constant(safe-area-inset-bottom));
  height: calc(50px + env(safe-area-inset-bottom));
  background: #fff;
  box-shadow: 0px 0px 1px -1px rgba(191, 191, 191, 1),
    0px 2px 3px 0px rgba(217, 217, 217, 1),
    0px 3px 6px 2px rgba(240, 240, 240, 1);
  box-sizing: border-box;
  z-index: 200;
}
.placeholder {
  &::after {
    display: block;
    content: ' ';
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    height: calc(50px + constant(safe-area-inset-bottom));
    height: calc(50px + env(safe-area-inset-bottom));
    box-sizing: border-box;
    z-index: 200;
  }
}
</style>