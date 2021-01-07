<template>
  <div id="category">
    <div class="category_container">
      <!-- 头部面包屑区 -->
      <div class="category_header">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/category' }"
            >原创写作</el-breadcrumb-item
          >
          <el-breadcrumb-item
            >{{ tags }}<span>({{ total }})</span></el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>

      <!-- 分类导航区 -->
      <div class="nav">
        <div class="nav_main" @mouseleave="noshow">
          <div class="nav_toolbar">
            <div class="nav_select" @click="changeshow">
              <a class="select_control" data-type="fenlei"
                >分类<i
                  data-type="fenlei"
                  :class="
                    isFenleiShow ? 'el-icon-arrow-up' : 'el-icon-arrow-down'
                  "
                ></i>
              </a>
              <a class="select_control" data-type="shaixuan"
                >筛选<i
                  data-type="shaixuan"
                  :class="
                    isShaixuanShow ? 'el-icon-arrow-up' : 'el-icon-arrow-down'
                  "
                ></i>
              </a>
            </div>
            <ul class="nav_tags">
              <li v-show="options.price">
                {{ options.price }}<i @click="delTag('price')">×</i>
              </li>
              <li v-show="options.wordcount">
                {{ options.wordcount }}<i @click="delTag('wordcount')">×</i>
              </li>
              <li v-show="options.progress">
                {{ options.progress }}<i @click="delTag('progress')">×</i>
              </li>
            </ul>
            <div class="nav_sort">
              <a
                class="sort_option"
                :class="{ selected: options.sort === 'hot' }"
                @click="setCategory('sort', 'hot')"
                >热度</a
              >
              <a
                class="sort_option"
                :class="{ selected: options.sort === 'lib' }"
                @click="setCategory('sort', 'lib')"
                >加入书架数</a
              >
              <a
                class="sort_option"
                :class="{ selected: options.sort === 'new' }"
                @click="setCategory('sort', 'new')"
                >更新时间</a
              >
              <a
                class="sort_option"
                :class="{ selected: options.sort === 'sales' }"
                @click="setCategory('sort', 'sales')"
                >销量从高到低</a
              >
              <a
                class="sort_option"
                :class="{ selected: options.sort === 'rating' }"
                @click="setCategory('sort', 'rating')"
                >评论从高到低</a
              >
            </div>
          </div>
          <!-- 分类导航隐藏分类区 -->
          <div class="selector_panel" v-show="isFenleiShow">
            <div>
              <div class="select_group">
                <ul class="select_option_list">
                  <li
                    class="select-option"
                    v-for="item in classification"
                    :key="item.id"
                    :class="{ selected: options.kind === item.id }"
                    @click="changeCategory(item.id, item.type)"
                  >
                    {{ item.type }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="selector_panel"
            style="left: 80px"
            v-show="isShaixuanShow"
          >
            <div>
              <div
                class="select_group"
                v-for="screen in screenList"
                :key="screen.id"
              >
                <span class="select_label">{{ screen.typename }}</span>
                <ul class="select_option_list" @click="addTag">
                  <li
                    class="select-option"
                    :class="{
                      selected:
                        options[screen.type] === '' ||
                        options[screen.type] === '全部',
                    }"
                    @click="delTag(screen.type)"
                  >
                    全部
                  </li>
                  <li
                    class="select-option"
                    v-for="(item, index) in screen.content"
                    :key="index"
                    :class="{ selected: options[screen.type] === item.type }"
                    :[screen.type]="item.type"
                  >
                    {{ item.type }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="classification">
          <button class="btn selected">全部</button>
          <button
            class="btn"
            v-for="(highlightTags, index) in highlightTagsList"
            :key="index"
          >
            {{ highlightTags }}
          </button>
        </div>
      </div>

      <!-- 主要内容区 -->
      <div class="mainContent">
        <ul class="main_box">
          <li class="mainItem" v-for="item in categoryList" :key="item.id">
            <div class="inner">
              <div class="cover">
                <a href="javascript:;"><img src="./images/34659576.jpg" /></a>
              </div>
              <div class="info">
                <a href="javascript:;"
                  ><h4>{{ item.title }}</h4></a
                >
                <a href="javascript:;"
                  ><p class="author">{{ item.author[0].name }}</p></a
                >
                <a href="javascript:;"
                  ><p class="intro">
                    {{ item.authorHighlight || item.editorHighlight }}
                  </p></a
                >
                <div class="extra_info">
                  <a href="javascript:;">{{ item.kinds[0].shortName }}</a>
                  <span class="separator"></span>
                  <span
                    >{{
                      Math.floor((+item.wordCount / 10000) * 10) / 10
                    }}
                    万字</span
                  >
                  <span
                    :class="{
                      separator: item.highlightTags[0] ? true : false,
                    }"
                  ></span>
                  <a href="javascript:;">{{
                    item.highlightTags[0] ? `${item.highlightTags[0].name}` : ""
                  }}</a>
                  <span
                    :class="{
                      separator: !item.isFinished,
                    }"
                  ></span>
                  <span>{{ item.isFinished ? "" : "连载中" }}</span>
                </div>
                <button class="addBookshelf">加入书架</button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- 分页器 -->
      <el-pagination background layout="prev, pager, next" :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      options: {
        kind: "1",
        sort: "hot",
        price: "",
        wordcount: "",
        progress: "",
      },
      categoryList: [],
      total: 0,
      tags: "",
      highlightTagsList: [],
      isFenleiShow: false,
      isShaixuanShow: false,
      classification: [],
      screenList: [],
    };
  },
  methods: {
    // 请求分类数据
    async getTypeData() {
      const result = await this.$API.category.getCategoryTypeData();
      this.classification = result.data.classification;
      this.screenList = result.data.screenList;
    },
    // 请求页面数据
    async getCategoryKindData(kindId, tags) {
      const result = await this.$API.category.getKindData(kindId);
      this.categoryList = result.data.list;
      this.total = result.data.total;
      this.options.kind = kindId;
      this.tags = tags;
      const list = this.categoryList
        .filter((item) => item.highlightTags[0])
        .map((item) => item.highlightTags[0].name);
      const newList = [...new Set(list)];
      this.highlightTagsList = newList;
    },
    // 点击分类筛选显示数据
    changeshow(e) {
      const { type } = e.target.dataset;
      if (type === "fenlei") {
        this.isFenleiShow = true;
        this.isShaixuanShow = false;
      } else if (type === "shaixuan") {
        this.isFenleiShow = false;
        this.isShaixuanShow = true;
      }
    },
    // 鼠标移出隐藏数据
    noshow() {
      this.isFenleiShow = false;
      this.isShaixuanShow = false;
    },
    // 改变分类类型
    setCategory(kind, value) {
      this.options[kind] = value;
    },
    // 增加标签
    addTag(e) {
      const { price, wordcount, progress } = e.target.attributes;

      if (price) {
        this.options.price = price.value;
      }
      if (wordcount) {
        this.options.wordcount = wordcount.value;
      }
      if (progress) {
        this.options.progress = progress.value;
      }
    },
    // 删除标签
    delTag(tag) {
      this.options[tag] = "";
    },
    // 改变分类
    changeCategory(kindId, tags) {
      this.getCategoryKindData(kindId, tags);
    },
  },
  mounted() {
    const kindId = this.$route.params.id.toString();
    const tags = this.$route.query.tags;

    this.getCategoryKindData(kindId, tags);
    this.getTypeData();
  },
};
</script>

<style lang="less" scoped>
#category {
  margin-top: 50px;
  width: 100%;
  height: 100%;
  background-color: #f8f9f9;
  overflow: hidden;
  .selected {
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
    position: relative;
  }
  .nav_toolbar {
    height: 40px;
    background-color: #ebf0f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav_select {
    flex-shrink: 0;
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
    .el-icon-arrow-down,
    .el-icon-arrow-up {
      padding-left: 15px;
    }
  }
  .nav_tags {
    width: 100%;
    display: flex;
    margin-left: 10px;
    li {
      margin-right: 5px;
      padding: 2px 0 2px 8px;
      border-radius: 2px;
      background: #389eac;
      color: #fff;
      font-size: 12px;
    }
    i {
      margin-left: 5px;
      padding-right: 6px;
      padding-left: 5px;
    }
  }
  .nav_sort {
    flex-shrink: 0;
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
  // 分类导航隐藏分类区
  .selector_panel {
    position: absolute;
    padding: 8px 30px 0;
    background: #fff;
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.1);
  }
  .select_group {
    display: flex;
    align-items: center;
    height: 50px;
  }
  .select_label {
    color: #a6a6a6;
    margin-right: 14px;
    height: 20px;
    line-height: 20px;
  }
  .select_option_list {
    display: flex;
    .select-option {
      padding: 0 10px;
      margin: 0 4px;
      height: 20px;
      line-height: 20px;
      cursor: pointer;
      &:hover {
        color: #fff;
        background-color: #389eac;
        border-radius: 20px;
      }
    }
    .selected {
      color: #fff;
      background-color: #389eac;
      border-radius: 20px;
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
      flex: 1;
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
