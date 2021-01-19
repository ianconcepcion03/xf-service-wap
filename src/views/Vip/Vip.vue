<template>
  <div class="vip-page-container">
    <div class="vip-header">
      <div class="container" >
        <div class="vip-menu">
          <ul>
            <li><router-link to="/mine/vip">VIP特权</router-link></li>
            <li><router-link to="/">VIP详情</router-link></li>
          </ul>
        </div>
        <div class="vip-slider-center" ref="vipSlider">
          <div class="vip-slider-container" v-bind:style="leftColStyles">
            <div class="vip-slider-item" v-for="(item, index) in sliderData" :key="index" :class="{'is-active-slide': count === index}">
              <img :src="item.img" />
              <div class="vip-slider-details">
                <p v-if="item.sliderDetailOne">{{item.sliderDetailOne}}</p>
                <p v-if="item.sliderDetailTwo">{{item.sliderDetailTwo}}</p>
                <router-link to="/" class="el-button el-button--primary el-button--mini">立即申请</router-link>
              </div>
            </div>
          </div>
          <div v-if="count!=0" class="slide-btn prev-slide">
            <button @click="previous">PREVIOUS</button>
          </div>
          <div v-if="sliderData.length-1!=count" class="slide-btn next-slide">
            <button @click="next" class="next">NEXT</button>
          </div>
        </div>

        <div class="vip-percentage">
          <span>VIP1</span>
          <el-progress :percentage="vipPercentage"></el-progress>
          <span>VIP2</span>
          <p>您已完成0.00存款和0.00流水</p>
        </div>
      </div>
    </div>
    <div class="vip-content" v-for="(item, i) in sliderData" v-bind:key="i+'ss'" v-show="count === i" :class="{'is-active-content': count === i}">
      <div class="container">

        <div class="vip-previleges-content">
          <h4 class="vip-previleges-header">VIP特权</h4>
          <div class="vip-previleges-details">
            <div class="vip-previleges-list">
              <i class="vip-icon icon-envelope"></i>
              <span class="vip-name">每月红包</span>
              <h5>{{item.monthlyRedEnvelope}}元</h5>
              <el-button size="medium" type="primary">领取</el-button>
            </div>

            <div class="vip-previleges-list">
              <i class="vip-icon icon-deposit"></i>
              <span class="vip-name">每月存送</span>
              <h5>{{item.monthlyDeposit}}元</h5>
              <el-button size="medium" type="primary">领取</el-button>
            </div>

            <div class="vip-previleges-list">
              <i class="vip-icon icon-money-bag"></i>
              <span class="vip-name">生日礼金</span>
              <h5>{{item.birthdayGift}}元</h5>
              <el-button size="medium" type="primary">领取</el-button>
            </div>
          </div>
        </div>

        <div class="vip-previleges-content">
          <h4 class="vip-previleges-header">VIP特权</h4>
          <div class="vip-previleges-rebates">
            <div class="vip-previleges-list">
              <h4>{{item.eSportsRebate}}%</h4>
              <span>电竞返水</span>
            </div>

            <div class="vip-previleges-list">
              <h4>{{item.sportsRebate}}%</h4>
              <span>体育返水</span>
            </div>

            <div class="vip-previleges-list">
              <h4>{{item.liveRebate}}%</h4>
              <span>真人返水</span>
            </div>

            <div class="vip-previleges-list">
              <h4>{{item.electronicRebate}}%</h4>
              <span>电子返水</span>
            </div>
            
            <div class="vip-previleges-list">
              <h4>{{item.fishingBackwaters}}%</h4>
              <span>捕鱼返水</span>
            </div>

            <div class="vip-previleges-list">
              <h4>{{item.chessCardRebate}}%</h4>
              <span>棋牌返水</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    <Navigation></Navigation>
  </div>
</template>

<script>
import Vue from 'vue'
import Navigation from '../../components/Navigation/Navigation.vue'
export default {
  name: 'Vip',
  components: {
    Navigation
  },
  data() {
    return {
      vipPercentage: 60,
      count: 0,
      leftColStyles: { },
      sliderData: [
        {
          id: 1,
          name: 'VIP 1',
          monthlyRedEnvelope: 38,
          monthlyDeposit: 588,
          birthdayGift: 38,
          eSportsRebate: 0.4,
          sportsRebate: 0.4,
          liveRebate: 0.4,
          electronicRebate: 0.5,
          fishingBackwaters: 0.5,
          chessCardRebate: 0.5,
          sliderDetailOne: '> 存款量少20元可申请一次',
          sliderDetailTwo: '> 晋级奖金18888元',
          img: require('../../assets/images/vip/vip1.png')
        },
        {
          id: 2,
          name: 'VIP 2',
          monthlyRedEnvelope: 28,
          monthlyDeposit: 408,
          birthdayGift: 58,
          eSportsRebate: 0.3,
          sportsRebate: 0.5,
          liveRebate: 1,
          electronicRebate: 0.5,
          fishingBackwaters: 0.4,
          chessCardRebate: 0.5,
          sliderDetailOne: '> 存款量少20元可申请一次',
          sliderDetailTwo: '> 晋级奖金18888元',
          img: require('../../assets/images/vip/vip1.png')
        },
        {
          id: 3,
          name: 'VIP 3',
          monthlyRedEnvelope: 68,
          monthlyDeposit: 288,
          birthdayGift: 28,
          eSportsRebate: 0.2,
          sportsRebate: 0.8,
          liveRebate: 0.4,
          electronicRebate: 0.5,
          fishingBackwaters: 0.2,
          chessCardRebate: 0.5,
          sliderDetailOne: '> 存款量少20元可申请一次',
          sliderDetailTwo: '> 晋级奖金18888元',
          img: require('../../assets/images/vip/vip1.png')
        },
        {
          id: 4,
          name: 'VIP 4',
          monthlyRedEnvelope: 78,
          monthlyDeposit: 988,
          birthdayGift: 58,
          eSportsRebate: 0.3,
          sportsRebate: 0,
          liveRebate: 0.4,
          electronicRebate: 0.8,
          fishingBackwaters: 0.5,
          chessCardRebate: 0.5,
          sliderDetailOne: '> 存款量少20元可申请一次',
          sliderDetailTwo: '> 晋级奖金18888元',
          img: require('../../assets/images/vip/vip1.png')
        },
        {
          id: 5,
          name: 'VIP 5',
          monthlyRedEnvelope: 58,
          monthlyDeposit: 548,
          birthdayGift: 18,
          eSportsRebate: 0.2,
          sportsRebate: 0.4,
          liveRebate: 0.4,
          electronicRebate: 0.5,
          fishingBackwaters: 0.5,
          chessCardRebate: 0.2,
          sliderDetailOne: '> 存款量少20元可申请一次',
          sliderDetailTwo: '> 晋级奖金18888元',
          img: require('../../assets/images/vip/vip1.png')
        },
        {
          id: 6,
          name: 'VIP 6',
          monthlyRedEnvelope: 9,
          monthlyDeposit: 293,
          birthdayGift: 18,
          eSportsRebate: 0.4,
          sportsRebate: 0.4,
          liveRebate: 0.4,
          electronicRebate: 0.5,
          fishingBackwaters: 0.5,
          chessCardRebate: 0.5,
          sliderDetailOne: '> 存款量少20元可申请一次',
          sliderDetailTwo: '> 晋级奖金18888元',
          img: require('../../assets/images/vip/vip1.png')
        },
        {
          id: 7,
          name: 'VIP 7',
          monthlyRedEnvelope: 98,
          monthlyDeposit: 642,
          birthdayGift: 63,
          eSportsRebate: 0.7,
          sportsRebate: 0.4,
          liveRebate: 0.4,
          electronicRebate: 0.5,
          fishingBackwaters: 0.5,
          chessCardRebate: 0.5,
          sliderDetailOne: '> 存款量少20元可申请一次',
          sliderDetailTwo: '> 晋级奖金18888元',
          img: require('../../assets/images/vip/vip1.png')
        },
        {
          id: 8,
          name: 'VIP 8',
          monthlyRedEnvelope: 53,
          monthlyDeposit: 522,
          birthdayGift: 12,
          eSportsRebate: 0.4,
          sportsRebate: 0.4,
          liveRebate: 0.4,
          electronicRebate: 0.5,
          fishingBackwaters: 0.5,
          chessCardRebate: 0.5,
          sliderDetailOne: '> 存款量少20元可申请一次',
          sliderDetailTwo: '> 晋级奖金18888元',
          img: require('../../assets/images/vip/vip1.png')
        },
        {
          id: 9,
          name: 'VIP 9',
          monthlyRedEnvelope: 93,
          monthlyDeposit: 623,
          birthdayGift: 43,
          eSportsRebate: 0.4,
          sportsRebate: 0.4,
          liveRebate: 0.4,
          electronicRebate: 0.5,
          fishingBackwaters: 0.5,
          chessCardRebate: 0.5,
          sliderDetailOne: '> 存款量少20元可申请一次',
          sliderDetailTwo: '> 晋级奖金18888元',
          img: require('../../assets/images/vip/vip1.png')
        },
        {
          id: 10,
          name: 'VIP 10',
          monthlyRedEnvelope: 96,
          monthlyDeposit: 633,
          birthdayGift: 12,
          eSportsRebate: 0.4,
          sportsRebate: 0.4,
          liveRebate: 0.4,
          electronicRebate: 0.5,
          fishingBackwaters: 0.5,
          chessCardRebate: 0.5,
          sliderDetailOne: '> 存款量少20元可申请一次',
          sliderDetailTwo: '> 晋级奖金18888元',
          img: require('../../assets/images/vip/vip1.png')
        }
      ],
      frame: 1,
      hello: 200
    }
  },
  methods: {
    previous() {
      this.count--
      this.scroll('previous')
    },
    next() {
      this.count++
      this.scroll('next')
    },
    scroll(position) {
      let sliderContainer = document.querySelector('.vip-slider-container')
      let pos = 0
      let id = setInterval(frame, 5)
      let num = this.sliderData.length - this.frame
      let width = sliderContainer.offsetWidth
      let resize = num * width
      let check = position == 'reset' ? resize : width 
    
      function frame() {
        if (pos == check) {
          clearInterval(id)
        } else {
          pos += 10
          if(position == 'next') {
            sliderContainer.scrollLeft += 10
          }else{
            sliderContainer.scrollLeft -= 10
          }  
        }
      }
    },
    matchHeight() {
      var heightString = this.$refs.vipSlider.offsetWidth.toString().replace(/.$/,'0')
      Vue.set(this.leftColStyles, 'width', heightString + 'px')
    }
  },
  mounted() {
    this.matchHeight()
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .vip-menu {
    display: block;
    margin: .2rem 0 .94rem;
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      li {
        margin: 0 0.35rem;
        a {
          font-size: .41rem;
          padding: .18rem .35rem;
          display: block;
          text-decoration: none;
          color: #ffffff;
          border-bottom: .092rem solid transparent;
          &.router-link-exact-active {
            border-color: #33bcd4;
          }
        }
      }
    }
  }
  .vip-page-container {
    margin-bottom: 1.95rem;
    .vip-header {
      overflow: hidden;
      display: block;
      position: relative;
      width: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(../../assets/images/vip/bg-header.png);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: .45rem;
    }
  }
  .vip-slider-center {
    display: flex;
    align-items: center;
    justify-content: center;
    .slide-btn {
      position: absolute;
      padding: .15rem;
      button {
        overflow: hidden;
        outline: none;
        border: none;
        background: transparent;
        text-indent: -999px;
        display: block;
        width: .50rem;
        height: .50rem;
        background-size: 100%;
        background-repeat: no-repeat;
        margin: auto;
        padding: 0;
      }
      &.next-slide {
        right: 0.3rem;
        button {
          background-image: url(../../assets/images/vip/arrow-right.png);
        }
      }
      &.prev-slide {
        left: 0.3rem;
        button {
          background-image: url(../../assets/images/vip/arrow-left.png);
        }
      }
    }
  }
  .vip-slider-container {
    display: inline-flex;
    overflow: hidden;
    align-items: flex-start;
    /* width: 1330px !important; */
    white-space: nowrap;
  }
  .vip-slider-container {
    .vip-slider-item {
      position: relative;
      min-width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      padding: 0 1.5rem;
      opacity: 0;
      transition: all linear 250ms;
      &.is-active-slide {
        opacity: 1;
      }
      img {
        display: block;
        width: 100%;
      }
      .vip-slider-details {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        padding-top: 1rem;
        transform: translate(-50%, -50%);
        p {
          font-size: .26rem;
          margin-bottom: 0;
          line-height: .45rem;
        }
        .el-button--mini {
          color: #590101;
          padding: 0 0.54rem;
          display: inline-flex;
          align-items: center;
          font-size: .26rem;
          margin-top: .3rem;
          height: .5rem;
          text-decoration: none;
          background-image: linear-gradient(90deg, #e3d5a8 0%,#a88f5d 100%), linear-gradient(#122336,#122336);
          background-blend-mode: normal, normal;
          border: none;
        }
      }
    }
  }
  .is-active-content {
    animation: fadeIn 250ms linear;
    -webkit-animation: fadeIn 250ms linear;
    -moz-animation: fadeIn 250ms linear;
  }
  @keyframes fadeIn {
    0% { opacity: 0;  }   
    100% { opacity: 1;  }
  }
  .vip-content {
    .vip-previleges-header {
      margin-top: 0;
      font-weight: 400;
      margin-bottom: .55rem;
      border-left: .1rem solid #33bcd4;
      padding-left: .26rem;
    }
    .vip-previleges-details {
      padding: 0 .35rem;
      margin-bottom: .6rem;
      .vip-previleges-list {
        display: flex;
        align-items: center;
        margin-bottom: .4rem;
        .el-button {
          margin: 0;
        }
        span {
          font-size: .27rem;
        }
      }
      .vip-icon {
        display: block;
        width: .8rem;
        height: .8rem;
        background-size: 100%;
        background-repeat: no-repeat;
        position: relative;
        
        &.icon-envelope {
          background-image: url(../../assets/images/vip/icon-envelope.png);
        }
        &.icon-deposit {
          background-image: url(../../assets/images/vip/icon-deposit.png);
        }
        &.icon-money-bag {
          background-image: url(../../assets/images/vip/icon-money-bag.png);
        }
      }
      .el-button {
        margin-left: auto !important;
      }
      span.vip-name {
        width: 1.5rem;
        margin-left: .55rem;
      }
      h5 {
        margin: 0;
        margin-left: .55rem;
      }
      .el-button--medium {
        height: .6rem;
        border-radius: 0;
        padding: 0;
        padding-left: .54rem;
        padding-right: .54rem;
        display: inline-flex;
        align-items: center;
      }
    }
    .vip-previleges-rebates {
      padding: 0 .35rem;
      text-align: center;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      -webkit-grid-gap: .3rem;
      -moz-grid-gap: .3rem;
      grid-gap: .66rem .2rem;
      text-align: center;
      .vip-previleges-list {
        h4 {
        color: #ccb455;
        margin: 0;
        margin-bottom: .20rem;
        font-size: .55rem;
        line-height: 1em;
        }
      }
    }
  }
  
</style>
