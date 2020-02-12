<!--  -->
<template>
  <div class="dialog-container">
    <z-header title="对话框">
      <template v-slot:left>
        <div class="left-wrap flex justify-center aligin-center" @click="$router.back()">
          <z-icon icon-name="i-left"></z-icon>
        </div>
      </template>
    </z-header>
    <z-body>
      <z-title title="提示弹窗"></z-title>
      <div class="default-wrap">
          <z-button @click="defaultFlag=!defaultFlag">提示弹窗(默认)</z-button>
      </div>
    </z-body>
    <z-dialog :dialogFlag.sync=defaultFlag content="今日次数已达上限"></z-dialog>
  </div>
</template>

<script>
import ZButton from "../../components/base/z-button.vue"
import ZDialog from "../../components/base/z-dialog.vue"
export default {
  components: {ZButton,ZDialog},
  data() {
    return {
        defaultFlag:false
    }
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
.dialog-container {
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