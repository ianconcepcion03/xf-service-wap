<template>
  <div class="mine-detail">
    <div class="mine-header">
      <div class="container">
        <img src="../../assets/images/mine/avatar.png" alt="Avatar">
        <span v-if="isLoggedOut">立即登录</span>
        <div class="mine-info" v-if="isLoggedIn" :class="{'vip-member' : isVip}">
          <span class="profile-name">weishenmeagan</span>
          <span class="join-count">您已经加入xxxx300天</span>
          <el-progress :percentage="30" :format="format"></el-progress>
          <span>升级需要500.00存款和3000.00流水</span>
        </div>
      </div>
    </div>

    <div class="function-wrapper">
      <div class="container">
        <div class="mine-detail-list">
          <div class="mine-credit">
            <div class="credit">
              <span>中心钱包：</span>
              <h5>0.00</h5>
            </div>

            <template v-if="isLoggedOut">
              <div class="register">
                <router-link to="/entry/register">
                  <span>前往注册 > ></span>
                  <p>开启更多精彩</p>
                </router-link>
              </div>
            </template>
          </div>
          <div class="main-menu">
            <ul>
              <li>
                <router-link to="/"><i class="icon-menu icon-deposit"></i>存款</router-link>
              </li>
              <li>
                <router-link to="/"><i class="icon-menu icon-withdraw"></i>取款</router-link>
              </li>
              <li>
                <router-link to="/"><i class="icon-menu icon-transfer"></i>转账</router-link>
              </li>
              <li>
                <router-link to="/mine/vip"><i class="icon-menu icon-vip"></i>VIP详情</router-link>
              </li>
            </ul>
          </div>
        </div>

        <div class="my-function-container">
          <h4 class="my-function-header">我的功能</h4>

          <div class="my-function-details">
            <div class="my-function-item">
              <router-link to="/">
                <i class="icon-function icon-transaction"></i>
                <span>我的功能</span>
              </router-link>
            </div>
            <div class="my-function-item">
              <router-link to="/">
                <i class="icon-function icon-collection"></i>
                <span>优惠领取</span>
              </router-link>
            </div>
            <div class="my-function-item">
              <router-link to="/">
                <i class="icon-function icon-information"></i>
                <span>个人信息</span>
              </router-link>
            </div>
            <div class="my-function-item">
              <router-link to="/">
                <i class="icon-function icon-password"></i>
                <span>修改密码</span>
              </router-link>
            </div>
            <div class="my-function-item">
              <router-link to="/">
                <i class="icon-function icon-bank"></i>
                <span>银行信息</span>
              </router-link>
            </div>
            <div class="my-function-item">
              <router-link to="/">
                <i class="icon-function icon-download"></i>
                <span>下载中心</span>
              </router-link>
            </div>
            <div class="my-function-item">
              <router-link to="/">
                <i class="icon-function icon-notication"></i>
                <span>系统公告</span>
              </router-link>
            </div>
          </div>
        </div>

        <div class="mine-cta" v-if="isLoggedIn">
          <el-button size="medium" type="primary" class="btn-block">退出登录</el-button>
        </div>
      </div>
    </div>

    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from '../../components/Navigation/Navigation.vue'
export default {
  name: 'Mine',
  components: {
    Navigation
  },
  data() {
    return {
      isLoggedIn: true,
      isLoggedOut: false,
      isVip: true
    }
  },
  methods: {
    format(percentage) {
      if (percentage === 30) {
        return 'VIP1'
      } else if (percentage === 70) {
        return 'VIP2'
      } else if (percentage === 100) {
        return 'VIP3'
      } else {
        return 'VIP0'
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .mine-detail {
    margin-bottom: 1.25rem;
  }
  .function-wrapper {
    transform: translate(0, -.38rem);
  }
  .mine-header {
    overflow: hidden;
    display: block;
    position: relative;
    width: 100%;
    height: 3rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(../../assets/images/mine/bg-header.png);
    display: flex;
    .container {
      display: flex;
      align-items: center;
      color: #ffffff;
      img {
        width: 1.28rem;
        height: 1.28rem;
      }
      span {
        font-size: .32rem;
        margin-left: .35rem;
      }
      .mine-info {
        margin-left: .35rem;
        span {
          display: block;
          margin-left: 0;
          font-size: .26rem;
          line-height: .35rem;
        }
        &.vip-member {
          span.profile-name {
            background-size: .35rem;
            background-position: right;
            background-repeat: no-repeat;
            display: inline-block;
            padding-right: .5rem;
            margin-bottom: .03rem;
            background-image: url(../../assets/images/mine/icon-vip.png);
          }
        }
      }
    }
  }
  .mine-detail-list {
    background-size: cover;
    background-image: url(../../assets/images/mine/bg-content.png);
    padding: .15rem .32rem;
    position: relative;
    background-repeat: no-repeat;
    background-color: #212534;
    border-radius: .25rem;
    .mine-credit {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: .42rem;
      padding-bottom: .32rem;
      border-bottom: 1px solid #5b6577;
      height: 2rem;
      .credit {
        h5 {
          margin: 0;
        }
      }
      .register {
        background-color: #393d4e;
        padding: 0.25rem 0;
        width: 3.47rem;
        display: block;
        position: relative;
        left: .32rem;
        border-top-left-radius: .7rem;
        border-bottom-left-radius: .7rem;
        background-image: url(../../assets/images/mine/icon-logout.png);
        background-repeat: no-repeat;
        background-size: 0.67rem;
        background-position: .3rem center;
        a {
          display: block;
          padding-left: 1.2rem;
          text-decoration: none;
          line-height: 0.38rem;
          color: #33bcd4;
        }
        p, span {
          font-size: .27rem;
        }
        p {
          color: #bacef1;
        }
      }
      .credit {
        margin-bottom: auto;
        span {
          font-size: .27rem;
        }
        h5 {
          font-size: .35rem;
          font-weight: 400;
          margin-top: .08rem;
        }
      }
    }
    .main-menu {
      background-color: transparent;
      margin-top: .18rem;
    }
  }
  .my-function-container {
    background-color: #212534;
    padding: .45rem .32rem;
    border-radius: .25rem;
    margin-top: .33rem;
  }
  .my-function-header {
    margin-top: 0;
    margin-bottom: .65rem;
    border-left: .1rem solid #33bcd4;
    padding-left: .26rem;
  }
  .my-function-details {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    -webkit-grid-gap: .3rem;
    -moz-grid-gap: .3rem;
    grid-gap: .55rem .2rem;
    text-align: center;
    .my-function-item {
      a {
        display: block;
        text-decoration: none;
        color: #bacef1;
        font-size: .28rem;
      }
      span {
        margin-top: .15rem;
        display: block;
      }
    }
    .icon-function {
      display: block;
      width: .65rem;
      height: .65rem;
      background-size: 100%;
      background-repeat: no-repeat;
      position: relative;
      margin: auto;
      
      &.icon-transaction {
        background-image: url(../../assets/images/mine/icon-transaction-record.png);
      }
      &.icon-collection {
        background-image: url(../../assets/images/mine/icon-claim-collection.png);
      }
      &.icon-information {
        background-image: url(../../assets/images/mine/icon-bank-information.png);
      }
      &.icon-password {
        background-image: url(../../assets/images/mine/icon-change-password.png);
      }
      &.icon-bank {
        background-image: url(../../assets/images/mine/icon-bank-information.png);
      }
      &.icon-download {
        background-image: url(../../assets/images/mine/icon-download-center.png);
      }
      &.icon-notication {
        background-image: url(../../assets/images/mine/icon-system-notification.png);
      }
    }
  }
  
</style>
