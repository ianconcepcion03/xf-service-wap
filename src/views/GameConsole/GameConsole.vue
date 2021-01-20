<template>
  <div class="game-console-detail">
    <div class="global-header">
      <button type="button" @click="$router.go(-1)">
        <svg-icon slot="prefix" icon-class="chevron-left" class="el-input__icon input-icon"/>
      </button>游戏机
    </div>
    <div class="container">
      <el-tabs type="card" v-model="activeName">
        <el-tab-pane 
          :key="index" 
          v-for="(gameconsole, index) in gameconsoles" 
          v-bind:label="gameconsole.name" 
          v-bind:name="gameconsole.name">
          {{gameconsole.title}}

          <el-input type="text" placeholder="请输入关键字" v-model="searchValue"></el-input>
          
          <div class="console-wrapper">
            <div class="console-content" :key="i" v-for="(gameconsoleImg, i) in gameconsole.gameConsoleDetail">
              <img v-bind:src="gameconsoleImg.img" title="Image"/>
              <span>{{gameconsoleImg.title}}</span>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

    <Navigation></Navigation>
  </div>
</template>

<script>
var Mock = require('mockjs');
// import gameconsoles from '../../api/gameconsoles.json'
import Navigation from '../../components/Navigation/Navigation.vue'
export default {
  name: 'GameConsole',
  components: {
    Navigation
  },
  data() {
    return {
      activeName: '老虎机',
      gameconsoles: [],
      searchValue: ''
    }
  },
  created() {
    var createGameconsoles = Mock.mock({
      'data|3': [
        {
          id: '@id',
          name: '@cname',
          'gameConsoleDetail|7-12': [
            {
              title: '@cname',
              img: '@image("302x394", "#d6d6d6")',
            }
          ]
        }
      ]
    })
    console.log(createGameconsoles.data)
    this.gameconsoles = createGameconsoles.data
    this.activeName = createGameconsoles.data[0].name
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .game-console-detail {
    margin-bottom: 1.85rem;
    .el-input__inner {
      height: 1rem;
      background-color: #212534;
      border: none;
      border-radius: .08rem;
    }
  }
  .console-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    -webkit-grid-gap: .3rem;
    -moz-grid-gap: .3rem;
    grid-gap: .3rem;
    .console-content {
      text-align: center;
    }
  }
</style>
