<!--  -->
<template>
  <div class="tabbar">
    <z-header
      leftText="返回"
      leftArrow
      title="Tabbar 标签栏"
      bg="linear-gradient(45deg, #0081ff, #1cbbb4)"
      @leftEvent="$router.back()"
    ></z-header>
    <z-title title="基础用法"></z-title>
    <z-tabbar :fixed="false" activeColor="#39b54a" v-model="active" inactiveColor="#aaaaaa">
      <z-tabbar-item
        name="标签"
        :iconConfig="{
          size: '16',
          classPrefix: 'gulu',
          iconName: 'wancheng',
          dot: false,
          info: 10,
          color: '#333'
          }"
      ></z-tabbar-item>
      <z-tabbar-item
        name="标签"
        :iconConfig="{
          size: '16',
          classPrefix: 'gulu',
          iconName: 'thumbs-up',
          }"
      ></z-tabbar-item>
    </z-tabbar>
    <z-title title="通过名称匹配"></z-title>
    <z-tabbar :fixed="false" activeColor="#39b54a" v-model="active1" inactiveColor="#aaaaaa">
      <z-tabbar-item
        label="标签1"
        name="标签"
        :iconConfig="{
          size: '16',
          classPrefix: 'gulu',
          iconName: 'wancheng',
          dot: false,
          info: 10,
          color: '#333'
          }"
      ></z-tabbar-item>
      <z-tabbar-item
        label="标签2"
        name="标签"
        :iconConfig="{
          size: '16',
          classPrefix: 'gulu',
          iconName: 'thumbs-up',
          }"
      ></z-tabbar-item>
    </z-tabbar>
    <z-title title="自定义图标+文字"></z-title>
    <z-tabbar :fixed="false" activeColor="#39b54a" v-model="active2" inactiveColor="#aaaaaa">
      <z-tabbar-item>
        <template #icon="{active}">
          <z-icon size="24" classPrefix="gulu" :color="active?'#39b54a':'#aaaaaa'" iconName="love"></z-icon>
        </template>
        <template #name>
          <span>左标签</span>
        </template>
      </z-tabbar-item>
      <z-tabbar-item>
        <template #icon="{active}">
          <z-icon
            size="24"
            classPrefix="gulu"
            :color="active?'#39b54a':'#aaaaaa'"
            iconName="layout"
          ></z-icon>
        </template>
        <template #name>
          <span>左标签</span>
        </template>
      </z-tabbar-item>
    </z-tabbar>
    <z-title title="自定义颜色"></z-title>
    <z-tabbar :fixed="false" activeColor="#ff0000" v-model="active3" inactiveColor="#999">
      <z-tabbar-item
        name="标签"
        :iconConfig="{
          size: '16',
          classPrefix: 'gulu',
          iconName: 'wancheng',
          dot: false,
          info: 10,
          color: '#333'
          }"
      ></z-tabbar-item>
      <z-tabbar-item
        name="标签"
        :iconConfig="{
          size: '16',
          classPrefix: 'gulu',
          iconName: 'thumbs-up',
          }"
      ></z-tabbar-item>
    </z-tabbar>
  </div>
</template>

<script>
import ZTabbar from '../../components/layout/z-tabbar.vue'
import ZTabbarItem from '../../components/layout/z-tabbar-item.vue'
export default {
  components: { ZTabbar, ZTabbarItem },
  data() {
    return {
      active: 0,
      active1: '标签1',
      active2:0,
      active3:0
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
//@import url(); 引入公共css类
</style>