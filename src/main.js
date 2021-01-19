import Vue from 'vue'
import App from './App.vue'

import 'normalize.css/normalize.css'
import './assets/styles/global.scss'
import './assets/styles/common.scss'
import './assets/styles/element-variables.scss'
import './assets/styles/variables.scss'
import './assets/styles/transition.scss'
import 'swiper/dist/css/swiper.css'
import './assets/styles/banner.scss'
import './assets/icons'

import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Cookies from 'js-cookie'
import VeeValidate from 'vee-validate'
import Element from 'element-ui'
import router from './router'
import store from './store'
import amfeFlexible from 'amfe-flexible/index'
import MarqueeText from 'vue-marquee-text-component'
import VueScrollactive from 'vue-scrollactive'

axios.defaults.baseURL = 'http://t183.xdy20.com:8080/'
Vue.use(VueAwesomeSwiper)
Vue.use(VeeValidate, { fieldsBagName: 'veeFields' })
Vue.use(amfeFlexible)
Vue.use(Element, {
  size: Cookies.get('size') || 'small' // set element-ui default size
})
Vue.component('marquee-text', MarqueeText)
Vue.use(VueScrollactive)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
