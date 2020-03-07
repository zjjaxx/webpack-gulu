<!--  -->
<template>
  <div class="checkbox-container">
    <z-header title="复选框">
      <template v-slot:left>
        <div class="left-wrap flex justify-center aligin-center" @click="$router.back()">
          <z-icon icon-name="i-left"></z-icon>
        </div>
      </template>
    </z-header>
    <z-body>
      <z-title title="基础用法(v-model)"></z-title>
      <div class="default-wrap">
        <z-checkbox v-model="checked">复选框</z-checkbox>
      </div>
      <z-title title="禁用状态"></z-title>
      <div class="default-wrap">
        <z-checkbox disabled v-model="checked1">复选框</z-checkbox>
        <z-checkbox disabled v-model="checked2">复选框</z-checkbox>
      </div>
      <z-title title="自定义颜色"></z-title>
      <div class="default-wrap">
        <z-checkbox activeColor="#1989fa" v-model="checked3">复选框</z-checkbox>
      </div>
      <z-title title="自定义图标"></z-title>
      <z-checkbox style="marginLeft:10px;marginTop:10px" activeColor="#1989fa" v-model="checked4">
        <template v-slot:icon="{checked}">
          <z-icon iconName="i-thumbs-up" color="#f40" v-if="checked"></z-icon>
          <z-icon iconName="i-thumbs-up" v-else></z-icon>
        </template>
        复选框
      </z-checkbox>
      <z-title title="复选框组"></z-title>
      <div style="padding:20px">
        <z-checkbox-group v-model="result" style="marginBottom:10px">
          <z-checkbox style="marginBottom:10px" activeColor="#1989fa" name="a">复选框</z-checkbox>
          <z-checkbox style="marginBottom:10px" activeColor="#1989fa" name="b">复选框</z-checkbox>
          <z-checkbox activeColor="#1989fa" name="c">复选框</z-checkbox>
        </z-checkbox-group>result:
        <div v-for="(item,index) in result">
          <div>{{item}}</div>
        </div>
      </div>
    </z-body>
  </div>
</template>

<script>
import ZCheckbox from '../../components/base/z-checkbox.vue'
import ZCheckboxGroup from '../../components/base/z-checkbox-group.vue'
export default {
  components: { ZCheckbox, ZCheckboxGroup },
  data() {
    return {
      checked: false,
      checked1: false,
      checked2: true,
      checked3: false,
      checked4: false,
      result: []
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
.checkbox-container {
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