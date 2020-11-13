<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetalInfo() {
      axios
        .get('/api/detail.json', {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleGetDataSucc)
    },
    handleGetDataSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data

        data.forEach(element => {
          if (element.id === this.$route.params.id) {
            this.sightName = element.sightName
            this.bannerImg = element.bannerImg
            this.gallaryImgs = element.gallaryImgs
            this.list = element.categoryList
            return
          }
        })
      }
    }
  },
  mounted() {
    this.getDetalInfo()
  },
  activated() {
    this.getDetalInfo()
  }
}
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
</style>
