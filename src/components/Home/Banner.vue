<template>
  <div class="banner-container">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(banner, index) in bannerImage" v-bind:key="index">
        <img v-bind:src="banner.img" title="banner" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="marquee-container">
      <div class="container">
        <marquee-text :duration="55" :repeat="2">
          <div class="marquee-item">
            <ul>
              <li v-for="(announcement, i) in announcements" v-bind:key="i">{{announcement.announcement}}</li>
            </ul>
          </div>
        </marquee-text>
      </div>
    </div>
  </div>
</template>

<script>
var Mock = require('mockjs');
const Random = Mock.Random

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import MarqueeText from 'vue-marquee-text-component'

export default {
  name: 'Banner',
  title: 'Autoplay',
  components: {
    swiper,
    swiperSlide,
    MarqueeText
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
          delay: 5500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: false
      },
      bannerImage: '',
      announcements: ''
    }
  },
  created() {
    // IMAGE BANNER
    var data_bannerImage = Mock.mock({
      'data|4': [
        {
          id: '@id',
          img: require('../../assets/images/home/banner.png')
        }
      ]
    })
    this.bannerImage = data_bannerImage.data

    // ANNOUCEMENT DATA
    var data_announcements = Mock.mock({
      'data|5': [
        {
          id: '@id',
          announcement: '@cparagraph(1, 3)'
        }
      ]
    })
    this.announcements = data_announcements.data
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .banner-container {
    position: relative;
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
    .marquee-container {
      position: absolute;
      bottom: 0;
      z-index: 1;
      background-color: rgba(53, 55, 72, 0.7);
      border-top-left-radius: .15rem;
      border-top-right-radius: .15rem;
      width: 100%;
      left: 0;
      padding: .2rem 0;
      padding-left: .85rem;
      background-image: url(../../assets/images/home/volume-icon.png);
      background-repeat: no-repeat;
      background-position: .35rem center;
      background-size: 0.55rem;
      .marquee-item {
        font-size: .35rem;
        margin: 0 1rem;
        color: #bacef1;
        ul {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
          align-items: center;
          justify-content: center;
          li {
            margin: 0 0.3rem;
          }
        }
      }
    }
  }
</style>
