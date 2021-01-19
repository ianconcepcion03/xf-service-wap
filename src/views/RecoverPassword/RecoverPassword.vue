<template>
  <div class="change-password-detail">
    <div class="global-header">
      <button type="button" @click="$router.go(-1)">
        <svg-icon slot="prefix" icon-class="chevron-left" class="el-input__icon input-icon"/>
      </button>找回密码
    </div>
    <div class="container">
      <div class="change-password-content custom-tab">
        <el-tabs type="card">
          <!-- FIRST TAB -->
          <el-tab-pane label="邮箱找回">
            <PasswordRecovertEmail></PasswordRecovertEmail>
          </el-tab-pane>

          <!-- SECOND TAB -->
          <el-tab-pane label="短信找回">
            <PasswordRecovertSms></PasswordRecovertSms>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from '../../components/Navigation/Navigation.vue'
import PasswordRecovertEmail from '../../components/RecoveryPassword/PasswordRecovertEmail.vue'
import PasswordRecovertSms from '../../components/RecoveryPassword/PasswordRecovertSms.vue'
export default {
  name: 'RecoverPassword',
  components: {
    Navigation,
    PasswordRecovertEmail,
    PasswordRecovertSms
  },
  data() {
    return {
      activeName: 'first',
      loading: false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .change-password-detail {
    span.username {
      color: #758197;
      display: block;
      margin: .35rem 0 .5rem .3rem;
    }
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
