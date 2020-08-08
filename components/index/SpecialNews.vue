<template>
  <div class="special-container clearfix">
    <div class="w14 reveal-vis">
      <router-link to="/newslist/xnyw" target="_blank" class="title-link">
        <div class="news-title">校园.要闻<span class="btn-more">>></span></div></router-link
      >

      <!-- 要闻1 -->
      <div class="row-list row1">
        <div
          class="row-img row1-1 "
          v-if="titleList.length != 0 && coverNews.length != 0"
        >
          <div class="inner">
            <router-link :to="'/news/' + coverNews[0].id">
              <div
                class="pic"
                :style="
                  'background-image:url(' + coverNews[0].coverImage + ');'
                "
              ></div>
              <span class="specal-img-title">{{ coverNews[0].title }}</span>
            </router-link>
          </div>
        </div>
        <div class="row-news row1-2">
          <div class="news-item" v-for="i in titleList.slice(0, 4)" :key="i.id">
            <router-link :to="'/news/' + i.id">
              <div class="title"><i style="color:#666">{{i.createTime|MDDate}}</i>  {{ i.title }}</div>
            </router-link>
          </div>
        </div>
      </div>
      <!-- 768 隐藏 -->
      <div
        class="row-list row2"
        v-if="titleList.length != 0 && coverNews.length != 0"
      >
        <div class="row-img row2-1">
          <div class="inner">
            <router-link :to="'/news/' + coverNews[1].id">
              <div
                class="pic"
                :style="
                  'background-image:url(' + coverNews[1].coverImage + ');'
                "
              ></div>
              <span class="specal-img-title">{{ coverNews[1].title }}</span>
            </router-link>
          </div>
        </div>
        <div class="row-news row2-2">
          <div class="news-item" v-for="i in titleList.slice(4, 8)" :key="i.id">
            <router-link :to="'/news/' + i.id">
              <div class="title"><i style="color:#666">{{i.createTime|MDDate}} </i>{{ i.title }}</div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- <div class="read-more">
        <router-link to="/newslist/xnyw" target="_blank"
          ><span class="more-txt"
            >查看更多<span class="iconfont icon-more-line more-icon"></span
          ></span>
        </router-link>
      </div> -->
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      titleList: [],
      coverNews: [],
      resCount: 0
    }
  },
  mounted() {
    this.getCoverNews()
    this.getTitleList()
  },
  watch: {
    titleList: function(val) {
      if (val.length != 0) {
        this.resCount += 1
      }
    },
    coverNews: function(val) {
      if (val.length != 0) {
        this.resCount += 1
      }
    },
    resCount: function(val) {
      // 请求状态完毕
      if (val == 2) {
        this.addAction()
      }
    }
  },
  filters:{
    MDDate(val){
      return moment(val).format("YYYY-MM-DD")
    }
  },
  methods: {
    async getTitleList() {
      // tagid:1  要闻标签(title)
      let res = await this.$axios.post('/api/web/article/articleByTagId', {
        pageNumber: 1,
        pageSize: 8,
        id: 1,
        orderType: 1
      })
      if (res.data.status == '9999') {
        return
      }

      this.titleList = res.data.data.records
      // console.log(this.titleList)
    },
    async getCoverNews() {
      // tagid:6  要闻大图
      let res = await this.$axios.post('/api/web/article/articleByTagId', {
        pageNumber: 1,
        pageSize: 2,
        id: 6,
        orderType: 1
      })
      if (res.data.status == '9999') {
        return
      }
      this.coverNews = res.data.data.records
      // console.log(this.coverNews)
    },
    addAction() {
      if (process.client) {
        // var s = require('scrollreveal')
        var s = require('scrollreveal')
        var scrollReveal = s.default()
        // console.log(s)
        scrollReveal.reveal('.reveal-vis', {
          // 动画的时长
          duration: 1000,
          // 延迟时间
          delay: 100,
          // 动画开始的位置，'bottom', 'left', 'top', 'right'
          origin: 'left',
          // 回滚的时候是否再次触发动画
          reset: false,
          // 在移动端是否使用动画
          mobile: false,
          // 滚动的距离，单位可以用%，rem等
          distance: '50px',
          // 其他可用的动画效果
          // opacity: 0.1,
          easing: 'ease-in-out',
          scale: 1
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.special-container {
  background-color: #f5f5ff;
  padding-bottom: 100px;
  min-height: 500px;
}
// 1400以下宽度100%
@media screen and(max-width: 1400px) {
  .w14 {
    width: 100% !important;
  }
}
// 大于1400剧中
.w14 {
  width: 1400px;
  margin: 0 auto;
  // background-color: pink;
  padding: 0 40px;
}

@media screen and(max-width: 768px) {
  .w14 {
    padding: 0 20px !important;
  }
  .special-container{
    padding-bottom: 30px!important;
  }
   .row2{
    display: none!important;
  }
  .row-list {
    flex-direction: column;
    .row-img {
      width: 100% !important;
    }
    .row-news {
      width: 100% !important;
    }
    .news-item{
      width: 100%!important;
      margin-top: 20px!important;
      .title{
        padding: 20px 20px!important;
        font-size: 16px!important;
      }
    }
  }
  // .row1-1,
  // .row2-2 {
  //   margin-bottom: 20px;
  // }
  .news-title {
    font-size: 18px !important;
    padding: 20px !important;
  }
  .specal-img-title{
    font-size: 16px!important;
  }

  // .read-more {
  //   margin: 10px 0 !important;
  //   .more-txt {
  //     border: none !important;

  //     &:hover {
  //       border: none !important;
  //     }
  //   }
  // }
 
}

.title-link {
  text-decoration: none;
  color: #333;
  .news-title {
    color: #333;
  }
  .btn-more {
    font-size: 12px;
    color: #333;
    text-decoration: none;
    padding-left: 10px;
  }
  &:hover {
    .news-title,
    .btn-more {
      color: #e85985;
    }
  }
}

.row-list {
  display: flex;
  justify-content: space-between;
  .row-img {
    width: calc(50% - 10px);
    // border: 1px solid #000;
    position: relative;
    .inner {
      padding-bottom: 56.25%;
      // position: relative;
      .pic {
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        .specal-img-title {
          display: block;
          width: 100%;
          position: absolute;
          padding: 30px 30px 20px 30px;
          bottom: 0;
          color: #fff;
          background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
          text-align: left;
          text-decoration: none;
          font-size: 20px;
        }
      }
    }
  }

  .row-news {
    width: calc(50% - 10px);
    // border: 1px solid #000;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #fff;
    .news-item {
      width: calc(50% - 10px);
      // background-color: yellowgreen;
      border: 0;
      border-radius: 0%;
      box-shadow: 0 0 5px #999;
      border-bottom: 4px solid #01294c;
      a {
        display: block;
        text-decoration: none;
        .title {
          text-align: left;

          color: #333;
          font-size: 16px;
          padding: 40px 30px;
          position: relative;
          word-break: break-all;
          &:hover .title {
            color: #01294c;
          }
        }
      }
      &:hover {
        box-shadow: 0 0 10px #01294c;
      }
    }
    .news-item:nth-child(n + 3) {
      margin-top: 20px;
    }
  }
}

// 第二行换序
.row2 {
  margin-top: 20px;
  .row2-1 {
    order: 2 !important;
  }
  .row2-2 {
    order: 1;
  }
}

// 标题样式
.news-title {
  padding: 50px 0;
  font-size: 30px;
}
.specal-img-title {
  display: block;
  width: 100%;
  position: absolute;
  padding: 30px 30px 20px 30px;
  bottom: 0;
  color: #fff;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
  text-align: left;
  text-decoration: none;
  font-size: 20px;
}

// 底部更多样式

// .read-more {
//   margin: 50px 0;
//   width: 100%;
//   a {
//     margin-left: -12px;
//     font-size: 15px;
//     text-decoration: none;
//     // border: 1px solid #000;
//     display: inline-block;
//     // width: 200px;
//     .more-txt {
//       display: inline-block;
//       // width: 120px;
//       // background-color: #ccc;
//       color: #fff;
//       border-radius: 4px;
//       padding: 0 20px;
//       border: 1px solid #0e518b;
//       color: #0e518b;
//       &:hover {
//         color: #e85985;
//         border: 1px solid #e85985;
//       }
//     }
//     .more-icon {
//       margin-left: 5px;
//       font-size: 15px;
//     }
//   }
// }
</style>
