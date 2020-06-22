<template>
  <div class="page">
    <PagesHeader></PagesHeader>
    <div class="news-container">
      <div class="l">
        <Article></Article>
        <RelativeList></RelativeList>
      </div>
      <div class="r">
        <TimelineList></TimelineList>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Article from '~/components/content/Article.vue'
import RelativeList from '~/components/list/RelativeList.vue'
import TimelineList from '~/components/list/TimelineList.vue'
import Bottom from '~/components/common/Bottom.vue'
import PagesHeader from '~/components/common/PagesHeader.vue'
export default {
  validate({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  },
  data() {
    return {}
  },
  asyncData({ params, query, $axios }) {
    return {}
  },
  components: {
    Article,
    RelativeList,
    TimelineList,
    Bottom,
    PagesHeader
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
  margin: 50px auto;
  .l {
    width: 650px;
  }
  .r {
    width: 290px;
  }
}
</style>
