<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  render(h) {
     
    return (
      <div class="test">
        {
            this.$children.map(item=>item)
        }
      </div>
    )
  },
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.test {
  height: 100%;
  background: gray;
}
.default{
    padding: 100px;
    color: green;
}
</style>