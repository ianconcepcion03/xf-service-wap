<template>
  <registration-data>
    <template v-slot="{formData}">

      <!-- STEP 1 REGISTRATION -->
      <Tab name="Step 1" :selected="true" :formData="formData">
        <div id="form-step-1">
          <div class="el-input-field">
            <el-input
              v-validate="'required'"
              name="name"
              type="text"
              placeholder="请输入真实姓名"
              v-model="formData.name"
              data-vv-scope="step1"
            >
              <template slot="prefix">
                <i class="form-icon icon-user"></i>
                <span class="title required">姓名</span>
              </template>
            </el-input>
            <div class="el-form-item__error" v-show="errors.has('step1.name')">
              {{ errors.first("step1.name") }}
            </div>
          </div>

          <div class="el-input-field">
            <el-input
              v-validate="'required|min:6'"
              maxlength="20"
              name="username"
              type="text"
              placeholder="6-10个字符，包含大小写字母"
              v-model="formData.username"
              data-vv-scope="step1"
            >
              <template slot="prefix">
                <i class="form-icon icon-user"></i>
                <span class="title required">用户名</span>
              </template>
            </el-input>
            <div class="el-form-item__error" v-show="errors.has('step1.username')">
              {{ errors.first("step1.username") }}
            </div>
          </div>

          <div class="el-input-field">
            <el-input
              v-validate="'required|min:6'"
              maxlength="20"
              name="password"
              :type="showPassword"
              placeholder="6-10个英文字符"
              v-model="formData.password"
              ref="password"
              data-vv-scope="step1"
            >
              <template slot="prefix">
                <i class="form-icon icon-padlack"></i>
                <span class="title required">用户密码</span>
              </template>
            </el-input>
            <button type="button" @click="switchVisibility1" class="btn-show-password">show / hide</button>
            <div class="el-form-item__error" v-show="errors.has('step1.password')">
              {{ errors.first("step1.password") }}
            </div>
          </div>

          <div class="el-input-field">
            <el-input
              v-validate="'required|confirmed:password'"
              name="passwordConfirm"
              :type="showConfirmPassword"
              placeholder="确认密码"
              v-model="formData.passwordConfirm"
              data-vv-scope="step1"
            >
              <template slot="prefix">
                <i class="form-icon icon-padlack"></i>
                <span class="title required">确认密码</span>
              </template>
            </el-input>
            <button type="button" @click="switchVisibility2" class="btn-show-password">show / hide</button>
            <div
              class="el-form-item__error"
              v-show="errors.has('step1.passwordConfirm')"
            >
              {{ errors.first("step1.passwordConfirm") }}
            </div>
          </div>
        </div>
      </Tab>

      <!-- STEP 2 REGISTRATION -->
      <Tab name="Step 2">
        <div id="form-step-2">
          <div class="el-input-field">
            <el-input
              v-validate="'required|email'"
              name="emailAddress"
              type="text"
              placeholder="找回密码的重要依据"
              v-model="formData.emailAddress"
              data-vv-scope="step2"
            >
              <template slot="prefix">
                <i class="form-icon icon-email"></i>
                <span class="title required">邮箱地址</span>
              </template>
            </el-input>
            <div
              class="el-form-item__error"
              v-show="errors.has('step2.emailAddress')"
            >
              {{ errors.first("step2.emailAddress") }}
            </div>
          </div>

          <div class="el-input-field">
            <el-input
              v-validate="'required'"
              name="phoneNumber"
              type="number"
              placeholder="我们会不定时发放特别优惠"
              v-model="formData.phoneNumber"
              data-vv-scope="step2"
            >
              <template slot="prefix">
                <i class="form-icon icon-phone"></i>
                <span class="title required">手机号码</span>
              </template>
            </el-input>
            <div
              class="el-form-item__error"
              v-show="errors.has('step2.phoneNumber')"
            >
              {{ errors.first("step2.phoneNumber") }}
            </div>
          </div>

          <div class="el-input-field">
            <el-input
              v-validate="'required'"
              name="verificationCode"
              type="text"
              placeholder="请输入手机验证码"
              v-model="formData.verificationCode"
              data-vv-scope="step2"
            >
              <template slot="prefix">
                <i class="form-icon icon-padlack"></i>
                <span class="title required">验证码</span>
              </template>
            </el-input>
            <el-button :loading="loading" @click="submitVerification()" type="info" size="mini">验证</el-button>
            <div
              class="el-form-item__error"
              v-show="errors.has('step2.verificationCode')"
            >
              {{ errors.first("step2.verificationCode") }}
            </div>
          </div>

          <div class="el-input-field">
            <el-input
              name="referralCode"
              type="text"
              placeholder="不是代理下玩家无需填写"
              v-model="formData.referralCode"
              data-vv-scope="step2"
            >
              <template slot="prefix">
                <i class="form-icon icon-users"></i>
                <span class="title">推荐码</span>
              </template>
            </el-input>
          </div>
        </div>
      </Tab>

    </template>
  </registration-data>
</template>

<script>
import RegistrationData from './RegistrationData.vue'
import Tab from '../../components/Tab.vue'
export default {
  name: 'Register',
  components: {
    RegistrationData,
    Tab
  },
  data() {
    return {
      loading: false,
      showPassword: 'password',
      showConfirmPassword: 'password'
    }
  },
  methods: {
    switchVisibility1(e) {
      e.preventDefault()
      this.showPassword = this.showPassword === 'password' ? 'text' : 'password'
      e.target.classList.toggle('is-open')
    },
    switchVisibility2(e) {
      e.preventDefault()
      this.showConfirmPassword = this.showConfirmPassword === 'password' ? 'text' : 'password'
      e.target.classList.toggle('is-open')
    },
    submitVerification() {
      this.loading = true
      setTimeout(() => {
        this.$alert('Your verification code successfully sent please wait more than 60 seconds...', {
          confirmButtonText: 'OK'
        })
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .el-input-field {
    position: relative;
    font-size: 0;
    margin-bottom: 18px;
  }
</style>
