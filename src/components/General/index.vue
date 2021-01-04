<template>
  <div class="general">
    <div class="title">畅销作品</div>
    <el-carousel indicator-position="none" height="340px">
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
</template>

<script>
import Brief from "../Brief";

export default {
  name: "General",
  props: ["data"],
  components: {
    Brief,
  },
};
</script>

<style lang="less" scoped>
.general {
  margin: 40px 0;
  height: 330px;
}
.el-carousel-item {
  // width: 1143px;
  // margin: 0 auto;
  box-sizing: border-box;
  padding: 0 60px;
  display: flex;
}
.brief {
  // width: 176px;
  width: 20%;
  padding: 40px 20px 0 20px;
  box-sizing: border-box;
  //   height: 100%;
}
.title {
  font-size: 24px;
  color: #000;
  font-weight: bold;
  width: 1143px;
  margin: 0 auto;
}
// .general-inner{
//   width: 1200px;
//   margin: 0 auto;
// }
</style>
