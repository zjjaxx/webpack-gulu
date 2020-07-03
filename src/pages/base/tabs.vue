<!--  -->
<template>
  <div class="button-container">
    <z-header
      leftArrow
      @leftEvent="$router.back()"
      title="Tab标签页"
      id="header"
      bg="linear-gradient(45deg, #0081ff, #1cbbb4)"
    ></z-header>

    <z-title title="默认"></z-title>
    <z-tabs v-model="active">
      <z-tab-panel title="购物区">
        <div class="tab-content">内容一</div>
      </z-tab-panel>
      <z-tab-panel title="活动区">
        <div class="tab-content">内容二</div>
      </z-tab-panel>
      <z-tab-panel title="特色区">
        <div class="tab-content">内容三</div>
      </z-tab-panel>
    </z-tabs>
     <z-title title="通过名称匹配"></z-title>
    <z-tabs v-model="activeName">
      <z-tab-panel name="a" title="购物区">
        <div class="tab-content">内容一</div>
      </z-tab-panel>
      <z-tab-panel name="b" title="活动区">
        <div class="tab-content">内容二</div>
      </z-tab-panel>
      <z-tab-panel name="c" title="特色区">
        <div class="tab-content">内容三</div>
      </z-tab-panel>
    </z-tabs>
    <z-title title="tab标签超过4个,标签栏可以在水平方向上滚动，切换时会自动将当前标签居中"></z-title>
    <z-tabs v-model="active2">
      <z-tab-panel :title="item" v-for="(item,index) in list" :key="index">
        <div class="tab-content">{{item}}</div>
      </z-tab-panel>
    </z-tabs>
    <z-title title="自定义标签"></z-title>
    <z-tabs v-model="active4">
      <z-tab-panel>
        <template v-slot:title>
          <z-icon color="#0081ff" classPrefix="gulu" iconName="xiezi" style="marginRight:4px"></z-icon>
          <span>鞋靴</span>
        </template>
        <div class="tab-content">鞋靴</div>
      </z-tab-panel>
      <z-tab-panel title="男装"></z-tab-panel>
      <z-tab-panel>
        <template v-slot:title>
          <z-icon color="#1cbbb4" classPrefix="gulu" iconName="wanju" style="marginRight:4px"></z-icon>
          <span>玩具</span>
        </template>
        <div class="tab-content">玩具</div>
      </z-tab-panel>
    </z-tabs>
    <z-title title="吸顶sticky"></z-title>
    <z-tabs v-model="active3" :isSticky="true" :offsetTop="offsetTop">
      <z-tab-panel :title="item.name" v-for="(item,index) in list2" :key="index">
        <div class="tab-content—sticky">
          <z-cell-group>
            <template v-for="(_item,_index) in item.list">
              <z-cell-item :title="item.name+_index" :key="_index"></z-cell-item>
            </template>
          </z-cell-group>
        </div>
      </z-tab-panel>
    </z-tabs>
  </div>
</template>

<script>
import ZTabs from '../../components/base/z-tabs.vue'
import ZTab from '../../components/base/z-tab.vue'
import ZTabPanel from '../../components/base/z-tab-panel.vue'
export default {
  components: { ZTabs, ZTabPanel },
  data() {
    return {
      activeName:"a",
      list: [],
      list2: ['零食', '日用', '数码', '旅游', '抽奖', '教育', '文学'],
      active: 0,
      active2: 0,
      active3: 0,
      active4: 0,
      offsetTop: 0
    }
  },
  computed: {},
  watch: {},
  methods: {
    tab_click({ index, title }) {
      this.$toast(`title is ${title} , index is ${index}`)
    }
  },
  created() {},
  mounted() {
    let header = document.getElementById("header");
    this.offsetTop = header.offsetHeight;
    this.list2 = this.list2.map(item => {
      return {
        name: item,
        list: [1, 23, 3, 3, 4, 5, 6, 333, 4, 3, 3, 45, 4423, 222, 98, 89]
      };
    });
    this.list = [
      '水果',
      '蔬菜',
      '奶茶',
      '电影',
      '家电',
      '肉类',
      '汗蒸',
      '按摩',
      '网吧',
      '水上乐园'
    ]
  },
  updated() {
    console.log('wrap updated')
  }, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.button-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  // .tab-content—sticky {
  //   .item {
  //     padding: 10px 20px;
  //   }
  // }
}
</style>