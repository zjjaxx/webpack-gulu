<template>
  <header class="z-header border-bottom-1px" :style="c_style">
    <div class="left">
      <slot name="left">
        <div class="left-wrap flex justify-center aligin-center" @click="$router.back()">
          <z-icon icon-name="i-arrowleft"></z-icon>
          <span class="back">返回</span>
        </div>  
      </slot>
    </div>
    <div class="center flex justify-center aligin-center">
      <div class="title ellipsis" v-if="!customCenter">{{title}}</div>
      <template v-else>
        <slot name="center"></slot>
      </template>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: () => {
        return '标题'
      }
    },
    //   自定义中心内容
    customCenter: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    bg: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    c_style() {
      return { background: this.bg, color: this.bg ? '#fff' : '' }
    }
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.z-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  z-index: 220;
  background: #fff;
  box-sizing: border-box;
  .left {
    position: absolute;
    left: 15px;
    top: 0;
    height: 100%;
    z-index: 101;
    .left-wrap {
      height: 100%;
    }
    .back{
      margin-left: 5px;
      font-size: 16px;
      line-height: 45px;
    }
  }
  .center {
    width: 100%;
    height: 100%;
    .title {
      font-size: 16px;
      height: 100%;
      line-height: 45px;
      max-width: 150px;
    }
  }
  .right {
    position: absolute;
    right: 15px;
    top: 0;
    height: 100%;
    z-index: 101;
  }
}
</style>
