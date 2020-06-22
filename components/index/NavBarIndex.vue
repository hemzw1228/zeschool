// 接受props:['navs']
<template>
  <div>
    <!-- 二级响应式导航条 -->
    <b-navbar
      toggleable="md"
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
      <!-- <b-navbar-toggle v-b-toggle.sidebar-1></b-navbar-toggle> -->
      <ul class="mzw-nav d-none  d-md-flex   ">
        <li v-for="nav in navs" :key="nav.id">
          <router-link :to="'/' + nav.navUrl">{{ nav.name }}</router-link>
          <ul class=" mw-subnav">
            <li v-for="item in nav.children" :key="item.id">
              <a href="#">{{ item.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
      <b-sidebar id="sidebar-1" class="side-bar-nav">
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
    }
  }
}
</script>

<style lang="less" scoped>
@cor_b5: #0e518b;
@cor_li: rgba(211, 208, 58, 0.8);
@cor_drop_ul: rgba(18, 75, 139, 0.514);
.logo {
  display: inline-block;
  width: 260px;
  height: 55px;
  background: url(~assets/img/logo.png) no-repeat center center;
  background-size: contain;
  margin-left: 100px;
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
  margin-right: 8rem;
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
  right: 5rem;
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
