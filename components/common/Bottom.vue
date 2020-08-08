<template>
  <b-container class="footer-container" fluid>
    <b-row class="footer-link" align-h="center">
      <b-col cols="12" md="8">
        <a
          class="link-item"
          :href="link.url"
          v-for="link in links"
          :key="link.id"
          target="_blank"
          >{{ link.name }}</a
        >
        <!-- <a class="link-item" href="#" v-for="link in 6" :key="link">{{links[0].name}}</a>  -->
      </b-col>
      <b-col cols="12" class="footer-share" md="2">
        <a class="share-item"
          ><span class="iconfont icon-weixin1" title="关注微信"></span>
          <img class="share-img" src="~/assets/img/weixin.jpg" alt="" />
        </a>
        <a class="share-item"
          ><span class="iconfont icon-weibo" title="关注微博"></span>
          <img class="share-img" src="~/assets/img/xinlang.png" alt="" />
        </a>
        <!-- <a href="#" class="share-item"
          ><span class="iconfont icon-weibo" title="关注微博"></span>
          <img class="share-img" src="~/assets/img/xinlang.png" alt="" />
        </a> -->
      </b-col>
    </b-row>
    <b-row class="footer-info" align-h="center">
      <b-col cols="12" md="10"
        ><span class="info-item">京ICP备05065075号-1</span>
        <span class="info-item">京ICP备05065075号-1</span>
        <span class="info-item">京ICP备05065075号-1</span>
        <span class="info-item">京ICP备05065075号-1</span></b-col
      >
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: ['links']
}
</script>
<style lang="less" scoped>
@media screen and (max-width: 768px) {
  .link-item {
    width: 33% !important;
    padding-bottom: 30px;
    border: 0px !important;
  }
  .info-item {
    width: 50% !important;
    padding-bottom: 10px;
  }

  .footer-share {
    justify-content: center;
    .share-item {
      // margin-top: 12px;
      float: none !important;
      display: inline-block;
      width: 15px;
      height: 15px;
    }
  }
}
.footer-container {
  // background-color: #302a29;
  background-color: #1e1e1e;
  // background-color: #37384e;
}
.footer-link {
  padding-top: 50px;
  padding-bottom: 45px;
  background-color: #01294c;
  // background-color: #0e518b;
  justify-content: space-between;
  .link-item {
    color: #ccc;
    // margin: 15px 0;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    width: 16%;
    display: inline-block;

    &:hover {
      opacity: 0.8;
      text-decoration: none;
    }
  }
}

.footer-share {
  margin-top: -12px;
  .share-item {
    cursor: pointer;
    position: relative;
    float: left;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #666;
    background: #fff;
    margin-right: 12px;
    text-decoration: none;
    color: #000;
    line-height: 50px;

    .iconfont {
      font-size: 28px;
    }
    .share-img {
      position: absolute;
      display: none;
      width: 120px;
      height: 120px;
      left: -40px;
      top: -130px;
      transition: all 1s;
    }
    &:nth-child(1):hover {
      background-color: #60b852;
      color: #fff;
    }
    &:nth-child(2):hover {
      background-color: #e62226;
      color: #fff;
    }
    &:nth-child(3):hover {
      background-color: #e62226;
      color: #fff;
    }
    &:nth-child(1):hover .share-img {
      display: block;
    }
    &:nth-child(2):hover .share-img {
      display: block;
    }
    &:nth-child(3):hover .share-img {
      display: block;
    }
  }
}

.footer-info {
  padding: 10px 0;
  .info-item {
    display: inline-block;
    // color: rgba(255,255,255,0.5);
    color: #999;
    width: 220px;
  }
}
</style>
