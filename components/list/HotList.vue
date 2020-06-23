<template>
  <div class="list-wrapper">
    <div class="top-title">
      <span><b-icon-newspaper ></b-icon-newspaper></span>
      近期热点
    </div>
    <ul class="news-list">
      <li
        class="list-item"
        v-for="item in items"
        :key="item"
        style="text-align:left"
      >
        <div class="item-info" style="text-align:left">
          <span class="item-date">
            <b-icon-clock  class="clock-icon"></b-icon-clock>2020.06.20</span
          >
          <span><b-icon-eye class="eye-icon"></b-icon-eye>999</span>
        </div>
        <div class="item-title" style="text-align:left">
          <a href="#">过勇赴浙江访问并看望慰问校友</a>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { BIconNewspaper,BIconEye,BIconClock } from 'bootstrap-vue'
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5]
    }
  },
  components: {
    BIconNewspaper,
    BIconEye,
    BIconClock
  }
}
</script>

<style lang="less" scoped>
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

.list-item {
  text-align: left !important;
  border-bottom: 1px dotted #bababa;
  padding: 1em 0;
  font-size: 13px;
  .item-info {
    color: #999;
    .clock-icon {
      color: #bd2980;
      font-size: 14px;
      margin: 0 5px;
    }
    .eye-icon {
      font-size: 15px;
      margin: 0 5px 0 10px;
    }
  }
  .item-title {
    text-align: left;
    a {
      color: #555;
      text-decoration: none;
      &:hover {
        color: #bd2980;
      }
    }
  }
}
</style>
