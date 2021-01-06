<template>
  <div>
    <Banner />
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
    <div class="section-bottom">
      <div class="section-bottom-bgc">
        <General :data="hotData" :title="'畅销作品'" />
        <General :data="hotData" :title="'每周精品'" />
        <General :data="hotData" :title="'签约新作'" />
      </div>
    </div>
    <GridGroup :data="draftList" :title="'「新家庭故事」主题征稿'" />
    <GridGroup :data="draftList" :title="'最近更新'" />
  </div>
</template>

<script>
// import Header from "../../components/Header";
import Banner from "../../components/Banner";
import General from "../../components/General";
import HomeRecommend from "../../components/HomeRecommend";
import GridGroup from "../../components/GridGroup";
import formatArray from "../../utils/formatArray";
export default {
  name: "Home",
  data() {
    return {
      hotData: [],
      channelList: [],
      draftList: [],
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
    /* 获取热门数据 */
    async getHotData() {
      const result = await this.$API.home.getHotData();
      this.hotData = formatArray(result.data.worksList, 5);
    },
    /* 获取推荐数据 */
    async getChannelList() {
      const channelList = await this.$API.home.getChannelList();
      this.channelList = channelList.data.worksList;
    },
    /* 获取数据 */
    async getDraftList() {
      const draftList = await this.$API.home.getDraftList();
      this.draftList = draftList.data.worksList;
    },
  },
  mounted() {
    this.getHotData();
    this.getChannelList();
    this.getDraftList();
  },
  components: {
    // Header,
    Banner,
    General,
    HomeRecommend,
    GridGroup,
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
.section-bottom {
  background-color: #f8f9f9;
}
.section-bottom-bgc {
  width: 1200px;
  min-width: 1200px;
  margin: 0 auto;
}
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
