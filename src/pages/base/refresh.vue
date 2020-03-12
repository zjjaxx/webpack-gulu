<!--  -->
<template>
  <div class="refresh-container">
    <z-header title="下拉刷新">
      <template v-slot:left>
        <div class="left-wrap flex justify-center aligin-center" @click="$router.back()">
          <z-icon icon-name="i-left"></z-icon>
        </div>
      </template>
    </z-header>
    <z-body>
      <z-tabs v-model="active">
        <z-tab title="基础用法">
          <z-refresh @refresh="onRefresh" v-model="isLoading">
            <div class="refresh-content">刷新次数{{count}}</div>
          </z-refresh>
        </z-tab>
        <z-tab title="成功提示">
          <z-button @click="count1+=1">{{count1}}</z-button>
        </z-tab>
        <z-tab title="自定义提示"></z-tab>
      </z-tabs>
    </z-body>
  </div>
</template>

<script>
import ZTab from '../../components/base/z-tab.vue'
import ZTabs from '../../components/base/z-tabs.vue'
import ZRefresh from '../../components/base/z-refresh.vue'
import ZButton from '../../components/base/z-button.vue'
export default {
  components: { ZTabs, ZTab, ZRefresh, ZButton },
  data() {
    return {
      active: 0,
      count: 10,
      count1: 20,
      isLoading: false
    }
  },
  computed: {},
  watch: {},
  methods: {
    onRefresh(resetTouchStatus) {
      setTimeout(() => {
        this.count += 1
        console.log('count++')
        resetTouchStatus()
      }, 2000)
    }
  },
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.refresh-container {
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
  .refresh-content {
    padding: 10px 20px;
    height: calc(100vh - 90px);
    overflow-y: auto;
    box-sizing: border-box;
    font-size: 15px;
    color: #969799;
  }
}
</style>