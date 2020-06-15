<!--  -->
<template>
  <router-link
    tag="div"
    :to="buttomMenuItem.path"
    class="menu-item flex justify-center aligin-center flex-column"
  >
    <slot name="icon" :item="buttomMenuItem" :active="$route.path.match(buttomMenuItem.path)">
      <z-icon
        v-bind="buttomMenuItem.iconConfig"
        :color="$route.path.match(buttomMenuItem.path)?activeColor:inactiveColor"
      ></z-icon>
    </slot>
    <slot name="name" :item="buttomMenuItem" :active="$route.path.match(buttomMenuItem.path)">
      <div class="mt-3 f-12">{{buttomMenuItem.name}}</div>
    </slot>
  </router-link>
</template>

<script>
export default {
  inject: ["inactiveColor", "activeColor"],
  props: {
    buttomMenuItem: {
      type: Object,
      default: () => {
        return {
          path: "/home",
          name: "首页",
          iconConfig: {
            //大小
            size: "16",
            //font-family
            classPrefix: "iconfont",
            //icon 名称
            iconName: "wancheng",
            //右上角的小红点
            dot: false,
            //角标
            info: 10,
            //颜色
            color: "#333"
          }
        };
      }
    }
  },
  components: {},
  data() {
    return {};
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
//@import url(); 引入公共css类
.menu-item {
  flex: 1;
  height: 100%;
  font-size: 14px;
}
.mt-3 {
  margin-top: 3px;
}
.f-12 {
  font-size: 12px;
}
</style>