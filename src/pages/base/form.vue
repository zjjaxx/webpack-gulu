<!--  -->
<template>
  <div class="form-container">
    <z-form :model="form" ref="Form" :rules="rule">
      <z-form-item style="marginLeft:20px;marginRight:20px" prop="name" label="姓名">
        <z-input v-model="form.name"></z-input>
      </z-form-item>
      <z-form-item style="marginLeft:20px;marginRight:20px" prop="age" label="年龄">
        <z-input v-model.number="form.age"></z-input>
      </z-form-item>
      <z-form-item style="marginLeft:20px;marginRight:20px" prop="from">
        <z-input v-model="form.from" placeholder="请输入籍贯"></z-input>
      </z-form-item>
      <z-form-item style="marginLeft:20px;marginRight:20px">
        <div class="flex justify-center">
          <z-button @click="submit('Form')">提交</z-button>
        </div>
      </z-form-item>
    </z-form>
  </div>
</template>

<script>
import ZForm from "../../components/base/z-form.vue";
import ZFormItem from "../../components/base/z-form-item.vue";
import ZInput from "../../components/base/z-input.vue";
import ZButton from "../../components/base/z-button.vue";
export default {
  components: { ZForm, ZFormItem, ZInput, ZButton },
  data() {
    return {
      form: {
        name: "小明",
        age: "",
        from: ""
      },
      rule: {
        name: [
          {
            required: true,
            message: "请输入名字",
            trigger: "blur"
          }
        ],
        age: [
          {required: true, message: "请输入年龄?", trigger: "blur" },
          {
            type: "number",
            message: "年龄必须为数字"
          },
          { type: "number", min: 18, max: 36, message: "年龄必须为18至36之间" }
        ],
        from: [{ required: true, message: "请输入籍贯", trigger: "blur" }]
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    submit(ref) {
      this.$refs[ref]
        .validate()
        .then(valid => {
          console.log("valid", valid);
        })
        .catch(error => {
          console.log("error", error);
        });
    }
  },
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>