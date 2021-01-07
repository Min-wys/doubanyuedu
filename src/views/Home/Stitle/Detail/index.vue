<template>
  <div class="booksContent">
    <div class="herder">
      <div class="banner">
        <span><a href="/">图书</a></span>
        <span><a href="/">中文出版</a></span>
        <span><a href="/">我们与恶的距离</a></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
};
</script>

<style lang="less" scoped>
.booksContent {
  width: 100%;
  .header {
    background-color: #ebf0f2;
    width: 100%;
    height: 45px;
    .banner {
      width: 936px;
      margin: 0 auto;
      span a {
        color: #389eac;
      }
    }
  }
}
</style>