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
      showToastAllTime(){
        this.$toast({title:'不自动关闭toast',duration:0})
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