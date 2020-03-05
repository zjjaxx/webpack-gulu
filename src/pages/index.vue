<!--  -->
<template>
  <div class="index">
     <ZNavbar :bottomMenu="bottomMenu" activeColor="#ee0a24" inactiveColor="#333">
      <template v-slot="{item,active}">
        <z-icon :iconName="item.iconName" :info="item.info" :color="active?'#ee0a24':'#333'"></z-icon>
      </template>
    </ZNavbar>
    <div class="z-body">
      <router-view></router-view>
    </div>
   
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
          name: '布局',
          info:2
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
  
}
</style>