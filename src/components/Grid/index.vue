<template>
  <div class="grid">
    <div class="img-cover">
      <img :src="book.cover" alt="" />
    </div>
    <div class="info">
      <h4 class="title">{{ book.title }}</h4>
      <div class="extra-info">
        <div class="author" v-if="book.author[0]">
          {{ book.author[0].name }}
        </div>
        <div class="author" v-else>
          {{ book.origAuthor[0].name }}
        </div>
        <span>连载中</span>
        <span class="separator"></span>
        <span>1天前 更新</span>
        <div class="progressRatio">未读过</div>
      </div>
    </div>
    <div class="action">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        viewBox="0 0 10 10"
        class="icon-more fill-current-color"
      >
        <path fill="#389eac" d="M0 6h2V4H0v2zm4 0h2V4H4v2zm4 0h2V4H8v2z"></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Grid",
  props: ["book"],
};
</script>

<style lang="less" scoped>
.grid {
  width: 100%;
  display: flex;
}
.img-cover {
  margin-right: 10px;
  img {
    width: 66px;
    height: 98px;
    border-radius: 4px;
  }
}
.info {
  flex-grow: 1;
  .title {
    font-weight: bold;
    font-size: 16px;
    color: #333;
  }
}
.author {
  margin-top: 4px;
  margin-bottom: 4px;
  color: #777;
}
.separator {
  width: 1px;
  height: 10px;
  display: inline-block;
  margin: 0 10px;
  background: #ddd;
  vertical-align: -1px;
}
.progressRatio {
  margin-top: 10px;
}
.action {
  position: absolute;
  right: 8px;
  bottom: 5px;
  height: 30px;
}
</style>
