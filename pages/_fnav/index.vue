<template>
  <div class="page">
    <!-- <PagesHeader></PagesHeader> -->
    <div class="news-container">
      <div class="r">
        <div class="info">
          <div class="info-title" v-if="navInfo">{{ navInfo.name }}</div>
          <div class="content" v-html="artInfo.content"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  validate({ params }) {
    return true
  },
  data() {
    return {
      navInfo: {}
    }
  },
  async asyncData({ params, error, redirect, $axios, route, store }) {
    console.log('----')
    console.log(params)
    if (params.fnav == 'ing') {
      error({
        statusCode: 404,
        message: 'err'
      })
    }
    let resData = await $axios.$post('/api/web/article/articleDetailsByUrl', {
      url: params.fnav
    })
    let navInfo = store.state.navs.find(e => e.navUrl == params.fnav)
   
    console.log(store.state.navs)
    console.log(resData)
    return {
      fnav: params.fnav,
      snav: params.snav,
      artInfo: resData.data,
      navInfo: navInfo
    }
  },
  //   props: ['fnav', 'snav'],
  // beforeRouteUpdate(to, from, next) {
  //   alert(1)
  // },
  mounted() {},
  watch: {
    '$store.state.navs': function(val) {
      // let navInfo = this.$store.state.navs.find(e => e.navUrl == this.fnav)
      let navInfo = val.find(e => e.navUrl == this.fnav)
      this.navInfo = navInfo
    }
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
