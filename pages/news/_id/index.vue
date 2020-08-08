<template>
  <div class="page">
    <!-- <PagesHeader></PagesHeader> -->
    <div class="news-container">
      <div class="news-l">
        <Article :artInfo="artInfo"></Article>
        <div class="bottom-list">
          <RelativeList :relativeId="artInfo.categoryId"></RelativeList>
        </div>
      </div>
      <div class="news-r">
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
export default {
  validate({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  },
  data() {
    return {}
  },
  async asyncData({ params, query, $axios, redirect }) {
    let res = await $axios.$post('/api/web/article/articleDetails', {
      id: params.id
    })
    // console.log('---arttttt--')
    // console.log(res.data.keywords)
    if (res.data.keywords !== '') {
      redirect(res.data.keywords)
    }

    return { artInfo: res.data }
  },
  layout: 'common',
  components: {
    Article,
    RelativeList,
    TimelineList
  },
  head() {
    return {
      title: this.artInfo.title,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            '电子商务,郑州职业学院,电商学院,郑州电商,郑州电子商务职业学院'
        }
      ]
    }
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
  .news-r {
    display: none;
  }

  .news-container,
  .news-l {
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
  .news-l {
    width: 70%;
  }
  .news-bottom-list {
    padding: 0 50px;
  }
  .news-r {
    width: 20%;
  }
}
</style>
