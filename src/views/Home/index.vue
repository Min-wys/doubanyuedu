<template>
  <div v-if="startList[0]">
    <Banners />
    <div class="general-widget">
      <div class="section-container">
        <div class="author-count">
          <span class="digits">
            <strong class="digit">1</strong>
            <strong class="digit">1</strong>
            <strong class="digit">0</strong>
            <strong class="digit">3</strong>
            <strong class="digit">5</strong>
            <strong class="digit">0</strong>
          </span>
          <span>位作者正在</span>
          <span class="text-logo">豆瓣阅读</span>
          <span>写作</span>
        </div>
        <div class="links">
          <a href="" class="btn-contained">征文专区</a>
          <a href="" class="btn-contained">出版与改编</a>
        </div>
      </div>
    </div>
    <div class="widget-channel-outer">
      <div class="widget-channel-links">
        <router-link
          v-for="item in channelList"
          :key="item.id"
          :to="{
            name: 'channel',
            params: {
              id: item.id,
            },
            query: {
              title: item.title,
            },
          }"
          class="btn-link"
          >{{ item.title }}</router-link
        >
      </div>
    </div>
    <div class="section-outer">
      <HomeRecommend />
    </div>
    <!-- <div class="section-bottom">
      <div class="section-bottom-bgc"> -->
    <General :data="hotData" :title="'畅销作品'" />
    <General :data="weeklyList" :title="startList[0].data.title" />
    <General :data="recNewList" :title="startList[1].data.title" />
    <!-- </div>
    </div> -->
    <GridGroup :data="recentlyList_1" :title="startList[3].data.title" />
    <GridGroup :data="recentlyList_2" :title="startList[4].data.title" />
    <Like :data="likeList" @click="refreshLikeList" />
  </div>
</template>

<script>
import Banners from "../../components/Banners";
import General from "../../components/General";
import HomeRecommend from "../../components/HomeRecommend";
import GridGroup from "../../components/GridGroup";
import Like from "../../components/Like";
import formatArray from "../../utils/formatArray";
export default {
  name: "Home",
  data() {
    return {
      startList: [] /* 首页起始数据 */,
      weeklyList: [] /* 每周精品数据 */,
      recNewList: [] /* 签约新作数据 */,
      recentlyList_1: [] /* 最近更新数据1 */,
      recentlyList_2: [] /* 最近更新数据2 */,
      likeList: [] /* 猜你喜欢数据 */,
      index: 0 /* 用于刷新猜你喜欢数据 */,

      hotData: [] /* 畅销作品数据 */,
      channelList: [],
    };
  },
  methods: {
    toGeneral() {
      this.$router.push({
        name: "channel",
        params: {
          id: 2,
        },
      });
      this.isShow = false;
    },
    /* 获取畅销作品数据 */
    async getHotData() {
      const result = await this.$API.doubanhome.getHomeData(
        [
          "159180145",
          "162149898",
          "128867352",
          "130752195",
          "163272764",
          "134378693",
          "159433801",
          "108342413",
          "163020030",
          "162423377",
          "162680490",
          "161026920",
          "149790273",
          "160636271",
          "161315595",
          "166538175",
          "158503247",
          "161379402",
          "162794639",
          "165006550",
          "153142997",
          "159284229",
          "159420541",
          "158000997",
        ],
        "\n          query getWorksList($worksIds: [ID!]) {\n            worksList(worksIds: $worksIds) {\n              \n      id\n      \n    \n    title\n    cover\n    url\n    isBundle\n    coverLabel\n  \n    \n    url\n    title\n  \n    \n    author {\n      name\n      url\n    }\n    origAuthor {\n      name\n      url\n    }\n  \n    \n  abstract\n  authorHighlight\n  editorHighlight\n\n    \n    isEssay\n    \n    ... on EssayWorks {\n      favorCount\n    }\n  \n    \n    \n    averageRating\n    ratingCount\n    url\n  \n  \n  \n    kinds { \n    name @skip(if: true)\n    shortName @include(if: true)\n    id\n   }\n    highlightTags { name }\n    \n  \n    \n            }\n          }\n        "
      );
      this.hotData = formatArray(result.data.data.worksList, 5);
    },
    /* 获取导航数据 */
    async getChannelList() {
      const channelList = await this.$API.home.getChannelList();
      this.channelList = channelList.data.worksList;
    },
    /* 封装获取数据函数 */
    async getHomeData(worksIds, query) {
      const result = await this.$API.doubanhome.getHomeData(worksIds, query);
      return result.data.data.worksList;
    },
    /* 请求猜你喜欢的数据 */
    getLikeData() {
      this.getHomeData(
        this.likeIds[this.index],
        "\n          query getWorksList($worksIds: [ID!]) {\n            worksList(worksIds: $worksIds) {\n              \n      id\n      \n    \n    title\n    cover\n    url\n    isBundle\n    coverLabel\n  \n    \n    url\n    title\n  \n    \n    author {\n      name\n      url\n    }\n    origAuthor {\n      name\n      url\n    }\n  \n    \n  abstract\n  authorHighlight\n  editorHighlight\n\n    \n    isEssay\n    \n    ... on EssayWorks {\n      favorCount\n    }\n  \n    \n    \n    averageRating\n    ratingCount\n    url\n  \n  \n  \n    kinds { \n    name @skip(if: true)\n    shortName @include(if: true)\n    id\n   }\n    highlightTags { name }\n    \n  \n    \n            }\n          }\n        "
      ).then((res) => {
        this.likeList = res;
      });
    },
    /* 刷新猜你喜欢的数据 */
    refreshLikeList() {
      this.index++;
      if (this.index > 99) {
        this.index = 0;
      }
      this.getLikeData();
    },
  },
  async mounted() {
    this.getHotData();
    this.getChannelList();
    /* 获取首页起始数据 */
    const re = await this.$API.doubanhome.getStart();
    this.startList = re.data.list;
    /* 处理猜你喜欢的数据，每次只请求5条数据 */
    /* 将数据保存在this上 */
    this.likeIds = formatArray(this.startList[5].data.worksIds, 5);
    this.getLikeData();
    /* 获取每周精品数据 */
    this.getHomeData(
      this.startList[0].data.worksIds,
      "\n          query getWorksList($worksIds: [ID!]) {\n            worksList(worksIds: $worksIds) {\n              \n      id\n      \n    \n    title\n    cover\n    url\n    isBundle\n    coverLabel\n  \n    \n    url\n    title\n  \n    \n    author {\n      name\n      url\n    }\n    origAuthor {\n      name\n      url\n    }\n  \n    \n  abstract\n  authorHighlight\n  editorHighlight\n\n    \n    isEssay\n    \n    ... on EssayWorks {\n      favorCount\n    }\n  \n    \n    \n    averageRating\n    ratingCount\n    url\n  \n  \n  \n    kinds { \n    name @skip(if: true)\n    shortName @include(if: true)\n    id\n   }\n    highlightTags { name }\n    \n  \n    \n            }\n          }\n        "
    ).then((res) => {
      this.weeklyList = formatArray(res, 5);
    });
    /* 获取签约新作数据 */
    this.getHomeData(
      this.startList[1].data.worksIds,
      "\n          query getWorksList($worksIds: [ID!]) {\n            worksList(worksIds: $worksIds) {\n              \n      id\n      \n    \n    title\n    cover\n    url\n    isBundle\n    coverLabel\n  \n    \n    url\n    title\n  \n    \n    author {\n      name\n      url\n    }\n    origAuthor {\n      name\n      url\n    }\n  \n    \n  abstract\n  authorHighlight\n  editorHighlight\n\n    \n    isEssay\n    \n    ... on EssayWorks {\n      favorCount\n    }\n  \n    \n    \n    averageRating\n    ratingCount\n    url\n  \n  \n  \n    kinds { \n    name @skip(if: true)\n    shortName @include(if: true)\n    id\n   }\n    highlightTags { name }\n    \n  \n    \n            }\n          }\n        "
    ).then((res) => {
      this.recNewList = formatArray(res, 5);
    });
    /* 获取最近更新数据1 */
    this.getHomeData(
      this.startList[3].data.worksIds,
      "\n          query getWorksList($worksIds: [ID!]) {\n            worksList(worksIds: $worksIds) {\n              id \n    \n    title\n    cover\n    url\n    isBundle\n    coverLabel\n  \n    \n    url\n    title\n  \n    ... on ColumnWorks {\n      lastUpdateTime\n    }\n  \n            }\n          }\n        "
    ).then((res) => {
      this.recentlyList_1 = res;
    });
    /* 获取最近更新数据2 */
    this.getHomeData(
      this.startList[4].data.worksIds,
      "\n          query getWorksList($worksIds: [ID!]) {\n            worksList(worksIds: $worksIds) {\n              id \n    \n    title\n    cover\n    url\n    isBundle\n    coverLabel\n  \n    \n    url\n    title\n  \n    ... on ColumnWorks {\n      lastUpdateTime\n    }\n  \n            }\n          }\n        "
    ).then((res) => {
      this.recentlyList_2 = res;
    });
  },
  components: {
    // Header,
    Banners,
    General,
    HomeRecommend,
    GridGroup,
    Like,
  },
};
</script>

<style lang="less" scoped>
.section-outer {
  // width: 1200px;
  // min-width: 1200px;
  max-width: 1200px;
  margin: 0 auto;
}
// .section-bottom {
//   background-color: #f8f9f9;
// }
// .section-bottom-bgc {
//   width: 1200px;
//   min-width: 1200px;
//   margin: 0 auto;
// }
.general-widget {
  height: 30px;
  padding: 30px 0;
  background-color: #f8f9f9;
}
.section-container {
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
}
.author-count {
  font-size: 13px;
  display: flex;
  align-items: center;
}
.digits {
  margin-right: 4px;
  // display: flex;
}
.digit {
  display: inline-block;
  position: relative;
  width: 23px;
  height: 26px;
  margin-right: 4px;
  background: #fff;
  color: #3db192;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  transform: translateY(-1px);
}
.digit::before {
  position: absolute;
  top: 0;
  right: -100%;
  bottom: -100%;
  left: 0;
  border: 1px solid #e4ecee;
  content: "";
  transform: scale(0.5);
  transform-origin: 0 0;
  pointer-events: none;
}
.text-logo {
  background: url("../../assets/image/text-grayblack50.svg") center/contain
    no-repeat;
  color: transparent;
  width: 57px;
  height: 13px;
  display: inline-block;
  margin: 0 3px;
}
.btn-contained {
  display: inline-block;
  border: none;
  border-radius: 4px;
  background: #fff;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  color: #333;
  padding: 0 14px;
  height: 30px;
  font-size: 13px;
  line-height: 30px;
  margin-left: 8px;
}
.widget-channel-outer {
  background-color: #f8f9f9;
}
.widget-channel-links {
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  box-sizing: content-box;
  margin-right: auto;
  margin-left: auto;
  padding-right: 60px;
  padding-left: 60px;
  max-width: 1200px;
}
.btn-link {
  flex: 1;
  margin: 0 8px;
  height: 60px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 60px;
  display: inline-block;
  border: none;
  border-radius: 4px;
  background: #fff;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  color: #333;
  padding: 0 20px;
}
.widget-channel-container {
  background-color: #f8f9f9;
}
</style>
