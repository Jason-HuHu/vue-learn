<template>
    <div class="blog-post">
        <h3>{{title}}</h3>
        <h2>{{author}}</h2>
        <button v-on:click="$emit('enlarge-text')">Enlarge text</button>
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