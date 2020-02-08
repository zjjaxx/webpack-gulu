<!-- 、 -->
<template>
  <router-link tag="div" :to="path" class="menu-item-wrap">
    <div class="menu-item border-bottom-1px flex justify-between aligin-center">
      <slot name="icon-slot"></slot>
      <span class="content-title">{{title}}</span>
      <slot name="icon-slot"></slot>
      <z-icon icon-name="i-right"></z-icon>
    </div>
  </router-link>
</template>

<script>
export default {
  components: {},
  props:{
      title:{
          type:String,
          default:()=>{
              return ""
          },
          required:true
      },
      path:{
        type:Object,
        default:()=>{
          return {
            path:""
          }
        }
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
.menu-item-wrap {
  padding-left: 15px;
  .menu-item {
    padding: 12px 15px 12px 0;
    .content-title{
        flex: 1;
    }
  }
}
</style>