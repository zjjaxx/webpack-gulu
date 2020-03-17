<!--  -->
<template>
  <div class="button-container">
      <z-super-button></z-super-button>
  </div>
</template>

<script>
import ZSuperButton from '../../components/super/z-super-button.vue'
export default {
  components: { ZSuperButton },
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
.button-container {
}
</style>