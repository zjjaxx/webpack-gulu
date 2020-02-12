<!--  -->
<template>
  <div class="z-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
};
</script>
<style lang='less'>

.z-button-group {
  display: inline-flex;
  vertical-align: middle;
  .z-button {
    margin-left: -1px;
    border-radius: 0;
    &:first-child {
      margin-left: 0;
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover{
        position: relative;
        z-index: 1;
    }
  }
}
</style>