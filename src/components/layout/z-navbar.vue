<template>
  <div :class="{'placeholder':isPlaceholder}">
    <div class="z-navbar flex border-top-1px">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  provide(){
    return {
      activeColor:this.activeColor,
      inactiveColor:this.inactiveColor
    }
  },
  components: {
  },
  props: {
    //是否有占位符空间
    isPlaceholder: {
      type: Boolean,
      default: () => {
        return true;
      }
    },
    //激活颜色
    activeColor: {
      type: String,
      default: () => {
        return "#07c160";
      }
    },
    //未激活颜色
    inactiveColor: {
      type: String,
      default: () => {
        return "#000";
      }
    }
  },
  data() {
    return {};
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
<style lang='less' scoped>
.z-navbar {
  position: fixed;
  left: 0;
  bottom: 0;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  width: 100%;
  height: calc(50px + constant(safe-area-inset-bottom));
  height: calc(50px + env(safe-area-inset-bottom));
  background: #fff;
  box-sizing: border-box;
  z-index: 200;
}
.placeholder {
  &::after {
    display: block;
    content: " ";
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    height: calc(50px + constant(safe-area-inset-bottom));
    height: calc(50px + env(safe-area-inset-bottom));
    box-sizing: border-box;
    z-index: 200;
  }
}
</style>