<!--  -->
<template>
  <div
    class="z-dialog-mask flex aligin-center justify-center"
    v-if="dialogFlag"
    @click="$emit('update:dialogFlag',false)"
  >
    <div class="z-dialog" @click.stop>
      <div class="title">{{title}}</div>
      <div class="content">{{content}}</div>
      <div class="close" @click="$emit('update:dialogFlag',false)">确认</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title:{
      type:String,
      default:()=>{
        return "标题"
      }
    },
    content:{
      type:String,
      default:()=>{
        return "content"
      },
      required:true
    },
    dialogFlag: {
      type: Boolean,
      default: () => {
        return false
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
.z-dialog-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 300;
  background: rgba(0, 0, 0, 0.3);
  .z-dialog {
    z-index: 301;
    width: 320px;
    border-radius: 5px;
    background: #fff;
    animation: show-in 0.3s 1;
    box-shadow: 14px 25px 16px 7px rgba(0, 0, 0, 0.05);
    .title{
      padding-top: 24px;
      text-align: center;
      font-size: 16px;
    }
    .content{
      padding:12px 24px 24px;
      font-size: 14px;
      text-align: center;
    }
    .close {
      height: 50px;
      color: #1989fa;
      line-height: 50px;
      text-align: center;
    }
  }
}
</style>