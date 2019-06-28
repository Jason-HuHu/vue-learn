<!--
    滑动导航
-->
<template>
  <swiper :options="swiperOption" ref="swiper" class="nav-swiper">
    <template v-for="(item, index) in menus">
      <swiper-slide class="nav-item" :class="{ active: activeIndex === index }" :key="index">{{ item.name }}</swiper-slide>
    </template>
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    menus: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
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
    }
  },
  computed: {
    swiper () {
      return this.$refs.swiper.swiper
    }
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
      color: fade(rgba(255, 90, 73, 0.96), 65);
      font-weight: 400;
      padding-top: 3px;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      &.active {
        color: #28ff2b;
        &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 3px;
          background-color: #3730ff;
          bottom: 0px;
          left: 0px;
        }
      }
    }
  }
</style>
