<template>
  <div class="page">
    <!-- <PagesHeader></PagesHeader> -->
    <div class="news-container">
      <div class="l">
        <Article :artInfo="artInfo"></Article>
        <div class="bottom-list">
          <RelativeList :relativeId="artInfo.categoryId"></RelativeList>
        </div>
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
  async asyncData({ params, query, $axios,redirect}) {
    let res = await $axios.$post('/api/web/article/articleDetails', {
      id: params.id
    })
    console.log('---arttttt--')
    console.log(res.data.keywords)
    if(res.data.keywords !=="")
    {
      redirect(res.data.keywords)
    }
    
    return { artInfo: res.data }
  },
  layout: 'common',
  components: {
    Article,
    RelativeList,
    TimelineList
    // Bottom,
    // PagesHeader
  }
}
</script>

<style lang="less" scoped>
// 1400下 内容页 右侧栏消失
@media screen and (max-width: 1400px) {
  // .r {
  //   display: none;
  // }

  .news-container {
    width: 100% !important;
  }
}
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
  width: 1400px;
  // margin: 50px auto;
  margin: 0 auto;
  padding: 50px 0;
  .l {
    width: 70%;
  }
  .bottom-list {
    padding: 0 50px;
  }
  .r {
    width: 20%;
  }
}
</style>
