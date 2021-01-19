<template>
  <scrollactive active-class="active" :offset="20" :duration="500" bezier-easing-value=".5,0,.35,1">
    <div class="container">
      <li v-for="(title, index) in imageData" :key="index">
        <a v-bind:href="'#data-'+title.id" class="scrollactive-item">{{title.name}}</a>
      </li>
    </div>
  </scrollactive>
</template>

<script>
  export default {
    name: 'GameScrollMenu',
    props: ['imageData'],
    mounted() {
      var scrollactiveItem = document.querySelectorAll('.scrollactive-item')
      for (var i = 0; i < scrollactiveItem.length; i++) {
        scrollactiveItem[i].classList.remove('active')
      }
      document.querySelector('.scrollactive-item').classList.add('active')
    },
    created() {
      if (this.$route.path === '/') {
        document.querySelector('html').classList.remove('entry')
      }
    }
  }
</script>

<style lang="scss">
  .scrollactive-nav {
    background-color: #1a1c28;
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    li {
      list-style: none;
      a {
        display: block;
        color: #bacef1;
        text-decoration: none;
        padding: .15rem .3rem;
        border-top-left-radius: .15rem;
        border-top-right-radius: .15rem;
        &.active {
        background-image: linear-gradient(0deg, #11131f 10%, #203d4f 100%), linear-gradient(#11131f, #11131f);
        background-blend-mode: normal, normal;
        color: #ffffff;
        }
      }
    }
  }
</style>