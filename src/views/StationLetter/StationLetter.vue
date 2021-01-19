<template>
  <div class="station-letter-detail">
    <div class="global-header">
      <button type="button" @click="$router.go(-1)">
        <svg-icon slot="prefix" icon-class="chevron-left" class="el-input__icon input-icon"/>
      </button>站内信
    </div>
    
    <div class="container">
      <div class="station-letter-content">
        <ul>
          <li>
            <router-link to="/">
              <i class="icon-stationary icon-inbox"></i><span>收件箱</span>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="icon-stationary icon-outbox"></i><span>发件箱</span>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="icon-stationary icon-letter"></i><span>写信</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from '../../components/Navigation/Navigation.vue'
export default {
  name: 'StationLetter',
  components: {
    Navigation
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .station-letter-content {
    margin-top: .3rem;
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      li {
        position: relative;
        margin: .24rem 0;
        a {
          height: 1.1rem;
          display: flex;
          align-items: center;
          padding: 0 .45rem;
          background-color: #212534;
          border-radius: 3px;
          font-size: .32rem;
          text-decoration: none;
          color: #bacef1;
          position: relative;
          &:after {
            position: absolute;
            display: block;
            content: '';
            background-image: url(../../assets/images/station-letter/chevron-right.svg);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100%;
            width: .2rem;
            height: .4rem;
            right: .4rem;
          }
          span {
            margin-left: .3rem;
          }
        }
      }
    }
  }
  .icon-stationary {
    display: block;
    width: .44rem;
    height: .44rem;
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
    
    &.icon-inbox {
      background-image: url(../../assets/images/station-letter/icon-inbox.png);
    }
    &.icon-outbox {
      background-image: url(../../assets/images/station-letter/icon-outbox.png);
    }
    &.icon-letter {
      background-image: url(../../assets/images/station-letter/icon-letter.png);
    }
  }
</style>
