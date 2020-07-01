// 接受props:['navs']
<template>
  <div>
    <!-- 二级响应式导航条 -->
    <b-navbar
      toggleable="lg"
      :class="['nav-default ', navBarFixed !== false ? 'nav-fix' : '']"
      type="dark"
      print
    >
      <!-- <b-navbar-brand class="top-logo" href="#"
        ><img src="../assets/img/logo.png" alt=""
      /></b-navbar-brand> -->
      <a
        :class="['logo ', navBarFixed !== false ? 'logo-fix' : '']"
        href="#"
      ></a>
      <b-icon-search
        class="h3 text-white m-search"
        @click="handleSearch"
      ></b-icon-search>
      <b-navbar-toggle
        target="sidebar-2"
        class="tog-btn"
        v-b-toggle.sidebar-2
      ></b-navbar-toggle>
      <ul class="mzw-nav d-none  d-lg-flex   ">
        <li v-for="nav in navs" :key="nav.id">
          <router-link :to="getToUrl(nav)" class="fnav-a">{{
            nav.name
          }}</router-link>
          <ul class=" mw-subnav">
            <li v-for="item in nav.children" :key="item.id">
              <router-link
                :to="{
                  path: '/' + nav.navUrl + '/' + item.navUrl,
                  query: { id: item.id }
                }"
                >{{ item.name }}</router-link
              >
              <!-- <a :href="'/'+nav.navUrl+'/'+item.navUrl">{{item.name}}</a> -->
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
          <template v-for="nav in navs">
            <el-submenu
              v-if="nav.children.length != 0"
              :index="nav.navUrl"
              :key="nav.id"
            >
              <template slot="title">
                
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
  </div>
</template>

<script>
import { BIconSearch } from 'bootstrap-vue'
export default {
  data() {
    return {
      navBarFixed: false
    }
  },
  props: ['navs'],
  components: {
    BIconSearch
  },
  mounted() {
    console.log('created')
    window.addEventListener('scroll', this.watchScroll)
  },
  methods: {
    watchScroll() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      //  当滚动超过 50 时，实现吸顶效果
      //   console.log(scrollTop)
      if (scrollTop > 10) {
        this.navBarFixed = true
      } else {
        this.navBarFixed = false
      }
    },
    handleSearch() {
      this.$emit('popSearch', true)
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

@media screen and(max-width: 1500px) {
  .fnav-a {
    width: 100px !important;
  }
}
@media screen and(max-width: 1200px) {
  .fnav-a {
    width: 80px !important;
  }
}
@media screen and(max-width:768px ) {
  .nav-default {
    height: 70px !important;
  }
  .logo {
    width: 150px !important;
  }
}
.tog-btn {
  padding: 0;
  margin-right: 30px;
}
.logo {
  display: inline-block;
  width: 260px;
  height: 55px;
  background: url(~assets/img/logo.png) no-repeat center center;
  background-size: contain;
  // margin-left: 100px;
}
.logo-fix {
  // background-size:200px;
  // background-position: 50%;
}
.top-logo {
  padding-left: 50px;
  display: inline-block;
  width: 100px;
  height: 100%;
  img {
    height: 100%;
  }
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

.mzw-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  justify-content: flex-end;
  margin-right: 25px;
  height: 50px;
  li {
    float: left;
    // background-color: #666;
    a {
      font-size: 15px;
      display: block;
      text-decoration: none;
      width: 150px;
      height: 50px;
      line-height: 50px;
      color: #fff;
      border-left: 1px solid #000;
      transition: all 0.5s;
      &:hover {
        color: #272727;
        background-color: @cor_li;
      }
    }
    .mw-subnav {
      display: none;
    }
    &:hover {
      a {
        width: 150px !important;
      }
      .mw-subnav {
        transition: all 0.5s;
        display: flex;
        position: absolute;
        z-index: 999;
        flex-direction: column;
        background-color: @cor_drop_ul;
        a {
          // background-color: rgba(1, 41, 77, 0.8);
          &:hover {
            color: rgb(39, 39, 39);
          }
        }
      }
    }
  }
}

nav.nav-default {
  position: absolute;
  // top:30px;
  height: 100px;
  z-index: 999;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
}

nav.nav-fix {
  position: fixed !important;
  top: 0 !important;
  z-index: 999;
  // background: #185187;
  background: rgba(24, 81, 135, 0.9);
  width: 100%;
  height: 60px;
}
.m-search {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.side-bar-nav {
  .mini-nav {
    .nav-item {
      height: 30px;
      // background-color:#0e518b;
      // background-color: #ccc;
      // border-top: 1px dotted #000;
      a {
        display: block;
        color: #333;
        text-decoration: none;
        line-height: 30px;
        font-size: 18px;
        &:hover {
          color: #e85985;
        }
      }
    }
  }
}
</style>
