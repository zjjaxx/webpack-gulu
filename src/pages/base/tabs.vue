<!--  -->
<template>
  <div class="button-container">
    <z-header title="Tab标签页">
      <template v-slot:left>
        <div class="left-wrap flex justify-center aligin-center" @click="$router.back()">
          <z-icon icon-name="i-left"></z-icon>
        </div>
      </template>
    </z-header>
    <z-body>
      <z-title title="默认"></z-title>
      <z-tabs :active="active" @click="click">
        <z-tab title="tab-1"></z-tab>
        <z-tab title="tab-2"></z-tab>
        <z-tab title="tab-3"></z-tab>
      </z-tabs>
    </z-body>
  </div>
</template>

<script>
import ZTabs from '../../components/base/z-tabs.vue'
import ZTab from '../../components/base/z-tab.vue'
export default {
  components: { ZTabs, ZTab },
  data() {
    return {
        active:0
    }
  },
  computed: {},
  watch: {},
  methods: {
      click(event){
          console.log("event",event)
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
  height: calc(100% + 50px);
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