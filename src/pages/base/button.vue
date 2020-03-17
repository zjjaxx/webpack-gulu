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
      <z-title title="按钮类型(默认:default;支持custom、default)"></z-title>
      <div class="default-wrap">
        <z-button>按钮+default</z-button>
        <z-button type="custom" @click="add">点击{{count}}</z-button>
      </div>
      <z-title title="禁用状态"></z-title>
      <div class="default-wrap">
        <z-button disabled>禁用状态</z-button>
        <z-button type="custom" disabled>禁用状态</z-button>
      </div>
      <z-title title="按钮+icon"></z-title>
      <div class="default-wrap">
        <z-button type="custom" iconName="i-setting">设置</z-button>
        <z-button iconName="i-right" iconPosition="right">下一页</z-button>
      </div>
      <z-title title="按钮+自定义背景"></z-title>
      <div class="default-wrap">
        <z-button bg="#07c160" iconName="i-setting">设置</z-button>
        <z-button bg="#ee0a24" iconName="i-setting">设置</z-button>
      </div>
      <z-title title="按钮尺寸"></z-title>
      <div class="default-wrap">
        <z-button size="small" type="custom" iconName="i-setting">设置</z-button>
        <z-button type="custom" iconName="i-setting">设置</z-button>
        <z-button size="large" type="custom" iconName="i-setting">设置</z-button>
      </div>
      <z-title title="按钮+loading"></z-title>
      <div class="default-wrap">
        <z-button
          type="custom"
          iconName="i-download"
          commonText="Activate"
          loadingText="Waiting"
          complateText="Activated"
          :buttonStauts="buttonStauts"
          :turnOnSuper="true"
          @click="click"
        >下载</z-button>
      </div>
      <z-title title="块级元素"></z-title>
      <z-button block type="custom" iconName="i-setting">设置</z-button>
      <z-button style="marginTop:10px" size="large" block iconPosition="right">下一页</z-button>
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
      buttonStauts:"common"
    }
  },
  computed: {},
  watch: {},
  methods: {
    add() {
      this.count++
    },
    click(){
         if (this.buttonStauts=="common") {
        this.buttonStauts="loading"
        setTimeout(() => {
          this.buttonStauts="complate"
          setTimeout(() => {
          this.buttonStauts="common"
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
    * {
      margin-right: 20px;
    }
  }
}
</style>