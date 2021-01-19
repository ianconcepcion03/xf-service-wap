<template>
  <div class="main-nav">
    <ul>
      <li class="nav-item"><router-link to="/"><i class="icon-nav icon-home"></i>首页</router-link></li>
      <li class="nav-item"><router-link to="/promotions"><i class="icon-nav icon-discount"></i>优惠</router-link></li>
      <li class="nav-item"><router-link to="/customer-service"><i class="icon-nav icon-customer-service"></i>客服</router-link></li>
      <li class="nav-item"><router-link to="/game-console"><i class="icon-nav icon-join"></i>加盟</router-link></li>
      <li class="nav-item"><router-link to="/mine"><i class="icon-nav icon-mine"></i>我的</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .main-nav {
    background-color: #212534;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 800;
    width: 100%;
    height: 1.3rem;
    border-top-left-radius: .2rem;
    border-top-right-radius: .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 .38rem;
    ul {
      padding: 0;
      margin: 0;
      display: flex;
      list-style: none;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      li {
        a {
          text-decoration: none;
          color: #bacef1;
          font-size: .32rem;
          display: block;
          text-align: center;
          padding: 0 .3rem;
          .icon-nav {
          display: block;
          width: .53rem;
          height: .48rem;
          background-position: center;
          background-size: 100%;
          background-repeat: no-repeat;
          position: relative;
          margin: auto;
          margin-bottom: .05rem;
            &.icon-home {
              background-image: url(../../assets/images/navigation/home.png);
            }
            &.icon-discount {
              background-image: url(../../assets/images/navigation/discount.png);
            }
            &.icon-customer-service {
              background-image: url(../../assets/images/navigation/customer.png);
            }
            &.icon-join {
              background-image: url(../../assets/images/navigation/join.png);
            }
            &.icon-mine {
              background-image: url(../../assets/images/navigation/mine.png);
            }
          }
          &.router-link-exact-active {
            color: #33bcd4;
            .icon-nav {
              &.icon-home {
                background-image: url(../../assets/images/navigation/home-active.png);
              }
              &.icon-discount {
                background-image: url(../../assets/images/navigation/discount-active.png);
              }
              &.icon-customer-service {
                background-image: url(../../assets/images/navigation/customer-active.png);
              }
              &.icon-join {
                background-image: url(../../assets/images/navigation/join-active.png);
              }
              &.icon-mine {
                background-image: url(../../assets/images/navigation/mine-active.png);
              }
            }
          }
        }
      }
    }
  }
</style>
