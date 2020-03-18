<!--  -->
<template>
  <div class="z-title">
    <div class="title-content">
        <div class="title">{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: () => {
        return '标题'
      },
      required: true
    }
  },
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
.z-title {
  padding-left: 15px;
  background: #fff;
  .title-content{
      padding: 12px 15px 12px 0px;
      .title{
          font-size: 16px;
          color: #999;
          border-left: 3px solid #c0c0c0;
          padding-left:10px;
      }
  }
}
</style>