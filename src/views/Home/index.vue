<template>
  <div>
    <Header />
    <Banner />
    <General />
  </div>
</template>

<script>
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import General from "../../components/General";
export default {
  name: "Home",
  mounted() {
    this.$API.home.getHomeData();
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
