<template>
  <div class="article-container">
    <h1 class="article-title">{{ artInfo.title }}</h1>
    <hr />
    <!-- <div class="article-content" v-html="artInfo.content"></div> -->
    <div class="article-content" v-html="artInfo.content"></div>
    <div class="date-wrapper">
      <div class="article-time">
        {{ artInfo.createTime }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      art: {}
    }
  },
  props: ['artInfo']
}
</script>

<style lang="less">
// 1200以下内容区域样式
@media screen and(max-width: 1000px) {
  .article-content {
    font-size: 16px !important;
    padding: 20px !important;
    // line-height: 2;
  }
  .article-title {
    font-size: 18px !important;
  }
}
.article-container {
  width: 100%;
  padding-bottom: 50px;
  p {
    word-break: break-all;
  }
  hr {
    height: 1px;
    color: #ccc;
    // border: none;
    border-top: 1px solid #ccc;
    margin-top: 25px;
    margin-bottom: 20px;
  }
  .article-title {
    font-size: 25px;
    // text-align: left;
  }
  .article-content {
    padding: 10px;
    text-indent: 2em;
    text-align: left;
    line-height: 2;
    img {
      width: calc(80% - 20px);
    }
    p {
      text-align: left;
    }
  }

  .date-wrapper {
    text-align: center;
    .article-time {
      display: inline-block;
      margin-top: 30px;
      font-size: 12px;
      border-top: 1px solid #ccc;
      color: #aaa;
      line-height: 30px;
    }
  }
}
</style>
