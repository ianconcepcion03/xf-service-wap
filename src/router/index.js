import Vue from 'vue'

import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Promotions from '../views/Promotions/Promotions.vue'
import CustomerService from '../views/CustomerService/CustomerService.vue'
import GameConsole from '../views/GameConsole/GameConsole.vue'
import Mine from '../views/Mine/Mine.vue'
import Vip from '../views/Vip/Vip.vue'
import VipDetails from '../views/VipDetails/VipDetails.vue'
import StationLetter from '../views/StationLetter/StationLetter.vue'
import TransactionRecord from '../views/TransactionRecord/TransactionRecord.vue'
import WriteALetter from '../views/WriteALetter/WriteALetter.vue'
import PromotionList from '../views/PromotionList/PromotionList.vue'
import ChangePassword from '../views/ChangePassword/ChangePassword.vue'
import Download from '../views/Download/Download.vue'
import RecoverPassword from '../views/RecoverPassword/RecoverPassword.vue'
import BankInformation from '../views/BankInformation/BankInformation.vue'
import WithdrawMoney from '../views/WithdrawMoney/WithdrawMoney.vue'
import TransferMoney from '../views/TransferMoney/TransferMoney.vue'
import AccountInformation from '../views/AccountInformation/AccountInformation.vue'
import FishingGame from '../views/FishingGame/FishingGame.vue'
import Entry from '../views/index/Entry.vue'
import Login from '../views/index/Login.vue'
import Register from '../views/index/Register.vue'
import PagePlaceholder from '../views/PagePlaceholder/PagePlaceholder.vue'
import PageNotFound from '../views/PageNotFound/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/promotions',
    name: 'Promotions',
    component: Promotions
  },
  {
    path: '/customer-service',
    name: 'CustomerService',
    component: CustomerService
  },
  {
    path: '/game-console',
    name: 'GameConsole',
    component: GameConsole
  },
  {
    path: '/mine/vip',
    name: 'Vip',
    component: Vip
  },
  {
    path: '/mine/vip-details',
    name: 'VipDetails',
    component: VipDetails
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/station-letter',
    name: 'StationLetter',
    component: StationLetter
  },
  {
    path: '/transaction-record',
    name: 'TransactionRecord',
    component: TransactionRecord
  },
  {
    path: '/write-a-letter',
    name: 'WriteALetter',
    component: WriteALetter
  },
  {
    path: '/promotion-list',
    name: 'PromotionList',
    component: PromotionList
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: ChangePassword
  },
  {
    path: '/download',
    name: 'Download',
    component: Download
  },
  {
    path: '/recover-password',
    name: 'RecoverPassword',
    component: RecoverPassword
  },
  {
    path: '/bank-information',
    name: 'BankInformation',
    component: BankInformation
  },
  {
    path: '/withdraw-money-immediately',
    name: 'WithdrawMoney',
    component: WithdrawMoney
  },
  {
    path: '/transfer-money',
    name: 'TransferMoney',
    component: TransferMoney
  },
  {
    path: '/account-information',
    name: 'AccountInformation',
    component: AccountInformation
  },
  {
    path: '/fishing-game',
    name: 'FishingGame',
    component: FishingGame
  },
  {
    path: '/page-placeholder',
    name: 'PagePlaceholder',
    component: PagePlaceholder
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  },
  {
    path: '/entry',
    redirect: '/entry/login',
    name: 'Entry',
    component: Entry,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'register',
        name: 'Register',
        component: Register
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default router
