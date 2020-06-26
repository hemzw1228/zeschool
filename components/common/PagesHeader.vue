<template>
  <div class="wrapper">
    <div class="header">
      <div class="logo">
        <img src="~assets/img/logo2.png" alt="" />
      </div>
      <div class="search">
        <input type="text" class="search-txt" v-model="searchtxt" />
        <span class="search-btn" @click="handleSearch"
          ><b-icon-search></b-icon-search
        ></span>
      </div>
      <div class="top-link">
        <a href="#">学生</a>|<a href="#">教务</a>|<a href="#">图书馆</a>
      </div>
    </div>
    <b-navbar toggleable="md" class="nav-d" print type="dark">
      <b-navbar-toggle
        class="menu-btn"
        v-b-toggle.sidebar-2
        target="nav-collapse"
      ></b-navbar-toggle>
      <ul class="m-nav d-none  d-md-flex   ">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li v-for="nav in navs" :key="nav.id">
          <!-- 根据一级导航类型渲染导航页面（导航内容）|（导航列表页/**/child(0).navurl） -->
          <!-- <router-link :to="'/' + nav.id" @click.native="passid(nav.id)">{{ nav.name }}</router-link> -->
          <router-link
            :to="getToUrl(nav)"
            @click.native="passNav(nav, nav.children)"
            >{{ nav.name }}</router-link
          >
          <!-- <router-link :to="getToUrl(nav)" @click.native="passid(nav.id)">{{ nav.name }}</router-link> -->

          <!-- <router-link :to="{name:'fnav',params:{fnav:nav.url}}">{{ nav.name }}</router-link> -->
          <ul class=" mw-subnav">
            <li v-for="snav in nav.children" :key="snav.id">
              <router-link
                :to="'/' + nav.navUrl + '/' + snav.navUrl"
                @click.native="passNav(snav, nav.children)"
                >{{ snav.name }}</router-link
              >
            </li>
          </ul>
        </li>
      </ul>
      <b-sidebar right id="sidebar-2" class="side-bar-nav">
        <div class="px-3 py-2 nav-wrap">
          <ul class="mini-nav">
            <li class="nav-item"><a href="http://www.baidu.com">链接1</a></li>
            <li class="nav-item"><a href="#">链接1</a></li>
            <li class="nav-item"><a href="#">链接1</a></li>
            <li class="nav-item"><a href="#">链接1</a></li>
            <li class="nav-item"><a href="#">链接1</a></li>
            <li class="nav-item"><a href="#">链接1</a></li>
          </ul>
        </div>
      </b-sidebar>
    </b-navbar>
    <div class="page-img-wrapper">
      <div class="pages-img">
        <img
          src="https://www.tsinghua.edu.cn/newthu/newthu_cnt/images/employmenttop_03.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { BIconSearch } from 'bootstrap-vue'
export default {
  data() {
    return {
      searchtxt: 'aa'
    }
  },
  props: ['navs'],
  components: { BIconSearch },
  methods: {
    handleSearch() {
      alert(this.searchtxt)
    },
    mounted() {
      // console.log(this.navs)
    },
    passNav(nav, childrenNav) {
      // 存储的nav 和渲染的url 逻辑 一样

      if (nav.pid == 0 && nav.children[0]) {
        console.log('点了一级导航')
        console.log(nav.children[0])
        console.log(childrenNav)
        console.log('点击结束')

        this.$store.commit('passNav', nav.children[0])
        this.$store.commit('passChildrenNav',  childrenNav)
      } else {
        console.log('点了二级子导航')
        console.log(nav)
        console.log(childrenNav)
        console.log('点击结束')
        this.$store.commit('passNav', nav)
        this.$store.commit('passChildrenNav',  childrenNav)
      }
    },
    getToUrl(nav) {
      // 渲染一级导航的url
      // 有子导航的直接渲染为第一个孩子的url
      // 否则为内容一级导航内容页
      let a = '/' + nav.navUrl
      if (nav.children[0]) {
        // console.log("1111")
        // console.log((nav.children[0]).navUrl)
        a = a + '/' + nav.children[0].navUrl
      }
      return a
    }
  }
}
</script>

<style lang="less" scoped>
@cor_b5: #0e518b;
@cor_li: rgba(211, 208, 58, 0.8);
@cor_drop_ul: rgba(18, 75, 139, 0.514);
// 头部1400以下宽度全屏
@media screen and (max-width: 1400px) {
  .header {
    width: 100% !important;
    .logo {
      width: 30% !important;
    }
  }
}
// 头部768以下小屏导航条固定搜索隐藏
@media screen and (max-width: 768px) {
  .header {
    display: flex;
    flex-direction: column;
    .logo {
      margin-top: 50px;
      width: 300px !important;
      // height: 100%!important;
    }
  }

  .menu-btn {
    color: #fff;
  }
  .nav-d {
    background-color: #0e518b !important;
    position: fixed;
    color: #fff;
    top: 0;
  }
  .search {
    display: none;
  }
}

// 常规样式

.wrapper {
  margin: 0 auto;
  background-color: #fff;
}
.header {
  width: 1400px;
  margin: 0 auto;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 4px solid @cor_b5;
  height: 160px;
  position: relative;
  // border-bottom: 1px solid #ccc;
  .logo {
    width: 400px;
    img {
      width: 100%;
    }
  }
  .top-link {
    position: absolute;
    right: 0;
    top: 10px;
    a {
      color: #666;
      text-decoration: none;
      font-size: 14px;
      &:hover {
        color: #bd2980;
      }
    }
  }
}
.search {
  margin-top: 30px;
  margin-right: 115px;
  .search-txt {
    box-sizing: content-box;
    height: 33px;
    padding: 0 10px;
    line-height: 30px;
    border: 1px solid #1c66ad;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .search-btn {
    display: inline-block;
    margin-left: -5px;
    height: 35px;
    width: 35px;
    background-color: @cor_b5;
    vertical-align: top;
    line-height: 35px;
    font-size: 25px;
    color: #fff;
    cursor: pointer;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
nav.nav-d {
  color: #333;
  width: 100%;
  margin-bottom: 100px;
  padding: 0;
  margin: 0;
}
.navbar-nav > li:hover .dropdown-menu {
  display: block;
  margin-top: -10px;
}
.mzw .show li:hover .dropdown-menu {
  display: none;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.m-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  justify-content: center;
  background-color: @cor_b5;
  height: 50px;
  li {
    float: left;
    width: 150px;
    position: relative;
    a {
      display: block;
      text-decoration: none;
      // width: 8rem;
      height: 50px;
      line-height: 50px;
      color: #fff;
      border-left: 1px solid #ccc;
      &:hover {
        color: #272727;
        background-color: @cor_li;
      }
    }
    .mw-subnav {
      display: none;
    }
    &:hover {
      .mw-subnav {
        display: flex;
        position: absolute;
        z-index: 999;
        flex-direction: column;
        background-color: @cor_drop_ul;
        width: 100%;
        a {
          // background-color: rgba(1, 41, 77, 0.8);
          width: 100%;
          &:hover {
            color: rgb(39, 39, 39);
          }
        }
      }
    }
  }
}

.nav-tog {
  color: red;
}

//  通栏图片样式
.page-img-wrapper {
  background-color: #ccc;
}
.pages-img {
  margin: 0 auto;
  overflow: hidden;
  img {
    width: 100%;
  }
}
</style>
