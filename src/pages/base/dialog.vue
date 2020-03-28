<!--  -->
<template>
  <div class="dialog-container">
    <z-header title="对话框" bg="linear-gradient(45deg, #0081ff, #1cbbb4)">
    </z-header>
    <z-body>
      <z-title title="函数调用"></z-title>
      <div class="default-wrap">
          <z-button @click="showDialog">函数调用</z-button>
      </div>
      <z-title title="组件调用"></z-title>
      <div class="default-wrap">
          <z-button @click="defaultFlag=true">提示弹窗(默认)</z-button>
      </div>
      <z-title title="全局调用"></z-title>
        <div class="default-wrap">
          <z-button @click="showDialogGlobal">全局调用</z-button>
      </div>
    </z-body>
    <z-dialog v-model=defaultFlag content="今日次数已达上限"></z-dialog>
  </div>
</template>

<script>
import ZButton from "../../components/base/z-button.vue"
import ZDialog from "../../components/base/z-dialog.vue"
import Dialog from "../../utils/dialog/dialog"
export default {
  components: {ZButton,ZDialog},
  data() {
    return {
        defaultFlag:false
    }
  },
  computed: {},
  watch: {},
  methods: {
    showDialog(){
      Dialog("今日次数已达上限")
    },
    showDialogGlobal(){
      this.$dialog("今日次数已达上限")
    }
  },
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
  height:100%;
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