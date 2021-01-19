<template>
  <div class="HomeHeader">
    <div class="top-menu">
      <div class="container">
        <div class="dear-user">
          <img src="../../assets/images/logo.png" alt="Logo">
          <span>欢迎您，亲爱的用户</span>
        </div>

        <router-link to="/entry/login" class="login-user">
          <span>请先登录</span>
        </router-link>
      </div>
    </div>

    <div class="main-menu">
      <div class="container">
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
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .top-menu {
    background-color: #212534;
    padding: .18rem 0;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .dear-user {
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: .9rem;
      }
      span {
        margin-left: 0.5rem;
      }
    }
    .login-user {
      background-image: url(../../assets/images/home/icon-user.png);
      background-repeat: no-repeat;
      background-position: center right;
      background-size: 0.35rem;
      padding-right: .8rem;
      color: #bacef1;
      text-decoration: none;
    }
  }
  .main-menu {
    background-color: #1a1c28;
    padding: .42rem 0;
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      li {
        list-style: none;
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #bacef1;
          text-decoration: none;
        }
      }
    }
    .icon-menu {
      display: block;
      width: .55rem;
      height: .49rem;
      background-position: center;
      background-size: 100%;
      background-repeat: no-repeat;
      position: relative;
      margin-right: 0.15rem;
      &.icon-deposit {
        background-image: url(../../assets/images/home/icon-deposit.png);
      }
      &.icon-withdraw {
        background-image: url(../../assets/images/home/icon-withdraw.png);
      }
      &.icon-transfer {
        background-image: url(../../assets/images/home/icon-transfer.png);
      }
      &.icon-vip {
        background-image: url(../../assets/images/home/icon-vip.png);
      }
    }
  }
</style>