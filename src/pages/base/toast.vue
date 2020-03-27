<!--
 * @Author: zjj
 * @Date: 2020-02-24 09:51:51
 * @LastEditors: zjj
 * @LastEditTime: 2020-02-24 14:15:47
 -->
<!--  -->
<template>
  <div class="toast-container">
    <z-header title="toast" bg="linear-gradient(45deg, #0081ff, #1cbbb4)"></z-header>
    <z-body>
      <z-title title="基础用法"></z-title>
      <div class="default-wrap">
        <z-button @click="showToast">默认toast</z-button>
      </div>
      <z-title title="溢出换行"></z-title>
      <div class="default-wrap">
        <z-button @click="showToastWrap">溢出换行</z-button>
      </div>
      <z-title title="加载提示"></z-title>
      <div class="default-wrap">
        <z-button @click="loadingToast">加载提示</z-button>
      </div>
    </z-body>
  </div>
</template>

<script>
import ZButton from "../../components/base/z-button.vue";
import Toast from "../../utils/toast/Toast"
export default {
  components: { ZButton },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    showToast() {
      Toast("默认 toast")
      // this.$toast("默认 toast");
    },
    showToastWrap() {
      Toast( "zui移动端UI组件库，模仿vant移动端组件库，仅供学习，不用于商业用途,版本v" +Math.random())
      // this.$toast(
      //   "zui移动端UI组件库，模仿vant移动端组件库，仅供学习，不用于商业用途,版本v" +
      //     Math.random()
      // );
    },
    loadingToast(){
      Toast.loading("加载中...")
    },
  },
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
};
</script>
<style lang='less' scoped>
.toast-container {
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