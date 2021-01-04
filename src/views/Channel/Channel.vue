<template>
  <div class="channelOuter">
    <!-- 头部外面页面 -->
    <div class="containerOuter">
      <div class="container">
        <!-- 头部页面 -->
        <div class="containerHeader">
          <div class="containerHeaderTitle">
            <div class="containerHeaderText">完本频道</div>
            <div class="containerHeaderRight">
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
              <div class="swiper-slide">
                <img src="../../assets/Chnnel/10037.jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="../../assets/Chnnel/9880.jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="../../assets/Chnnel/9895.jpg" alt="" />
              </div>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>
            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
          </div>
        </div>
        <!-- 推荐模块 -->
        <Recommend />
      </div>
    </div>
  </div>
</template>

<script>
// 引入swiper轮播图
import "swiper/swiper-bundle.css";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay]);

import Recommend from "../../components/Recommend";
export default {
  name: "Channel",
  components: {
    Recommend,
  },
  mounted() {
    this.Swiper = new Swiper(this.$refs.swiper, {
      loop: true,
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
  },
};
</script>

<style lang="less" scoped>
.channelOuter {
  width: 100%;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.swiper-container {
  width: 100%;
  height: 150px;
  margin-bottom: 20px;
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
