<template>
  <div>
    <div class="list-group-item" v-for="user in users" :key="user.id">
      <div class="row">
        <div>{{user.name}}</div>
        <div>{{user.city}}</div>
        <div>{{user.description}}</div>
      </div>

      <p>multi array this below</p>
      
      <div :key="i" v-for="(people_list, i) in user.people_lists">
        <img v-bind:src="people_list.image" title="Image"/>
        <span>{{people_list.title}}</span>
      </div>

      <br><br>
    </div>
    
    
  </div>
</template>

<script>
  // import axios from 'axios'
  var Mock = require('mockjs');
  const Random = Mock.Random
  
  
  export default {

    name: 'PagePlaceholder',
    data() {
      return {
        users: '',
        posts: []
      }
    },
    created() {
      // axios.get("http://jsonplaceholder.typicode.com/posts")
      // .then(response => {
      //   console.log(response);
      //   this.posts = response.data;
      // })
      // .catch(e => {
      //   this.errors.push(e);
      // });
      // console.log("wew" + this.users);
      var createUser = Mock.mock({
        'data|100': [
          {
            id: '@id',
            name: '@cname',
            description: '@cparagraph(1, 6)',
            'people_lists|5': [
              {
                image: Random.image('250x200', '#d6d6d6'),
                title: '@city',
              }
            ]
          }
        ]
      })
      console.log(createUser)
      this.users = createUser.data
    }

  }
</script>

<style lang="scss" scoped>
  .sadsadsad {
    color: red;
    font-size: 20px;
  }
</style>