<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplayDisableOnInteraction: false,
        autoplay: 1000
      },
      swiperList: [
        {
          id: '0001',
          imgUrl:
            '//img1.qunarzz.com/wugc/p189/201206/12/a3ace34bc010041193835fbb.jpg_600x330_944cd8e9.jpg'
        },
        {
          id: '0002',
          imgUrl:
            '//img1.qunarzz.com/sight/p0/1811/2f/2f9b29981c3c9f85a3.img.jpg_600x330_ee602103.jpg'
        },
        {
          id: '0003',
          imgUrl:
            '//img1.qunarzz.com/wugc/p189/201206/12/a3ace34bc010041193835fbb.jpg_600x330_944cd8e9.jpg'
        }
      ]
    }
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
