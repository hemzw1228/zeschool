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
      <div class="top-link" v-if="links[0]">
        <a :href="links[0].url" target="_blank">{{ links[0].name }}</a
        >|<a :href="links[1].url" target="_blank">{{ links[1].name }}</a
        >|<a :href="links[2].url" target="_blank">{{ links[2].name }}</a>
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
          <!-- <router-link to="/">首页</router-link> -->
          <a href="/">首页</a>
        </li>
        <li v-for="nav in navs" :key="nav.id">
          <!-- 根据一级导航类型渲染导航页面（导航内容）|（导航列表页/**/child(0).navurl） -->
          <!-- <router-link :to="'/' + nav.id" @click.native="passid(nav.id)">{{ nav.name }}</router-link> -->
          <router-link :to="getToUrl(nav)">{{ nav.name }}</router-link>
          <!-- <router-link :to="getToUrl(nav)" @click.native="passid(nav.id)">{{ nav.name }}</router-link> -->

          <!-- <router-link :to="{name:'fnav',params:{fnav:nav.url}}">{{ nav.name }}</router-link> -->
          <ul class=" mw-subnav">
            <li v-for="snav in nav.children" :key="snav.id">
              <router-link :to="'/' + nav.navUrl + '/' + snav.navUrl">{{
                snav.name
              }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <b-sidebar right id="sidebar-2" class="side-bar-nav">
        <el-menu
          class="el-menu-vertical-demo"
          :router="true"
          background-color="#f8f9fa"
        >
          <el-menu-item index="/" route="/">首页</el-menu-item>
          <template v-for="nav in navs">
            <el-submenu
              v-if="nav.children.length != 0"
              :index="nav.navUrl"
              :key="nav.id"
            >
              <template slot="title">
                <!-- <i class="el-icon-menu"></i> -->
                <span>{{ nav.name }}</span>
              </template>
              <el-menu-item
                :index="snav.navUrl"
                :route="'/' + nav.navUrl + '/' + snav.navUrl"
                v-for="snav in nav.children"
                :key="snav.id"
                >{{ snav.name }}</el-menu-item
              >
            </el-submenu>
            <el-menu-item
              v-else
              :index="nav.navUrl"
              :route="'/' + nav.navUrl"
              :key="nav.id"
              >{{ nav.name }}</el-menu-item
            >
          </template>
        </el-menu>
      </b-sidebar>
    </b-navbar>
    <div class="page-img-wrapper">
      <div class="pages-img">
        <!-- {{fnav}} -->
        <!-- {{FN}} -->
        <!-- <img
          src="https://www.tsinghua.edu.cn/newthu/newthu_cnt/images/employmenttop_03.jpg"
          alt=""
        /> -->
        <img :src="navImg == '' ? defaultImg : navImg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { BIconSearch } from 'bootstrap-vue'
import axios from 'axios'
export default {
  data() {
    return {
      searchtxt: '',
      navImg: '',
      defaultImg:
        'https://www.tsinghua.edu.cn/newthu/newthu_cnt/images/employmenttop_03.jpg'
    }
  },
  props: ['navs', 'links', 'FN'],
  components: { BIconSearch },
  mounted() {
    // console.log('-------common mounted-------')
    // console.log(this.$store.state.fnav)
  },
  watch: {
    '$store.state.fnav': function(val) {
      // console.log('-----common watch-------')
      // console.log(val.coverImg)
      this.navImg = val.coverImg
    }
  },
  methods: {
    handleSearch() {
      if (this.searchtxt == '') {
        alert('请输入关键词')
        return
      }
      this.$router.push('/search?sctxt=' + this.searchtxt)
      this.searchtxt = ''
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
  .top-link {
    display: none !important;
  }
  .pages-img {
    display: none;
  }
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
    // position: absolute;
    color: #fff;
    right: 0;
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
  height: 250px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
