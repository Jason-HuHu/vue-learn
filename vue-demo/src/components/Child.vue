<template>
  <div>
    <h2>子组件：{{title}}</h2>
    <button v-on:click="sendDataToParent">向父组件传值</button>
  </div>
</template>
<script>
export default {
  props:{
    title:{
      type:String,
      default:"默认子组件标题"
    }
  },
  methods:{
    sendDataToParent: function () {
      // listenToChild 是绑定
      this.$emit("listenToChild","this message from child")
    }

  }
}
</script>
<style>

</style>
