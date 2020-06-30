<template>
  <div>
    <Header :navs="navs" :links="tLinks" ></Header>
    <nuxt />
    <Bottom :links="bLinks"></Bottom>
  </div>
</template>

<script>
import Bottom from '~/components/common/Bottom.vue'
import Header from '~/components/common/PagesHeader.vue'
import axios from 'axios'
export default {
  data() {
    return { navs: [], bLinks: [],tLinks:[] }
  },
  components: {
    Bottom,
    Header
  },
  async mounted() {
    // console.log('common layout')
    //
    // 1 导航 (get::web/navbar/category )
    let res_navs = await axios.get('/api/web/navbar/category')
    // this.navs = res_navs.data.data.filter(e => {
    //   return e.pid == 0
    // })
    this.navs = res_navs.data.data.slice(0,8)
    this.$store.commit('storeNavs', this.navs)

    // 2 友情链接 (post::web/link/qryLink  args::pageNumber:1,pageSize:6)
    let res_link = await axios.post('/api/web/link/qryLink', {
      pageNumber: 1,
      pageSize: 9
    })

    this.tLinks = res_link.data.data.records.slice(0,3)
    this.bLinks = res_link.data.data.records.slice(3,9)
    // console.log('----res_link---')
    // 3 信息
  }
}
</script>

<style lang="less">
.bottom {
  height: 250px;
  background-color: red;
}
</style>
