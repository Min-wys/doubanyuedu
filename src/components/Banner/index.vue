<template>
  <div class="content">
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="./images/1.jpg" alt="" /></div>
        <div class="swiper-slide"><img src="./images/2.jpg" alt="" /></div>
        <div class="swiper-slide"><img src="./images/3.jpg" alt="" /></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination" id="sss"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
// https://swiperjs.com/get-started/
// Swiper6默认只有核心轮播图功能，其他功能没有
// 要使用其他功能，需要先加载
Swiper.use([Navigation, Pagination, Autoplay]);

import "swiper/swiper-bundle.min.css";
export default {
  name: "Banner",
  methods: {
    initSwiper() {
      this.swiper = new Swiper(this.$refs.swiper, {
        loop: true, // 循环模式选项
        autoplay: {
          // 自动轮播
          delay: 2000, // 轮播间隔时间
          disableOnInteraction: false, // 当用户点击下一页时，仍会开启自动轮播
        },
        //分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // 导航
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },
  mounted() {
    this.initSwiper();
  },
};
</script>

<style lang="less" scoped>
.content {
  margin-bottom: 40px;
  .swiper-container {
    width: 696px;
    height: 205px;
    position: relative;
    .swiper-wrapper {
      .swiper-slide img {
        width: 696px;
        height: 205px;
      }
    }
  }
}
</style>