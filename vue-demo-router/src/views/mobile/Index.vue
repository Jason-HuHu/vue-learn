<template>
    <div class="index">
        <!--滑动导航-->
        <swiper :options="swiperOption" ref="swiper" class="nav-swiper">
            <template v-for="(item, index) in menus" v-on:click="clickItem">
                <swiper-slide class="nav-item" :class="{ active: activeIndex === index }" :key="index" >{{ item.name }}</swiper-slide>|
            </template>
        </swiper>
        <!--固定导航-->
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">菜单一</mt-tab-item>
            <mt-tab-item id="2">菜单二</mt-tab-item>
            <mt-tab-item id="3">菜单三</mt-tab-item>
            <mt-tab-item id="4">菜单四</mt-tab-item>
            <mt-tab-item id="5">菜单五</mt-tab-item>
            <mt-tab-item id="6">菜单六</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 4" :title="'测试 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 6" :title="'选项 ' + n" />
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-tabbar v-model="selected" >
            <mt-tab-item id="外卖">
<!--                <img slot="icon" src="~/assets/logo.png">-->
                外卖
            </mt-tab-item>
            <mt-tab-item id="订单">
<!--                <img slot="icon" src="~/assets/logo.png">-->
                订单
            </mt-tab-item>
            <mt-tab-item id="发现">
<!--                <img slot="icon" src="/assets/logo.png">-->
                <button v-on:click="goToDiscover">发现</button>
            </mt-tab-item>
            <mt-tab-item id="我的">
<!--                <img slot="icon" src="~/assets/logo.png">-->
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    import { Button, Cell, Navbar, TabItem,Tabbar} from 'mint-ui'
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        name: "index",
        components: {Button,Cell,Navbar,Tabbar, TabItem,swiper,swiperSlide},
        data () {
            return {
                selected:'1',
                menus:[{name:"菜单1"},{name:"菜单2"},{name:"菜单3"},{name:"菜单4"},{name:"菜单5"},{name:"菜单6"},{name:"菜单7"},{name:"菜单8"}],
                activeIndex: 0,
                swiperOption: {
                    slidesPerView: 'auto',
                    on: {
                        tap: this.handleTap
                    }
                }
            }
        },
        methods: {
            handleTap () {
                const index = this.swiper.clickedIndex
                this.activeIndex = index
                this.swiper.slideTo(index, 200, false)
                this.$emit('navClick', this.menus[index])
                console.log(this.menus[index].name)
            },
            clickItem () {
                console.log("点到了")
            },
            goToDiscover() {
                console.info("到发现页")
                this.$router.push("/discover")
            }
        },
        computed: {
            swiper () {
                return this.$refs.swiper.swiper
            }
        }
    }
</script>

<style scoped>
.nav-swiper{
    position: relative;
}
    .nav-item{
        position: relative;
        display: inline-block;
        width: 60px;
        height: 40px;
        margin: 0px 10px;
    }
</style>

