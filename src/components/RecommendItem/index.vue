<template>
  <div class="reco">
    <div class="recoImg" @click="toOneStory">
      <img v-lazy="recommendItem.cover" alt="" />
    </div>
    <div class="info">
      <h4 class="title">{{ recommendItem.title }}</h4>
      <p>{{ recommendItem.author[0].name }}</p>
      <div class="abstract">
        {{ recommendItem.editorHighlight }}
      </div>
      <div class="rec-tags">家庭故事</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendItem",
  props: ["recommendItem"],
  methods: {
    toOneStory() {
      this.$store.commit("REPLACE_BOOK", this.recommendItem);
      this.$store.dispatch("ISINBOOKSHELF", this.recommendItem.id);
      this.$router.push("/OneStory");
    },
  },
};
</script>

<style lang="less" scoped>
.reco {
  display: flex;
  box-sizing: border-box;
  padding: 20px;
  width: 50%;
  line-height: 1;
  height: 205px;
  position: relative;
  .recoImg {
    width: 110px;
    height: 165px;
    margin-right: 15px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    width: 260px;
    height: 165px;
    .title {
      font-size: 24px;
    }
    p {
      color: #a6a6a6;
      margin-top: 10px;
    }
    .rec-tags {
      position: absolute;
      bottom: 20px;
      margin-right: 5px;
      padding: 2px 3px;
      border-radius: 0 2px 2px 2px;
      color: white;
      font-size: 12px;
      line-height: 1;
      background-color: #f26c98;
    }
    .abstract {
      margin: 20px 30px 0 0;
      padding: 4px 15px;
      font-size: 14px;
      line-height: 1.5;
      overflow: hidden;
      position: relative;
      &::after {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 5px;
        height: 10px;
        border-right: 1px solid #a6a6a6;
        border-bottom: 1px solid#a6a6a6;
        content: "";
      }
      &::before {
        position: absolute;
        width: 5px;
        height: 10px;
        border-top: 1px solid#a6a6a6;
        border-left: 1px solid#a6a6a6;
        content: "";
        top: 0;
        left: 0;
      }
    }
  }
}
</style>
