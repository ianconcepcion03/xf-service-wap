<template>
  <div class="promotion-detail">
    <h4>优惠活动</h4>
    <div class="filter-container">
      <div class="container">

        <div class="filter-menu">
          <input type="radio" id="全部" v-model="selectedCategory" value="全部" />
          <label for="全部">全部</label>
        </div>

        <div class="filter-menu" v-for="promotionTab in promotions" :key="promotionTab.id">
          <input type="radio" :id="promotionTab.category" v-model="selectedCategory" :value="promotionTab.category" />
          <label :for="promotionTab.category">{{promotionTab.category}}</label>
        </div>

      </div>
    </div>

    <div class="container">
      <div class="promotion-wrapper" v-for="promotion in filteredPromotions" :key="promotion.id">
        <div class="promotion-content" v-for="promotionDetail in promotion.promotionDetails" :key="promotionDetail.id">
          <div class="promotion-header">
            <span>{{promotionDetail.dateFrom}}至{{promotionDetail.dateTo}}</span>
            <router-link to="/">查看详情 > ></router-link>
          </div>
          <div class="promotion-img">
            <img v-bind:src="promotionDetail.img" title="Image"/>
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
  name: 'Promotions',
  components: {
    Navigation
  },
  data() {
    return {
      promotions: [],
      selectedCategory: '全部' // <<<-----All
    }
  },
  created() {
    var createPromotions = Mock.mock({
      'data': [
        {
          id: '@id',
          category: '首存',
          'promotionDetails|7-12': [
            {
              dateFrom: '@date("yyyy-MM-dd")',
              dateTo: '@date("yyyy-MM-dd")',
              img: '@image("1080x532", "#d6d6d6")'
            }
          ]
        },
        {
          id: '@id',
          category: '体育',
          'promotionDetails|7-12': [
            {
              dateFrom: '@date("yyyy-MM-dd")',
              dateTo: '@date("yyyy-MM-dd")',
              img: '@image("1080x532", "#d6d6d6")'
            }
          ]
        },
        {
          id: '@id',
          category: '真人',
          'promotionDetails|7-12': [
            {
              dateFrom: '@date("yyyy-MM-dd")',
              dateTo: '@date("yyyy-MM-dd")',
              img: '@image("1080x532", "#d6d6d6")'
            }
          ]
        },
        {
          id: '@id',
          category: '返水',
          'promotionDetails|7-12': [
            {
              dateFrom: '@date("yyyy-MM-dd")',
              dateTo: '@date("yyyy-MM-dd")',
              img: '@image("1080x532", "#d6d6d6")'
            }
          ]
        },
        {
          id: '@id',
          category: '豪礼',
          'promotionDetails|7-12': [
            {
              dateFrom: '@date("yyyy-MM-dd")',
              dateTo: '@date("yyyy-MM-dd")',
              img: '@image("1080x532", "#d6d6d6")'
            }
          ]
        }
      ]
    })
    console.log(createPromotions.data)
    this.promotions = createPromotions.data
  },
  computed: {
		filteredPromotions() {
			var category = this.selectedCategory;
			if(category === "全部") { // <<<-----All
				return this.promotions;
			} else {
				return this.promotions.filter(person => {
					return person.category === category;
				});
			}
		}
	}
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .filter-container {
    position: relative;
    margin: 0;
    background-color: #212534;
    margin-bottom: .45rem;
    input[type="radio"] {
        display: none;
    }
    .container {
      display: flex;
      justify-content: space-around;
      .filter-menu {
        display: flex;
        align-items: center;
        label {
          display: block;
          cursor: pointer;
          padding: 0 .21rem;
          font-size: .32rem;
          color: #bacef1;
          height: 1rem;
          line-height: 1rem;
          border-bottom: .04rem solid transparent;
        }
      }
      input[type="radio"]:checked+label {
          color: #33bcd4;
          border-bottom: .04rem solid #33bcd4;
      }
    }
  }
  .promotion-detail {
    margin-bottom: 1.3rem;
    h4 {
      text-align: center;
      background-color: #222534;
      margin: 0;
      padding: .55rem 0 .35rem;
      font-size: .38rem;
    }
  }
  .promotion-img {
    position: relative;
    width: 100%;
    height: 2.5rem;
    border-radius: .15rem;
    overflow: hidden;
    border: .07rem solid #212534;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    &:before {
      display: block;
      content: '';
      position: absolute;
      width: 1.1rem;
      height: .5rem;
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
      left: 0;
      bottom: 11%;
      background-image: url(../../assets/images/promotions/tag.png);
      /* top: 50%; */
      /* transform: translate(0, -50%); */
    }
  }
  .promotion-wrapper {
    &:last-child {
      padding-bottom: .1rem;
    }
    .promotion-content {
      margin: .3rem 0;
    }
    .promotion-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        font-size: .28rem;
        color: #bacef1;
      }
      a {
        background-image: linear-gradient(0deg, #212534 31%, #203d4f 100%), linear-gradient( #212534, #212534);
        background-blend-mode: normal, normal;
        display: block;
        text-decoration: none;
        padding: .09rem .45rem;
        border-top-left-radius: .1rem;
        border-top-right-radius: .1rem;
        font-size: .28rem;
      }
    }
  }
</style>
