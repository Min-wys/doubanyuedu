<template>
  <div class="lianzai">
    <div class="lianzai-bang">
      <!-- 连载标题 -->
      <h3>{{ name }}</h3>
      <p>{{ fullName }}</p>
    </div>
    <div class="lianzai-main" @mouseleave="changeshowid(-1)">
      <div v-for="item in list" :key="item.currentRank">
        <div
          class="ranking-small"
          v-show="item.currentRank !== showid"
          @mouseenter="changeshowid(item.currentRank)"
          :data-id="item.currentRank"
        >
          <!-- 书名 和作者的名字类型 -->
          <span class="ranking-number">{{ item.currentRank }} </span>
          <span class="book-title"> {{ item.works.title }}</span>
          <span class="book-type">
            {{ item.works.kinds[0].shortName }}
          </span>
        </div>
        <!-- 移动上去之后切换的内容 -->
        <div class="ranking-big" v-show="item.currentRank === showid">
          <div class="ranking-text">
            <p>
              <span class="number">{{ item.currentRank }}</span>
              <span class="title">{{ item.works.title }} </span>
            </p>
            <p class="writer">
              <a target="_blank">{{ item.works.author[0].name }}</a>
            </p>
            <p class="genre">
              <a>{{ item.works.kinds[0].shortName }} </a>
              <span class="string">| </span>
              <a v-if="item.works.highlightTags[0]">
                {{ item.works.highlightTags[0].name }}
              </a>
            </p>
          </div>
          <img src="./image/薄情人回收手册.jpg" />
        </div>
      </div>
    </div>
    <div class="details">
      <a
        href="https://read.douban.com/charts?type=unfinished_column&index=literary_fiction&dcm=chart-card-more&dcs=charts"
        target="_blank"
        >查看详情</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Zujian",
  data() {
    return {
      showid: 1,
      bigshow: true,
      list: [],
      fullName: "",
      name: "",
    };
  },
  methods: {
    changeshowid(id) {
      if (id === -1) {
        this.showid = 1;
        return;
      }
      this.showid = id;
    },
  },
  async mounted() {
    const Rankings = await this.$API.rankings.rankingsdata();
    (this.list = Rankings.data.list),
      (this.fullName = Rankings.data.fullName),
      (this.name = Rankings.data.name);
  },
};
</script>

<style lang="less" scoped>
.lianzai {
  width: 25%;
  margin-right: 50px;
  flex-shrink: 0;
}
.lianzai-bang {
  padding: 20px;
}
.lianzai-bang h3 {
  font-size: 20px;
  color: #bb996d;
}
.lianzai-bang p {
  color: #a6a6a6;
  margin-top: -9px;
  font-size: 12px;
}
.ranking-small {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
.ranking-big {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
}
.ranking-big img {
  width: 80px;
  height: 120px;
}
.ranking-number {
  flex-shrink: 0;
  color: #fa595f;
  font-size: 14px;
  font-weight: bold;
}
.book-title {
  width: 100%;
  padding: 0 10px;
  font-size: 16px;
  color: #333;
}

.book-type {
  flex-shrink: 0;
  font-size: 12px;
  color: #777;
}
.ranking-number p {
  color: #fa595f;
}
.ranking-text .number {
  flex-shrink: 0;
  color: #fa595f;
  font-size: 12px;
  font-weight: bold;
}
.ranking-text .title {
  width: 100%;
  padding: 0 10px;
  font-size: 14px;
  color: #333;
}
.ranking-text .writer {
  font-size: 12px;
  color: #777 !important;
  padding: 0 20px;
}
.ranking-text .genre {
  color: #777;
  font-size: 12px;
}
.ranking-text .genre a {
  text-decoration: none;
  padding: 0 20px;
}
.ranking-text a:hover {
  color: #389eac;
}
.ranking-text .genre .string {
  color: #ddd;
}
.details {
  width: 300px;
  height: 13px;
  font-size: 13px;
  color: #389eac;
  text-align: center;
  line-height: 1;
}
.details a {
  color: #389eac;
  text-decoration: none;
}
</style>
