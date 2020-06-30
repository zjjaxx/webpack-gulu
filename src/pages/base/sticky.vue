<!--  -->
<template>
  <div class="button-container">
    <z-header
      leftArrow
      @leftEvent="$router.back()"
      id="header"
      title="粘性布局"
      bg="linear-gradient(45deg, #0081ff, #1cbbb4)"
    ></z-header>

    <z-title title="默认"></z-title>
    <z-sticky :offsetTop="offsetTop" @scroll="scroll">
      <img class="img" src="../../assets/imgs/funny.gif" alt />
    </z-sticky>
    <div>
      <z-cell-group>
        <template v-for="(item,index) in 30">
          <z-cell-item :title="'菜单'+index" :key="index"></z-cell-item>
        </template>
      </z-cell-group>
    </div>
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
  .img {
    width: 100%;
    height: 300px;
  }
  .polyfill-height {
    height: 300px;
  }
}
</style>