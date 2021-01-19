<template>
  <div class="download-detail">
    <div class="global-header">
      <button type="button" @click="$router.go(-1)">
        <svg-icon slot="prefix" icon-class="chevron-left" class="el-input__icon input-icon"/>
      </button>下载
    </div>
    <div class="container">
      <div class="download-content custom-tab">
        <el-tabs type="card" v-model="activeName">
          <el-tab-pane 
            :key="index" 
            v-for="(download, index) in downloads" 
            v-bind:label="download.name" 
            v-bind:name="download.name">
            
            <div class="download-wrapper">
              <div class="download-item" :key="i" v-for="(downloadImg, i) in download.downloadDetail">
                <div class="logo">
                  <img v-bind:src="downloadImg.logo" title="Logo"/>
                </div>
                <div class="download-details">
                  <span>{{downloadImg.version}}</span>
                  <p>安全快捷，支持各大游戏平台</p>
                </div>
                <a v-bind:href="downloadImg.download" download class="el-button el-button--primary">
                  <svg-icon slot="prefix" icon-class="download" class="el-input__icon input-icon" />
                  下载</a>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <Navigation></Navigation>
  </div>
</template>

<script>
var Mock = require('mockjs');

import Navigation from '../../components/Navigation/Navigation.vue'
export default {
  name: 'Download',
  components: {
    Navigation
  },
  data() {
   return {
      activeName: '安卓系统',
      downloads: []
      // downloads: [
      //   {
      //     id: 1,
      //     name: '安卓系统',
      //     downloadDetail: [
      //       {
      //         version: 'XX安卓版',
      //         logo: require('../../assets/images/logo.png'),
      //         download: require('../../assets/images/logo.png')
      //       },
      //       {
      //         version: "XX安卓版",
      //         logo: require('../../assets/images/logo.png'),
      //         download: require('../../assets/images/logo.png')
      //       },
      //       {
      //         version: "XX安卓版",
      //         logo: require('../../assets/images/logo.png'),
      //         download: require('../../assets/images/logo.png')
      //       }
      //     ]
      //   },
      //   {
      //     id: 2,
      //     name: '苹果系统',
      //     downloadDetail: [
      //       {
      //         version: 'XX苹果版',
      //         logo: require('../../assets/images/logo.png'),
      //         download: require('../../assets/images/logo.png')
      //       },
      //       {
      //         version: "XX苹果版",
      //         logo: require('../../assets/images/logo.png'),
      //         download: require('../../assets/images/logo.png')
      //       }
      //     ]
      //   }
      // ],
    }
  },
  methods: {
    
  },
  created() {
    var createDownload = Mock.mock({
      'data': [
        {
          id: '@id',
          name: '安卓系统',
          'downloadDetail|1-5': [
            {
              version: 'XX安卓版',
              logo: '@image("200x200", "#d6d6d6")',
              download: '@image("200x200", "#d6d6d6")'
            }
          ]
        },
        {
          id: '@id',
          name: '苹果系统',
          'downloadDetail|1-5': [
            {
              version: 'XX苹果版',
              logo: '@image("200x200", "#d6d6d6")',
              download: '@image("200x200", "#d6d6d6")'
            }
          ]
        }
      ]
    })
    console.log(createDownload.data)
    this.downloads = createDownload.data
  },
  watch: {
		
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
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
  .download-detail {
    margin-bottom: 1.65rem;
    .download-content {
      margin-top: .3rem;
    }
  }
  .download-item {
    margin: .24rem 0;
    height: 1.45rem;
    display: flex;
    align-items: center;
    padding: 0 .45rem;
    background-color: #212534;
    border-radius: 3px;
    font-size: .32rem;
    text-decoration: none;
    color: #bacef1;
    position: relative;
    .download-details {
      width: 100%;
      padding-left: .4rem;
      font-size: .30rem;
      line-height: .49rem;
      span {
        display: block;
      }
    }
    .logo {
      width: 1.35rem;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 58%;
      margin: auto;
      overflow: hidden;
      img {
        width: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        width: 1.35rem;
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
  }
</style>
