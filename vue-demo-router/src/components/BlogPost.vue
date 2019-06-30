<template>
    <div class="blog-post">
        <h3>{{title}}</h3>
        <h2>{{author}}</h2>
        <!--$emit(funName),可以让父组件通过funName监听子组件的事件，同时可以采用$emit(funName,val)抛出一个值val给父组件,父组件通过$event接收这个值-->
        <button v-on:click="$emit('enlarge-text',0.1,'test')">Enlarge text</button>
        <button v-on:click="$emit('reset-text')">Reset text</button>
        <p>{{content}}</p>
    </div>
</template>

<script>
    export default {
        name: "BlogPost",
        props: ['title','author','content'],
        data () {
            return {
                fontSize: 1
            }
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>