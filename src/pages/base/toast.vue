<!--
 * @Author: zjj
 * @Date: 2020-02-24 09:51:51
 * @LastEditors: zjj
 * @LastEditTime: 2020-02-24 14:15:47
 -->
<!--  -->
<template>
  <div class="toast-container">
    <z-header title="toast">
      <template v-slot:left>
        <div class="left-wrap flex justify-center aligin-center" @click="$router.back()">
          <z-icon icon-name="i-left"></z-icon>
        </div>
      </template>
    </z-header>
    <z-body>
      <z-title title="默认toast"></z-title>
      <div class="default-wrap">
          <z-button @click="showToast">默认toast</z-button>
           <z-button @click="showToastWrap">溢出换行</z-button>
      </div>
       <z-title title="不自动关闭toast"></z-title>
      <div class="default-wrap">
          <z-button @click="showToastAllTime">不自动关闭toast</z-button>
      </div>
    </z-body>
  </div>
</template>

<script>
import ZButton from "../../components/base/z-button.vue"
export default {
  components: {ZButton},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
      showToast(){
          this.$toast("默认 toast")
      },
      showToastWrap(){
         this.$toast("zui移动端UI组件库，模仿vant移动端组件库，仅供学习，不用于商业用途,版本v"+Math.random())
      },
      showToastAllTime(){
        this.$toast('不自动关闭toast',{
          title:"了解",
          callback:(toast,close)=>{
            close()
            console.log("close toast")
          }
        })
      }
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
  height: calc(100% + 50px);
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