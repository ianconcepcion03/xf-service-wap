<template>
  <div>
    <span class="username">请提供您的用户名XXXXXXXXXXXXXX</span>
    <el-form ref="form">
      <el-form-item label="用户名:">
        <el-input
          v-validate="'required|min:6'"
          maxlength="20"
          name="Username"
          type="text"
          placeholder="6-12个字符"
          v-model="formData.username"
        >
        </el-input>
        <div class="el-form-item__error" v-show="errors.has('Username')">
          {{ errors.first("Username") }}
        </div>
      </el-form-item>
      <el-form-item label="邮 箱:">
        <el-input
          v-validate="'required|email'"
          name="Email address"
          type="email"
          placeholder="请输入注册邮箱"
          v-model="formData.emailAddress"
        >
        </el-input>
        <div class="el-form-item__error" v-show="errors.has('Email address')">
          {{ errors.first("Email address") }}
        </div>
      </el-form-item>
      <el-button :loading="loading" type="primary" class="btn-block" @click="submitEmailRetrieval">提交</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'PasswordRecovertEmail',
  data() {
    return {
      formData: {
        username: '',
        emailAddress: ''
      },
      loading: false
    }
  },
  methods: {
    submitEmailRetrieval(e) {
      this.loading = true
      this.$validator.validateAll()
        .then((result) => {
          if (result) {
            this.loading = false
            this.$alert('Your password already retrieved.', 'Success', {
              confirmButtonText: 'OK',
              callback: action => {
                this.$router.push({ path: '/' })
              }
            })
            console.log(this.formData)
          } else {
            this.loading = false
            return false
          }
        })
      e.preventDefault()
    }
  }
}
</script>
