<template>
  <div>
    <el-carousel :autoplay="false">
      <el-carousel-item v-for="item in 4" :key="item">
        <div class="tab">完本推荐</div>
        <div class="recommendItem"><RecommendItem /><RecommendItem /></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import RecommendItem from "../RecommendItem";
export default {
  name: "Recommend",
  data() {
    return {
      channelLst: {},
    };
  },
  components: {
    RecommendItem,
  },
  async mounted() {
    const result = await this.$API.chnnel.channel();
    this.channelLst = result;
  },
};
</script>

<style lang="less" scoped>
.el-carousel__item .recommendItem {
  display: flex;
  padding-top: 50px;
  justify-content: space-between;
}
/deep/ .el-carousel__container {
  height: 300px;
  // background-color: red;
  position: relative;
}
.tab {
  position: absolute;
  top: 0;
  left: 5px;
  width: 80px;
  padding: 8px 12px;
  border-radius: 0 0 2px 2px;
  background: #bb996d;
  color: white;
  font-size: 14px;
  line-height: 1;
  text-align: center;
  font-weight: bolder;
}
</style>
