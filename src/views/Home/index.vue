<template>
  <div>
    <Header />
  </div>
</template>

<script>
import Header from "../../components/Header";
export default {
  name: "Home",
  mounted() {
    this.$API.home.getHomeData();
  },
  components: {
    Header,
  },
};
</script>

<style lang="less" scoped>
</style>
