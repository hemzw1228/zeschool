<template>
  <div>
    <NavBar @popSearch="handlePop" :navs="navs"></NavBar>
    <!-- 轮播图 -->
    <b-carousel
      id="carousel-1"
      :interval="40000"
      controls
      indicators
      fade
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      class="spanner"
    >
      <!-- Text slides with image -->
      <a href="#">
        <b-carousel-slide
          class="slide-item"
          :caption="msg"
          text="这是一个轮播的图，你可以点击查看详情"
          img-src="https://www.tsinghua.edu.cn/__local/C/7F/0B/6E39229562CE1533AC64C95135B_C61E574F_7D43A.jpg"
        >
        </b-carousel-slide>
      </a>
      <a href="#">
        <b-carousel-slide
          class="slide-item"
          caption="第二张"
          text="这是一个轮播的图，你可以点击查看详情"
          img-src="https://www.tsinghua.edu.cn/__local/E/A3/1E/994D9ED46CD5D7929628C16B795_E2104B13_56B61.jpg"
        >
        </b-carousel-slide>
      </a>
      <a href="#">
        <b-carousel-slide
          class="slide-item"
          caption="第三张"
          text="这是一个轮播的图，你可以点击查看详情"
          img-src="https://www.tsinghua.edu.cn/__local/F/18/D9/26956EC079FFCF0145957ED3163_C220831D_C3497.jpg"
        >
        </b-carousel-slide>
      </a>
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
    <Bottom></Bottom>
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
import Bottom from '~/components/common/Bottom.vue'
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
    let d = await $axios.$get('navbar/category')
    console.log(d)
    return { msg: d.msg, navs: d.data.slice(0, 8) }
  },

  components: {
    Special,
    School,
    Social,
    Bottom,
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
      alert(this.schTxt)
    }
  }
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
}
@media screen and(max-width: 768px) {
  .spanner {
    height: 200px;
  }
}
</style>
