<!--  -->
<template>
  <span class="z-badge" :style="[{'background':background},{'color':background?'#fff':''}]">{{badge}}</span>
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