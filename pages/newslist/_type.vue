<template>
  <div class="page">
    <PagesHeader></PagesHeader>
    <div class="news-container">
      <div class="l">
        {{ type }}
        <CommonList></CommonList>
      </div>
      <div class="r">
        <HotList></HotList>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import HotList from '~/components/list/HotList.vue'
import CommonList from '~/components/list/CommonList.vue'
import Bottom from '~/components/common/Bottom.vue'
import PagesHeader from '~/components/common/PagesHeader.vue'
export default {
  validate({ params }) {
    // 必须是number类型
    // return /^\d+$/.test(params.id)
    return true
  },
  data() {
    return {}
  },
  asyncData({ params, $axios }) {
    console.log(!params.type)
    return {
      type: params.type
    }
  },
  components: {
    HotList,
    CommonList,
    Bottom,
    PagesHeader
  }
}
</script>

<style lang="less" scoped>
@media screen and (max-width: 1000px) {
  .r {
    display: none;
  }

  .news-container,
  .l {
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
  width: 990px;
  margin: 50px auto;
  .l {
    width: 650px;
    // height: 500px;
    // background-color: pink;
  }
  .r {
    width: 290px;
    // height: 500px;
    // background-color: blue;
  }
}
</style>
