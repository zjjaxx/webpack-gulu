<!--  -->
<template>
  <div class="index">
    <div class="wrap">
      <router-view></router-view>
    </div>
    <ZNavbar :bottomMenu="bottomMenu" class="nav-wrap">
      <template v-slot="{item,active}">
        <z-icon :iconName="item.iconName" :color="active?'#ee0a24':''"></z-icon>
      </template>
    </ZNavbar>
  </div>
</template>

<script>
import ZNavbar from '../components/layout/z-navbar.vue'
export default {
  components: { ZNavbar },
  data() {
    return {
      bottomMenu: [
        {
          path: '/home',
          iconName: 'i-home',
          name: '基本组件'
        },
        {
          path: '/layout',
          iconName: 'i-layout',
          name: '布局'
        },
        {
          path: '/person',
          iconName: 'i-setting',
          name: '扩展'
        }
      ]
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
.index {
  height: 100%;
  .wrap {
    padding-bottom: 50px;
    height: 100%;
    box-sizing: border-box;
  }
}
</style>