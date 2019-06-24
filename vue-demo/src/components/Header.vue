<template>
  <header>
    <h1>{{title}}</h1>
  </header>
</template>
<script>
export default {
  name:"app-header",
  data () {
    return{
      title:"Vue.js Demo"
    }
  }
}
</script>
<style scoped>
header{
  background: aquamarine;
  padding: 10px;
}
h1{
  color: black;
  text-align: center;
}
</style>
