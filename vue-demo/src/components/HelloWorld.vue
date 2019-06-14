<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-input v-focus></el-input>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  directives:{
    //注册一个局部使用的指令 v-focus
    focus:{
      //指令的定义
      inserted: function (el) {
        //聚焦元素
        el.focus();
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
