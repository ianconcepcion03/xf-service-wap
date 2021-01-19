<template>
  <div class="account-information-detail">
    <div class="global-header">
      <button type="button" @click="$router.go(-1)">
        <svg-icon slot="prefix" icon-class="chevron-left" class="el-input__icon input-icon"/>
      </button>账户信息
    </div>
    <div class="container">
      <div class="account-information-content">
        <div class="exclusive-url">
          <a href="#">专属网址：http://www.xxxx.com</a>
        </div>
        <el-form ref="form">
           <el-form-item label="账号">
            <el-input
              type="text"
              placeholder="账号"
              v-model="formData.accountNumber"
              name="accountNumber"
            >
            </el-input>
          </el-form-item>

          <el-form-item label="性别">
            <el-input
              type="text"
              placeholder="性别"
              v-model="formData.gender"
              name="gender"
            >
            </el-input>
          </el-form-item>

          <el-form-item label="姓名">
            <el-input
              type="text"
              placeholder="姓名"
              v-model="formData.name"
              name="name"
            >
            </el-input>
          </el-form-item>

          <el-form-item label="生日">
            <el-input
              type="text"
              placeholder="生日"
              v-model="formData.birthday"
              name="birthday"
            >
            </el-input>
          </el-form-item>

          <el-form-item label="QQ">
            <el-input
              type="text"
              placeholder="QQ"
              v-model="formData.qq"
              name="qq"
            >
            </el-input>
          </el-form-item>

          <el-form-item label="微信">
            <el-input
              type="text"
              placeholder="微信"
              v-model="formData.wechat"
              name="wechat"
            >
            </el-input>
          </el-form-item>

          <el-form-item label="邮箱">
            <el-input
              v-validate="'required|email'"
              type="email"
              placeholder="邮箱"
              v-model="formData.emailAddress"
              name="emailAddress"
            >
            </el-input>
            <div class="el-form-item__error" v-show="errors.has('emailAddress')">
              {{ errors.first("emailAddress") }}
            </div>
          </el-form-item>

          <div class="form-group">
            <el-form-item label="电话">
              <el-input
                type="text"
                placeholder="电话"
                v-model="formData.phone"
                name="phone"
              >
              </el-input>
            </el-form-item>
            <el-button type="primary" :loading="loading" @click="submitVerification()">验证</el-button>
          </div>

          <el-form-item label="注册时间">
            <el-input
              type="text"
              placeholder="注册时间"
              v-model="formData.registrationTime"
              name="registrationTime"
            >
            </el-input>
          </el-form-item>

          <el-form-item label="专属推广码">
            <el-input
              type="text"
              placeholder="专属推广码"
              v-model="formData.promoCode"
              name="promoCode"
            >
            </el-input>
          </el-form-item>

          <el-form-item label="推广链接">
            <el-input
              type="text"
              placeholder="推广链接"
              v-model="formData.sponsoredLink"
              name="sponsoredLink"
            >
            </el-input>
          </el-form-item>

          <el-button :loading="loading" type="primary" class="btn-block" @click="submitForm">提交</el-button>
        </el-form>
      </div>
    </div>

    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from '../../components/Navigation/Navigation.vue'
export default {
  name: 'AccountInformation',
  components: {
    Navigation
  },
  data() {
    return {
      formData: {
        accountNumber: '',
        gender: '',
        name: '',
        birthday: '',
        qq: '',
        wechat: '',
        emailAddress: '',
        phone: '',
        registrationTime: '',
        promoCode: '',
        sponsoredLink: ''
      },
      loading: false
    }
  },
  mounted() {
    this.$root.$validator.localize('en', {
      messages: {
        required: (field) => field
      },
      attributes: { // LOCALIZATION CONTENT VALIDATION
        emailAddress: '电子邮件地址为必填项'
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
            this.$alert('您的银行信息已成功更新', '成功', {
              confirmButtonText: '好',
              callback: action => {
                // this.$router.push({ path: '/' })
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
    submitVerification() {
      this.loading = true
      setTimeout(() => {
        this.$alert('您的验证码已成功发送，请检查您的电子邮件地址。', {
          confirmButtonText: 'OK'
        })
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .account-information-detail {
    .exclusive-url {
      text-align: center;
      margin-bottom: .3rem;
      a {
        text-decoration: none;
      }
    }
    .account-information-content {
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
      margin: 0;
      background-color: #212534;
      padding: 0 .45rem 0 .75rem;
      border-bottom: .05rem solid #1b1d29;
      .el-form-item__content {
        width: 100%;
      }
      .el-form-item__label {
        line-height: 1em;
        font-size: .32rem;
        color: #bacef1;
        width: 2.7rem;
        text-align: left;
        position: relative;
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
        color: #758197;
      }
    }
    .el-button {
      margin-top: .2rem;
    }
    .form-group {
      position: relative;
      .el-button {
        margin: 0;
        position: absolute;
        bottom: .35rem;
        right: .45rem;
        height: .66rem;
        border-radius: 2px;
        padding-left: .45rem;
        padding-right: .45rem;
        top: 43%;
        transform: translate(0, -45%);
      }
    }
  }
</style>
