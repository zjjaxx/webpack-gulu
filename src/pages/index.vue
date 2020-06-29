<!--  -->
<template>
  <div class="index">
    <router-view></router-view>
    <z-tabbar activeColor="#39b54a" route replace inactiveColor="#aaaaaa">
      <template v-for="(item,index) in bottomMenu">
        <z-tabbar-item :key="index"  v-bind="item"></z-tabbar-item>
      </template>
    </z-tabbar>
  </div>
</template>

<script>
import ZTabbar from "../components/layout/z-tabbar.vue";
import ZTabbarItem from "../components/layout/z-tabbar-item.vue"
export default {
  components: { ZTabbar,ZTabbarItem},
  data() {
    return {
      bottomMenu: [
        {
          to: "/home",
          name: "组件",
          iconConfig: {
            classPrefix: "gulu",
            iconName: "zujian",
            size:"24"
          }
        },
        {
          to: "/layout",
          name: "布局",
          iconConfig: {
            classPrefix: "gulu",
            info: 2,
            size:"24",
            iconName: "layout"
          }
        },
        {
          to: "/person",
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