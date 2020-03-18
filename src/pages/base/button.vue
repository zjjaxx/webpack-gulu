<!--
 * @Author: zjj
 * @Date: 2020-02-24 09:51:51
 * @LastEditors: zjj
 * @LastEditTime: 2020-02-24 17:53:28
 -->
<!--  -->
<template>
  <div class="button-container">
    <z-header title="按钮" bg="linear-gradient(45deg, #0081ff, #1cbbb4)"></z-header>
    <z-body>
      <z-title title="按钮类型"></z-title>
      <div class="default-wrap">
        <z-button style="marginRight:20px">默认按钮</z-button>
        <z-button type="custom">按钮背景</z-button>
      </div>
      <z-title title="禁用状态"></z-title>
      <div class="default-wrap">
        <z-button style="marginRight:20px" disabled>禁用状态</z-button>
        <z-button type="custom" disabled>禁用状态</z-button>
      </div>
      <z-title title="方形按钮"></z-title>
      <div class="default-wrap">
        <z-button type="custom" :rect="true">方形按钮</z-button>
      </div>
      <z-title title="图标按钮"></z-title>
      <div class="default-wrap">
        <z-button type="custom" style="marginRight:20px" iconName="i-location">定位</z-button>
        <z-button iconName="i-thumbs-up" iconPosition="right">点赞</z-button>
      </div>
      <z-title title="按钮+自定义背景"></z-title>
      <div class="default-wrap">
        <z-button bg="#07c160" style="marginRight:20px">绿色按钮</z-button>
        <z-button bg="linear-gradient(45deg, #0081ff, #1cbbb4)">蓝色按钮</z-button>
      </div>
      <z-title title="按钮尺寸"></z-title>
      <div class="default-wrap">
        <z-button size="small" type="custom" style="marginRight:20px">小尺寸</z-button>
        <z-button type="custom" style="marginRight:20px">默认尺寸</z-button>
        <z-button size="large" type="custom">大尺寸按钮</z-button>
      </div>
      <z-title title="状态按钮"></z-title>
      <div class="default-wrap">
        <z-button
          style="marginRight:20px"
          type="custom"
          iconName="i-download"
          commonText="Activate"
          loadingText="Waiting"
          complateText="Activated"
          :status="buttonStauts"
          :turnOnSuper="true"
          @click="click"
        ></z-button>
        <z-button
          type="custom"
          iconName="i-download"
          commonText="待激活"
          loadingText="加载中"
          complateText="已完成"
          iconPosition="right"
          :status="buttonStauts"
          :turnOnSuper="true"
          @click="click"
        >
          <template v-slot:loading-icon>
            <z-icon color="#fff" iconName="i-loading_one"></z-icon>
          </template>
          <template v-slot:complate-icon>
            <z-icon color="#fff" iconName="i-yiwancheng"></z-icon>
          </template>
        </z-button>
      </div>
      <z-title title="块级元素"></z-title>
      <z-button block type="custom" style="marginBottom:20px">确定</z-button>
    </z-body>
  </div>
</template>

<script>
import ZButton from '../../components/base/z-button.vue'
export default {
  components: { ZButton },
  data() {
    return {
      isLoading: false,
      isLoading_: false,
      count: 0,
      buttonStauts: 'common'
    }
  },
  computed: {},
  watch: {},
  methods: {
    add() {
      this.count++
    },
    click() {
      if (this.buttonStauts == 'common') {
        this.buttonStauts = 'loading'
        setTimeout(() => {
          this.buttonStauts = 'complate'
          setTimeout(() => {
            this.buttonStauts = 'common'
          }, 1600)
        }, 3200)
      }
    }
  },
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.button-container {
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
  }
}
</style>