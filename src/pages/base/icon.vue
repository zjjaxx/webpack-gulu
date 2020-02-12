<!--  -->
<template>
  <div class="icon-container">
    <z-header title="图标">
      <template v-slot:left>
        <div class="left-wrap flex justify-center aligin-center" @click="$router.back()">
          <z-icon icon-name="i-left"></z-icon>
        </div>
      </template>
    </z-header>
    <z-body>
      <z-title title="图标"></z-title>
      <div class="default-wrap flex">
        <div>
          <z-icon iconName="i-setting"></z-icon>
          <div>i-setting</div>
        </div>
        <div>
          <z-icon iconName="i-code"></z-icon>
          <div>i-code</div>
        </div>
        <div>
          <z-icon iconName="i-love"></z-icon>
          <div>i-love</div>
        </div>
        <div>
          <z-icon iconName="i-more"></z-icon>
          <div>i-more</div>
        </div>
        <div>
          <z-icon iconName="i-share"></z-icon>
          <div>i-share</div>
        </div>
        <div>
          <z-icon iconName="i-location"></z-icon>
          <div>i-location</div>
        </div>
        <div>
          <z-icon iconName="i-layout"></z-icon>
          <div>i-layout</div>
        </div>
        <div>
          <z-icon iconName="i-home"></z-icon>
          <div>i-setting</div>
        </div>
        <div>
          <z-icon iconName="i-error"></z-icon>
          <div>i-error</div>
        </div>
        <div>
          <z-icon iconName="i-info"></z-icon>
          <div>i-info</div>
        </div>
        <div>
          <z-icon iconName="i-loading"></z-icon>
          <div>i-loading</div>
        </div>
        <div>
          <z-icon iconName="i-left"></z-icon>
          <div>i-left</div>
        </div>
        <div>
          <z-icon iconName="i-right"></z-icon>
          <div>i-right</div>
        </div>
        <div>
          <z-icon iconName="i-down"></z-icon>
          <div>i-down</div>
        </div>
        <div>
          <z-icon iconName="i-thumbs-up"></z-icon>
          <div>i-thumbs-up</div>
        </div>
        <div>
          <z-icon iconName="i-download"></z-icon>
          <div>i-download</div>
        </div>
      </div>
    </z-body>
  </div>
</template>

<script>
export default {
  components: {},
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
.default-wrap /deep/ .icon {
  margin-bottom: 8px;
  height: 1.5em;
  width: 1.5em;
}
.icon-container {
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
    > div {
      margin-bottom: 20px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
    }
    padding: 10px;
    flex-wrap: wrap;
    * {
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>