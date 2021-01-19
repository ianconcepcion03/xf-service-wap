<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    document.querySelector("body").removeAttribute("style");

    // axios
    //   .get("http://jsonplaceholder.typicode.com/posts")
    //   .then(response => {
    //     console.log(response);
    //     this.posts = response.data;
    //   })
    //   .catch(e => {
    //     this.errors.push(e);
    //   });


    
  }
};
</script>
