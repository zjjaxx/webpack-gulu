<!--  -->
<template>
  <div class="header-container">
    <z-header title="导航栏">
      <template v-slot:left>
        <div class="left-wrap flex justify-center aligin-center" @click="$router.back()">
          <z-icon icon-name="i-left"></z-icon>
        </div>
      </template>
    </z-header>
    <z-body>
      <z-title title="默认导航栏"></z-title>
      <div class="default-wrap">
        <z-header title="产品详情" style="position:relative"></z-header>
      </div>
      <z-title title="导航栏+左边自定义"></z-title>
      <div class="default-wrap">
        <z-header title="首页" style="position:relative">
          <template v-slot:left>
            <div class="left-wrap flex justify-center aligin-center">
              <z-icon icon-name="i-location"></z-icon>
              <span class="address">金华市</span>
            </div>
          </template>
        </z-header>
      </div>
      <z-title title="导航栏+右边自定义"></z-title>
      <div class="default-wrap">
        <z-header title="首页" style="position:relative">
          <template v-slot:right>
            <div class="right-wrap flex justify-center aligin-center">
              <z-icon icon-name="i-share"></z-icon>
              <z-icon icon-name="i-more"></z-icon>
            </div>
          </template>
        </z-header>
      </div>
      <z-title title="导航栏+中间自定义"></z-title>
      <div class="default-wrap">
        <z-header style="position:relative" :customCenter="true">
          <template v-slot:center>
            <div class="center-wrap flex justify-center aligin-center">
              <span>收藏</span>
              <z-icon icon-name="i-love"></z-icon>
            </div>
          </template>
        </z-header>
        <z-header style="position:relative" :customCenter="true">
          <template v-slot:center>
            <z-input class="center-wrap1" :inputAttr="inputAttr"></z-input>
          </template>
          <template v-slot:right>
            <div class="right-wrap flex justify-center aligin-center">
              <z-icon icon-name="i-code"></z-icon>
            </div>
          </template>
        </z-header>
      </div>
    </z-body>
  </div>
</template>

<script>
import ZInput from '../../components/base/z-input.vue'
export default {
  components: { ZInput },
  data() {
    return {
      inputAttr: {
        value: '',
        placeholder: '请输入搜索商品'
      }
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
.right-wrap /deep/ .icon {
  height: 1.5em;
  width: 1.5em;
}
.center-wrap /deep/ .icon {
  height: 1.5em;
  width: 1.5em;
}
.header-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% + 50px);
  background: #fff;
  z-index: 210;
  .default-wrap {
    position: relative;
    * {
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .left-wrap {
    height: 100%;
    * {
      margin-right: 0;
    }
  }
  .center-wrap {
    height: 100%;
    * {
      margin-right: 2px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .center-wrap1 {
    padding: 0 45px 0 15px;
    flex: 1;
  }
  .right-wrap {
    height: 100%;
    * {
      margin-right: 6px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .address {
    margin-left: 6px;
  }
}
</style>