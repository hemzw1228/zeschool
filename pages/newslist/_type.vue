<template>
  <div class="page">
    <!-- <PagesHeader></PagesHeader> -->
    <div class="news-container">
      <div class="newslist-l">
        <CommonList  :type="$route.params.type" :title="typeTitle"></CommonList>
      </div>
      <div class="newslist-r">
        <HotList></HotList>
      </div>
    </div>
    <!-- <Bottom></Bottom> -->
  </div>
</template>

<script>
import HotList from '~/components/list/HotList.vue'
import CommonList from '~/components/list/CommonList.vue'
// import Bottom from '~/components/common/Bottom.vue'
// import PagesHeader from '~/components/common/PagesHeader.vue'
import { BIconChevronDoubleRight } from 'bootstrap-vue'
import axios from 'axios'

export default {
  validate({ params, query, $axios }) {
    // 必须是number类型
    // return /^\d+$/.test(params.id)

    return true
  },
  mounted() {
    // this.$myInjectedFunction('dfdfafda')
    this.getTitle()
  },
  data() {
    return { typeTitle: '' }
  },
  async asyncData({ params, $axios, query, app }) {
    // let data = {
    //   pageNumber: 1,
    //   pageSize: 10,
    //   url: params.type
    // }

    // console.log(data)
    // let res = await $axios.$post('/api/web/article/articleDetailsByUrl', data)
    // console.log('--------')
    // console.log(res.data.records)
    // return { newsList: res.data.records }
  },
  // async asyncData({ params, $axios, query, error }) {
  //   // let res = await $axios.$post(
  //   //   '/api/article/article/ArticleOrderByTime',
  //   //   {
  //   //     pageNumber: '1',
  //   //     pageSize: '10',
  //   //     categoryId: '21'
  //   //   },
  //   //   // {
  //   //   //   headers: {
  //   //   //     'Content-Type': 'application/x-www-form-urlencoded',
  //   //   //   }
  //   //   // }
  //   // )

  //   var data = new FormData()
  //   data.append('pageNumber', '1')
  //   data.append('pageSize', '10')
  //   data.append('categoryId', '21')
  //   console.log(query.id)
  //   let res = await $axios.$post(
  //     '/api/web/article/article/ArticleOrderByTime',
  //     data
  //     // {
  //     //   headers: {
  //     //     'Content-Type': 'multipart/form-data',
  //     //     'Accept': '*/*'
  //     //   }
  //     // }
  //   )
  //   // console.log('aaaa')
  //   console.log(res)
  //   // console.log(res)
  //   // if (res.status == 9999) {
  //   //   error({
  //   //     statusCode: 500,
  //   //     message: 'err'
  //   //   })
  //   // }

  //   return {
  //     items: res.records,
  //     total: res.total
  //   }
  // },
  props: ['type'],
  components: {
    HotList,
    CommonList
    // Bottom,
    // PagesHeader
  },
  // async beforeRouteUpdate(to, from, next) {
  //   var data = new FormData()
  //   data.append('pageNumber', '1')
  //   data.append('pageSize', '10')
  //   data.append('categoryId', '21')
  //   console.log(this.$route.query.id)
  //   let res = await axios.post(
  //     '/api/web/article/article/ArticleOrderByTime',
  //     data,
  //     {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //         'Accept': '*/*'
  //       }
  //     }
  //   )
  //   console.log(res.data)
  //   next()
  // },
  watch: {
    '$store.state.navs': function(val) {
      // console.log('w-----------')
      // this.navs = val
      // console.log(this.navs)
      // console.log(this.$route.params)
      // console.log('w-----------')
      this.getTitle()
    }
  },
  methods: {
    getTitle() {
      let navs = this.$store.state.navs
      if (navs.length == 0) {
        return
      }
      // console.log(navs)
      let fnav = navs.find(e => e.navUrl == 'newslist')

      console.log(fnav)
      // fnav带存储到store
      this.$store.commit('passFnav',fnav)
      // 
      let navInfo = fnav.children.find(e => e.navUrl == this.$route.params.type)
      this.typeTitle = navInfo.name
    }
  },
  middleware: 'test',
  layout: 'common'
}
</script>

<style lang="less" scoped>
@media screen and (max-width: 1400px) {
  .news-container {
    width: 100% !important;
  }
}
@media screen and (max-width: 1000px) {
  .newslist-r {
    display: none;
  }

  .news-container,
  .newslist-l {
    width: 100% !important;
    padding: 0 20px;
  }
}
// 常规样式
.page {
  background-color: #f5f7f6;
}
.news-container {
  display: flex;
  justify-content: space-between;
  width: 1400px;
  margin: 0px auto;
  padding: 50px 0;
  .newslist-l {
    width: 70%;
    // height: 500px;
    // background-color: pink;
  }
  .newslist-r {
    width: 20%;
    // height: 500px;
    // background-color: blue;
  }
}
</style>
