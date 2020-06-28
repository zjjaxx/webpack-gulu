<!--
 * @Author: zjj
 * @Date: 2020-02-24 09:51:51
 * @LastEditors: zjj
 * @LastEditTime: 2020-02-24 17:53:28
 -->
<!--  -->
<template>
  <div class="button-container">
    <z-header
      leftArrow
      @leftEvent="$router.back()"
      title="按钮"
      bg="linear-gradient(45deg, #0081ff, #1cbbb4)"
    ></z-header>

    <z-title title="按钮类型"></z-title>
    <div class="default-wrap">
      <z-button style="marginRight:20px">默认按钮</z-button>
      <z-button type="custom" class="z-custom-button">按钮背景</z-button>
    </div>
    <z-title title="禁用状态"></z-title>
    <div class="default-wrap">
      <z-button style="marginRight:20px" disabled>禁用状态</z-button>
      <z-button type="custom" class="z-custom-button" disabled>禁用状态</z-button>
    </div>
    <z-title title="方形按钮"></z-title>
    <div class="default-wrap">
      <z-button style="marginRight:20px" round>方形按钮</z-button>
    </div>
    <z-title title="图标按钮"></z-title>
    <div class="default-wrap">
      <z-button
        size="16"
        classPrefix="gulu"
        iconName="thumbs-up"
        style="marginRight:20px"
        iconPosition="iconPositionRight"
      >点赞</z-button>
      <z-button
        size="16"
        color="#fff"
        classPrefix="gulu"
        type="custom"
        class="z-custom-button"
        style="marginRight:20px"
        iconName="location"
      >定位</z-button>
    </div>
    <z-title title="按钮+插槽自定义"></z-title>
    <div class="default-wrap">
      <z-button slotName="leftSlot" style="marginRight:20px">
        <template #leftSlot>
          <z-icon size="16" classPrefix="gulu" style="marginRight:5px" iconName="setting"></z-icon>
        </template>
        自定义左侧按钮
      </z-button>
      <z-button slotName="rightSlot" type="custom" class="z-custom-button">
        <template #rightSlot>
          <z-icon
            size="16"
            color="#fff"
            classPrefix="gulu"
            style="marginLeft:5px"
            iconName="setting"
          ></z-icon>
        </template>自定义右侧按钮
      </z-button>
    </div>
    <z-title title="状态按钮"></z-title>
    <div class="default-wrap">
      <z-button
        size="16"
        classPrefix="gulu"
        style="marginRight:20px"
        iconName="download"
        :buttonStatus="buttonStatus"
        superButton
        @click="click"
      ></z-button>
      <z-button
        size="16"
        classPrefix="gulu"
        style="marginRight:20px"
        type="custom"
        class="z-custom-button"
        iconName="download"
        commonText="Activate"
        loadingText="Waiting"
        complateText="Activated"
        :buttonStatus="buttonStatus"
        superButton
        iconPosition="iconPositionRight"
        @click="click"
      ></z-button>
    </div>
    <z-title title="状态按钮 + 插槽"></z-title>
    <div class="default-wrap">
      <z-button
        size="16"
        classPrefix="gulu"
        style="marginRight:20px"
        iconName="download"
        :buttonStatus="buttonStatus"
        superButton
        slotName="leftSlot"
        @click="click"
      >
        <template #leftSlot>
          <z-icon
            size="16"
            v-if="buttonStatus==0"
            classPrefix="gulu"
            style="marginRight:5px"
            iconName="setting"
          ></z-icon>
          <z-icon
            size="16"
            v-if="buttonStatus==1"
            classPrefix="gulu"
            style="marginRight:5px"
            iconName="download"
          ></z-icon>
          <z-icon
            size="16"
            v-if="buttonStatus==2"
            classPrefix="gulu"
            style="marginRight:5px"
            iconName="thumbs-up"
          ></z-icon>
        </template>
      </z-button>
      <z-button
        size="16"
        classPrefix="gulu"
        style="marginRight:20px"
        iconName="download"
        :buttonStatus="buttonStatus"
        superButton
        slotName="rightSlot"
        @click="click"
      >
        <template #rightSlot>
          <z-icon
            size="16"
            v-if="buttonStatus==0"
            classPrefix="gulu"
            style="marginLeft:5px"
            iconName="setting"
          ></z-icon>
          <z-icon
            size="16"
            v-if="buttonStatus==1"
            classPrefix="gulu"
            style="marginLeft:5px"
            iconName="download"
          ></z-icon>
          <z-icon
            size="16"
            v-if="buttonStatus==2"
            classPrefix="gulu"
            style="marginLeft:5px"
            iconName="thumbs-up"
          ></z-icon>
        </template>
      </z-button>
    </div>
    <z-title title="块级元素"></z-title>
    <z-button style="marginBottom:20px" block>确定</z-button>
    <z-button style="marginBottom:20px" type="custom" class="z-custom-button" block>确定</z-button>
  </div>
</template>

<script>
import ZButton from '../../components/base/z-button.vue'
import ZIcon from '../../components/base/z-icon.vue'
const COMMON_STATUS = 0 //待激活状态
const LOADING_STATUS = 1 //加载状态
const COMPLATE_STATUS = 2 //完成状态
export default {
  components: { ZButton, ZIcon },
  data() {
    return {
      isLoading: false,
      isLoading_: false,
      buttonStatus: COMMON_STATUS
    }
  },
  computed: {},
  watch: {},
  methods: {
    click() {
      if (this.buttonStatus == COMMON_STATUS) {
        this.buttonStatus = LOADING_STATUS
        setTimeout(() => {
          this.buttonStatus = COMPLATE_STATUS
          setTimeout(() => {
            this.buttonStatus = COMMON_STATUS
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
  .z-custom-button {
    background: linear-gradient(
      66deg,
      rgba(232, 48, 56, 1),
      rgba(247, 88, 151, 1)
    );
    color: #fff;
    font-size: 14px;
    border-radius: 5px;
  }
}
</style>