<template>
  <div id="category">
    <div class="category_container">
      <!-- 头部面包屑区 -->
      <div class="category_header">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/category' }"
            >原创写作</el-breadcrumb-item
          >
          <el-breadcrumb-item>悬疑小说<span>(7029)</span></el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <!-- 分类导航区 -->
      <div class="nav">
        <div class="nav_main">
          <div class="nav_left">
            <span>分类</span>
            <span>筛选</span>
          </div>
          <div class="nav_right">
            <span>热度</span>
            <span>加入书架数</span>
            <span>更新时间</span>
            <span>销量从高到低</span>
            <span>评论从高到低</span>
          </div>
        </div>
        <div class="classification">
          <button class="btn cursorsHover">全部</button>
          <button class="btn cursorsHover">全部</button>
          <button class="btn cursorsHover">全部</button>
          <button class="btn cursorsHover">全部</button>
        </div>
      </div>

      <!-- 主要内容区 -->
      <div class="mainContent"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
};
</script>

<style lang="less" scoped>
#category {
  width: 100%;
  height: 100%;
  background-color: #f8f9f9;
  .category_container {
    margin: 0 60px;
    border: 1px solid blue;
  }
  .el-breadcrumb {
    margin: 40px auto;
    font-size: 30px;
  }
  .el-breadcrumb__inner.is-link {
    font-weight: normal;
  }
}
</style>
