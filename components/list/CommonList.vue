<template>
  <div class="list-wrapper">
    <div class="list-title">综合新闻</div>
    <ul class="news-list">
      <li class="list-item" v-for="i in 20" :key="i">
        <span class="date-box">2020-06-20</span>
        <div class="news-title"><a href="#">清华大学档案工作报告会举行</a></div>
      </li>
    </ul>
    <b-pagination
      @change="getP"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: [1, 2, 3, 4, 5]
    }
  },
  computed: {
    rows() {
      return 100
    }
  },
  methods: {
    getP(a) {
      alert(a)
    }
  }
}
</script>

<style lang="less" scoped>
.list-wrapper {
  // padding-bottom: 100px;
}
.list-title {
  color: #1c66ad;
  font-size: 25px;
  line-height: 50px;
  text-align: left;
  border-bottom: 2px solid #ccc;
  font-weight: bold;
}
.list-item {
  display: flex;
  border-bottom: 1px solid #dcdcdc;
  justify-content: space-between;
  padding: 15px 5px;
  .date-box {
    font-size: 13px;
    order: 1;
    span {
      color: #1c66ad;
    }
  }

  .news-title {
    text-align: left;
    font-size: 15px;
    flex: 1;
    a {
      display: inline-block;
      width: 100%;
      color: #333;
      text-decoration: none;
      &:hover {
        color: #e85985;
      }
    }
  }
  &:hover {
    background: #fff;
  }
}
</style>
