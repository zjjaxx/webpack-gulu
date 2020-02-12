<template>
  <div class="z-navbar flex">
    <template v-for="(item,index) in bottomMenu">
      <router-link
        tag="div"
        :to="item.path"
        class="menu-item flex justify-center aligin-center flex-column"
        :key="index"
      >
        <slot :item="item" :active="$route.path.match(item.path)"></slot>
        <div class="mt-6">{{item.name}}</div>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    bottomMenu: {
      type: Array,
      default: () => {
        return [
          {
            path: '/home',
            name: '首页'
          }
        ]
      }
    }
  },
  data() {
    return {}
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
.z-navbar {
  position: fixed;
  left: 0;
  bottom: 0;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  width: 100%;
  height: calc(50px + constant(safe-area-inset-bottom));
  height: calc(50px + env(safe-area-inset-bottom));
  background: #fff;
  box-sizing: border-box;
  border-top: 1px solid #ddd;
  z-index: 200;
  .menu-item {
    flex: 1;
    height: 100%;
  }
  .mt-6 {
    margin-top: 6px;
  }
}
</style>