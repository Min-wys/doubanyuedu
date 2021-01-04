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
          <div class="nav_select">
            <a class="select_control">分类<i class="el-icon-arrow-down"></i></a>
            <a class="select_control">筛选<i class="el-icon-arrow-down"></i></a>
          </div>
          <div class="nav_tags"></div>
          <div class="nav_sort">
            <a class="sort_option selected">热度</a>
            <a class="sort_option">加入书架数</a>
            <a class="sort_option">更新时间</a>
            <a class="sort_option">销量从高到低</a>
            <a class="sort_option">评论从高到低</a>
          </div>
        </div>
        <div class="classification">
          <button class="btn hover">全部</button>
          <button class="btn">全部</button>
          <button class="btn">全部</button>
          <button class="btn">全部</button>
        </div>
      </div>

      <!-- 主要内容区 -->
      <div class="mainContent">
        <ul class="main_box">
          <li class="mainItem">
            <div class="inner">
              <div class="cover">
                <a href="javascript:;"><img src="./images/35577227.jpg" /></a>
              </div>
              <div class="info">
                <a href="javascript:;"><h4>万人如海一身藏</h4></a>
                <a href="javascript:;"><p class="author">独木舟</p></a>
                <a href="javascript:;"
                  ><p class="intro">
                    取代一个男人最初的白月光胜算有多少？如果精神上无法侵入那肉体上的循序渐进是不是有机会找到破口？
                    也不是和他很不熟，她认识他也有一、二年了。他是她的…她找不出适合的形容词。
                    他贯穿她。 言情8.8 万字 连载中 职场爱情
                  </p></a
                >
                <div class="extra_info">
                  <a href="javascript:;">都市</a>
                  <span class="separator"></span>
                  <span>14.7万</span>
                  <span class="separator"></span>
                  <a href="javascript:;">职场爱情</a>
                  <span class="separator"></span>
                  <span>连载中</span>
                </div>
                <button class="addBookshelf">加入书架</button>
              </div>
            </div>
          </li>
          <li class="mainItem">
            <div class="inner">
              <div class="cover">
                <a href="javascript:;"><img src="./images/35577227.jpg" /></a>
              </div>
              <div class="info">
                <a href="javascript:;"><h4>万人如海一身藏</h4></a>
                <a href="javascript:;"><p class="author">独木舟</p></a>
                <a href="javascript:;"
                  ><p class="intro">
                    取代一个男人最初的白月光胜算有多少？如果精神上无法侵入那肉体上的循序渐进是不是有机会找到破口？
                    也不是和他很不熟，她认识他也有一、二年了。他是她的…她找不出适合的形容词。
                    他贯穿她。 言情8.8 万字 连载中 职场爱情
                  </p></a
                >
                <div class="extra_info">
                  <a href="javascript:;">都市</a>
                  <span class="separator"></span>
                  <span>14.7万</span>
                  <span class="separator"></span>
                  <a href="javascript:;">职场爱情</a>
                  <span class="separator"></span>
                  <span>连载中</span>
                </div>
                <button class="addBookshelf">加入书架</button>
              </div>
            </div>
          </li>
          <li class="mainItem">
            <div class="inner">
              <div class="cover">
                <a href="javascript:;"><img src="./images/35577227.jpg" /></a>
              </div>
              <div class="info">
                <a href="javascript:;"><h4>万人如海一身藏</h4></a>
                <a href="javascript:;"><p class="author">独木舟</p></a>
                <a href="javascript:;"
                  ><p class="intro">
                    取代一个男人最初的白月光胜算有多少？如果精神上无法侵入那肉体上的循序渐进是不是有机会找到破口？
                    也不是和他很不熟，她认识他也有一、二年了。他是她的…她找不出适合的形容词。
                    他贯穿她。 言情8.8 万字 连载中 职场爱情
                  </p></a
                >
                <div class="extra_info">
                  <a href="javascript:;">都市</a>
                  <span class="separator"></span>
                  <span>14.7万</span>
                  <span class="separator"></span>
                  <a href="javascript:;">职场爱情</a>
                  <span class="separator"></span>
                  <span>连载中</span>
                </div>
                <button class="addBookshelf">加入书架</button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- 分页器 -->
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      isHover: true,
      isSelected: true,
    };
  },
  methods: {
    addHover() {},
  },
};
</script>

<style lang="less" scoped>
#category {
  width: 100%;
  height: 100%;
  background-color: #f8f9f9;
  overflow: hidden;
  .hover {
    color: #fff;
    background-color: #389eac !important;
  }
  .category_container {
    width: 1200px;
    margin: 0 auto;
    padding: 0 60px;
  }
  // 头部面包屑区
  .el-breadcrumb {
    margin: 40px auto;
    font-size: 30px;
  }
  .el-breadcrumb__inner.is-link {
    font-weight: normal;
  }
  // 分类导航区
  .nav_main {
    height: 40px;
    background-color: #ebf0f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav_select {
    .select_control {
      display: inline-block;
      width: 65px;
      height: 40px;
      line-height: 40px;
      padding-left: 15px;
      cursor: pointer;
    }
    .select_control:hover {
      color: #fff;
      background-color: #389eac;
    }
    .el-icon-arrow-down {
      padding-left: 15px;
    }
  }
  .nav_sort {
    .sort_option {
      display: inline-block;
      height: 40px;
      line-height: 40px;
      padding: 0 15px;
      cursor: pointer;
    }
    .sort_option.selected {
      color: #fff;
      background-color: #389eac;
    }
    .sort_option:hover {
      color: #fff;
      background-color: #389eac;
    }
  }
  .classification {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    .btn {
      height: 30px;
      padding: 0 15px;
      margin-right: 8px;
      border-radius: 4px;
      font-size: 13px;
      background-color: #fff;
      box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
      border: none;
      cursor: pointer;
      outline: none;
      &:hover {
        color: #fff;
        background-color: #389eac;
      }
    }
  }
  // 主要内容区
  .main_box {
    display: flex;
    flex-wrap: wrap;
    .mainItem {
      padding: 20px;
      width: calc(50% - 60px);
      border-bottom: 1px solid #eff0f0;
    }
    .mainItem:nth-child(2n + 1) {
      margin-right: 40px;
    }
    .inner {
      display: flex;
    }
    .cover {
      a {
        margin-right: 15px;
      }
      img {
        width: 80px;
        height: 120px;
      }
    }
    .info {
      h4 {
        color: #333;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 5px;
        &:hover {
          color: #000;
        }
      }
      .author {
        font-size: 12px;
        margin-bottom: 12px;
        color: #777;
        &:hover {
          color: #389eac;
        }
      }
      .intro {
        font-size: 13px;
        height: 40px;
        line-height: 1.5;
        margin-bottom: 8px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
    .extra_info {
      margin-bottom: 8px;
      color: #777;
      .separator {
        width: 1px;
        height: 10px;
        background-color: #ddd;
        margin: 0 10px;
        display: inline-block;
      }
      a:hover {
        color: #389eac;
        text-decoration: none;
      }
    }
    .addBookshelf {
      float: right;
      width: 76px;
      height: 26px;
      border-radius: 4px;
      font-size: 13px;
      background-color: #fff;
      box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
      border: none;
      cursor: pointer;
      outline: none;
      &:hover {
        color: #fff;
        background-color: #389eac;
      }
    }
  }
  // 分页器区
  .el-pagination {
    margin: 30px 0;
    text-align: center;
  }
}
</style>
