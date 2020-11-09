<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <span class="arrow-text">{{ this.city }}</span>
        <span class="iconfont arrow-icon">&#xe62a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  display: flex
  height: $headerHeight
  background: $bgColor
  color: #ffffff
  line-height: $headerHeight
  .header-left
    width: .64rem
    float: left
    .back-icon
      text-align: center
      font-size: 0.4rem
  .header-input
    flex: 1
    margin-top: .12rem
    margin-left: .2rem
    padding-left: .2rem
    height .64rem
    line-height: .64rem
    background: #ffffff
    color: #cccccc
    border-radius: .1rem
  .header-right
    font-size: 0
    min-width: 1.04rem
    padding: 0 .1rem
    float: right
    text-align: center
    color:#fff
    .arrow-text
      font-size: .24rem
    .arrow-icon
      font-size: .24rem
</style>
