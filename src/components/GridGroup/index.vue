<template>
  <div class="gridgroup-outer">
    <div class="gridgroup-container">
      <div class="gridgroup-inner">
        <div class="title-section">
          <h2 class="gridgroup-title">{{ title }}</h2>
          <a href="" class="btn-link">查看更多</a>
        </div>
        <div class="gridgroup">
          <div
            class="gridItem"
            v-for="item in data"
            :key="item.id"
          >
            <div class="img-section">
              <a class="img-inner" >
                <img class="img" :src="item.cover" alt="" />
              </a>
            </div>
            <div class="item-info">
              <h4 class="item-title">
                <a href="" class="title-text">
                  {{ item.title }}
                </a>
              </h4>
              <div class="chapterCount">{{ item.lastUpdateTime }}更新</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridGroup",
  props: ["data", "title"],
  methods: {
    // toOneStory(book) {
    //   console.log(book);
    //   this.$store.commit("REPLACE_BOOK", book);
    //   this.$store.commit("ISINBOOKSHELF", book.id);
    //   this.$router.push("/OneStory");
    // },
  },
};
</script>

<style lang="less" scoped>
.gridgroup-outer {
  height: 411px;
  background-color: #f8f9f9;
  overflow: hidden;
  min-width: 1143px;
}
.gridgroup-container {
  margin: 60px 0;
}
.gridgroup-inner {
  height: 291px;
  width: 1143px;
  margin: 0 auto;
}
.title-section {
  display: flex;
  justify-content: space-between;
}
.gridgroup-title {
  color: #333;
  font-size: 24px;
}
.gridgroup {
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
}
.gridItem {
  margin: 10px;
  height: 39px;
  width: calc(((100% - 100px) / 5));
  display: flex;
}
.img-section {
  width: 20px;
  margin-right: 10px;
}
.img-inner {
  display: inline-block;
}
.img {
  height: 30px;
  border-radius: 4px;
}
.item-info {
  width: 120px;
}
.item-title {
  margin-bottom: 2px;
  height: 19px;
}
.title-text {
  width: 100%;
  display: inline-block;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #333;
  font-size: 16px;
}
.chapterCount {
  color: #777;
  line-height: 18px;
}
</style>
