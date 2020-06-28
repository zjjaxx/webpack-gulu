<!--  -->
<template>
  <div class="popup-container">
    <z-header
      leftArrow
      @leftEvent="$router.back()"
      title="popup"
      bg="linear-gradient(45deg, #0081ff, #1cbbb4)"
    ></z-header>

    <z-title title="popup基础用法"></z-title>
    <z-menu-item title="展示弹出层" @click="show = true">
      <template v-slot:right>
        <z-icon icon-name="i-arrow-right"></z-icon>
      </template>
    </z-menu-item>
    <z-popup v-model="show"></z-popup>
    <z-title title="弹出位置"></z-title>
    <z-menu-item title="顶部弹出" @click="showTop = true">
      <template v-slot:right>
        <z-icon icon-name="i-arrow-right"></z-icon>
      </template>
    </z-menu-item>
    <z-popup v-model="showTop" position="top"></z-popup>
    <z-menu-item title="底部弹出" @click="showBottom = true">
      <template v-slot:right>
        <z-icon icon-name="i-arrow-right"></z-icon>
      </template>
    </z-menu-item>
    <z-popup v-model="showBottom" position="bottom"></z-popup>
    <z-menu-item title="左侧弹出" @click="showLeft = true">
      <template v-slot:right>
        <z-icon icon-name="i-arrow-right"></z-icon>
      </template>
    </z-menu-item>
    <z-popup v-model="showLeft" position="left"></z-popup>
    <z-menu-item title="右侧弹出" @click="showRight = true">
      <template v-slot:right>
        <z-icon icon-name="i-arrow-right"></z-icon>
      </template>
    </z-menu-item>
    <z-popup v-model="showRight" position="right"></z-popup>
    <z-title title="关闭图标"></z-title>
    <z-menu-item title="弹出带关闭图标" @click="showBottom_closeIcon = true">
      <template v-slot:right>
        <z-icon icon-name="i-arrow-right"></z-icon>
      </template>
    </z-menu-item>
    <z-popup :closeIcon="true" v-model="showBottom_closeIcon" position="bottom"></z-popup>
    <z-menu-item title="自定义关闭图标" @click="showBottom_customIcon = true">
      <template v-slot:right>
        <z-icon icon-name="i-arrow-right"></z-icon>
      </template>
    </z-menu-item>
    <z-popup :closeIcon="true" v-model="showBottom_customIcon" position="bottom">
      <template v-slot:closeIcon>
        <z-icon iconName="i-guanbi"></z-icon>
      </template>
    </z-popup>
    <z-title title="圆角"></z-title>
    <z-menu-item title="圆角弹窗" @click="showBottom_round = true">
      <template v-slot:right>
        <z-icon icon-name="i-arrow-right"></z-icon>
      </template>
    </z-menu-item>
    <z-popup round :closeIcon="true" v-model="showBottom_round" position="bottom"></z-popup>
  </div>
</template>

<script>
import ZPopup from '../../components/base/z-popup.vue'
export default {
  components: { ZPopup },
  data() {
    return {
      show: false,
      showTop: false,
      showBottom: false,
      showLeft: false,
      showRight: false,
      showBottom_closeIcon: false,
      showBottom_customIcon: false,
      showBottom_round: false
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
.popup-container {
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