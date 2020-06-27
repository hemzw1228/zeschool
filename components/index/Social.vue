<template>
  <div class="social-container">
    <div class="w14">
      <div class="social-content reveal-right">
        <div class="social-title">专题专栏</div>
        <div class="social-list">
          <div class="item" v-for="i in 4" :key="i">
            <a href="#" class="img-wrap">
              <img
                class="pic"
                src="https://www.hust.edu.cn/__local/5/50/D3/52377B0F139D2D2D6EAD8579894_7CEB1C94_91FD.png"
                alt=""
              />
            </a>
            <div class="p">
              <div class="title">
                <a href="#">新冠肺炎疫情dddddddd防控专题</a>
              </div>
              <div class="body">
                针对近期武汉发生的新冠肺炎疫情，华中科技大学及附属医院迅速行动，众志成城。学校坚决贯彻落实习近平总书记的重要指示精神，采取多项举措确保全校师生员工身体健康和生命安全，打赢这场抗击新型肺炎的攻坚战。
              </div>
            </div>
          </div>
        </div>
        <div class="social-more">
          <!-- <a href="#" class="read-more">更多</a> -->
          <a href="#" target="_blank"
            ><span class="more-txt"
              >查看更多<span class="iconfont icon-more-line more-icon"></span
            ></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
@media screen and(max-width: 1400px) {
  .w14 {
    width: 100% !important;
  }
}
// 大于1400剧中
.w14 {
  width: 1400px;
  margin: 0 auto;
  // background-color: pink;
}
// 小屏样式
@media screen and(max-width: 768px) {
  .w14 {
    padding: 0 20px;
  }
  .social-content {
    width: 100% !important;
    margin: 0 !important;
    .img-wrap {
      border: 0px !important;
    }
  }
  .social-list {
    flex-direction: column;
    .item {
      display: flex;
      width: 100% !important;
      padding: 25px;
      margin-bottom: 25px;

      .pic {
        height: 100%;
        width: 200px !important;
      }
      .p {
        width: 60%;
        padding: 0 !important;
        // margin-left: 25px;
        height: 100px !important;
        .body {
          max-height: 70px;
          overflow: hidden;
        }
      }
    }
    .item:nth-child(n + 3) {
      display: none !important;
    }
  }
  .social-title {
    font-size: 18px !important;
    padding: 20px 0 !important;
  }
  .social-more {
    margin: 0 !important;
    .more-txt {
      border: none !important;

      &:hover {
        border: none !important;
      }
    }
  }
}

// 大屏
.social-container {
  padding-bottom: 100px;
  box-sizing: content-box;
  //   height: 300px;
  background-color: #f5f5ff;
}

.social-content {
  //   background-color: pink;
  margin: 0 auto;
  width: 85%;
  height: 100%;
}
.social-list {
  display: flex;
  height: 100%;
  justify-content: space-between;
  .item {
    width: calc(23% - 30px);
    border: 1px solid #ccc;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    .img-wrap {
      display: block;
      padding: 5px;
      border-bottom: 2px solid #ccc;
    }
    .pic {
      width: 100%;
      height: 120px;
    }
    .p {
      // padding: 0px;
      // padding:0 10px;
      height: 250px;
      .title {
        font-size: 16px;
        padding: 10px 20px 10px 20px;
        // padding-bottom: 10px;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        a {
          color: #333;
          text-decoration: none;
          &:hover {
            color: #e85985;
          }
        }
      }
      .body {
        // margin-top: 5px;
        font-size: 15px;
        line-height: 2;
        text-align: left;
        // margin-bottom:10px;
        padding: 0 20px 0 20px;
      }
    }
    &:hover {
      opacity: 0.8;
    }
  }
}
.social-title {
  font-size: 28px;
  padding: 50px 0;
}
.social-more {
  margin: 50px 0 50px;
  height: 40px;
  line-height: 40px;
  a {
    font-size: 15px;
    text-decoration: none;
    // border: 1px solid #000;
    display: inline-block;
    // width: 200px;
    .more-txt {
      display: inline-block;
      // width: 120px;
      // background-color: #ccc;
      color: #fff;
      border-radius: 4px;
      padding: 0 20px;
      border: 1px solid #0e518b;
      color: #0e518b;
      &:hover {
        color: #e85985;
        border: 1px solid #e85985;
      }
    }
    .more-icon {
      margin-left: 5px;
      font-size: 15px;
    }
  }
}

.read-more {
  display: inline-block;
  font-size: 14px;
  width: 80px;
  height: 40px;
  // border: 1px solid #e85985;
  line-height: 40px;
  border-radius: 10px;
  text-decoration: none !important;
  color: #333;
  &:hover {
    color: #e85985;
  }
}
</style>
