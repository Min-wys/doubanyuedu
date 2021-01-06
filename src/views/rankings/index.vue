<template>
  <div class="rank">
    <div class="rank-container">
      <h1>排行</h1>
      <div class="rank-search">
        <span>
          <a class="rank-search-all">全部排行</a>
          <a>原创</a>
          <a>悬疑</a>
          <a>女性</a>
          <a>幻想</a>
          <a>文艺</a>
          <a>历史</a>
          <a>出版</a>
        </span>
      </div>
      <h2>综合排行</h2>
    </div>
     <div class="paihang"> <Zujian /> <Zujian />  <Zujian /> <Zujian /> <Zujian /> <Zujian /> </div>
  </div>
</template>
<script>
import Zujian from "./zujian";
export default {
  name: "Rankings",
  components: {
    Zujian,
  },
};
</script>
<style lang="less"  coped>
html,
body {
  width: 100%;
}
.rank {
  width: 100%;
  margin-top: 100px;
}
.rank-container {
  width: 1200px;
  margin: 0 auto;
}
/* h1标签 */
.rank-container h1 {
  margin: 30px 0;
  font-size: 30px;
  padding: 0 25px;
}
.rank-container h2 {
  padding: 0 25px;
  font-size: 24px;
}
.rank-search {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  color: #ccc;
}
.rank-search span a {
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
}
.rank-search span a:hover {
  color: #333;
}

.rank-search span .rank-search-all {
  font-size: 24px;
  color: #333;
}
.paihang {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  
}
</style>