<template>
  <div class="banner">
    <el-carousel indicator-position="none" height="158px" arrow="never">
      <el-carousel-item>
        <img src="../../assets/image/10136.jpg" alt="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../../assets/image/10137.jpg" alt="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../../assets/image/10258.jpg" alt="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../../assets/image/10315.jpg" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang="less" scoped>
.banner {
  margin-top: 50px;
}
img {
  width: 1263px;
}
.el-carousel__item {
  height: 158px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
