<template>
  <div class="change-password-detail">
    <div class="global-header">
      <button type="button" @click="$router.go(-1)">
        <svg-icon slot="prefix" icon-class="chevron-left" class="el-input__icon input-icon"/>
      </button>修改密码
    </div>
    <div class="container">
      <div class="change-password-content">
        <el-form ref="form">
          <el-form-item label="旧密码">
            <el-input
              v-validate="'required|min:6'"
              maxlength="20"
              :type="showOldPassword"
              placeholder="旧密码"
              v-model="formData.oldPassword"
              name="oldPassword"
            >
            </el-input>
            <button type="button" @click="switchVisibility1" class="btn-show-password">show / hide</button>
            <div class="el-form-item__error" v-show="errors.has('oldPassword')">
              {{ errors.first("oldPassword") }}
            </div>
          </el-form-item>

          <el-form-item label="新密码">
            <el-input
              v-validate="'required|min:6'"
              maxlength="20"
              :type="showNewPassword"
              placeholder="新密码"
              v-model="formData.newPassword"
              ref="newPassword"
              name="newPassword"
            >
            </el-input>
            <button type="button" @click="switchVisibility2" class="btn-show-password">show / hide</button>
            <div class="el-form-item__error" v-show="errors.has('newPassword')">
              {{ errors.first("newPassword") }}
            </div>
          </el-form-item>

          <el-form-item label="确认密码">
            <el-input
              v-validate="'required|confirmed:newPassword'"
              :type="showConfirmNewPassword"
              placeholder="确认新密码"
              v-model="formData.confirmNewPassword"
              name="confirmNewPassword"
            >
            </el-input>
            <button type="button" @click="switchVisibility3" class="btn-show-password">show / hide</button>
            <div class="el-form-item__error" v-show="errors.has('confirmNewPassword')">
              {{ errors.first("confirmNewPassword") }}
            </div>
          </el-form-item>

          <el-button :loading="loading" type="primary" class="btn-block" @click="submitForm">修改密码</el-button>
        </el-form>
      </div>
    </div>

    <br>
    {{formData.activeSystem}}
    <br>
    {{formData.activeDevice}}
    <br>
    {{formData.mobileModel}}

    <Navigation></Navigation>
  </div>
</template>

<script>
import { osName, deviceType, mobileModel } from 'mobile-device-detect'
import Navigation from '../../components/Navigation/Navigation.vue'
export default {
  name: 'ChangePassword',
  components: {
    Navigation
  },
  data() {
    return {
      formData: {
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
        mobileModel: mobileModel,
        activeSystem: osName,
        activeDevice: deviceType
      },
      loading: false,
      showOldPassword: 'password',
      showNewPassword: 'password',
      showConfirmNewPassword: 'password'
    }
  },
  mounted() {
    this.$root.$validator.localize('en', {
      messages: {
        required: (field) => field
      },
      attributes: { // LOCALIZATION CONTENT VALIDATION
        oldPassword: '需要旧密码',
        newPassword: '需要新密码',
        confirmNewPassword: '确认需要新密码'
      }
    })
  },
  methods: {
    submitForm(e) {
      this.loading = true
      this.$validator.validateAll()
        .then((result) => {
          if (result) {
            this.loading = false
            this.$alert('Your message already submitted.', 'Success', {
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
    },
    switchVisibility1(e) {
      e.preventDefault()
      this.showOldPassword = this.showOldPassword === 'password' ? 'text' : 'password'
      e.target.classList.toggle('is-open')
    },
    switchVisibility2(e) {
      e.preventDefault()
      this.showNewPassword = this.showNewPassword === 'password' ? 'text' : 'password'
      e.target.classList.toggle('is-open')
    },
    switchVisibility3(e) {
      e.preventDefault()
      this.showConfirmNewPassword = this.showConfirmNewPassword === 'password' ? 'text' : 'password'
      e.target.classList.toggle('is-open')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .change-password-detail {
    .change-password-content {
      margin-top: .3rem;
    }
    margin-bottom: 1.65rem;
    .btn-show-password {
      margin-right: 0;
      top: 50%;
      transform: translate(0, -50%);
    }

    .el-form-item {
      display: flex;
      align-items: center;
      height: 1.1rem;
      margin: .24rem 0;
      background-color: #212534;
      padding: 0 .45rem;
      .el-form-item__content {
        width: 100%;
      }
      .el-form-item__label {
        line-height: 1em;
        font-size: .32rem;
        color: #bacef1;
        width: 1.9rem;
        text-align: left;
        position: relative;
        margin-left: 0.17rem;
        &:before {
          content: "*";
          display: block;
          text-align: center;
          color: #ff0000;
          position: absolute;
          left: -0.17rem;
        }
      }
      .el-input__inner {
        border-radius: 0;
        border: none;
        outline: none;
        background-color: #212534;
        color: #ffffff;
        font-size: .32rem;
        height: .8rem;
      }
      ::placeholder {
        color: #bacef1;
      }
    }
    .el-button {
      margin-top: .2rem;
    }
  }
</style>
