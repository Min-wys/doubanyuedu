<template>
  <div class="channelOuter">
    <!-- <Header /> -->
    <!-- 头部外面页面 -->
    <div class="containerOuter">
      <div class="container">
        <!-- 头部页面 -->
        <div class="containerHeader">
          <div class="containerHeaderTitle">
            <div class="containerHeaderText">{{ title }}</div>
            <div class="containerHeaderRight" v-show="channelId === '1'">
              <div>
                <img
                  src="https://img3.doubanio.com/f/ark/e4f7f31dde34f5e840379dffc053ebf5f43c2b6b/pics/index-original/icon-library.svg"
                  alt=""
                />
                <p>书库</p>
              </div>
              <div>
                <img
                  src="https://img9.doubanio.com/f/ark/c2edda7026415f17cc53250e72d13ca85ea4a1f3/pics/index-original/icon-ranking-list.svg"
                  alt=""
                />
                <p>排行</p>
              </div>
            </div>
          </div>

          <!-- 轮播图 -->
          <div class="swiper-container" ref="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div
                class="swiper-slide"
                v-for="channelUrl in channelUrlList"
                :key="channelUrl.id"
              >
                <img v-lazy="channelUrl.url" alt="" />
              </div>
              <!-- <div
                class="swiper-slide"
              >
                <img src="../../assets/image/10136.jpg" alt="" />
              </div>
              <div
                class="swiper-slide"
              >
                <img src="../../assets/image/10137.jpg" alt="" />
              </div> -->
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>
            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
          </div>
        </div>
        <!-- 分块区域 -->
        <ul class="category" v-show="channelId === '1'">
          <li
            @click="
              $router.replace({
                name: 'Category',
                query: { tags: '言情小说' },
                params: { id: 1 },
              })
            "
          >
            言情小说
          </li>
          <li
            @click="
              $router.replace({
                name: 'Category',
                query: { tags: '女性小说' },
                params: { id: 2 },
              })
            "
          >
            女性小说
          </li>
          <li
            @click="
              $router.replace({
                name: 'Category',
                query: { tags: '悬疑小说' },
                params: { id: 3 },
              })
            "
          >
            悬疑小说
          </li>
          <li
            @click="
              $router.replace({
                name: 'Category',
                query: { tags: '科幻小说' },
                params: { id: 4 },
              })
            "
          >
            科幻小说
          </li>
        </ul>
      </div>
    </div>

    <div class="recommend">
      <!-- 推荐模块 -->
      <Recommend :channelId="channelId" />
    </div>

    <!-- 走马灯区域 -->
    <div class="general">
      <div class="generalInner" v-for="title in titleList" :key="title.id">
        <General :data="generalData" :title="title.title" />
      </div>
    </div>
  </div>
</template>

<script>
// 引入公共的走马灯
import General from "../../components/General";
import formatArray from "../../utils/formatArray";
// 引入swiper轮播图
import "swiper/swiper-bundle.css";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay]);

import Recommend from "../../components/Recommend";
export default {
  name: "Channel",
  components: {
    Recommend,
    General,
  },
  data() {
    return {
      generalData: [],
      channelId: "1",
      title: "",
      channelUrlList: [],
      titleList: [],
    };
  },
  // 放在beforeCreate中，能够在Recommend组件创建前得到最新的id值，去发送请求
  beforeMount() {
    this.channelId = this.$route.params.id;
  },
  async mounted() {
    // 轮播图区域
    this.Swiper = new Swiper(this.$refs.swiper, {
      loop: true,
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      autoplay: {
        // 自动轮播
        delay: 2000, // 轮播间隔时间
        disableOnInteraction: false, // 当用户点击下一页时，仍会开启自动轮播
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    // this.channelId = this.$route.params.id;
    this.title = this.$route.query.title;
    // 根据id的不同区获取不同的数据
    const result = await this.$API.chnnel.finishBoomData(this.channelId);
    this.generalData = formatArray(result.data.worksList, 5);
    // 获取图片数据
    const urlResult = await this.$API.chnnel.channelUrlList(this.channelId);
    this.channelUrlList = urlResult.data.worksList;
    this.titleList = urlResult.data.titleList;
  },
};
</script>

<style lang="less" scoped>
.channelOuter {
  width: 100%;
  margin-top: 35px;
  .recommend,
  .category {
    width: 1200px;
    margin: 0 auto;
  }
  .general {
    background-color: #f8f9f9;
  }
  .generalInner {
    width: 1320px;
    min-width: 1320px;
    margin: 0 auto;
  }
  // 分块区域
  .category {
    display: flex;
    margin-top: 30px;
    li {
      width: 25%;
      height: 50px;
      margin: 0 20px;
      border-radius: 4px;
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
      line-height: 50px;
      font-size: 20px;
      font-weight: bolder;
      text-align: center;
      &:hover {
        background-color: #389eac;
        color: white;
      }
    }
  }
}
.container {
  width: 1200px;
  min-width: 1200px;
  margin: 0 auto;
  padding-bottom: 30px;
}
.swiper-container {
  width: 100%;
  height: 150px;
  // margin-bottom: 20px;
  img {
    width: 100%;
    height: 100%;
  }
}
.containerOuter {
  // background-color:#d1dfe4;
  background-color: #f8f9f9;
}
.containerHeaderTitle {
  display: flex;
  padding-top: 40px;
  padding-bottom: 40px;
  line-height: 1;
  justify-content: space-between;
  .containerHeaderText {
    font-weight: normal;
    font-size: 30px;
  }
  .containerHeaderRight {
    width: 180px;
    height: 30px;
    display: flex;
    font-size: 13px;
    line-height: 30px;
    div:hover {
      background: #389eac;
      box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
      color: var(--white);
    }
    div {
      margin-left: 8px;
      display: flex;
      align-items: center;
      border-radius: 5px;
      padding: 0 8px;
      p {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 50px;
      }
      img {
        width: 17px;
        height: 16px;
      }
    }
  }
}
</style>
