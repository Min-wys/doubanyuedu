<template>
  <div class="general-outer">
    <div class="general">
      <div class="title">{{ title }}</div>
      <el-carousel indicator-position="none" height="350px" :autoplay="false">
        <el-carousel-item
          class="el-carousel-item"
          v-for="(item, index) in data"
          :key="index"
        >
          <div v-for="book in item" :key="book.id" class="brief">
            <Brief :book="book" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import Brief from "../Brief";

export default {
  name: "General",
  props: ["data", "title"],
  components: {
    Brief,
  },
};
</script>

<style lang="less" scoped>
.general-outer {
  background-color: #f8f9f9;
  overflow: hidden;
}
.general {
  height: 394px;
  margin: 40px 0 60px 0;
}
/deep/ .el-carousel__container {
  width: 100%;
  overflow: hidden;
}
/deep/ .el-carousel__item {
  width: 1143px;
  left: 5%;
  display: flex;
}
.brief {
  width: 20%;
  padding: 40px 20px 0 20px;
  box-sizing: border-box;
  height: 100%;
}
.title {
  font-size: 24px;
  color: #000;
  font-weight: bold;
  width: 1143px;
  margin: 0 auto;
}
</style>
