<template>
  <div class="page">
    <!-- <PagesHeader></PagesHeader> -->
    <div class="news-container">
      <div class="r">
        <div class="info">
          <!-- <div class="crumb-nav">
            <b-breadcrumb :items="items" class="mcurmb"></b-breadcrumb>
          </div> -->
          <div class="info-title">{{navInfo.name}}</div>
          <div class="content" v-html="artInfo.content" >
         
            </div>
        </div>
      </div>
    </div>
    <!-- <Bottom></Bottom> -->
  </div>
</template>

<script>
// import Bottom from '~/components/common/Bottom.vue'
// import PagesHeader from '~/components/common/PagesHeader.vue'
export default {
  validate({ params }) {
    // 必须是number类型
    // return /^\d+$/.test(params.fnav)
    return true
  },
  data() {
    return {
      items: [
        {
          text: '首页',
          href: '#'
        },
        {
          text: '学校情况',
          href: '#'
        },
        {
          text: '学校介绍',
          active: true
        }
      ]
    }
  },
  async asyncData({ params, error, redirect, $axios, route,store }) {
    console.log('----')
    console.log(params)
    if (params.fnav == 'ing') {
      error({
        statusCode: 404,
        message: 'err'
      })
    }
    let resData= await $axios.$post('/api/web/article/articleDetailsByUrl',{
      url:params.fnav
    })
    let navInfo = store.state.navs.find(e=>e.navUrl==params.fnav)
    console.log(resData)
    return {
      fnav: params.fnav,
      snav: params.snav,
      artInfo:resData.data,
      navInfo:navInfo
    }
  },
  //   props: ['fnav', 'snav'],
  // beforeRouteUpdate(to, from, next) {
  //   alert(1)
  // },
  mounted() {
    
  },

  components: {
    // Bottom,
    // PagesHeader
  },
  layout: 'common',
  methods: {
    getdata() {
      alert(this.fnav)
    },
    go() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
// 1200以下隐藏左侧 只显示内容区域
@media screen and (max-width: 1200px) {
  .news-container {
    width: 100% !important;
  }
  .r {
    width: 100% !important;
  }
}

// 常规样式
.page {
  background-color: #f5f7f6;
}
.news-container {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  .r {
    // background-color: yellowgreen;
    width: 100%;
  }
}

// 内容栏
.mcurmb {
  margin: 0 !important;
  padding: 12px 0 0 12px !important;
  background-color: #f5f7f6;

  font-size: 13px;
  a {
    text-decoration: none;
    color: #666;
    // font-size: 13px;
    &:hover {
      color: #e85985;
    }
  }
}

.info-title {
  font-size: 28px;
  text-align: left;
  height: 66px;
  line-height: 66px;
  border-bottom: 1px solid #ccc;
  color: #0e518b;
  padding: 0 10px;
}

.content {
  line-height: 2;
  padding: 10px;
  text-align: left;
  font-size: 18px;
  margin-bottom: 100px;
}
</style>
