<template>
    <div class="discover">
        <mt-navbar v-model="selected">
            <mt-tab-item id="focus">关注</mt-tab-item>
            <mt-tab-item id="hot">热门</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="focus">
                <mt-cell class="cell-data" v-for="(item,index) in focusData" :key="index" :title="item.data" />
            </mt-tab-container-item>
            <mt-tab-container-item id="hot" style="text-align: center">
                <mt-cell class="cell-data" v-for="(item,index) in hotData" :key="index" :title="item.data" :value="index"/>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    export default {
        name: "discover",
        data () {
            return {
                selected:'',
                focusData: [],
                hotData:[]
            }
        },
        created() {
            this.selected = 'focus'
            this.loadFocusData()

        },
        methods: {
            loadFocusData () {
                this.focusData = [{id:1,data:"关注消息1"},{id:4,data:"关注消息12"},{id:2,data:"关注消息2"},{id:3,data:"关注消息d"}]
                this.hotData = [{id:1,data:"热门消息"},{id:4,data:"热门消息"},{id:2,data:"热门消息"},{id:3,data:"热门消息"}]
            }
        }
    }
</script>

<style scoped>

.cell-data{
    padding: 0px;
    width:100%;
    height:20px;
    background: #42b983;
    text-align: center;
}
</style>