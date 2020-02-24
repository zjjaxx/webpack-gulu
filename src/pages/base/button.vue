<!--
 * @Author: zjj
 * @Date: 2020-02-24 09:51:51
 * @LastEditors: zjj
 * @LastEditTime: 2020-02-24 17:53:28
 -->
<!--  -->
<template>
  <div class="button-container">
    <z-header title="按钮">
      <template v-slot:left>
        <div class="left-wrap flex justify-center aligin-center" @click="$router.back()">
          <z-icon icon-name="i-left"></z-icon>
        </div>
      </template>
    </z-header>
    <z-body>
      <z-title title="按钮类型(默认:default;支持custom、default)"></z-title>
      <div class="default-wrap">
        <z-button>按钮+default</z-button>
        <z-button type="custom">点击+custom</z-button>
      </div>
       <z-title title="禁用状态"></z-title>
      <div class="default-wrap ">
        <z-button disabled>禁用状态</z-button>
        <z-button type="custom" disabled>禁用状态</z-button>
      </div>
        
      <z-title title="按钮+icon"></z-title>
      <div class="default-wrap">
        <z-button  type="custom" iconName="i-setting">设置</z-button>
        <z-button iconName="i-right" iconPosition="right">下一页</z-button>
      </div>
      <z-title title="按钮+loading"></z-title>
      <div class="default-wrap">
        <z-button iconName="i-download" :isLoading="isLoading" @click="isLoading=!isLoading">下载</z-button>
        <z-button
          iconName="i-download"
          iconPosition="right"
          :isLoading="isLoading_"
          @click="isLoading_=!isLoading_"
        >下载</z-button>
      </div>
   
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
      isLoading_: false
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
.button-container {
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
    display: flex;
    padding: 10px;
    * {
      margin-right: 20px;
     
    }
  }
}
</style>