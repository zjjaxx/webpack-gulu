<!--  -->
<template>
  <div class="row-col-container">
    <z-header title="Row">
      <template v-slot:left>
        <div class="left-wrap flex justify-center aligin-center" @click="$router.back()">
          <z-icon icon-name="i-left"></z-icon>
        </div>
      </template>
    </z-header>
    <z-body>
      <z-title title="默认布局+span"></z-title>
      <div class="default-wrap">
        <z-row>
          <z-col span="12">
            <div class="col-css">span:12</div>
          </z-col>
          <z-col span="12">
            <div class="col-css" style="opacity:0.5">span:12</div>
          </z-col>
        </z-row>
        <z-row>
          <z-col :span="8">
            <div class="col-css">span:12</div>
          </z-col>
          <z-col :span="8">
            <div class="col-css" style="opacity:0.5">span:12</div>
          </z-col>
          <z-col :span="8">
            <div class="col-css">span:12</div>
          </z-col>
        </z-row>
      </div>
      <z-title title="布局+offset"></z-title>
      <div class="default-wrap">
        <z-row>
          <z-col span="12" offset="4">
            <div class="col-css">span:12 offset:4</div>
          </z-col>
          <z-col span="6">
            <div class="col-css" style="opacity:0.5">span:6</div>
          </z-col>
        </z-row>
      </div>
      <z-title title="布局+gutter"></z-title>
      <z-row :gutter="20">
        <z-col span="8">
          <div class="col-css">span:8</div>
        </z-col>
        <z-col span="8">
          <div class="col-css" style="opacity:0.5">span:8</div>
        </z-col>
        <z-col span="8">
          <div class="col-css" style="opacity:0.5">span:8</div>
        </z-col>
      </z-row>
    </z-body>
  </div>
</template>

<script>
import ZRow from '../../components/layout/z-row.vue'
import ZCol from '../../components/layout/z-col.vue'
export default {
  components: { ZRow, ZCol },
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
.row-col-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% + 50px);
  background: #fff;
  z-index: 210;
  .default-wrap {
  }
  .left-wrap {
    height: 100%;
    * {
      margin-right: 0;
    }
  }
  .col-css {
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    background: #1989fa;
  }
}
</style>