<template>
  <div class="entry-container">
    <div class="txt-center">
      <router-link to="/" class="main-logo">
        <img src="../../assets/images/logo.png" class="entry-logo"/>
      </router-link>
    </div>
    <div class="entry-navigation-bar">
      <div class="entry-item" v-bind:class="[barActiveIndex === 0 ? 'active' : '']" @click="switchEntry('0', 0, 'login')">登录</div>
      <div class="entry-item" v-bind:class="[barActiveIndex === 1 ? 'active' : '']" @click="switchEntry('50%', 1, 'register')">注册</div>
      <div class="entry-active" v-bind:style="{left:entryActiveLeft}"></div>
    </div>
    <transition :name="entryChangeTransition">
      <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'Entry',
  data() {
    return {
      entryActiveLeft: 0,
      barActiveIndex: 0,
      entryChangeTransition: 'slide-left'
    }
  },
  methods: {
    switchEntry(leftValue, activeIndex, entryPath) {
      this.entryActiveLeft = leftValue
      this.barActiveIndex = activeIndex
      this.$router.push({ path: '/entry/' + entryPath })
    }
  },
  watch: {
    '$route'(to, from) {
      const toDepth = to.path.split('/')[2]
      this.entryChangeTransition = toDepth === 'register' ? 'slide-left' : 'slide-right'
    }
  },
  mounted() {
    if (this.$route.path === '/entry/register') {
      this.entryActiveLeft = '50%'
      this.barActiveIndex = 1
    }
  },
  created() {
    if (this.$route.path === '/entry/login' || '/entry/register') {
      document.querySelector('html').classList.add('entry')
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .entry-container {
    background-image: url(../../assets/images/index/entry_bg.png);
    background-color: #111524;
    background-repeat: no-repeat;
    background-size: 100% auto;
    width: 100%;
    min-height: 100%;
    position: relative;
    overflow: hidden;
    text-align: center;
    .main-logo {
      display: inline-block;
      margin: 2rem 0 0;
    }
    .entry-logo {
      width: 2.046rem;
    }
    .entry-navigation-bar {
      width: 8.342rem;
      height: .907rem;
      border-radius: .453rem;
      background-color: rgba(113, 125, 146, 0.2);
      margin: .95rem auto .95rem;
      position: relative;
      display: flex;

      .entry-item {
        width: 50%;
        font-size: .32rem;
        line-height: .907rem;
        text-align: center;
        color: hsla(0, 0%, 100%, .3);
        z-index: 2;
      }
      .entry-item.active {
        color: #fff
      }
      .entry-active {
        position: absolute;
        width: 50%;
        height: .907rem;
        background-color: #33bcd4;
        border-radius: .453rem;
        transition-duration: 500ms;
      }
    }
  }

  .slide-left-leave-active,
  .slide-left-leave-to,
  .slide-right-leave-active,
  .slide-right-leave-to {
    display: none
  }
</style>
