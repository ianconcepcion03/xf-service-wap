<template>
  <div class="home-detail">
    <div class="fix-element">
      <Banner />
      <HomeHeader />
      <GameScrollMenu v-bind:imageData="imageData" />
    </div>

    <Games v-bind:imageData="imageData" />

    <Navigation />
  </div>
</template>

<script>
var Mock = require('mockjs');
const Random = Mock.Random

import Banner from '../../components/Home/Banner.vue'
import HomeHeader from '../../components/Home/HomeHeader.vue'
import Games from '../../components/Home/Games.vue'
import GameScrollMenu from '../../components/Home/GameScrollMenu.vue'
import Navigation from '../../components/Navigation/Navigation.vue'
export default {
  name: 'Home',
  components: {
    Banner,
    HomeHeader,
    GameScrollMenu,
    Games,
    Navigation
  },
  data() {
    return {
      imageData: '',
    }
  },
  created() {
    var createImgData = Mock.mock({
      'data|6': [
        {
          id: '@id',
          name: '@cname',
          img: '@image("1026x260", "#d6d6d6")'
        }
      ]
    })
    this.imageData = createImgData.data
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .home-detail {
    margin-bottom: 1.3rem;
    background-color: #1a1c28;
  }
  .fix-element {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #1a1c28;
  }
</style>
