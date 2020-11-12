<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon">🎫</span>
        {{ item.title }}
      </div>
      <div v-if="item.children" class="item-chilren">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.item-title
  line-height: .8rem
  font-size: .32rem
  padding: 0 .2rem
  .item-title-icon
    display: inline-block
    width: .36rem
    height: .36rem
    margin-right: .1rem
    background-size: .4rem 3rem
.item-chilren
  padding: 0 .2rem
</style>
