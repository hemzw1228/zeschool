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
        <!-- <b-pagination
          @change="getP"
          v-model="currentPage"
          :total-rows="total"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  validate({ params, query, $axios }) {
    return true
  },
  mounted() {},
  data() {
    return {
      items: [
        { id: 1, createTime: '2020-1-1', title: 'ttttttttttt' },
        { id: 2, createTime: '2020-1-1', title: 'ttttttttttt' },
        { id: 3, createTime: '2020-1-1', title: 'ttttttttttt' },
        { id: 4, createTime: '2020-1-1', title: 'ttttttttttt' }
      ]
    }
  },
  async asyncData({ params, $axios, query, app }) {
    console.log('---正在搜索---')
    console.log(query)
    let res = await $axios.$post('/api/web/article/articleQryByTitle', {
      keywords: query.sctxt
    })
    console.log(res)
    // if (res.data != null && res.data != []) {
    //   return { items: res.data,sctxt: query.sctxt }
    // } else {
    //   return { items:[],sctxt: query.sctxt }
    // }
  },
  watchQuery: ['sctxt'],

  watch: {
    '$store.state.navs': function(val) {}
  },
  methods: {},
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
