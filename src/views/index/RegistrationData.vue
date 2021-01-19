<template>
  <form class="form-container">
    <div class="tab-details">
      <slot :formData="formData"></slot>
    </div>
    <div class="field is-grouped">
      <div class="control" v-if="currentActive > 0">
        <el-button @click="previousTab()" size="medium" type="primary" style="width:100%;" round>以前</el-button>
      </div>
      <div class="control" v-if="currentActive < totalTabs - 1">
        <el-button @click="nextTab()" size="medium" type="primary" style="width:100%;" round>下一步</el-button>
      </div>
      <div class="control" v-if="currentActive == totalTabs - 1">
        <el-button :loading="loading" @click="submit()" size="medium" type="primary" style="width:100%;" round>
          <span v-if="!loading">提交</span>
          <span v-else>提交...</span>
        </el-button>
      </div>
    </div>
    <div class="form-footer-links">
      <span>忘记密码？<a href="#">找回密码</a></span>
    </div>
  </form>
</template>

<script>
export default {
  name: 'registration-data',
  data() {
    return {
      loading: false,
      tabs: [],
      currentActive: 0,
      totalTabs: 0,
      formData: {
        name: '',
        username: '',
        password: '',
        passwordConfirm: '',
        emailAddress: '',
        phoneNumber: '',
        verificationCode: '',
        referralCode: ''
      }
    }
  },

  created() {
    this.tabs = this.$children
  },

  mounted() {
    this.totalTabs = this.tabs.length

    this.$root.$validator.localize('en', {
      messages: {
        required: (field) => field
      },
      attributes: { // LOCALIZATION CONTENT VALIDATION
        name: '名称不能为空',
        username: '用户名不能为空',
        password: '密码不能为空',
        passwordConfirm: '确认密码不能为空',
        emailAddress: '电子邮件地址不能为空',
        phoneNumber: '电话号码不能为空',
        verificationCode: '验证码不能为空',
        referralCode: '推荐代码不能为空'
      }
    })
  },

  methods: {
    previousTab() {
      this.currentActive--
      this.tabs.forEach((tab) => {
        tab.isActive = false
      })
      this.tabs[this.currentActive].isActive = true
    },
    nextTab() { // Validate input
      this.$root.$validator
        .validate('step' + (this.currentActive + 1) + '.*')
        .then((valid) => {
          if (valid) {
            this.currentActive++
            this.tabs.forEach((tab) => {
              tab.isActive = false
            })

            this.tabs[this.currentActive].isActive = true
          }
        })
    },
    submit() {
      this.$root.$validator
        .validate('step' + this.totalTabs + '.*')
        .then((valid) => {
          console.log(valid)
          if (valid) {
            this.loading = true
            setTimeout(() => {
              this.$alert('Your account successfully registered, Please login your account', 'Welcome', {
                confirmButtonText: 'OK',
                callback: action => {
                  this.$router.push({ path: 'login' })
                }
              })
              this.loading = false
              console.log(this.formData)  
            }, 1000)
          } else {
            console.log('error submit!!')
            return false
          }
        })
    }
  }
}
</script>
