<template>
  <div class="notice-container">
    <div class="w14 reveal-bottom">
      <router-link to="/newslist/xntz" class="title-link">
        <div class="notice-title">校内通知<span class="btn-more">>></span></div>
      </router-link>
      <!-- <div class="notice-title">校内通知<span class="btn-more">>></span></div> -->
      <div class="notice-list ">
        <div class="item " v-for="(notice, index) in notices" :key="notice.id">
          <div class="top" v-bind:style="{ background: bgcs[index] }"></div>
          <div class="date">
            <span>{{ notice.createTime | dateDay }}</span>
            {{ notice.createTime | dateYM }}
          </div>
          <div class="msg-body">
            <a class="b-title" :href="'/news/' + notice.id"
              >{{ notice.title.slice(0, 20)
              }}{{ notice.title.length > 20 ? '...' : '' }}</a
            >
            <span class="b-msg">{{ notice.description.slice(0, 20) }}...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      bgcs: ['#00afa2', '#34bee4', '#750c0c', '#66a7d3'],
      notices: []
    }
  },
  mounted() {
    if (process.client) {
      // var s = require('scrollreveal')
      var s = require('scrollreveal')
      var scrollReveal = s.default()
      // console.log(s)
      scrollReveal.reveal('.reveal-bottom', {
        // 动画的时长
        duration: 1000,
        // 延迟时间
        delay: 100,
        // 动画开始的位置，'bottom', 'left', 'top', 'right'
        origin: 'bottom',
        // 回滚的时候是否再次触发动画
        reset: false,
        // 在移动端是否使用动画
        mobile: false,
        // 滚动的距离，单位可以用%，rem等
        distance: '200px',
        // 其他可用的动画效果
        opacity: 0.05,
        easing: 'ease-in-out',
        scale: 1
      })
    }
    this.getNotices()
  },
  methods: {
    async getNotices() {
      // tagid:2  校内通知
      let res = await this.$axios.post('/api/web/article/articleByTagId', {
        pageNumber: 1,
        pageSize: 4,
        id: 2,
        orderType: 1
      })
      if (res.data.status == '9999') {
        return
      }
      this.notices = res.data.data.records
    }
  },
  filters: {
    dateDay(val) {
      return moment(val).format('DD')
    },
    dateYM(val) {
      return moment(val).format('YYYY-MM')
    }
  }
}
</script>

<style lang="less" scoped>
@media screen and(max-width: 1400px) {
  .w14 {
    width: 100% !important;
  }
}
@media screen and(max-width: 1000px) {
  .notice-list {
    flex-wrap: wrap;
    // justify-content:space-between;
    .item {
      width: 40% !important;
      margin-bottom: 20px;
    }
  }
}

@media screen and(max-width: 768px) {
  .notice-container {
    padding-top: 0 !important;
    padding-bottom: 10px !important;
  }
  .w14 {
    padding: 0 20px;
  }
  .notice-title {
    font-size: 18px !important;
    padding: 20px !important;
  }
  .notice-list {
    flex-wrap: wrap;

    .item {
      width: 100% !important;
      margin-bottom: 20px;
      .top {
        height: 60px !important;
      }
      .date {
      
        width: 50px!important;
        height: 50px!important;
        background-color: #4b4545;
        left: 10px!important;
        top: 5px !important;
    
        font-size: 10px!important;
        span {
    
          font-size: 25px!important;
          line-height: 25px!important;
          height: 25px!important;
          padding:  0!important;
       
        }
      }
      .msg-body {
        padding: 10px 10px !important;
        text-align: left;
        font-size: 14px!important;
        height: 50px!important;
      }
    }
    // .item:nth-child(n + 3) {
    //   display: none;
    // }
  }
}
// 常规
.notice-container {
  padding: 20px 0 100px 0;
  background-color: #f5f5f5;
  min-height: 150px;
}
.w14 {
  width: 1400px;
  margin: 0 auto;
}
.notice-title {
  padding: 20px 0 40px 0;
  font-size: 30px;
}

.title-link {
  text-decoration: none;
  color: #333;
  .notice-title {
    color: #333;
  }
  .btn-more {
    font-size: 12px;
    color: #333;
    text-decoration: none;
    padding-left: 10px;
  }
  &:hover {
    .notice-title,
    .btn-more {
      color: #e85985;
    }
  }
}

.notice-list {
  display: flex;
  justify-content: space-around;
  .item {
    position: relative;
    width: calc(20%);
    // background-color: pink;
    border: 1px solid #ccc;
    box-shadow: 0 0 5px #ccc;
    .top {
      height: 135px;
      background-color: #00afa2;
    }
    .date {
      position: absolute;
      width: 70px;
      height: 70px;
      background-color: #4b4545;
      left: 30px;
      top: 90px;
      color: #fff;
      font-size: 13px;
      span {
        display: inline-block;
        font-size: 36px;
        line-height: 36px;
        height: 36px;
        padding: 10px 0;
        color: #ffb424;
      }
    }
    .msg-body {
      height: 85px;
      padding: 40px 20px;
      // padding-top:40px;
      box-sizing: content-box;
      background-color: #fff;
      overflow: hidden;
      .b-title {
        // overflow: hidden;
        // text-overflow: ellipsis;
        // white-space: nowrap;
        font-weight: 700;
      }
      a {
        text-decoration: none;
        color: #333;
        display: block;
        text-align: left;
        padding-bottom: 10px;
      }
      .b-title:hover {
        color: #e85985;
      }
      .b-msg {
        // padding: 20px;
        // overflow: hidden;
        text-align: left;
      }
    }
  }
}
</style>
