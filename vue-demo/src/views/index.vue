<template>
  <div class="home">
    <app-header></app-header>
    <h1>{{title}}</h1>
    <users></users>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  import User from '@/components/User'
  export default {
    name:"home",
    components:{
      //起名：app-header，否则默认就是header
      "app-header":Header,
      "app-footer":Footer,
      "users":User
    },
    data() {
      return{
        title : "主页"
      }
    }
  }

</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }

</style>
