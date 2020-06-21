<template>
  <div class="wrapper">
    <div class="top-title">
      <span><b-icon icon="newspaper"></b-icon></span>
      最新新闻
    </div>
    <div class="top-img">
      <a href="#">
        <img
          src="https://news.tsinghua.edu.cn/__local/2/EC/9F/5F907AFB724314398B708BD2107_C90E2F53_5E805.jpg"
          alt=""
        />
        <span class="img-title">清华大学档案工作报告会举行</span>
      </a>
    </div>
    <ul class="line-list">
      <li class="line-item" v-for="item in items" :key="item">
        <div class="time ">
          <i class="arrow "><em></em></i>
          <code class="now"></code>
          6.20
        </div>
        <div class="title">
          <a href="#">清华大学档案工作报告会举行</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  padding-top: 20px;
}

.top-img {
  box-sizing: border-box;
  position: relative;
  margin: 10px;
  img {
    width: 100%;
  }
  .img-title {
    position: absolute;
    display: block;
    bottom: 0px;
    padding: 10px;
    // border: 1px solid #000;
    width: 100%;
    color: #fff;
    background: #31263c;
    opacity: 0.7;
  }
  a:hover {
    opacity: 0.9;
  }
}
.line-list {
  font-size: 12px;
  text-align: left;
  border-left: 1px solid #bfc3c4;
  margin: 25px 0 0 10px;
  padding: 0 0 0 25px;
  .time {
    border: 1px solid #bfc3c4;
    background: #fff;
    padding: 0 8px;
    position: relative;
    display: inline-block;
    line-height: 24px;
    .arrow {
      border-color: transparent;
      border-style: solid;
      border-width: 8px;
      display: block;
      height: 0;
      position: absolute;
      width: 0;
      border-right-color: #bfc3c4;
      border-left-width: 0;
      left: -8px;
      margin-top: -8px;
      top: 50%;
      em {
        border-color: transparent;
        border-style: solid;
        border-width: 8px;
        display: block;
        height: 0;
        position: absolute;
        width: 0;
        border-right-color: #fff;
        border-left-width: 0;
        top: -8px;
        left: 1px;
      }
    }
    code {
      position: absolute;
      width: 9px;
      height: 9px;
      background: #fff;
      border: 1px solid #bfc3c4;
      border-radius: 11px;
      left: -32px;
      top: 50%;
      margin-top: -5px;
    }
  }
  .title {
    padding: 10px 0 15px;
    a {
      color: #333;
      text-decoration: none;
      &:hover {
        color: #e85985;
      }
    }
  }
}
.top-title {
  text-align: left;
  padding-bottom: 20px;
  border-bottom: 2px solid #d6d6d6;
  font-size: 18px;
  line-height: 36px;
  margin-bottom: 20px;
  color: #bd2980;
  font-weight: bold;
  span {
    color: #fff;
    height: 36px;
    width: 36px;
    display: inline-block;
    text-align: center;
    font-size: 24px;
    margin-right: 10px;
    background-color: #bd2980;
    // vertical-align: center;
  }
}
.now {
  border-color: red !important;
}
</style>
