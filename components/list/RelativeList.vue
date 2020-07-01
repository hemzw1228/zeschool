<template>
  <div class="list-wrapper">
    <div class="list-title">相关新闻</div>
    <ul class="news-list">
      <li class="list-item" v-for="i in items" :key="i.id">
        <div class="date-box"><span>{{i.createTime|dateDay}}</span>{{i.createTime|dateYM}}</div>
        <div class="news-title"><router-link :to="'/news/'+i.id">{{i.title}}</router-link></div>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from "moment"
export default {
  data() {
    return {
      items: []
    }
  },
  props: ['relativeId'],
  async mounted() {
    let res = await this.$axios.post('/api/web/article/articleOrderByTime', {
      pageNumber: 1,
      pageSize: 6,
      id: this.relativeId
    })
    this.items = res.data.data.records
  },
  filters:{
    dateDay(val){
      return moment(val).format('DD')
    },
    dateYM(val){
      return moment(val).format('YYYY-MM')
    },
  }
}
</script>

<style lang="less" scoped>

.list-wrapper {
  // padding-bottom: 100px;
}
.list-title {
  color: #1c66ad;
  font-size: 18px;
  line-height: 50px;
  text-align: left;
  border-bottom: 2px solid #ccc;
  font-weight: bold;
}
.list-item {
  display: flex;
  padding: 15px;
  align-items: stretch;
  border-bottom: 1px solid #dcdcdc;
  //    align-items:flex-start;
  .date-box {
    flex-shrink: 0;
    height: 60px;
    width: 60px;
    // border: 1px solid #000;
    font-size: 13px;
    span {
      display: inline-block;
      width: 100%;
      font-size: 30px;
      line-height: 32px;
      color: #1c66ad;
      font-weight: bold;
    }
  }

  .news-title {
    //   border: 1px solid #000;
    padding: 10px 0 10px 20px;
    font-size: 14px;
    text-align: left;
    
    a {
      color: #333;
      text-decoration: none;
      &:hover {
        color: #e85985;
      }
    }
  }
}
</style>
