<template>
  <div class="list-wrapper">
    <div class="list-title">相关新闻</div>
    <ul class="news-list">
      <li class="list-item">
        <div class="date-box"><span>20</span>2020-06</div>
        <div class="news-title"><a href="#">清华大学档案工作报告会举行</a></div>
      </li>
      <li class="list-item">
        <div class="date-box"><span>20</span>2020-06</div>
        <div class="news-title"><a href="#">清华大学档案工作报告会举行</a></div>
      </li>
      <li class="list-item">
        <div class="date-box"><span>20</span>2020-06</div>
        <div class="news-title"><a href="#">清华大学档案工作报告会举行</a></div>
      </li>
      <li class="list-item">
        <div class="date-box"><span>20</span>2020-06</div>
        <div class="news-title"><a href="#">清华大学档案工作报告会举行</a></div>
      </li>
      <li class="list-item">
        <div class="date-box"><span>20</span>2020-06</div>
        <div class="news-title"><a href="#">清华大学档案工作报告会举行</a></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.list-wrapper{
    // padding-bottom: 100px;
}
.list-title {
  color: #1c66ad;
  font-size: 18px;
  line-height: 50px;
  text-align: left;
  border-bottom: 2px solid #ccc;
  font-weight: bold;
}
.list-item {
  display: flex;
  padding: 15px;
  align-items: stretch;
  border-bottom: 1px solid #dcdcdc;
  //    align-items:flex-start;
  .date-box {
    height: 60px;
    width: 60px;
    // border: 1px solid #000;
    font-size: 13px;
    span {
      display: inline-block;
      width: 100%;
      font-size: 30px;
      line-height: 32px;
      color: #1c66ad;
      font-weight: bold;
    }
  }

  .news-title {
    //   border: 1px solid #000;
    padding: 10px 0 10px 20px;
    font-size: 12px;;
    a {
      color: #333;
      text-decoration: none;
      &:hover {
        color: #e85985;
      }
    }
  }
}
</style>
