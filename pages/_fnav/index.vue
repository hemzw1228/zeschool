<template>
  <div class="page">
    <!-- <PagesHeader></PagesHeader> -->
    <div class="news-container">
      <div class="r">
        <div class="info">
          <!-- <div class="crumb-nav">
            <b-breadcrumb :items="items" class="mcurmb"></b-breadcrumb>
          </div> -->
          <div class="info-title">hello</div>
          <div class="content">
              <button @click="go"></button>
            清华大学的前身清华学堂始建于1911年，1912年更名为清华学校。1928年更名为国立清华大学。1937年抗日战争全面爆发后南迁长沙，与北京大学、南开大学组建国立长沙临时大学，1938年迁至昆明改名为国立西南联合大学。1946年迁回清华园，设有文、法、理、工、农等5个学院、26个系。
            1952年全国高等学校院系调整后，清华大学成为一所多科性工业大学，重点为国家培养工程技术人才，被誉为“红色工程师的摇篮”。改革开放以来，清华大学逐步确立了建设世界一流大学的长远目标，进入了蓬勃发展的新时期。学校先后恢复或新建了理科、经济、管理和文科类学科，并成立了研究生院和继续教育学院。1999年，与中央工艺美术学院合并成立清华大学美术学院。2012年，原中国人民银行研究生部并入，成为清华大学五道口金融学院。在国家和社会的大力支持下，通过实施“211工程”“985工程”，开展“双一流”建设，清华大学在人才培养、科学研究、社会服务、文化传承创新、国际合作交流等方面都取得了长足进展。目前，清华大学共设20个学院、59个系，已成为一所具有理学、工学、文学、艺术学、历史学、哲学、经济学、管理学、法学、教育学和医学等11个学科门类的综合性、研究型大学。
            面向未来，清华大学将秉持“自强不息、厚德载物”的校训和“行胜于言”的校风，坚持“中西融汇、古今贯通、文理渗透”的办学风格和“又红又专、全面发展”的培养特色，弘扬“爱国奉献、追求卓越”传统和“人文日新”精神，以习近平新时代中国特色社会主义思想为指引，深入学习贯彻党的十九大精神，坚持正确方向、坚持立德树人、坚持服务国家、坚持改革创新，持续深入推进综合改革和“双一流”建设，努力在创建世界一流大学方面走在前列，为实现高等教育内涵式发展、建设高等教育强国作出新的更大的贡献。
          </div>
        </div>
      </div>
    </div>
    <!-- <Bottom></Bottom> -->
  </div>
</template>

<script>
// import Bottom from '~/components/common/Bottom.vue'
// import PagesHeader from '~/components/common/PagesHeader.vue'
export default {
  validate({ params }) {
    // 必须是number类型
    // return /^\d+$/.test(params.fnav)
    return true
  },
  data() {
    return {
      items: [
        {
          text: '首页',
          href: '#'
        },
        {
          text: '学校情况',
          href: '#'
        },
        {
          text: '学校介绍',
          active: true
        }
      ]
    }
  },
  asyncData({ params, error,redirect,$axios, route}) {
    // console.log(params)
    if (params.fnav == 'hello') {
      
      error({
          statusCode:404,
          message:'err'
      })
    }
    return {
      fnav: params.fnav,
      snav: params.snav
    }
  },
  //   props: ['fnav', 'snav'],
  // beforeRouteUpdate(to, from, next) {
  //   alert(1)
  // },
  components: {
    // Bottom,
    // PagesHeader
  },
  layout:'common',
  methods: {
    getdata() {
      alert(this.fnav)
    },
    go(){
        this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
// 1200以下隐藏左侧 只显示内容区域
@media screen and (max-width: 1200px) {
  .news-container {
    width: 100% !important;
  }
  .r {
    width: 100% !important;
  }
}

// 常规样式
.page {
  background-color: #f5f7f6;
}
.news-container {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  .r {
    // background-color: yellowgreen;
    width: 100%;
  }
}

// 内容栏
.mcurmb {
  margin: 0 !important;
  padding: 12px 0 0 12px !important;
  background-color: #f5f7f6;

  font-size: 13px;
  a {
    text-decoration: none;
    color: #666;
    // font-size: 13px;
    &:hover {
      color: #e85985;
    }
  }
}

.info-title {
  font-size: 28px;
  text-align: left;
  height: 66px;
  line-height: 66px;
  border-bottom: 1px solid #ccc;
  color: #0e518b;
  padding: 0 10px;
}

.content {
  line-height: 2;
  padding: 10px;
  text-align: left;
  font-size: 18px;
  margin-bottom: 100px;
}
</style>
