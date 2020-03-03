<!--  -->
<template>
  <div class="button-container">
    <z-header id="header" title="粘性布局">
      <template v-slot:left>
        <div class="left-wrap flex justify-center aligin-center" @click="$router.back()">
          <z-icon icon-name="i-left"></z-icon>
        </div>
      </template>
    </z-header>
    <z-body>
      <z-title title="默认"></z-title>
      <div :class="isSticky?'polyfill-height':''">
        <z-sticky :offsetTop="offsetTop" @scroll="scroll">
        <div class="flex justify-center aligin-center">
          <z-button type="custom">吸顶</z-button>
        </div>
      </z-sticky>
      </div>  
      
      <div class="test1">
        <z-menu-item title="菜单1"></z-menu-item>
        <z-menu-item title="菜单2"></z-menu-item>
        <z-menu-item title="菜单3"></z-menu-item>
      </div>
    </z-body>
  </div>
</template>

<script>
import ZSticky from '../../components/base/z-sticky.vue'
import ZButton from '../../components/base/z-button.vue'
export default {
  components: { ZSticky, ZButton },
  data() {
    return {
      offsetTop: 0,
      isSticky: false
    }
  },
  computed: {},
  watch: {},
  methods: {
    scroll({ scrollTop, isSticky }) {
      this.isSticky = isSticky
    }
  },
  created() {},
  mounted() {
    let header = document.getElementById('header')
    this.offsetTop = header.offsetHeight
  },
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.button-container {
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
    display: flex;
    padding: 10px;
    * {
      margin-right: 20px;
    }
  }
  .test {
    height: 50px;
    background: red;
  }
  .test1 {
    height: 1000px;
  }
  .polyfill-height{
    height: 32px;
  }
}
</style>