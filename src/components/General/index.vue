<template>
  <div class="general">
    <div></div>
    <el-carousel indicator-position="none" height="294px">
      <el-carousel-item class="el-carousel-item"> <Brief /> </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import Brief from "../Brief";
// import formatArray from "../../utils/formatArray";
export default {
  name: "General",
  data() {
    return {
      hotData: [],
    };
  },
  async mounted() {
    const result = await this.$API.home.getHotData();
    this.hotData = result.data.worksList;
    // this.hotData = formatArray(result.data.worksList, 5);
    console.log(this.hotData);
  },
  components: {
    Brief,
  },
};
</script>

<style lang="less" scoped>
.general {
  margin: 40px 0;
  height: 294px;
}
.el-carousel-item {
  width: 1200px;
  box-sizing: border-box;
  padding: 0 60px;
}
</style>
