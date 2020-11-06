<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style>
* {
  /* 启用单指水平平移手势。解决警告[Intervention] */
  touch-action: pan-y;
}
body {
  min-width: 320px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
