<template>
  <div>
    <nuxt />
    <Bottom :links="links"></Bottom>
  </div>
</template>

<script>
import Bottom from '~/components/common/Bottom.vue'
import axios from 'axios'

export default {
  data() {
    return {
      links: []
    }
  },
  async mounted() {
    //   获取底部友情链接和版权信息
    // 1 友情链接 (post::web/link/qryLink  args::pageNumber:1,pageSize:6)
    let res_link = await axios.post('/api/web/link/qryLink', {
      pageNumber: 1,
      pageSize: 6
    })
    this.links = res_link.data.data.records
    console.log('----res_link---')
    // 2 信息
  },
  components: {
    Bottom
  }
}
</script>

<style lang="less">
.bottom {
  height: 250px;
  background-color: red;
}
</style>
