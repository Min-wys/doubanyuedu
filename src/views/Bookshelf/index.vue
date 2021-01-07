<template>
  <div class="bookshelf">
    <div class="bookshelf-title">
      <div class="page-header">
        <h2>我的书架（{{ booksList.length }}）</h2>
        <div v-if="!isManage || !booksList.length">
          <a class="btn-link" href="">浏览记录</a>
          <a class="btn-link" href="">购买记录</a>

          <a
            class="btn-link"
            v-if="booksList.length"
            @click="isManage = true"
            href="#"
            >批量管理</a
          >
        </div>
        <div v-else>
          <el-button
            type="button"
            size="mini"
            @click="delBooks"
            :disabled="!checkList.length"
          >
            删除
          </el-button>
          <a class="btn-link" @click.prevent="exitManage" href="#">
            退出批量管理
          </a>
        </div>
      </div>
    </div>
    <div class="bookFolder">
      <div class="toolbar">
        <div v-if="isManage" style="margin-left: 10px">
          <label>
            <input
              type="checkbox"
              name=""
              id=""
              :checked="books.length === checkList.length"
              @click="selectAll"
            />
            <span>全选</span>
          </label>
        </div>
        <div v-else class="toolbar-nomal">
          <div class="tool-left">
            <label>
              <input type="checkbox" name="" id="" />
              <span>有更新</span>
            </label>
            <label>
              <input type="checkbox" name="" id="" />
              <span>只看未分组</span>
            </label>
          </div>
          <div class="tool-rignt">
            <a class="selector active" href="#">列表模式</a>
            <a class="selector" href="#">封面模式</a>
          </div>
        </div>
      </div>

      <ul v-if="booksList.length" class="worksList">
        <li class="worksItemContainer" v-for="item in booksList" :key="item.id">
          <label class="manage">
            <a href="#" class="worksItem" @click="toOneStory(item)">
              <input
                type="checkbox"
                v-if="isManage"
                :value="item.id"
                v-model="checkList"
              />
              <Grid :book="item" />
            </a>
          </label>
        </li>
      </ul>
      <div v-else class="none">这里什么也没有</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Grid from "../../components/Grid";
export default {
  name: "Bookshelf",
  data() {
    return {
      booksList: [],
      isManage: false,
      checkList: [],
    };
  },
  computed: {
    ...mapState({
      books: (state) => state.bookshelf.books,
    }),
  },
  methods: {
    ...mapMutations(["DELETE_BOOK", "REPLACE_BOOK"]),
    async delBooks() {
      this.DELETE_BOOK(this.checkList);
      this.checkList = [];
      /* 重新请求数据 */
      await this.getBooksList();
      /* 如果数据为空则退出管理状态 */
      if (!this.booksList.length) {
        this.isManage = false;
      }
    },
    selectAll() {
      if (this.books.length === this.checkList.length) {
        this.checkList = [];
      } else {
        this.checkList = [...this.books];
      }
    },
    /* 获取书本详细信息 */
    async getBooksList() {
      // console.log(this.books);
      const re = await this.$API.doubanhome.getHomeData(
        this.books,
        "\n  query getWorksList($worksIds: [ID!]) {\n    worksList(worksIds: $worksIds) {\n      \n  ... on WorksBase {\n    id\n    title\n    url\n    readerUrl\n    cover\n    author {\n      name\n    }\n    origAuthor {\n      name\n    }\n    wordCount\n    wordCountUnit\n    isOrigin\n    isColumn\n    isFinished\n    isPurchased\n    isOnSale\n    progressRatio\n  }\n  ... on ColumnWorks {\n    columnId\n    libraryUpdateTime(format: ISO)\n    updateTime(format: ISO)\n    rally {\n      season\n      writingStarted\n    }\n  }\n\n    }\n  }\n"
      );
      // console.log(re.data.data.worksList);
      this.booksList = re.data.data.worksList;
    },
    exitManage() {
      this.isManage = false;
      /* 清空已选中 */
      this.checkList = [];
    },
    toOneStory(book) {
      if (this.isManage) {
        if (this.checkList.indexOf(book.id) === -1) {
          this.checkList.push(book.id);
        } else {
          this.checkList = this.checkList.filter((item) => {
            item !== book.id;
          });
        }
        return;
      }
      this.$router.push("/OneStory");
      this.REPLACE_BOOK(book);
    },
  },
  mounted() {
    this.getBooksList();
  },
  components: {
    Grid,
  },
};
</script>

<style lang="less" scoped>
.bookshelf {
  background-color: #f8f9f9;
  padding-top: 50px;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
}
.bookshelf-title {
  border-bottom: 1px solid #ddd;
}
.page-header {
  width: 1223px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 20px;
  }
}
.btn-link {
  margin-left: 10px;
}
.bookFolder {
  width: 1143px;
  margin: 0 auto;
  height: 100%;
}
.toolbar {
  height: 40px;
  margin: 20px 0 5px 0;
  background-color: #ebf0f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.toolbar-nomal {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tool-left {
  padding-left: 10px;
  display: flex;
}
.tool-rignt {
  height: 100%;
  display: flex;
}
.selector {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  position: relative;
  color: #333;
}
.selector.active {
  background: #389eac;
  color: white;
}
.worksList {
  margin: 5px 10px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 0 20px;
}
.worksItemContainer {
  display: inline-flex;
  box-sizing: border-box;
  position: relative;
  border-bottom: 1px solid #ddd;
}
.worksItem {
  position: relative;
  display: flex;
  flex: 1;
  margin: 10px 0;
  padding: 10px 0 10px 10px;
  min-width: 0;
  height: 98px;
  align-items: center;
  input {
    margin-right: 10px;
  }
}
.manage {
  width: 100%;
  display: flex;
  align-items: center;
}
.worksItem:hover {
  background-color: #ebf0f2;
}
.none {
  height: 179.5px;
  line-height: 179.5px;
  text-align: center;
}
label {
  margin-right: 10px;
  display: flex;
  align-items: center;
}
</style>
