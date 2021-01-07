<template>
  <div class="Brief">
    <div @click="toOneStory" style="cursor: pointer">
      <img v-lazy="book.cover" alt="" class="img" />
      <h4>{{ book.title }}</h4>
    </div>
    <a :href="'https://read.douban.com' + book.author[0].url">{{
      book.author[0].name
    }}</a>
    <p class="abstract">{{ book.editorHighlight || book.abstract }}</p>
    <div class="extra-info">
      <span v-if="book.averageRating">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          class="rating-star"
        >
          <path
            fill="#fa595f"
            d="M6.688 3.125l3.37.694-2.345 2.619L8.14 10 5.03 8.475 1.923 10l.428-3.563L0 3.82l3.37-.694L5.028 0z"
          ></path>
        </svg>
        <span>{{ book.averageRating * 2 }}</span>
      </span>
      <span v-else>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          class="rating-star"
        >
          <path
            fill="#DDD"
            d="M6.688 3.125l3.37.694-2.345 2.619L8.14 10 5.03 8.475 1.923 10l.428-3.563L0 3.82l3.37-.694L5.028 0z"
          ></path>
        </svg>
        <span>暂无评分</span>
      </span>
      <span class="separator"></span>
      <span :data-id="book.kinds[0].id">{{ book.kinds[0].shortName }}</span>
      <span class="separator"></span>
      <span v-if="book.highlightTags[0]">{{ book.highlightTags[0].name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Brief",
  props: ["book"],
  methods: {
    toOneStory() {
      this.$store.commit("REPLACE_BOOK", this.book);
      this.$store.commit("ISINBOOKSHELF", this.book.id);
      this.$router.push("/OneStory");
    },
  },
};
</script>

<style lang="less" scoped>
.Brief {
  // display: inline-block;
  position: relative;
  height: 100%;
}
.img {
  width: 120px;
  height: 176.5px;
  border-radius: 4px;
}
h4 {
  margin-top: 15px;
  margin-bottom: 4px;
  font-size: 16px;
}
.abstract {
  /* 设置文本超出三行隐藏 */
  display: -webkit-box;
  /* 文本行排列方向 */
  -webkit-box-orient: vertical;
  /* 设置几行之后出现溢出省略号 */
  -webkit-line-clamp: 3;
  overflow: hidden;
  margin-top: 4px;
  margin-bottom: 8px;
}
.extra-info {
  position: absolute;
  bottom: 0;
}
.separator {
  width: 1px;
  height: 10px;
  display: inline-block;
  margin: 0 10px;
  background: gray;
  opacity: 0.5;
  vertical-align: -1px;
}
</style>
