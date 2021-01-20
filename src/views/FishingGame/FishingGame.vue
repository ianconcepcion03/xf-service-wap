<template>
  <div class="fishing-game-detail">
    <div class="global-header">
      <button type="button" @click="$router.go(-1)">
        <svg-icon slot="prefix" icon-class="chevron-left" class="el-input__icon input-icon"/>
      </button>捕鱼游戏
    </div>
    <div class="container">
      <div class="fishing-game-content custom-tab">
        <div class="download-wrapper">
          <div class="fishing-game-item" :key="index" v-for="(fishingGame, index) in fishingGames">
            <div class="logo">
              <img v-bind:src="fishingGame.logo" title="Logo"/>
            </div>
            <div class="fishing-game-details">
              <p>{{fishingGame.name}}</p>
              <span>{{fishingGame.description}}</span>
              <el-button type="primary" round>进入游戏</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Navigation></Navigation>
  </div>
</template>

<script>
var Mock = require('mockjs');

import Navigation from '../../components/Navigation/Navigation.vue'
export default {
  name: 'FishingGame',
  components: {
    Navigation
  },
  data() {
   return {
     fishingGames: []
    }
  },
  methods: {
    
  },
  created() {
    var creatfishingGames = Mock.mock({
      'data|3-7': [
        {
          id: '@id',
          logo: '@image("380x230", "#d6d6d6")',
          name: 'XX安卓版',
          description: '@cparagraph(1, 2)',
        }
      ]
    })
    console.log(creatfishingGames)
    this.fishingGames = creatfishingGames.data
  },
  watch: {
		
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .fishing-game-detail {
    margin-bottom: 1.65rem;
    .fishing-game-content {
      margin-top: .3rem;
    }
  }
  .custom-tab {
    .el-tabs__header {
      border: none;
      margin-bottom: 0;
      border-radius: 3px;
      overflow: hidden;
    }
    .el-tabs__nav {
      float: none;
      display: flex;
      text-align: center;
      border-radius: 3px !important;
      border: none !important;
    }
    .el-tabs__item {
      width: 100%;
      background-color: #212534;
      border: none !important;
      color: #bacef1;
      padding: 0 !important;
      transition: all linear 180ms !important;
      height: .9rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: .32rem;
      &.is-active {
        background-color: #33bcd4;
        color: #ffffff;
      }
    }
  }
  .fishing-game-item {
    margin: .24rem 0;
    display: flex;
    align-items: center;
    padding: 0 .4rem;
    background-color: #212534;
    border-radius: 3px;
    font-size: .32rem;
    text-decoration: none;
    color: #bacef1;
    position: relative;
    height: 2.88rem;
    .fishing-game-details {
      width: 100%;
      padding-left: .4rem;
      font-size: .30rem;
      line-height: .49rem;
      span {
        display: block;
        font-size: .28rem;
        line-height: .42rem;
      }
      p {
        margin-bottom: .04rem;
        font-size: .34rem;
        color: #33bcd4;
      }
    }
    .logo {
      width: 6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 72%;
      margin: auto;
      overflow: hidden;
      img {
        width: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        width: 6rem;
      }
    }
    .el-button {
      height: .75rem;
      border-radius: .04rem;
      padding: 0;
      padding-left: .25rem;
      padding-right: .24rem;
      margin: 0;
      border: none;
      font-size: .30rem;
      svg {
        margin-right: .25rem;
        transform: scale(1.24);
      }
    }
    .el-button.is-round {
      border-radius: 50px !important;
      padding-left: .5rem;
      padding-right: .5rem;
      top: .18rem;
      position: relative;
      float: right;
    }
  }
</style>
