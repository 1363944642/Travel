<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomeSwiper',
  props: {
    list: Array,
    city: String
  },
  data() {
    return {
      swiperList: this.list,
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplayDisableOnInteraction: false,
        autoplay: 1000
      }
    }
  },
  computed: {
    showSwiper() {
      return this.swiperList.length
    }
  },

  methods: {
    getHomeInfoSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
      }
    }
  },
  activated() {
    data: {
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    }
  },
  deactivated() {
    this.swiperList = []
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff
.wrapper
  overflow: hidden
  width: 100%
  height: 31.25vw
  // height: 0
  // padding-bottom: 31.25%
  background: #cccccc
  .swiper-img
    width: 100%
    height: 31.25vw
</style>
