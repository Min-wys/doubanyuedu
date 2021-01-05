<template>
  <div>
    <Header />
    <Banner />
    <div @click="toGeneral">完结频道</div>
    <General :data="hotData" />
  </div>
</template>

<script>
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import General from "../../components/General";
import formatArray from "../../utils/formatArray";
export default {
  name: "Home",
  data() {
    return {
      hotData: [],
    };
  },
  methods: {
    toGeneral() {
      this.$router.push({
        name: "channel",
        params: {
          id: 2,
        },
      });
      this.isShow = false;
    },
  },
  async mounted() {
    const result = await this.$API.home.getHotData();
    this.hotData = formatArray(result.data.worksList, 5);
    console.log(this.hotData);
  },
  components: {
    Header,
    Banner,
    General,
  },
};
</script>

<style lang="less" scoped>
</style>
