<template>
  <div class="container">
    <div class="page-not-found-container">
      <h1>404</h1>
      <h3>抱歉!找不到页面</h3>
      <router-link to="/" class="el-button btn-block el-button--primary el-button--medium">回到家</router-link>

      <Navigation></Navigation>
    </div>
  </div>
</template>

<script>
import Navigation from '../../components/Navigation/Navigation.vue'
export default {
  name: 'PageNotFound',
  components: {
    Navigation
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .page-not-found-container {
    text-align: center;

    h1 {
      background: -webkit-linear-gradient(#33bcd4, #106777, #33bcd4);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 1rem 0 0.5rem 0;
      font-size: 2.5rem;
    }
  }
</style>
