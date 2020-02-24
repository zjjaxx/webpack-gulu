<!--
 * @Author: zjj
 * @Date: 2020-02-17 13:48:10
 * @LastEditors: zjj
 * @LastEditTime: 2020-02-24 15:00:01
 -->
<!--  -->
<template>
  <span class="z-badge" :style="{'background':background}">{{badge}}</span>
</template>

<script>
export default {
  components: {},
  props: {
    badge: {
      type: Number,
      default: () => {
        return 0
      },
      required: true
    },
    background:{
        type:String,
        default:()=>{
            return ""
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
.z-badge {
  padding: 1px 5px;
  border-radius: 100px;
  background: #dd524d;
  color: #fff;
  font-size: 10px;
}
</style>