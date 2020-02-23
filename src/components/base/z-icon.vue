<!--
 * @Author: zjj
 * @Date: 2020-01-13 14:21:50
 * @LastEditors  : zjj
 * @LastEditTime : 2020-01-13 14:27:57
 -->
<!--  -->
<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="`#${iconName}`"></use>
    </svg>
</template>

<script>
export default {
  components: {},
  props: {
    iconName: {
      type: String,
      default: () => {
        return "";
      }
    }
  },
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
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>