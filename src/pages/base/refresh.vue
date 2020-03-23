<!--  -->
<template>
  <div class="refresh-container">
    <z-header title="下拉刷新" bg="linear-gradient(45deg, #0081ff, #1cbbb4)"></z-header>
    <z-body>
      <z-tabs v-model="active">
        <z-tab title="基础用法">
          <z-refresh @refresh="onRefresh" v-model="isLoading">
            <div class="refresh-content">刷新次数{{count}}</div>
          </z-refresh>
        </z-tab>
        <z-tab title="成功提示">
          <z-refresh @refresh="onRefresh1" successTip="刷新成功" v-model="isLoading1">
            <z-button
              type="custom"
              commonText="提交"
              loadingText="上传中"
              complateText="已完成"
              iconPosition="right"
              :status="buttonStauts"
              :turnOnSuper="true"
              @click="submit('Form')"
            >
              <template v-slot:loading-icon>
                <z-icon color="#fff" iconName="i-loading_one"></z-icon>
              </template>
              <template v-slot:complate-icon>
                <z-icon color="#fff" iconName="i-yiwancheng"></z-icon>
              </template>
            </z-button>
          </z-refresh>
        </z-tab>
        <z-tab title="自定义提示">
          <z-refresh @refresh="onRefresh2" v-model="isLoading2">
            <template v-slot:loadingSlot="{pullStatus,pullDistance,hideHeight}">
              <img
                id="img"
                v-if="pullStatus=='normal'"
                class="img"
                src="https://img.yzcdn.cn/vant/doge.png"
                alt
                :style="{transform: `scale(${pullDistance/hideHeight})`}"
              />
              <img
                v-else-if="pullStatus=='pull'"
                class="img"
                src="https://img.yzcdn.cn/vant/doge.png"
                alt
              />
              <img
                v-else-if="pullStatus=='loading'"
                class="img"
                src="https://img.yzcdn.cn/vant/doge-fire.jpg"
                alt
              />
            </template>
            <div class="refresh-content">刷新次数{{count2}}</div>
          </z-refresh>
        </z-tab>
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
      count2: 20,
      isLoading: false,
      isLoading1: false,
      isLoading2: false,
      buttonStauts: 'common',
    }
  },
  computed: {},
  watch: {},
  methods: {
    onRefresh() {
      console.log('refresh')
      setTimeout(() => {
        this.count += 1
        this.isLoading = false
      }, 2000)
    },
    onRefresh1() {
      console.log('refresh')
      setTimeout(() => {
        this.count1 += 1
        this.isLoading1 = false
      }, 2000)
    },
    onRefresh2() {
      console.log('refresh')
      setTimeout(() => {
        this.count2 += 1
        this.isLoading2 = false
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
  .img {
    display: block;
    margin: 0 auto;
    width: 140px;
    height: 72px;
    border-radius: 4px;
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