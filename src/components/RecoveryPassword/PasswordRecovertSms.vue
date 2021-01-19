<template>
  <div>
    <span class="username">请提供您的用户名XXXXXXXXXXXXXX</span>
    <el-form ref="form">
      <el-form-item label="用户名:">
        <el-input
          v-validate="'required'"
          name="Phone Number"
          type="number"
          placeholder="请输入您的手机号码"
          v-model="formData.phoneNumber"
        >
        </el-input>
        <div class="el-form-item__error" v-show="errors.has('Phone Number')">
          {{ errors.first("Phone Number") }}
        </div>
      </el-form-item>
      <el-button :loading="loading" type="primary" class="btn-block" @click="submitSmsRetrieval">提交</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'PasswordRecovertSms',
  data() {
    return {
      formData: {
        phoneNumber: ''
      },
      loading: false
    }
  },
  methods: {
    submitSmsRetrieval(e) {
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
