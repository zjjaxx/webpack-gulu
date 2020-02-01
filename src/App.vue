
<!--
 * @Author: zjj
 * @Date: 2020-01-20 16:42:20
 * @LastEditors  : zjj
 * @LastEditTime : 2020-01-22 15:33:56
 -->
<!--  -->
<template>
  <div id="container">
    <div class="test test1" :class="test">{{test}}</div>
    <div class="button-container"></div>
    <span class="gulu">&#xe63a;</span>
    <span>{{count}}</span>
    <button @click="add">add</button>
    <template v-for="(item,index) in count">
      <div class="item" :key="index">item</div>
    </template>
  </div>
</template>

<script>
import ZButton from "./components/z-button.vue";
import Vue from "vue";
export default {
  components: { ZButton },
  data() {
    return {
      test: "333纷纷",
      count: [20, 3, 4, 5, 5, 3]
    };
  },
  computed: {},
  watch: {},
  methods: {
    add() {
      import("lodash").then(({ default: _ }) => {
        let ButtonConstructor = Vue.extend(ZButton);
        let button = new ButtonConstructor({
          propsData: {
            iconName: "i-setting"
          }
        });
        button.$mount(".button-container");
      });
    }
  },
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
};
</script>
<style lang="less" scoped>
.test1 {
  color: red;
}
.item {
  &:nth-child(odd) {
    color: burlywood;
  }
}
</style>
