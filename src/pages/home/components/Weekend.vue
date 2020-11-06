<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">
            {{ item.desc }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'https://imgs.qunarzz.com/vs_ceph_vcimg/1cfbdaa2682ada2f854ea6114b3677c8.jpeg',
          title: '三亚',
          desc:
            '钜惠三亚四钻五日游 双岛假期 亚龙湾 玫瑰谷 蜈支洲 西岛南山 天涯海角'
        },
        {
          id: '0002',
          imgUrl:
            'https://imgs.qunarzz.com/vs_ceph_vcimg/1cfbdaa2682ada2f854ea6114b3677c8.jpeg',
          title: '三亚',
          desc:
            '钜惠三亚四钻五日游 双岛假期 亚龙湾 玫瑰谷 蜈支洲 西岛南山 天涯海角'
        },
        {
          id: '0003',
          imgUrl:
            'https://imgs.qunarzz.com/vs_ceph_vcimg/1cfbdaa2682ada2f854ea6114b3677c8.jpeg',
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
.item-img-wrapper
  overflow: hidden
  height: 0
  padding-bottom: 29.9%
  .item-img
    width: 100%
.item-info
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
</style>
