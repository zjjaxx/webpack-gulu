<!--  -->
<template>
  <div class="index">
    <z-navbar :bottomMenu="bottomMenu" activeColor="#39b54a" inactiveColor="#aaaaaa">
      <template v-slot="{item,active}">
        <z-icon :iconName="item.iconName" :info="item.info" :color="active?'#39b54a':'#aaaaaa'"></z-icon>
      </template>
    </z-navbar>
    <z-body>
       <router-view></router-view>
    </z-body>
  </div>
</template>

<script>
import ZNavbar from '../components/layout/z-navbar.vue'
import ZBody from "../components/layout/z-body.vue"
export default {
  components: { ZNavbar,ZBody },
  data() {
    return {
      bottomMenu: [
        {
          path: '/home',
          iconName: 'i-zujian',
          name: '组件'
        },
        {
          path: '/layout',
          iconName: 'i-layout',
          name: '布局',
          info: 2
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