<template>
  <div class="page">
    <div class="search-container">
      <div class="list-wrapper">
        <div class="list-title">搜索结果</div>
        <ul class="news-list">
          <li class="list-item" v-for="i in items" :key="i.id">
            <span class="date-box">{{ i.createTime | shortDate }}</span>
            <div class="news-title">
              <nuxt-link :to="'/news/' + i.id">{{ i.title }}</nuxt-link>
            </div>
          </li>
        </ul>
        <b-pagination
          @change="getP"
          v-model="currentPage"
          :total-rows="total"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import { get } from 'http';

export default {
  validate({ params, query, $axios }) {
    return true
  },
  mounted() {
    this.getP(1)
  },
  data() {
    return {
      total: 0,
      perPage: 10,
      currentPage: 1,
      items: []
    }
  },
  async asyncData({ params, $axios, query, app }) {
    // console.log('---正在搜索---')
    // console.log(query)
    // let res = await $axios.$post('/api/web/article/articleQryByTitle', {
    //   keywords: query.sctxt,
    //   pageSize: 10,
    //   pageNumber: 1
    // })
    // console.log(res)
    // if (res.status == '9999') {
    //   return
    // }
    // return {
    //   items: res.data.records,
    //   sctxt: query.sctxt,
    //   total: res.data.total
    // }
  },
  // watchQuery: ['sctxt'],
  watch: {
    '$route.query': function(val) {this.getP(0)}
  },
  methods: {
    getP(p) {
      this.currentPage = p
      this.getNewsList()
    },
    async getNewsList() {
      console.log('---正在搜索---')
      console.log(this.$route.query.sctxt)
      let data = {
        pageNumber: this.currentPage,
        pageSize: this.perPage,
        keywords: this.$route.query.sctxt
      }
      let res = await this.$axios.post(
        '/api/web/article/articleQryByTitle',
        data
      )
      console.log('-----search---')
      console.log(res.data.data)
      this.total = res.data.data.total
      this.items = res.data.data.records
    }
  },
  layout: 'common',
  filters: {
    shortDate(val) {
      return moment(val).format('YYYY-MM-DD')
    }
  }
}
</script>

<style lang="less" scoped>
@media screen and (max-width: 1400px) {
  .search-container {
    width: 100% !important;
  }
}
@media screen and (max-width: 768px) {
  .search-container {
    padding: 0px !important;
  }
  .list-wrapper {
    padding: 20px !important;
  }
  .list-title {
    font-size: 20px !important;
  }
}

// 常规样式
.page {
  background-color: #f5f7f6;
}
.search-container {
  display: flex;
  justify-content: space-between;
  width: 1400px;
  margin: 0px auto;
  padding: 50px 50px;
}

.list-wrapper {
  // padding-bottom: 100px;
  width: 100%;
  padding: 50px;
}
.news-list {
  margin-bottom: 50px;
}
.list-title {
  color: #1c66ad;
  font-size: 25px;
  line-height: 50px;
  text-align: left;
  border-bottom: 2px solid #ccc;
  font-weight: bold;
}
.list-item {
  display: flex;
  border-bottom: 1px solid #dcdcdc;
  justify-content: space-between;
  padding: 15px 20px;
  .date-box {
    font-size: 13px;
    order: 1;
    span {
      color: #1c66ad;
    }
  }

  .news-title {
    text-align: left;
    font-size: 15px;
    flex: 1;
    a {
      text-align: left;
      display: inline-block;
      width: 100%;
      color: #333;
      text-decoration: none;
      &:hover {
        color: #e85985;
      }
    }
  }
  &:hover {
    background: #fff;
  }
}
</style>
