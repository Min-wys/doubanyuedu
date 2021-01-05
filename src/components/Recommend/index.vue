<template>
  <div>
    <el-carousel :autoplay="false">
      <div class="tab">完本推荐</div>
      <el-carousel-item v-for="(channel, index) in channelList" :key="index">
        <div class="recommendItem">
          <RecommendItem :recommendItem="channel[0]" /><RecommendItem
            :recommendItem="channel[1]"
          />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import RecommendItem from "../RecommendItem";
import formatArray from "../../utils/formatArray";
export default {
  name: "Recommend",
  data() {
    return {
      channelList: [],
    };
  },
  components: {
    RecommendItem,
  },
  async mounted() {
    const result = await this.$API.chnnel.channel();
    // 对请求回来的数据进行处理
    let channelList = formatArray(result.data.worksList, 2);
    this.channelList = channelList;
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
