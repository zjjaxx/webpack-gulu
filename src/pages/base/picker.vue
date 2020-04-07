<!--  -->
<template>
  <div class="picker-container">
    <z-header title="picker选择器" bg="linear-gradient(45deg, #0081ff, #1cbbb4)"></z-header>
    <z-body>
      <z-title title="按钮类型"></z-title>
      <div class="default-wrap">
        <z-button style="marginRight:20px" @click="popupShow=true">picker</z-button>
      </div>
    </z-body>
    <z-popup v-model="popupShow" position="bottom">
        <z-picker :columns="columns"></z-picker>
    </z-popup>
  </div>
</template>

<script>
import ZPicker from '../../components/base/z-picker.vue'
import ZButton from '../../components/base/z-button.vue'
import ZPopup from "../../components/base/z-popup.vue"
export default {
  components: { ZPicker, ZButton,ZPopup },
  data() {
    return {
        popupShow:false,
        columns:["杭州","宁波","金华","上海","武汉","衢州","缅甸","老挝","越南"]
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
.picker-container {
  .default-wrap {
    display: flex;
    padding: 10px;
  }
}
</style>