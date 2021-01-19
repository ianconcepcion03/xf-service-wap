<template>
  <div class="bank-information-detail">
    <div class="global-header">
      <button type="button" @click="$router.go(-1)">
        <svg-icon slot="prefix" icon-class="chevron-left" class="el-input__icon input-icon"/>
      </button>银行信息
    </div>
    <div class="container">
      <div class="bank-information-content">
        <div class="exclusive-url">
          <a href="#">专属网址：http://www.xxxx.com</a>
        </div>

        <el-form ref="form">
          <p v-if="bankInformations.length == 0" class="bank-info-empty">No Bank information yet</p>

          <div class="form-group" v-for="(bankInformation, index) in bankInformations" v-bind:key="index">
            <el-form-item>
              <el-input placeholder="银行名称" v-model.lazy="bankInformation.bankName"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="账号" v-model.lazy="bankInformation.accountNumber"></el-input>
            </el-form-item>
            <el-button type="primary" @click="deleteBankInfo(index)">解绑</el-button>
          </div>

          <el-button type="primary" @click="addBankInfo" class="btn-block">+添加银行卡</el-button>

          <el-form-item>
            <el-button type="primary" @click="handleSubmit" class="btn-block">更新银行信息</el-button>
          </el-form-item>
        </el-form>

      </div>
    </div>

    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from '../../components/Navigation/Navigation.vue'
export default {
  name: 'BankInformation',
  components: {
    Navigation
  },
  data() {
    return {
      bankInformations: [
        {
          bankName: '北京银行',
          accountNumber: '26533*****34'
        }
      ]
    }
  },
  methods: {
    addBankInfo(e) {
      e.preventDefault()
      this.bankInformations.push({
        bankName: '',
        accountNumber: ''
      })
    },
    deleteBankInfo(counter) {
      this.bankInformations.splice(counter, 1)
      console.log(this.bankInformations)
    },
    handleSubmit(e) {
      e.preventDefault()
      alert('Success!!!')
      console.log(this.bankInformations)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .bank-information-detail {
    margin-bottom: 1.65rem;
    .exclusive-url {
      text-align: center;
      margin-bottom: .3rem;
      a {
        text-decoration: none;
      }
    }
    p.bank-info-empty {
      margin-top: .5rem;
      text-align: center;
    }
  }
  .bank-information-content {
    margin-top: .3rem;
    .form-group {
      padding: .25rem .45rem;
      background-color: #212534;
      border-radius: 3px;
      font-size: .32rem;
      text-decoration: none;
      color: #bacef1;
      position: relative;
      margin-bottom: .3rem;
      .el-form-item .el-input__inner {
        border-radius: 0;
        outline: none;
        background-color: #212534;
        color: #bacef1;
        font-size: .32rem;
        height: .87rem;
        padding: 0 .23rem;
        border: none;
      }
      ::placeholder {
        color: #677fa9;
      }
      .el-form-item--small.el-form-item {
        margin-bottom: 0;
        &:first-child {
          border-bottom: 1px solid #505771;
        }
      }
      .el-button {
        margin: 0;
        position: absolute;
        bottom: .35rem;
        right: .45rem;
        height: .66rem;
        border-radius: 2px;
        padding-left: .45rem;
        padding-right: .45rem;
      }
    }
  }
</style>
