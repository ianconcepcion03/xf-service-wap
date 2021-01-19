<template>
  <div class="customer-service-detail">
    <h4>客服</h4>
    <div class="container">
      <div class="customer-service-img">
        <img src="../../assets/images/home/banner.png" title="Image"/>
      </div>

      <div class="customer-service-hotline">
        <p>欢迎联系XX</p>
        <p>我们的官网是 <a href="#">https://www.xxxxx.com</a></p>
        <p>XX五大优惠滚动来袭，日日存，日日送，每日惊喜不重样。邀新朋，唤旧友，XX100元彩金免费领！</p>
      </div>

      <div class="customer-service-cta">
        <el-button size="medium" type="primary" class="btn-block">
          <span class="icon"><svg-icon slot="prefix" icon-class="qq" class="el-input__icon input-icon" /></span>
          <span>联系QQ</span>
        </el-button>
        <el-button size="medium" type="primary" class="btn-block">
          <span class="icon"><svg-icon slot="prefix" icon-class="communications" class="el-input__icon input-icon" /></span>
          <span>在线客服</span>
        </el-button>
      </div>
    </div>

    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from '../../components/Navigation/Navigation.vue'
export default {
  name: 'CustomerService',
  components: {
    Navigation
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .customer-service-detail {
    margin-bottom: 1.65rem;
     h4 {
      text-align: center;
      background-color: #222534;
      margin: 0;
      padding: .55rem 0 .55rem;
      font-size: .38rem;
    }
    .customer-service-img {
      position: relative;
      width: 100%;
      height: 2.6rem;
      border-radius: .15rem;
      overflow: hidden;
      margin: .38rem 0;
      border: .07rem solid #212534;
      img {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        -o-object-position: top;
        object-position: top;
      }
    }
    .customer-service-hotline {
      background-color: #212534;
      border-radius: .25rem;
      padding: .8rem;
    }
  }
  .customer-service-cta {
    .el-button {
      padding-top: 0;
      padding-bottom: 0;
    }
    span.icon {
      padding: .12rem;
      border-radius: 30px;
      background-color: white;
      margin-right: .15rem;
      display: inline-block;
      transform: scale(0.93);
    }
    .el-input__icon {
      color: #32bcd4;
    }
  }
</style>
