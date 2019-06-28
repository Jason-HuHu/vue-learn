<template>
    <div class="service">
        <nav-swiper class="nav-swiper" :menus="menus" @navClick="handleTap"></nav-swiper>
        <div>ne</div>
    </div>
</template>

<script>
    import NavSwiper from '@/components/NavSwiper'

    export default {
        name: "service",
        components: {NavSwiper},
        data () {
            return {
                menus: []
            }
        },
        methods: {
            handleTap(menu) {
                console.log(menu)
            }
        },
        created() {
            this.menus = [{name:"菜单1"},{name:"菜单2"}];
        }
    }
</script>

<style scoped lang="less">
    .nav-swiper {
        position: relative;
    .nav-item {
        position: relative;
        display: inline-block;
        width: auto;
        height: 40px;
        margin: 0px 10px;
        font-size: 16px;
        color: fade(rgba(244, 24, 255, 0.96), 65);
        font-weight: 400;
        padding-top: 3px;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
    &.active {
         color: #111514;
    &:after {
         content: '';
         position: absolute;
         width: 100%;
         height: 3px;
         background-color: #efff3d;
         bottom: 0px;
         left: 0px;
     }
    }
    }
    }
</style>
