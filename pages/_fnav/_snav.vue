<template>
  <div class="page">
    <!-- <PagesHeader></PagesHeader> -->
    <div class="news-container">
      <div class="l">
        <div class="side-nav">
          <div class="side-title">{{ fnavInfo.name }}</div>
          <ul class="side-list">
            <li class="item" v-for="nav in sideNavs" :key="nav.id">
              <router-link
                @click.native="passNav(nav)"
                :to="'/' + fnavInfo.navUrl + '/' + nav.navUrl"
                :class="nav.navUrl == navInfo.navUrl ? 'active' : ''"
                >{{ nav.name }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="r">
        <div class="info">
          <div class="crumb-nav">
            <b-breadcrumb :items="items" class="mcurmb"></b-breadcrumb>
          </div>
          <div class="info-title">{{ navInfo.name }}</div>
          <div class="content" v-html="contentInfo"></div>
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
    // return /^\d+$/.test(params.id)
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
      ],
      navs: [],
      fnavInfo: {},
      sideNavs: [],
      navInfo: []
    }
  },
  async asyncData({ params, $axios, store }) {
    let res = await $axios.$post('/api/web/article/articleDetailsByUrl', {
      url: params.snav
    })
    console.log('------')
    console.log(res)
    let content =""
    if(res.data){
      content = res.data.content
    }
    return {
      fnav: params.fnav,
      snav: params.snav,
      // contentInfo :res.data.content,
      contentInfo: content
    }
  },
  //   props: ['fnav', 'snav'],
  // beforeRouteUpdate(to, from, next) {
  //   alert(1)
  // },
  mounted() {
    // this.fnavInfo = this.$store.state.fnav
    // this.sideNavs = this.$store.state.childrenNav
    // this.navInfo = this.$store.state.nav
    // console.log('snav  获取 navs 1')
    // console.log('m-----------')
    // this.navs = this.$store.state.navs
    // console.log(this.navs)
    // console.log(this.$route.params)
    // console.log('m-----------')
    this.renderSiderBar()
  },
  watch: {
    '$store.state.navs': function(val) {
      // console.log('w-----------')
      // this.navs = val
      // console.log(this.navs)
      // console.log(this.$route.params)
      // console.log('w-----------')
      this.renderSiderBar()
    }
  },
  layout: 'common',
  methods: {
    getdata() {
      alert(this.fnav)
    },
    renderSiderBar() {
      console.log('render')
      let storeNavs = this.$store.state.navs
      if (storeNavs.length == 0) {
        return
      }
      let furl = this.$route.params.fnav
      let surl = this.$route.params.snav
      let fnavInfo = storeNavs.find(e => e.navUrl == furl)
      let children = fnavInfo.children
      let navInfo = children.find(e => e.navUrl == surl)
      this.fnavInfo = fnavInfo
      this.sideNavs = children
      this.navInfo = navInfo
      // console.log(fnavInfo)
      // console.log(children)
      // console.log(navInfo)

      // console.log(storeNavs)
      // console.log("end render")
    },
    passNav(nav) {
      this.$store.commit('passNav', nav)
    }
  }
}
</script>

<style lang="less">
// 1200以下隐藏左侧 只显示内容区域
@media screen and (max-width: 1200px) {
  .news-container {
    width: 100% !important;
  }
  .l {
    display: none;
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
  .l {
    width: 300px;
    // height: 500px;
    flex: 0 0 auto;
    // background-color: pink;
    padding-bottom: 50px;
  }
  .r {
    // background-color: yellowgreen;
    width: 860px;
  }
}
// 侧边导航
.side-nav {
  position: relative;
  top: -38px;
  .side-title {
    height: 68px;
    line-height: 68px;
    font-size: 26px;
    background-color: rgba(224, 224, 224, 0.9);
    color: #0e518b;
  }
  .side-list {
    .item {
      height: 68px;
      line-height: 68px;
      background-color: #fff;
      border-bottom: 1px solid #ccc;
      a {
        text-decoration: none;
        color: #333;
        font-size: 18px;
        &:hover {
          color: #e85985;
        }
      }
    }
  }
  .active {
    color: #e85985 !important;
    cursor: default;
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
  font-size: 24px;
  text-align: left;
  height: 66px;
  line-height: 66px;
  border-bottom: 1px solid #ccc;
  color: #0e518b;
  padding: 0 10px;
}

.info {
  .content {
    line-height: 2;
    padding: 10px;
    text-align: left;
    font-size: 18px;
    margin-bottom: 100px;
    p {
      text-align: left;
    }
    img {
      text-align: center;
    }
  }
}
</style>
