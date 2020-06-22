<template>
  <div class="wrapper">
    <div class="header">
      <div class="logo">
        <img src="~assets/img/logo2.png" alt="" />
      </div>
      <div class="search">
        <input type="text" class="search-txt" v-model="searchtxt" />
        <span class="search-btn" @click="handleSearch"
          ><b-icon icon="search"></b-icon
        ></span>
      </div>
      <div class="top-link">
        <a href="#">学生</a>|<a href="#">教务</a>|<a href="#">图书馆</a>
      </div>
    </div>
    <b-navbar toggleable="md" class="nav-d" print>
      <b-navbar-toggle
        class="menu-btn"
        v-b-toggle.sidebar-2
        target="nav-collapse"
      ></b-navbar-toggle>
      <ul class="m-nav d-none  d-md-flex   ">
        <li>
          <router-link to="/a/a">a/a</router-link>
          <ul class=" mw-subnav">
            <li><a href="#">sub1</a></li>
            <li><a href="#">sub1</a></li>
            <li><a href="#">sub1</a></li>
            <li><a href="#">sub1</a></li>
          </ul>
        </li>
        <li>
          <router-link to="/a/b">a/b</router-link>
          <ul class=" mw-subnav">
            <li><a href="#">sub1</a></li>
            <li><a href="#">sub1</a></li>
            <li><a href="#">sub1</a></li>
            <li><a href="#">sub1</a></li>
          </ul>
        </li>
        <li>
          <router-link to="/a/c">a/c</router-link>
          <ul class=" mw-subnav">
            <li><a href="#">sub1</a></li>
            <li><a href="#">sub1</a></li>
            <li><a href="#">sub1</a></li>
            <li><a href="#">sub1</a></li>
          </ul>
        </li>
        <li>
          <a href="/a/d">a/d</a>
          <ul class=" mw-subnav">
            <li><a href="#">sub1</a></li>
            <li><a href="#">sub1</a></li>
            <li><a href="#">sub1</a></li>
            <li><a href="#">sub1</a></li>
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
export default {
  data() {
    return {
      searchtxt: 'aa'
    }
  },
  components: {},
  methods: {
    handleSearch() {
      alert(this.searchtxt)
    }
  }
}
</script>

<style lang="less" scoped>
@cor_b5: #0e518b;
@cor_li: rgba(211, 208, 58, 0.8);
@cor_drop_ul: rgba(18, 75, 139, 0.514);
// 头部1200以下宽度全屏
@media screen and (max-width: 1200px) {
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
  width: 1200px;
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
