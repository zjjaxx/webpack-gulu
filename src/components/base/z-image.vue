<!--  -->
<template>
  <img v-bind="imgAttr" />
</template>

<script>
export default {
  props: {
    imgAttr: {
      type: Object,
      default: () => {
        return {}
      },
      required: true
    }
  },
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
</style>