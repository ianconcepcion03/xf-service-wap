<template>
  <div class="promotions-detail">
    <div class="global-header">
      <button type="button" @click="$router.go(-1)">
        <svg-icon slot="prefix" icon-class="chevron-left" class="el-input__icon input-icon"/>
      </button>优惠活动
    </div>
    <div class="container">
      <div class="promotions-content">
        <ul>
          <li v-for="promotion in promotions" :key="promotion.id">
            <a :href="promotion.link" target="_blank">
              <img v-bind:src="promotion.image" :alt="promotion.title">
              <span>{{promotion.title}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <Navigation></Navigation>
  </div>
</template>

<script>
var Mock = require('mockjs');

import Navigation from '../../components/Navigation/Navigation.vue'
export default {
  name: 'PromotionList',
  components: {
    Navigation
  },
  data() {
    return {
      promotions: []
    }
  },
  created() {
    var createPromotions = Mock.mock({
      'data|5-10': [
        {
          id: '@id',
          title: '@cname',
          image: '@image("154x154", "#d6d6d6")',
          link: 'http://mockjs.com/'
        }
      ]
    })
    console.log(createPromotions.data)
    this.promotions = createPromotions.data
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .promotions-detail {
    margin-bottom: 1.8rem;
    .promotions-content {
      background-color: #212534;
      padding: .45rem;
      border-radius: .2rem;
      margin-top: .33rem;
      ul {
        padding: 0;
        margin: 0;
        list-style: none;
        text-align: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        -webkit-grid-gap: .3rem;
        -moz-grid-gap: .3rem;
        grid-gap: .75rem .66rem;
        text-align: center;
        position: relative;
        li {
          a {
            display: block;
            color: #bacef1;
            text-decoration: none;
            img {
              width: 1.35rem;
              border-radius: 50%;
            }
            span {
              display: block;
              margin-top: .15rem;
            }
          }
          &:nth-child(3n) {
            &:after {
              position: absolute;
              display: block;
              content: '';
              width: 100%;
              height: 1px;
              background-color: #505771;
              left: 0;
              margin-top: .35rem;
            }
          }
          &:last-child {
            &:after {
              display: none;
            }
          }
        }
      }
    }
  }
</style>
