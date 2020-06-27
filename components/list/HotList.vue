<template>
  <div class="list-wrapper">
    <div class="top-title">
      <span><b-icon-newspaper></b-icon-newspaper></span>
      近期热点
    </div>
    <ul class="news-list">
      <li
        class="list-item"
        v-for="item in items"
        :key="item.id"
        style="text-align:left"
      >
        <div class="item-info" style="text-align:left">
          <span class="item-date">
            <b-icon-clock class="clock-icon"></b-icon-clock>{{item.createTime|shortDate}}</span
          >
          <span><b-icon-eye class="eye-icon"></b-icon-eye>{{item.lookCount}}</span>
        </div>
        <div class="item-title" style="text-align:left">
          <router-link :to="'/news/'+item.id">{{item.title}}</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { BIconNewspaper, BIconEye, BIconClock } from 'bootstrap-vue'
import moment from 'moment'
export default {
  data() {
    return {
      items:[]
    }
  },
  components: {
    BIconNewspaper,
    BIconEye,
    BIconClock
  },
  async mounted() {
    var hotList = this.$store.state.hotList
    console.log('----hotlist---')
    // console.log(hotList.length)
    if (hotList.length == 0) {
      let res = await this.$axios.post('/api/web/article/articleListByUrl', {
        url: 'newslist',
        orderType: 1,
        pageNumber: 1,
        pageSize: 5
      })

      hotList = res.data.data.records
      this.$store.state.hotList = hotList
      console.log("请求数据")
    }
    this.items = hotList
    console.log(this.items)
  },
  filters: {
    shortDate: function(value) {
      return moment(value).format('YYYY-MM-DD')
    }
  }
}
</script>

<style lang="less" scoped>
.top-title {
  text-align: left;
  padding-bottom: 20px;
  border-bottom: 2px solid #d6d6d6;
  font-size: 18px;
  line-height: 36px;
  margin-bottom: 20px;
  color: #bd2980;
  font-weight: bold;
  span {
    color: #fff;
    height: 36px;
    width: 36px;
    display: inline-block;
    text-align: center;
    font-size: 24px;
    margin-right: 10px;
    background-color: #bd2980;
    // vertical-align: center;
  }
}

.list-item {
  text-align: left !important;
  border-bottom: 1px dotted #bababa;
  padding: 1em 0;
  font-size: 13px;
  .item-info {
    color: #999;
    .clock-icon {
      color: #bd2980;
      font-size: 14px;
      margin: 0 5px;
    }
    .eye-icon {
      font-size: 15px;
      margin: 0 5px 0 10px;
    }
  }
  .item-title {
    text-align: left;
    a {
      color: #555;
      text-decoration: none;
      &:hover {
        color: #bd2980;
      }
    }
  }
}
</style>
