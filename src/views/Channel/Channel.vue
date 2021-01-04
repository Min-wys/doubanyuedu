<template>
  <div class="channelOuter">
    <div class="container">
      <!-- 头部页面 -->
      <div>
        <div>完本频道</div>
        <p>书库</p>
        <p>排行</p>
        <!-- 轮播图 -->
        <div class="swiper-container" ref="swiper">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide"><img src="" alt=""></div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
          </div>
          <!-- If we need pagination -->
          <div class="swiper-pagination"></div>

          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>

          <!-- If we need scrollbar -->
          <div class="swiper-scrollbar"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入swiper轮播图
import "swiper/swiper-bundle.css";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay]);

export default {
  name: "Channel",
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
.swiper-container {
  width: 100%;
  height: 300px;
}
</style>
