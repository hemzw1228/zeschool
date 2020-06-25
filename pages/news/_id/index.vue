<template>
  <div class="page">
    <!-- <PagesHeader></PagesHeader> -->
    <div class="news-container">
      <div class="l">
        <Article :artInfo="artInfo"></Article>
        <RelativeList></RelativeList>
      </div>
      <div class="r">
        <TimelineList></TimelineList>
      </div>
    </div>
    <!-- <Bottom></Bottom> -->
  </div>
</template>

<script>
import Article from '~/components/content/Article.vue'
import RelativeList from '~/components/list/RelativeList.vue'
import TimelineList from '~/components/list/TimelineList.vue'
// import Bottom from '~/components/common/Bottom.vue'
// import PagesHeader from '~/components/common/PagesHeader.vue'
export default {
  validate({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  },
  data() {
    return {}
  },
  async asyncData({ params, query, $axios }) {
    let res = await $axios.$post('/api/web/article/articleDetails', {
      id: params.id
    })
    console.log('-----')
    console.log(res.data)
    return { artInfo: res.data }
  },
  layout:'common',
  components: {
    Article,
    RelativeList,
    TimelineList,
    // Bottom,
    // PagesHeader
  }
}
</script>

<style lang="less" scoped>
// 1000下 内容页 右侧栏消失
@media screen and (max-width: 1000px) {
  .r {
    display: none;
  }

  .news-container,
  .l {
    width: 100% !important;
  }
}

// 常规样式
.page {
  background-color: #f5f7f6;
}
.news-container {
  display: flex;
  justify-content: space-between;
  width: 990px;
  // margin: 50px auto;
  margin: 0 auto;
  padding:50px 0;
  .l {
    width: 650px;
  }
  .r {
    width: 290px;
  }
}
</style>
