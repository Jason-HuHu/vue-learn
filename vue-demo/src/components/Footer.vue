<template>
  <footer>
    <p>{{copyright}}</p>
  </footer>
</template>

<script>
export default {
  name:"app-footer",
  data (){
    return{
      copyright:"Copyright @2019 Vue.js"
    }
  }
}
</script>
<style scoped>
footer{
  background: #2c3e50;
  padding: 20px;
}
p{
  color: black;
  text-align: center;
}
</style>
