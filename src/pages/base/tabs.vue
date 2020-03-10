<!--  -->
<template>
  <div class="button-container">
    <z-header title="Tab标签页" id="header">
      <template v-slot:left>
        <div class="left-wrap flex justify-center aligin-center" @click="$router.back()">
          <z-icon icon-name="i-left"></z-icon>
        </div>
      </template>
    </z-header>
    <z-body>
      <z-title title="默认"></z-title>
      <z-tabs v-model="active">
        <z-tab title="tab-1">
          <div class="tab-content">内容一</div>
        </z-tab>
        <z-tab title="tab-2">
          <div class="tab-content">内容二</div>
        </z-tab>
        <z-tab title="tab-3">
          <div class="tab-content">内容三</div>
        </z-tab>
      </z-tabs>
      <z-title title="tab标签超过4个,标签栏可以在水平方向上滚动，切换时会自动将当前标签居中"></z-title>
      <z-tabs v-model="active2" @click="tab_click">
        <z-tab :title="'tab-'+item" v-for="(item,index) in 8" :key="index">
          <div class="tab-content">tab-{{item}}</div>
        </z-tab>
      </z-tabs>
      <z-title title="自定义标签"></z-title>
      <z-tabs v-model="active4">
        <z-tab title="tab-1">
          <template v-slot:title>
            <z-icon iconName="i-setting" style="marginRight:4px"></z-icon>
            <span>标签一</span>
          </template>
          <div class="tab-content">内容一</div>
        </z-tab>
        <z-tab title="tab-2">
          <template v-slot:title>
            <z-icon iconName="i-thumbs-up" style="marginRight:4px"></z-icon>
            <span>标签二</span>
          </template>
          <div class="tab-content">内容二</div>
        </z-tab>
        <z-tab title="tab-3">
          <template v-slot:title>
            <z-icon iconName="i-love" style="marginRight:4px"></z-icon>
            <span>标签三</span>
          </template>
          <div class="tab-content">内容三</div>
        </z-tab>
      </z-tabs>
      <z-title title="吸顶sticky"></z-title>
      <z-tabs v-model="active3" :isSticky="true" :offsetTop="offsetTop">
        <z-tab :title="'tab-'+item" v-for="(item,index) in 8" :key="index">
          <div class="tab-content—sticky">
            <template v-for="(item,index) in 80">
              <div class="item border-bottom-1px" :key="index">菜单{{index}}</div>
            </template>
          </div>
        </z-tab>
      </z-tabs>
    </z-body>
  </div>
</template>

<script>
import ZTabs from "../../components/base/z-tabs.vue";
import ZTab from "../../components/base/z-tab.vue";
export default {
  components: { ZTabs, ZTab },
  data() {
    return {
      active: 0,
      active2: 0,
      active3: 0,
      active4: 0,
      offsetTop: 0
    };
  },
  computed: {},
  watch: {},
  methods: {
    tab_click({ index, title }) {
      this.$toast(`title is ${title} , index is ${index}`);
    }
  },
  created() {},
  mounted() {
    let header = document.getElementById("header");
    this.offsetTop = header.offsetHeight;
  },
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
};
</script>
<style lang='less' scoped>
.button-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
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
  .tab-content {
    padding: 20px;
  }
  .tab-content—sticky {
    .item {
      padding: 10px 20px;
    }
  }
}
</style>