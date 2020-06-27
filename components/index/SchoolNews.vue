<template>
  <div>
    <div class="school-container">
      <div class="w14">
        <!-- 校园人文 -->
        <div class="cul-container">
          <div class="cul-pic">
            <img
              src="https://www.pku.edu.cn/Uploads/Picture/2020/01/09/s5e16f6cb80581.jpg"
              alt=""
            />
          </div>
          <div class="cul-title">
            <a href="#" class="title-link">
              <div class="t-title reveal-left" >
                校园文化<span class="btn-more">>></span>
              </div>
            </a>
          </div>
          <div class="cul-desc">
            <div class="desc-img">
              <img
                src="https://www.pku.edu.cn/dat/img/7f6b6697a8af4bdab0dc6221201a3c5c.jpg"
                alt=""
              />
            </div>
            <div class="desc-content">
              <div class="desc-title">
                <a href="#"
                  >环境科学与工程学院陈忠明课题组发现大气颗粒物过氧化氢更重要来源</a
                >
              </div>
              <div class="desc-text">
                多相分配是大气氧化剂循环和颗粒物增长的重要途径，本文从大气过氧化物视角的新发现，有助于揭示大气细颗粒物生成和演变的新途径，有助于理解重霾污染天气下细颗粒物爆发式增长机理，为提高大气环境质量，遏制重污染事件发生的频率提供科技支撑。
              </div>
            </div>
          </div>
        </div>
        <!-- 校园活动专题 -->
        <b-row align-h="center" class="spec-list">
          <b-col order="2" cols="12" lg="6" class="spec-item reveal-left">
            <a href="#" class="img-a ">
              <b-img
                fluid-grow
                src="https://www.tsinghua.edu.cn/images/intothu-2_03.jpg"
              ></b-img>
              <span class="img-title">习近平总书记视察南开大学</span>
            </a>
          </b-col>
          <!-- 小屏首位 -->
          <b-col order="1" order-lg="3" cols="12" lg="6" class="spec-item ">
            <b-row no-gutters class="spec-item-right  reveal-right">
              <div class="spec-title">
                <a href="#" class="title-link">
                  <div class="t-title">
                    校园活动<span class="btn-more">>></span>
                  </div>
                </a>
              </div>
              <a href="#" class="img-a">
                <b-img
                  fluid-grow
                  src="https://www.tsinghua.edu.cn/images/pic4.jpg"
                ></b-img>
                <span class="img-title">习近平总书记视察南开大学</span>
              </a>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // scrollReveal:scrollReveal()
    }
  },
  mounted() {
    if (process.client) {
      // var s = require('scrollreveal')
     var s = require('scrollreveal')
     var scrollReveal = s.default()
      // console.log(s)
      scrollReveal.reveal('.reveal-left', {
        // 动画的时长
        duration: 1000,
        // 延迟时间
        delay: 200,
        // 动画开始的位置，'bottom', 'left', 'top', 'right'
        origin: 'left',
        // 回滚的时候是否再次触发动画
        reset: false,
        // 在移动端是否使用动画
        mobile: false,
        // 滚动的距离，单位可以用%，rem等
        distance: '500px',
        // 其他可用的动画效果
        opacity: 0.05,
        easing: 'ease-in-out',
        scale: 1
      })
      scrollReveal.reveal('.reveal-right', {
        // 动画的时长
        duration: 1000,
        // 延迟时间
        delay: 200,
        // 动画开始的位置，'bottom', 'left', 'top', 'right'
        origin: 'right',
        // 回滚的时候是否再次触发动画
        reset: false,
        // 在移动端是否使用动画
        mobile: false,
        // 滚动的距离，单位可以用%，rem等
        distance: '500px',
        // 其他可用的动画效果
        opacity: 0.05,
        easing: 'ease-in-out',
        scale: 1
      })
      // scrollReveal.clean('.t-title');
    }
  }
}
</script>

<style lang="less" scoped>
.cul-container {
  // display: flex;
  position: relative;
  //   margin: 0 auto;
  //   width: 69%;
  // height: 300px;
  // background-color: pink;
}
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
  padding: 0 40px;
}

@media screen and(max-width: 1024px) {
  .spec-item:nth-child(1) {
    margin-top: 20px !important;
  }
  // 1024屏 校园活动标题间距
  .spec-list {
    margin-top: 20px !important;
  }
  .spec-title {
    text-align: center;
    padding-bottom: 10px !important;
  }
  //   活动图片
  .img-a {
    img {
      height: 300px !important;
    }
  }
  //文化图片
  .cul-pic {
    img {
      width: 100%;
      height: 180px !important;
    }
  }
  .school-container {
    padding: 0 !important;
  }
  .cul-container {
    display: flex;
    flex-direction: column;
    // width: 100%;
  }
  .cul-desc {
    position: static !important;
    width: 100% !important;
  }
  // 1000下标题居中
  .cul-title {
    order: -1;
    text-align: center !important;
  }
}

@media screen and(max-width: 768px) {
  .w14 {
    padding: 0 20px;
  }
  //   活动图片
  .img-a {
    img {
      height: 200px !important;
    }
  }
  .cul-pic {
    img {
      width: 100%;
      height: 150px !important;
    }
  }

  //   .cul-container {
  //     width: 100%;
  //   }
  // 768 人文板块下标题间距
  .cul-title {
    padding: 16px !important;

    text-align: center;
    .t-title {
      font-size: 18px !important;
      color: #333;
    }
  }

  // 活动专题标题
  .spec-list {
    margin-top: 10px !important;
  }
  .spec-title {
    font-size: 18px !important;
    // font-weight: bold;
    text-align: center;
    padding-bottom: 10px !important;
  }
  .spec-item:nth-child(1) {
    //   margin-right: 0px !important;
    margin-top: 20px !important;
  }
  //   .spec-item:nth-child(2) {
  //     margin-left: 0px !important;
  //   }
}

.cul-title {
  padding: 40px;
  font-size: 28px;
  
  .t-title {
    font-size: 28px;
    color: #333;
    text-align: left;
  }
}
.title-link {
  text-decoration: none;
  color: #333;
  .t-title {
    // text-align:left;
    color: #333;
  }
  .btn-more {
    font-size: 12px;
    color: #333;
    text-decoration: none;
    padding-left: 10px;
  }
  &:hover {
    .t-title,
    .btn-more {
      color: #e85985;
    }
  }
}

.cul-pic {
  img {
    width: 100%;
    height: 250px;
  }
}

.cul-desc {
  display: flex;
  position: absolute;
  padding: 40px;
  height: 200px;
  width: 55%;
  background-color: #185187;
  // background-color: #124b92;
  bottom: 20px;
  right: 50px;
  .desc-img {
    margin-right: 20px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .desc-content {
    overflow: hidden;
    color: #aaa;
    .desc-title a {
      color: #fff;
      text-decoration: none;
      &:hover {
        // color: #feb447;
        color: #e85985;
      }
    }
    .desc-text {
      font-size: 13px;
      text-align: left;
    }
  }
}

.school-container {
  padding-top: 100px;
  padding-bottom: 100px;
  // background-color: #f5f5ff;
  background-color: #fff;
  .img-a {
    position: relative;
    display: block;
    text-decoration: none;
    color: #333;
    // height: 400px;
    &:hover {
      // color: blue;
    }
    .img-title {
      width: 100%;
      position: absolute;
      padding: 30px 30px 20px 30px;
      bottom: 0;
      left: 0;
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
      color: white;
      font-size: 20px;
      text-align: left;
    }
  }
}

.spec-list {
  margin-top: 100px;
}

.spec-item-right {
  flex-direction: column;
}
.spec-title {
  font-size: 30px;
  // font-weight: bold;
  text-align: center;
  padding-bottom: 100px;
}
// .spec-item {
//     padding: 10px;;
// }

.img-a {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 2px;
  overflow: hidden;
  box-shadow: 0 0 10px #999;
  img {
    height: 350px;
  }
  &:hover {
    opacity: 0.9;
  }
}
</style>
