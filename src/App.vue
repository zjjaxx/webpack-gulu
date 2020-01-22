
<!--
 * @Author: zjj
 * @Date: 2020-01-20 16:42:20
 * @LastEditors  : zjj
 * @LastEditTime : 2020-01-22 15:33:56
 -->
<!--  -->
<template>
  <div id="app">
    <div class="test test1" :class="test">{{test}}</div>
    <span class="gulu">&#xe63a;</span>
    <span>{{count}}</span>
    <button @click="add">add</button>
    <template v-for="(item,index) in count">
      <div class="item" :key="index">item</div>
    </template>
  </div>
</template>

<script>
export default {
  components: {},
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
      this.count.map(item => {
        let helloworld = "aaa";
        console.log("item", item, helloworld);
      });
      let promise = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(100)
          }, 2000);
        });
      };
      promise().then(res=>{
        console.log("res",res)
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
