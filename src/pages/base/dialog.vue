<!--  -->
<template>
  <div class="dialog-container">
    <z-header
      leftArrow
      @leftEvent="$router.back()"
      title="对话框"
      bg="linear-gradient(45deg, #0081ff, #1cbbb4)"
    ></z-header>

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
    <z-title title="确认弹窗"></z-title>
    <div class="default-wrap">
      <z-button @click="showDialogConfirm">确认弹窗</z-button>
    </div>
    <z-title title="异步关闭"></z-title>
    <div class="default-wrap">
      <z-button @click="showDialogAsync">确认弹窗</z-button>
    </div>

    <z-dialog
      :value="defaultFlag"
      type="confirm"
      @confirm="defaultFlag=false"
      @cancel="defaultFlag=false"
    >
      <template v-slot:content>
        <img class="img" src="../../assets/imgs/test.jpg" alt />
      </template>
    </z-dialog>
  </div>
</template>

<script>
import ZButton from '../../components/base/z-button.vue'
import ZDialog from '../../components/base/z-dialog.vue'
import Dialog from '../../utils/dialog/dialog'
export default {
  components: { ZButton, ZDialog },
  data() {
    return {
      defaultFlag: false
    }
  },
  computed: {},
  watch: {},
  methods: {
    showDialog() {
      Dialog('今日次数已达上限').then(res => {
        console.log('resolve Dialog')
      })
    },
    showDialogGlobal() {
      this.$dialog('今日次数已达上限').then(res => {
        console.log('resolve $dialog')
      })
    },
    showDialogConfirm() {
      Dialog.confirm('今日次数已达上限')
        .then(res => {
          console.log('resolve', res)
        })
        .catch(res => {
          console.log('reject', res)
        })
    },
    showDialogAsync() {
      Dialog.confirm({
        content: '今日次数已达上限',
        beforeClose: (action, done) => {
          if (action == 'confirm') {
            setTimeout(() => {
              done()
            }, 3000)
          } else {
            done()
          }
        }
      })
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
  .img {
    height: 300px;
    width: 100%;
  }
}
</style>