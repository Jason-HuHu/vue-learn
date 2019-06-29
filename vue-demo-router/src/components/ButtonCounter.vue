<template>
    <button v-on:click="add">当前值：{{start}}</button>
</template>

<script>
    export default {
        name: "ButtonCounter",
        props: {
            start:'start'
        },
        methods: {
            add() {
                this.start++
            }
        }
    }
</script>

<style scoped>

</style>