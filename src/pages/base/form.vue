<!--  -->
<template>
  <div class="form-container">
    <z-header title="表单" bg="linear-gradient(45deg, #0081ff, #1cbbb4)"></z-header>
    <z-body>
      <z-form :model="form" ref="Form" :rules="rule">
        <z-form-item style="marginLeft:20px;marginRight:20px" prop="name" label="姓名">
          <z-input v-model="form.name"></z-input>
        </z-form-item>
        <z-form-item style="marginLeft:20px;marginRight:20px" prop="age" label="年龄">
          <z-input v-model.number="form.age"></z-input>
        </z-form-item>
        <z-form-item style="marginLeft:20px;marginRight:20px" prop="from" label="籍贯">
          <z-input v-model="form.from" placeholder="请输入籍贯"></z-input>
        </z-form-item>
        <z-form-item style="marginLeft:20px;marginRight:20px" prop="address" label="邮箱">
          <z-input v-model="form.address" placeholder="请输入邮箱"></z-input>
        </z-form-item>
        <z-form-item style="marginLeft:20px;marginRight:20px">
          <div class="flex justify-center">
            <z-button
              type="custom"
              commonText="提交"
              loadingText="上传中"
              complateText="已完成"
              iconPosition="right"
              :status="buttonStauts"
              :turnOnSuper="true"
              @click="submit('Form')"
            >
              <template v-slot:loading-icon>
                <z-icon color="#fff" iconName="i-loading_one"></z-icon>
              </template>
              <template v-slot:complate-icon>
                <z-icon color="#fff" iconName="i-yiwancheng"></z-icon>
              </template>
            </z-button>
          </div>
        </z-form-item>
      </z-form>
    </z-body>
  </div>
</template>

<script>
import ZForm from '../../components/base/z-form.vue'
import ZFormItem from '../../components/base/z-form-item.vue'
import ZInput from '../../components/base/z-input.vue'
import ZButton from '../../components/base/z-button.vue'
export default {
  components: { ZForm, ZFormItem, ZInput, ZButton },
  data() {
    return {
      buttonStauts: 'common',
      form: {
        name: '小明',
        age: '',
        from: '',
        address: ''
      },
      rule: {
        name: [
          {
            required: true,
            message: '请输入名字',
            trigger: 'blur'
          }
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' },
          {
            type: 'number',
            message: '年龄必须为数字'
          },
          { type: 'number', min: 18, max: 36, message: '年龄必须为18至36之间' }
        ],
        from: [{ required: true, message: '请输入籍贯', trigger: 'blur' }],
        address: [
          { type: 'email', trigger: 'change', message: '请输入正确的邮箱' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
    submit(ref) {
      this.$refs[ref]
        .validate()
        .then(valid => {
          this.$toast('校验成功')
          if (this.buttonStauts == 'common') {
            this.buttonStauts = 'loading'
            setTimeout(() => {
              this.buttonStauts = 'complate'
              setTimeout(() => {
                this.buttonStauts = 'common'
              }, 1600)
            }, 3200)
          }
        })
        .catch(error => {
          this.$toast('校验失败')
        })
    }
  },
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>