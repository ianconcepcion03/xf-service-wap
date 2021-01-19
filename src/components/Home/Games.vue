<template>
  <div class="container-event">
    <div class="container">
      <div class="home-event-wrapper">
        <section v-bind:id="'data-'+image.id" :key="image.id" v-for="image in imageData">
          <router-link to="/">
            <img v-bind:src="image.img" title="Image"/>
          </router-link>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Games',
    components: {
      
    },
    props: ["imageData"]
  }
</script>

<style lang="scss">
  .container-event {
    margin-top: 7.65rem;
    padding-bottom: .2rem;
    padding-top: 0.17rem;
    background-color: #111320;

    .home-event-wrapper {
      font-size: 0;
      margin-top: .05rem;
      a {
        display: block;
        margin-bottom: .22rem;
        img {
          width: 100%;
        }
      }
    }
    
  }
</style>