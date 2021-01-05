<template>
  <div>
    <!-- <Header />
    <Banner /> -->
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
    <div class="widget-channel-links">
      <router-link
        v-for="item in channelList"
        :key="item.id"
        :to="{
          name: 'channel',
          params: {
            id: item.id,
          },
          query:{
            title:item.title
          }
        }"
        class="btn-link"
        >{{ item.title }}</router-link
      >
      <!-- <router-link to="" class="btn-link">悬疑频道</router-link>
      <router-link to="" class="btn-link">女性频道</router-link>
      <router-link to="" class="btn-link">文艺频道</router-link>
      <router-link to="" class="btn-link">幻想频道</router-link>
      <router-link to="" class="btn-link">历史频道</router-link> -->
    </div>
    <HomeRecommend />
    <General :data="hotData" :title="'畅销作品'" />
    <General :data="hotData" :title="'每周精品'" />
    <General :data="hotData" :title="'签约新作'" />
  </div>
</template>

<script>
// import Channel from
// import Header from "../../components/Header";
import Banner from "../../components/Banner";
import General from "../../components/General";
import HomeRecommend from "../../components/HomeRecommend";
import formatArray from "../../utils/formatArray";
export default {
  name: "Home",
  data() {
    return {
      hotData: [],
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
  },
  async mounted() {
    const result = await this.$API.home.getHotData();
    this.hotData = formatArray(result.data.worksList, 5);
    const list = await this.$API.home.getChannelList();
    this.channelList = list.data.worksList;
  },
  components: {
    // Header,
    Banner,
    General,
    HomeRecommend,
  },
};
</script>

<style lang="less" scoped>
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
.widget-channel-links {
  background-color: #f8f9f9;
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
</style>
