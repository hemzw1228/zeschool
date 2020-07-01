<template>
  <div>
    <NavBar @popSearch="handlePop" :navs="navs"></NavBar>
    <!-- 轮播图 -->
    <b-carousel
      id="carousel-1"
      :interval="3000"
      controls
      indicators
      fade
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      class="spanner"
    >
      <!-- Text slides with image -->
      <router-link
        :to="'/news/' + s.id"
        v-for="s in banners"
        target="_blank"
        :key="s.id"
      >
        <b-carousel-slide
          class="slide-item"
          :caption="s.title"
          :img-src="s.coverImage"
        >
        </b-carousel-slide>
      </router-link>
    </b-carousel>

    <!-- 要闻 -->
    <Special></Special>
    <Notice></Notice>
    <!-- 专题 -->
    <School></School>
    <!-- 专题区域 -->
    <!-- 通知 -->
    <Social></Social>
    <!-- 底部 footer -->
    <!-- <Bottom></Bottom> -->
    <!-- 底部链接 -->

    <!-- 搜索 -->
    <div class="search-wrapper" v-show="spop">
      <div class="content">
        <input type="text" class="sch-input" v-model="schTxt" /><span
          class="sch-btn"
          @click="handleSearch"
          >搜索</span
        >
      </div>
      <span class="sch-close" @click="handleSearchClose"> &times;</span>
    </div>
  </div>
</template>

<script>
// import scrollReveal from 'scrollreveal'
import Special from '~/components/index/SpecialNews.vue'

import School from '~/components/index/SchoolNews.vue'
import Social from '~/components/index/Social.vue'
// import Bottom from '~/components/common/Bottom.vue'
import NavBar from '~/components/index/NavBarIndex.vue'
import Notice from '~/components/index/Notice.vue'
import { darkblue } from 'color-name'
export default {
  data() {
    return {
      navBarFixed: '',
      // scrollReveal: scrollReveal(),
      info: { username: 'admin', password: '123456' },
      schTxt: '',
      spop: false
    }
  },

  async asyncData({ params, $axios }) {
    // 1---获取导航
    let navs = await $axios.$get('/api/web/navbar/category')
    const fnavs = navs.data.filter(e => e.pid === 0)
    // const fnavs = navs.data.slice(0,8)
    // console.log(fnavs)
    // 2---获取轮播 (接口：web/article/articleBySlider)
    let bannerRes = await $axios.$post('/api/web/article/articleByTagId', {
      id: 7,
      pageNumber: 1,
      pageSize: 3
    })
    console.log('------------banner---------')
    console.log(bannerRes.data.records)

    //获取文章
    // 3---tas接口(web/article/articleByTagId)
    // 3.1.获取要闻（tagid=1,取10个，2张带图片）
    // 3.2.获取通知 (tagid=2, 取4个)
    // 3.3.获取人文（tagid=3,取1个）
    // 3.3.获取校内活动（tagid=4,取2个）
    // 3.4.获取专题（tagid=5,取4个）

    // 获取友情链接
    // 4---获取底部信息接口口(web/link/qryLink)
    // 需要6个

    // 获取版权信息 (web/base/baseInfo)

    return { navs: fnavs, banners: bannerRes.data.records }
  },
  head() {
    return {
      title: '郑州电子商务职业学院',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '郑州电子商务职业学院欢迎你'
        }
      ]
    }
  },

  components: {
    Special,
    School,
    Social,
    // Bottom,
    NavBar,
    Notice
  },
  mounted() {},

  methods: {
    handlePop(e) {
      this.spop = e
    },
    handleSearchClose() {
      this.spop = false
    },
    handleSearch() {
      this.$router.push('/search?sctxt=' + this.schTxt)
      this.schTxt = ''
    }
  },
  layout: 'default'
}
</script>

<style lang="less">
// 搜索页面
.search-wrapper {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  .content {
    width: 60%;
    // height: 20%;
    position: absolute;
    top: 50%;
    left: 50%;
    // background-color: red;
    transform: translate(-50%, -50%);
  }
  .sch-input {
    width: 60%;
    height: 42px;
    line-height: 40px;
    outline: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 0 20px;
    border: 2px solid #1c66ad;
    box-shadow: 0 0 5px #ccc;
  }
  .sch-btn {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0 0 5px #ccc;
    color: #fff;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    background-color: #ccc;
    display: inline-block;
    cursor: pointer;
    background-color: #1c66ad;
    &:hover {
      background-color: #1c66ad;
    }
  }
  .sch-close {
    font-size: 50px;
    color: #fff;
    position: absolute;
    right: 50px;
    top: 50px;
    &:hover {
      cursor: pointer;
      color: red;
    }
  }
}
@media screen and (max-width: 1024px) {
  .content {
    width: 100% !important;
  }
}

.spanner {
  width: 100vw;
  height: 100vh;
  img {
    width: 100% !important;
    height: 100% !important;
  }
  .slide-item {
    height: 100%;
  }
  .carousel-inner {
    height: 100%;
  }
}
@media screen and(max-width: 1024px) {
  .spanner {
    height: 500px;
  }
  .slide-item {
    .carousel-caption {
      h3 {
        font-size: 14px !important;
      }
    }
  }
}
@media screen and(max-width: 768px) {
  .spanner {
    height: 300px;
  }
}
</style>
