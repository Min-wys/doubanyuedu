<template>
  <div class="recommend">
    <el-carousel :autoplay="false">
      <div class="tab">重磅推荐</div>
      <el-carousel-item v-for="(channel, index) in channelList" :key="index">
        <div class="recommendItem">
          <RecommendItem
            v-for="item in channel"
            :key="item.id"
            :recommendItem="item"
          />
          <!-- <RecommendItem :recommendItem="channel[1]" /> -->
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import formatArray from "../../utils/formatArray";
import RecommendItem from "../RecommendItem";

export default {
  name: "",
  data() {
    return {
      channelList: [],
    };
  },
  async mounted() {
    const result = await this.$API.doubanhome.getHomeData(
      [
        "159646330",
        "163020030",
        "160040168",
        "164573151",
        "162142422",
        "158000997",
        "160100613",
        "161315595",
        "165872095",
        "163272764",
      ],
      "\n          query getWorksList($worksIds: [ID!]) {\n            worksList(worksIds: $worksIds) {\n              \n            id\n            \n    \n    title\n    cover\n    url\n    isBundle\n    coverLabel\n  \n    \n    url\n    title\n  \n    \n    author {\n      name\n      url\n    }\n    origAuthor {\n      name\n      url\n    }\n  \n    ... on WorksBase {\n      editorHighlight\n    }\n  \n          \n            }\n          }\n        "
    );
    this.channelList = formatArray(result.data.data.worksList, 4);
  },
  components: {
    RecommendItem,
  },
};
</script>

<style lang="less" scoped>
.el-carousel__item .recommendItem {
  display: flex;
  padding: 0 60px;
  padding-top: 50px;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
}
/deep/ .el-carousel__container {
  height: 460px;
  // background-color: red;
  position: relative;
}
.tab {
  position: absolute;
  top: 0;
  left: 5px;
  width: 80px;
  padding: 8px 12px;
  margin: 0 60px;
  border-radius: 0 0 2px 2px;
  background: #bb996d;
  color: white;
  font-size: 14px;
  line-height: 1;
  text-align: center;
  font-weight: bolder;
}
.recommendItem {
  margin-left: 0;
}
</style>
