<template>
  <div class="transfer-detail">
    <div class="global-header">
      <button type="button" @click="$router.go(-1)">
        <svg-icon slot="prefix" icon-class="chevron-left" class="el-input__icon input-icon"/>
      </button>转账
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

          <div class="bank-information">
            <div class="bank-list bank-list-transfer">
              <el-select v-model="firstBank" placeholder="选择银行">
                <el-option v-for="(bank, index) in options" :key="index" :label="bank.IssuingNetwork +' - '+ bank.cardNumber" :value="bank.cardNumber"></el-option>
              </el-select>

              <i class="icon-arrow-right"></i>

              <el-select v-model="secondBank" placeholder="选择银行">
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
  name: 'TransferMoney',
  components: {
    Navigation
  },
  data() {
    return {
      isActive: false,
      centralWallet: 3333.333,
      gamePoints: [],
      options: [],
      amount: '',
      firstBank: '',
      secondBank: '',
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
  .bank-list {
    &.bank-list-transfer {
      .el-select {
        border-radius: 30px;
        overflow: hidden;
      }

      .el-input--small {
        .el-input__inner {
          padding-right: .70rem;
        }
      }
      .el-input__suffix {
        right: .1rem;
        top: .03rem;
      }
    }
  }
  .icon-arrow-right {
    display: block;
    width: 1.35rem;
    height: 1rem;
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
    background-position: center;
    margin: 0 .7rem;
    background-image: url(../../assets/images/transaction-record/double-arrow-right.png);
  }
</style>
