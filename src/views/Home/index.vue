<template>
  <div class="content">
    <!-- 待组件渲染 -->
    <div class="header">顶部区域</div>
    <div class="inner">
      <Stitle />
    </div>
    <div class="banner">
      <a href="/"><img src="./Stitle/images/banner.png" alt="" /></a>
    </div>
    <!-- 底部组件待渲染 -->
    <div class="footer"></div>
  </div>
</template>

<script>
import Stitle from "./Stitle/index";
export default {
  name: "Home",
  components: {
    Stitle,
  },
};
</script>

<style lang="less" scoped>
.content {
  background-color: #f8f9f9;

  .header {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    // position: fixed;
    // top: 0;
    background-color: #fff;
    //margin-bottom: 30px;
  }
  .inner {
    width: 936px;
    margin: 0 auto;
  }
  .banner {
    width: 936px;
    margin: 0 auto;

    img {
      width: 936px;
      height: 90px;
    }
  }
}
</style>
