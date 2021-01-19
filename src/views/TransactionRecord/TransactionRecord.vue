<template>
  <div class="transaction-record-detail">
    <div class="global-header">
      <button type="button" @click="$router.go(-1)">
        <svg-icon slot="prefix" icon-class="chevron-left" class="el-input__icon input-icon"/>
      </button>交易记录
    </div>
    <div class="container">
      <div class="transaction-record-content">
        <ul>
          <li>
            <router-link to="/">
              <i class="icon-transaction icon-deposit-history"></i><span>存款记录</span>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="icon-transaction icon-withdrawal-records"></i><span>提款记录</span>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="icon-transaction icon-transfer-record"></i><span>转账记录</span>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="icon-transaction icon-account-change"></i><span>帐变记录</span>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="icon-transaction icon-refer-friend"></i><span>推荐好友记录</span>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="icon-transaction icon-rescue-gold"></i><span>救援金记录</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from '../../components/Navigation/Navigation.vue'
export default {
  name: 'TransactionRecord',
  components: {
    Navigation
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .transaction-record-detail {
    margin-bottom: 1.65rem;
  }
  .transaction-record-content {
    margin-top: .3rem;
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      li {
        position: relative;
        margin: .24rem 0;
        a {
          height: 1.1rem;
          display: flex;
          align-items: center;
          padding: 0 .45rem;
          background-color: #212534;
          border-radius: 3px;
          font-size: .32rem;
          text-decoration: none;
          color: #bacef1;
          position: relative;
          &:after {
            position: absolute;
            display: block;
            content: '';
            background-image: url(../../assets/images/station-letter/chevron-right.svg);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100%;
            width: .2rem;
            height: .4rem;
            right: .4rem;
          }
          span {
            margin-left: .3rem;
          }
        }
      }
    }
  }
  .icon-transaction {
    display: block;
    width: .44rem;
    height: .44rem;
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
    &.icon-deposit-history {
      background-image: url(../../assets/images/transaction-record/icon-deposit-history.png);
    }
    &.icon-withdrawal-records {
      background-image: url(../../assets/images/transaction-record/icon-withdrawal-records.png);
    }
    &.icon-transfer-record {
      background-image: url(../../assets/images/transaction-record/icon-transfer-record.png);
    }
    &.icon-account-change {
      background-image: url(../../assets/images/transaction-record/icon-account-change.png);
    }
    &.icon-refer-friend {
      background-image: url(../../assets/images/transaction-record/icon-refer.png);
    }
    &.icon-rescue-gold {
      background-image: url(../../assets/images/transaction-record/icon-rescue-gold.png);
    }
  }
</style>
