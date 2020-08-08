<template>
  <div class="wrapper">
    <div class="top-title">
      <span><b-icon icon="newspaper"></b-icon></span>
      最新新闻
    </div>
    <div class="top-img" v-if="items[0]">
      <router-link :to="'/news/' + items[0].id">
        <img
          :src="
            items[0].coverImage == ''
              ? ~/assets/gim / school.jpg
              : items[0].coverImage
          "
          alt=""
        />
        <span class="img-title">{{ items[0].title }}</span>
      </router-link>
    </div>
    <ul class="line-list">
      <li class="line-item" v-for="item in items.slice(1, 6)" :key="item.id">
        <div class="time ">
          <i class="arrow "><em></em></i>
          <code class="now"></code>
          {{ item.createTime | shortDate }}
        </div>
        <div class="title">
          <router-link :to="'/news/' + item.id">{{ item.title }}</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { BIconNewspaper, BIcon } from 'bootstrap-vue'
import moment from 'moment'
export default {
  data() {
    return {
      items: []
    }
  },
  components: {
    BIconNewspaper,
    BIcon
  },
  async mounted() {
    var timeLine = this.$store.state.timeLine

    // console.log('----Timeline---')
    // console.log(this.$store.state.timeLine)
    // console.log('----Timeline---')
    // console.log(hotList.length)
    if (timeLine.length == 0) {
      let res = await this.$axios.post('/api/web/article/articleListByUrl', {
        url: 'newslist',
        orderType: 0,
        pageNumber: 1,
        pageSize: 6
      })

      timeLine = res.data.data.records
      // this.$store.commit('storeNavs', this.navs)
      this.$store.commit('setTimeLine', timeLine)
      // console.log(this.$store.state.timeLine)
      // console.log('t-请求数据-')
    }
    this.items = timeLine
    // console.log(this.items)
  },
  filters: {
    shortDate: function(value) {
      return moment(value).format('MM-DD')
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  padding-top: 20px;
}

.top-img {
  box-sizing: border-box;
  position: relative;
  margin: 10px;
  img {
    width: 100%;
  }
  .img-title {
    position: absolute;
    display: block;
    bottom: 0px;
    padding: 10px;
    // border: 1px solid #000;
    width: 100%;
    color: #fff;
    background: #31263c;
    opacity: 0.7;
  }
  a:hover {
    opacity: 0.9;
  }
}
.line-item {
  text-align: left;
}
.title {
  text-align: left;
}
.line-list {
  font-size: 12px;
  text-align: left;
  border-left: 1px solid #bfc3c4;
  margin: 25px 0 0 10px;
  padding: 0 0 0 25px;
  .time {
    border: 1px solid #bfc3c4;
    background: #fff;
    padding: 0 8px;
    position: relative;
    display: inline-block;
    line-height: 24px;
    .arrow {
      border-color: transparent;
      border-style: solid;
      border-width: 8px;
      display: block;
      height: 0;
      position: absolute;
      width: 0;
      border-right-color: #bfc3c4;
      border-left-width: 0;
      left: -8px;
      margin-top: -8px;
      top: 50%;
      em {
        border-color: transparent;
        border-style: solid;
        border-width: 8px;
        display: block;
        height: 0;
        position: absolute;
        width: 0;
        border-right-color: #fff;
        border-left-width: 0;
        top: -8px;
        left: 1px;
      }
    }
    code {
      position: absolute;
      width: 9px;
      height: 9px;
      background: #fff;
      border: 1px solid #bfc3c4;
      border-radius: 11px;
      left: -32px;
      top: 50%;
      margin-top: -5px;
    }
  }
  .title {
    padding: 10px 0 15px;
    a {
      color: #333;
      text-decoration: none;
      &:hover {
        color: #e85985;
      }
    }
  }
}
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
.now {
  border-color: red !important;
}
</style>
