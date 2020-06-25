<template>
  <div class="list-wrapper">
    <div class="list-title">综合新闻</div>
    <ul class="news-list">
      <li class="list-item" v-for="i in nlist" :key="i.id">
        <span class="date-box">2020-06-20</span>
        <div class="news-title">
          <nuxt-link :to="'/news/'+i.id">{{ i.title }}</nuxt-link>
        </div>
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
  props: ['nlist'],
  computed: {
    rows() {
      return 100
    }
  },
  methods: {
    getP(a) {
      alert(a)
    }
  },
  mounted() {
    console.log(this.nlist)
  }
}
</script>

<style lang="less" scoped>
.list-wrapper {
  // padding-bottom: 100px;
}
.news-list {
  margin-bottom: 50px;
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
      text-align: left;
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
