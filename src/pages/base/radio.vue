<!--  -->
<template>
  <div class="radio-container">
    <z-header title="Radio单选框" bg="linear-gradient(45deg, #0081ff, #1cbbb4)">
    </z-header>
    <z-body>
      <z-title title="基础用法"></z-title>
      <z-radio-group style="padding:10px" v-model="radio">
        <z-radio name="sports">运动</z-radio>
        <z-radio name="music">音乐</z-radio>
      </z-radio-group>
      <z-title title="水平排列"></z-title>
      <z-radio-group direction="horizontal" style="padding:10px" v-model="radio1">
        <z-radio style="marginRight:10px" name="sports">运动</z-radio>
        <z-radio name="music">音乐</z-radio>
      </z-radio-group>
      <z-title title="禁用状态"></z-title>
      <z-radio-group direction="horizontal" style="padding:10px" v-model="radio2">
        <z-radio disabled style="marginRight:10px" name="sports">运动</z-radio>
        <z-radio disabled name="music">音乐</z-radio>
      </z-radio-group>
      <z-title title="自定义图标"></z-title>
      <z-radio-group direction="horizontal" style="padding:10px" v-model="radio3">
        <z-radio  style="marginRight:10px" name="sports">
          运动
          <template v-slot:icon="{checked}">
            <z-icon iconName="i-thumbs-up" color="#f40" v-if="checked"></z-icon>
            <z-icon iconName="i-thumbs-up" v-else></z-icon>
          </template>
        </z-radio>
        <z-radio  name="music">
          音乐
          <template v-slot:icon="{checked}">
            <z-icon iconName="i-thumbs-up" color="#f40" v-if="checked"></z-icon>
            <z-icon iconName="i-thumbs-up" v-else></z-icon>
          </template>
        </z-radio>
      </z-radio-group>
    </z-body>
  </div>
</template>

<script>
import ZRadioGroup from '../../components/base/z-radio-group.vue'
import ZRadio from '../../components/base/z-radio.vue'
export default {
  components: { ZRadioGroup, ZRadio },
  data() {
    return {
      radio: 'sports',
      radio1: 'sports',
      radio2: 'music',
      radio3:"sports"
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
.radio-container {
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
}
</style>