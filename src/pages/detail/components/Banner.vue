<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="//img1.qunarzz.com/sight/p0/1504/a7/a71c66e94b9d7f2f.water.jpg_600x330_52683870.jpg"
        alt=""
      />
      <div class="banner-info">
        <div class="banner-tittle">三亚梦幻水上乐园</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe62f;</span>39
        </div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClick"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data() {
    return {
      showGallary: false,
      imgs: [
        '//imgs.qunarzz.com/sight/p0/1504/a7/a71c66e94b9d7f2f.water.jpg_350x240_8c7065e2.jpg',
        '//imgs.qunarzz.com/sight/p0/1412/b3/c1e147c7a9457f4b1ceb94c501fea1b1.water.jpg_350x240_237b3329.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true
    },
    handleGallaryClick() {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-info
    display: flex
    align-items: center
    vertical-align: middle
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: .6rem
    color: #fff
    padding: 0 .2rem
    background-image: linear-gradient(top, rgba(0 ,0 ,0 ,0), rgba(0 ,0 ,0 ,0.8))
    .banner-tittle
      flex: 1
      font-size: .32rem
    .banner-number
      height: .32rem
      line-height: .32rem
      padding: 0 0.4rem
      border-radius: .2rem
      background: rgba(0, 0, 0, .8)
      font-size: .24rem
      .banner-icon
        font-size: .24rem
</style>
