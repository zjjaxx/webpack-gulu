<!--  -->
<template>
  <div class="checkbox-container">
    <z-header
      leftArrow
      @leftEvent="$router.back()"
      title="复选框"
      bg="linear-gradient(45deg, #0081ff, #1cbbb4)"
    ></z-header>

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
    <z-title title="复选框组+水平排列"></z-title>
    <div style="padding:20px">
      <z-checkbox-group direction="horizontal" v-model="result1" style="marginBottom:10px">
        <z-checkbox style="marginRight:10px" activeColor="#1989fa" name="a">复选框</z-checkbox>
        <z-checkbox style="marginRight:10px" activeColor="#1989fa" name="b">复选框</z-checkbox>
        <z-checkbox activeColor="#1989fa" name="c">复选框</z-checkbox>
      </z-checkbox-group>result1:
      <div v-for="(item,index) in result1">
        <div>{{item}}</div>
      </div>
    </div>
    <z-title title="限制最大个数 2个"></z-title>
    <div style="padding:20px">
      <z-checkbox-group v-model="result2" style="marginBottom:10px" :max="2">
        <z-checkbox style="marginBottom:10px" activeColor="#1989fa" name="a">复选框</z-checkbox>
        <z-checkbox style="marginBottom:10px" activeColor="#1989fa" name="b">复选框</z-checkbox>
        <z-checkbox activeColor="#1989fa" name="c">复选框</z-checkbox>
      </z-checkbox-group>result:
      <div v-for="(item,index) in result2">
        <div>{{item}}</div>
      </div>
    </div>
    <z-title title="全选与反选"></z-title>
    <div style="padding:20px">
      <z-checkbox-group v-model="result3" style="marginBottom:10px" ref="checkboxGroup">
        <z-checkbox style="marginBottom:10px" activeColor="#1989fa" name="a">复选框</z-checkbox>
        <z-checkbox style="marginBottom:10px" activeColor="#1989fa" name="b">复选框</z-checkbox>
        <z-checkbox activeColor="#1989fa" name="c">复选框</z-checkbox>
      </z-checkbox-group>result:
      <div v-for="(item,index) in result3">
        <div>{{item}}</div>
      </div>
    </div>
    <z-button style="marginLeft:20px" type="custom" @click="checkAll">全选</z-button>
    <z-button style="marginLeft:20px;marginBottom:20px" type="custom" @click="toggleAll">反选</z-button>
  </div>
</template>

<script>
import ZCheckbox from '../../components/base/z-checkbox.vue'
import ZCheckboxGroup from '../../components/base/z-checkbox-group.vue'
import ZButton from '../../components/base/z-button.vue'
export default {
  components: { ZCheckbox, ZCheckboxGroup, ZButton },
  data() {
    return {
      checked: false,
      checked1: false,
      checked2: true,
      checked3: false,
      checked4: false,
      result: [],
      result1: [],
      result2: [],
      result3: []
    }
  },
  computed: {},
  watch: {},
  methods: {
    checkAll() {
      this.$refs.checkboxGroup.checkAll()
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll()
    }
  },
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
}
</style>