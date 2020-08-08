<template>
  <div class="social-container">
    <div class="w14">
      <div class="social-content  reveal-b">
        <router-link to="/newslist/ztzl" target="_blank" class="title-link">
          <div class="social-title">新闻热点 <span class="btn-more">>></span></div></router-link
        >

        <div class="social-list">
          <div class="item" v-for="i in items" :key="i.id">
            <router-link :to="'/news/' + i.id" class="img-wrap" target="_blank">
              <img class="pic" :src="i.coverImage" alt="" />
            </router-link>
            <div class="p">
              <div class="title">
                <router-link :to="'/news/' + i.id" target="_blank">{{
                  i.title
                }}</router-link>
              </div>
              <div class="body">
                {{ i.description }}
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="social-more">
          <a href="/newslist/ztzl" target="_blank"
            ><span class="more-txt"
              >查看更多<span class="iconfont icon-more-line more-icon"></span
            ></span>
          </a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  async mounted() {
    if (process.client) {
        var s = require('scrollreveal')
        var scrollReveal = s.default()
    
        scrollReveal.reveal('.reveal-b', {
          // 动画的时长
          duration: 1000,
          // 延迟时间
          delay: 200,
          // 动画开始的位置，'bottom', 'left', 'top', 'right'
          origin: 'bottom',
          // 回滚的时候是否再次触发动画
          reset: false,
          // 在移动端是否使用动画
          mobile: false,
          // 滚动的距离，单位可以用%，rem等
          distance: '100px',
          // 其他可用的动画效果
          opacity: 0.05,
          easing: 'ease-in-out',
          scale: 1
        })

      }
    let res = await this.$axios.post('/api/web/article/articleByTagId', {
      id: 5,
      pageSize: 4,
      pageNumber: 1,
      orderType: 1
    })
    if (res.data.status == '9999') {
      return
    }
    this.items = res.data.data.records
    // console.log('-------zzzzzz-------')
    // console.log(this.items)
    // console.log('-------zzzzzz-------end')
  }
}
</script>

<style lang="less" scoped>
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
}
// 小屏样式
@media screen and(max-width: 768px) {
  .w14 {
    padding: 0 20px;
  }
  .social-container{
    padding-bottom:20px!important; 
  }
  .social-content {
    width: 100% !important;
    margin: 0 !important;
    .img-wrap {
      border: 0px !important;
    }
  }
  .social-list {
    flex-direction: column;
    .item {
      display: flex;
      width: 100% !important;
      padding: 25px;
      margin-bottom: 25px;

      .pic {
        height: 100%!important;
        width: 100px !important;
      }
      .p {
        // width: 60%;
        padding: 0 !important;
        // margin-left: 25px;
        height: 100px !important;
        .title{
          padding: 0 0 0 10px!important;
        }
        .body {
          max-height: 70px;
          overflow: hidden;
          padding: 0 0 0 10px!important;
          line-height: 1.5!important;
        }
      }
    }
    .item:nth-child(n + 3) {
      display: none !important;
    }
  }
  .social-title {
    font-size: 18px !important;
    padding: 20px 0 !important;
  }
  .social-more {
    margin: 0 !important;
    .more-txt {
      border: none !important;

      &:hover {
        border: none !important;
      }
    }
  }
}

// 大屏
.social-container {
  min-height: 150px;
  padding-bottom: 100px;
  box-sizing: content-box;
  //   height: 300px;
  background-color: #f5f5ff;
}

.social-content {
  //   background-color: pink;
  margin: 0 auto;
  width: 85%;
  height: 100%;
}
.social-list {
  display: flex;
  height: 100%;
  justify-content: space-between;
  .item {
    width: calc(23% - 30px);
    border: 1px solid #ccc;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    .img-wrap {
      display: block;
      padding: 5px;
      border-bottom: 2px solid #ccc;
    }
    .pic {
      width: 100%;
      height: 120px;
    }
    .p {
      // padding: 0px;
      // padding:0 10px;
      height: 250px;
      .title {
        font-size: 16px;
        padding: 10px 20px 10px 20px;
        // padding-bottom: 10px;
        text-align: left;
        overflow: hidden;
        font-weight: 600;
        // text-overflow: ellipsis;
        // white-space: nowrap;

        a {
          color: #333;
          text-decoration: none;
          &:hover {
            color: #e85985;
          }
        }
      }
      .body {
        // margin-top: 5px;
        font-size: 15px;
        line-height: 2;
        text-align: left;
        // margin-bottom:10px;
        padding: 0 20px 0 20px;
      }
    }
    &:hover {
      opacity: 0.8;
    }
  }
}

.social-title {
  font-size: 28px;
  padding: 50px 0;
  text-decoration: none;
}
.title-link {
  text-decoration: none;
  color: #333;
  .social-title {
    color: #333;
  }
  .btn-more {
    font-size: 12px;
    color: #333;
    text-decoration: none;
    padding-left: 10px;
  }
  &:hover {
    .social-title,
    .btn-more {
      color: #e85985;
    }
  }
} 



</style>
