<template>
    <header class="z-header border-bottom-1px">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center flex justify-center aligin-center">
            <div class="title  ellipsis " v-if="!customCenter">{{title}}</div>
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
        return "标题";
      }
    },
    //   自定义中心内容
    customCenter: {
      type: Boolean,
      default: () => {
        return false;
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
.z-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  z-index: 200;
  background: #fff;
  box-sizing: border-box;
  .left {
    position: absolute;
    left: 15px;
    top: 0;
    height: 100%;
    z-index: 101;
  }
  .center {
    width: 100%;
    height: 100%;
    .title{
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
