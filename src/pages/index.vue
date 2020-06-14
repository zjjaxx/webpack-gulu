<!--  -->
<template>
  <div class="index">
    <router-view></router-view>
    <z-navbar activeColor="#39b54a" inactiveColor="#aaaaaa">
      <template v-for="(item,index) in bottomMenu">
        <z-navbar-item :key="index" :buttomMenuItem="item"></z-navbar-item>
      </template>
    </z-navbar>
  </div>
</template>

<script>
import ZNavbar from "../components/layout/z-navbar.vue";
import ZNavbarItem from "../components/layout/z-navbar-item.vue"
export default {
  components: { ZNavbar,ZNavbarItem},
  data() {
    return {
      bottomMenu: [
        {
          path: "/home",
          name: "组件",
          iconConfig: {
            classPrefix: "gulu",
            iconName: "zujian",
            size:"24"
          }
        },
        {
          path: "/layout",
          name: "布局",
          iconConfig: {
            classPrefix: "gulu",
            info: 2,
            size:"24",
            iconName: "layout"
          }
        },
        {
          path: "/person",

          name: "扩展",
          iconConfig: {
            classPrefix: "gulu",
            size:"24",
            iconName: "setting"
          }
        }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
};
</script>
<style lang='less' scoped>
.index {
  height: 100%;
}
</style>