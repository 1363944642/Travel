<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt="" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">
            {{ item.desc }}
          </p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'https://imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg',
          title: '三亚',
          desc:
            '钜惠三亚四钻五日游 双岛假期 亚龙湾 玫瑰谷 蜈支洲 西岛南山 天涯海角'
        },
        {
          id: '0002',
          imgUrl:
            'https://imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg',
          title: '三亚',
          desc:
            '钜惠三亚四钻五日游 双岛假期 亚龙湾 玫瑰谷 蜈支洲 西岛南山 天涯海角'
        },
        {
          id: '0003',
          imgUrl:
            'https://imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg',
          title: '三亚',
          desc:
            '钜惠三亚四钻五日游 双岛假期 亚龙湾 玫瑰谷 蜈支洲 西岛南山 天涯海角'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
.title
  margin-top .2rem
  line-height: .8rem
  background: #eee
  text-indent: .2rem
.item
  box-sizing: border-box
  overflow:hidden
  display: flex
  height: 1.88rem
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: .1rem
  .item-info
    flex: 1
    padding: .1rem
    min-width: 0px
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
    .item-button
      line-height: .44rem
      margin-top: .16rem
      background: #ff9300
      padding: 0 .2rem
      border-radius: 0.06rem
      color: #fff
</style>
