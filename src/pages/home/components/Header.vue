<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      <span class="arrow-text">城市</span>
      <span class="iconfont arrow-icon">&#xe62a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  display: flex
  height: .86rem
  background: $bgColor
  color: #ffffff
  line-height: .86rem
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
    width: 1.24rem
    float: right
    text-align: center
    .arrow-text
      font-size: .24rem
    .arrow-icon
      font-size: .24rem
</style>
