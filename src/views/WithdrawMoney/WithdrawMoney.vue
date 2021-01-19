<template>
  <div class="transfer-detail">
    <div class="global-header">
      <button type="button" @click="$router.go(-1)">
        <svg-icon slot="prefix" icon-class="chevron-left" class="el-input__icon input-icon"/>
      </button>退出
    </div>
    <div class="container">
      <div class="transfer-content">
        <el-form ref="form">
          <div class="transfer-info">
            <div class="transfer-header">
              <ul>
                <li>
                  <i class="icon-transfer icon-wallet"></i>
                  <div class="detail-transfer">
                    <span>中心钱包</span>
                    <h5>&#xa5; {{centralWallet}}</h5>
                  </div>
                </li>
                <li>
                  <i class="icon-transfer icon-refresh"></i>
                  <div class="detail-transfer">
                    <span>一键刷新</span>
                  </div>
                </li>
              </ul>
            </div>

            <div class="transfer-list">
              <ul>
                <li :key="index" v-for="(point, index) in gamePoints.slice(0, 4)"><span>{{point.title}}</span><h5>{{point.points}}</h5></li>
              </ul>
              <button class="show-info" @click="showAll" v-if="!isActive">
                显示所有场馆
                <svg-icon slot="prefix" icon-class="chevron-down" class="el-input__icon input-icon" />
              </button>
              <ul v-if="isActive">
                <li :key="index" v-for="(point, index) in gamePoints.slice(4, 8)"><span>{{point.title}}</span><h5>{{point.points}}</h5></li>
              </ul>
            </div>
          </div>

          <div class="toggle-bank-information" @click="showBankInfo" v-if="!isActiveBank">
            <img src="../../assets/images/transfer-money/icon-plus.png" alt="Icon image">
            <p>添加银行卡</p>
          </div>

          <div class="bank-information" v-show="isActiveBank">
            <div class="bank-list">
              <label>提款银行：</label>
              <el-select v-model="accountNumber" placeholder="选择银行">
                <el-option v-for="(bank, index) in options" :key="index" :label="bank.IssuingNetwork +' - '+ bank.cardNumber" :value="bank.cardNumber"></el-option>
              </el-select>
            </div>

            <div class="card-number">
              <input placeholder="####" class="cardInput" type="text" maxlength="4" v-model="cardNum1" />
              <input placeholder="####" class="cardInput" type="text" maxlength="4" v-model="cardNum2" />
              <input placeholder="####" class="cardInput" type="text" maxlength="4" v-model="cardNum3" />
              <input placeholder="####" class="cardInput" type="text" maxlength="4" v-model="cardNum4" />
              <input placeholder="####" class="cardInput" type="text" maxlength="4" v-model="cardNum5" />
            </div>

            <div class="total-amount">
              <el-input placeholder="0.00" type="number" v-model="amount"></el-input>
              <el-button type="primary">最大金额</el-button>
            </div>
          </div>

          <el-button type="primary" class="btn-block" @click="submitWithdrawMoney">立即提款</el-button>
        </el-form>
      </div>
    </div>

    <Navigation></Navigation>
  </div>
</template>

<script>
var Mock = require('mockjs');
import Navigation from '../../components/Navigation/Navigation.vue'
export default {
  name: 'WithdrawMoney',
  components: {
    Navigation
  },
  data() {
    return {
      isActive: false,
      isActiveBank: false,
      centralWallet: 3333.333,
      gamePoints: [],
      options: [],
      amount: '',
      accountNumber: '',
      cardNum1: '',
      cardNum2: '',
      cardNum3: '',
      cardNum4: '',
      cardNum5: ''
    }
  },
  methods: {
    showAll() {
      this.isActive = !this.isActive
    },
    showBankInfo() {
      this.isActiveBank = !this.isActiveBank
    },
    submitWithdrawMoney(e) {
      e.preventDefault()
      console.log(this.cardNum1 + this.cardNum2 + this.cardNum3 + this.cardNum4 + this.cardNum5)
      alert('success')
    }
  },
  mounted() {
    const cardInput = document.querySelectorAll('.cardInput')
    cardInput.forEach((input) => {
      input.addEventListener('keyup', function(e) {
        if (this.value.length === this.maxLength) {
          this.nextElementSibling.focus()
        }
      })
    })
  },
  created() {
    var createGamePoints = Mock.mock({
      'data|8': [
        {
          id: '@id',
          title: '@cname',
          points: '0.00'
        }
      ]
    })
    this.gamePoints = createGamePoints.data

    var createOptions = Mock.mock({
      'data|8': [
        {
          id: '@id',
          IssuingNetwork: '@cname',
          cardNumber: '@id'
        }
      ]
    })
    this.options = createOptions.data
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .transfer-detail {
    margin-bottom: 1.65rem;
    .transfer-info {
      padding: .3rem .4rem;
      background-color: #212534;
      border-radius: 3px;
      font-size: .32rem;
      text-decoration: none;
      color: #bacef1;
      position: relative;
      ul {
        padding: 0;
        margin: 0;
        list-style: none;
      }
      span {
        color: #bacef1;
      }
      h5 {
        font-size: .32rem;
        color: #33bcd4;
        line-height: .55rem;
        margin: 0;
      }
      .transfer-header {
        ul {
          display: flex;
          align-items: center;
          padding-bottom: .25rem;
          border-bottom: 1px solid #505771;
          li {
            padding: .1rem .25rem;
            flex: 1 1;
            display: flex;
            align-items: center;
            justify-content: center;
            &:first-child {
              border-right: 1px solid #505771;
            }
          }
          h5 {
            line-height: 1em;
            margin-top: .07rem;
          }
        }
      }
      .transfer-list {
        text-align: center;
        ul {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          -webkit-grid-gap: .15rem;
          -moz-grid-gap: .15rem;
          grid-gap: .15rem;
          padding: .32rem 0 0;
          h5 {
            font-size: .37rem;
          }
          span {
            line-height: .35rem;
            display: block;
            margin-bottom: .16rem;
          }
        }
        .show-info {
          border: none;
          outline: none;
          background-color: transparent;
          color: #bacef1;
          font-size: .32rem;
          padding: .1rem;
          margin-top: .35rem;
          margin-bottom: 0;
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          svg {
            font-size: .23rem;
            margin-left: .12rem;
          }
        }
      }
    }

    .icon-transfer {
      display: block;
      width: .67rem;
      height: .67rem;
      background-size: 100%;
      background-repeat: no-repeat;
      position: relative;
      margin-right: .35rem;
      &.icon-wallet {
        background-image: url(../../assets/images/transfer-money/icon-wallet.png);
      }
      &.icon-refresh {
        background-image: url(../../assets/images/transfer-money/icon-refresh.png);
      }
    }

    .toggle-bank-information {
      padding: .4rem;
      background-color: #212534;
      border-radius: 3px;
      font-size: .32rem;
      text-decoration: none;
      color: #bacef1;
      position: relative;
      margin-top: .3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 3.6rem;
      img {
        width: 1rem;
      }
      p {
        color: #33bcd4;
        margin-top: .33rem;
      }
    }
  }
  .transfer-content {
    margin-top: .3rem;
  }
  .bank-information {
    padding: .4rem;
    background-color: #212534;
    border-radius: 3px;
    margin-top: .3rem;
  }
  .bank-list {
    display: flex;
    align-items: center;
    label {
      width: 2rem;
    }
    .el-input--small {
      .el-input__inner {
        border-radius: 0;
        border: none;
        height: .85rem;
        background-color: #505771;
        font-size: .32rem;
        padding-left: .42rem;
        color: #fefeff;
      }
    }
    ::placeholder {
      color: #fefeff;
    }
    .el-select {
      width: 100%;
      .el-select__caret {
        color: #fefeff;
        font-size: .28rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    }
    .el-input__suffix {
      right: .2rem;
    }
  }
  .el-select-dropdown__item {
    height: .7rem;
    display: flex;
    align-items: center;
    font-size: .32rem;
  }
  .card-number {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    -webkit-grid-gap: .28rem;
    -moz-grid-gap: .28rem;
    grid-gap: .28rem;
    display: grid;
    margin-top: .5rem;
    margin-bottom: .82rem;
    input {
      border: none;
      border-radius: 0 !important;
      font-size: .32rem;
      width: 100%;
      display: block;
      text-align: center;
      padding: 0;
      background-color: #222534;
      border: 1px solid #33bcd4;
      color: #bacef1;
      height: .74rem;
      line-height: 1em;
      outline: none;
    }
    ::placeholder {
      color: #7489ad;
    }
  }
  .total-amount {
    display: flex;
    align-items: center;
    padding-bottom: .14rem;
    padding-left: .5rem;
    border-bottom: 1px solid #505771;
    position: relative;
    &:before {
      position: absolute;
      display: block;
      content: '\00A5';
      font-size: .4rem;
      left: .2rem;
      font-weight: 500;
      color: #33bcd4;
    }
     .el-button {
       margin: 0;
     }
    .el-input__inner {
      border-radius: 0 !important;
      font-size: .38rem;
      font-weight: 600;
      width: 100%;
      display: block;
      padding: 0 .2rem;
      background-color: #222534;
      border: none;
      color: #bacef1;
      height: .85rem;
      line-height: 1em;
      outline: none;
      -moz-appearance: none;
      -webkit-appearance: none;
    }
    .el-button {
      height: .78rem;
      border: none;
      border-radius: 2px;
    }
    ::placeholder {
      color: #bacef1;
    }
  }
</style>
