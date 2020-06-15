<!--  -->
<template>
  <div class="header-container">
    <z-header leftText="返回" leftArrow title="导航栏" bg="linear-gradient(45deg, #0081ff, #1cbbb4)" @leftEvent="$router.back()"></z-header>
    <z-title title="默认导航栏"></z-title>
    <z-header :isFixed="false" title="产品详情" bg="linear-gradient(45deg, #0081ff, #1cbbb4)"></z-header>
    <z-title title="导航栏+左边自定义"></z-title>
    <div class="default-wrap">
      <z-header :isFixed="false" title="首页" bg="linear-gradient(45deg, #0081ff, #1cbbb4)">
        <template v-slot:left>
          <z-icon classPrefix="gulu" iconName="location" color="#fff" size="18"></z-icon>
          <span class="address">金华市</span>
        </template>
      </z-header>
    </div>
    <z-title title="导航栏+右边自定义"></z-title>
    <z-header title="首页" :isFixed="false" bg="linear-gradient(45deg, #0081ff, #1cbbb4)">
      <template v-slot:right>
        <z-icon classPrefix="gulu" color="#fff" size="20" iconName="share"></z-icon>
        <z-icon classPrefix="gulu" color="#fff" size="20" iconName="more"></z-icon>
      </template>
    </z-header>
    <z-title title="导航栏+中间自定义"></z-title>
    <z-header :isFixed="false" bg="linear-gradient(45deg, #0081ff, #1cbbb4)">
      <template v-slot:center>
        <div class="center-wrap flex justify-center aligin-center">
          <span>收藏</span>
          <z-icon color="#fff" size="20" classPrefix="gulu" iconName="love"></z-icon>
        </div>
      </template>
    </z-header>
    <z-header :isFixed="false" bg="linear-gradient(45deg, #0081ff, #1cbbb4)" style="marginTop:20px">
      <template v-slot:center>
        <z-input class="center-wrap1" :value="value" :placeholder="placeholder"></z-input>
      </template>
      <template v-slot:right>
        <div class="right-wrap flex justify-center aligin-center">
          <z-icon color="#fff" size="20" classPrefix="gulu" iconName="code"></z-icon>
        </div>
      </template>
    </z-header>
  </div>
</template>

<script>
import ZInput from '../../components/base/z-input.vue'
export default {
  components: { ZInput },
  data() {
    return {
      value: '',
      placeholder: '请输入搜索商品'
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
  height: 100%;
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