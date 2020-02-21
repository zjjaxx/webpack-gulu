<!--  -->
<template>
  <div class="z-toast">
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
<style lang='less' scoped>
.z-toast {
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 10px 20px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 14px;
  z-index: 300;
}
</style>