<template>
  <div class="storyOuter">
    <!-- 背景图区域 -->
    <div class="bgcOuter">
      <div class="module">
        <!-- 三个灰色区域 -->
        <div class="threeGray">
          <div>
            <span>原创作品</span>
          </div>
          <p class="arrows">></p>
          <div>
            <span>优质作品</span>
          </div>
          <p class="arrows">></p>
          <div>
            <span>{{ book.title }}</span>
          </div>
        </div>
        <!-- 小说的题目 -->
        <h1 class="sroryTitle">
          <span>{{ book.title }}</span>
        </h1>
        <!-- 作者头像加名字 -->
        <div class="authorMessage">
          <div class="headPortrait">
            <img :src="book.cover" alt="" />
          </div>
          <span v-if="book.author[0]">{{ book.author[0].name }}</span>
        </div>
        <!-- 个性签名 -->
        <div class="signature">
          <span>{{ book.editorHighlight }}</span>
        </div>
      </div>
    </div>
    <!-- 1200px区域 -->
    <div class="bottomOuter">
      <!-- 标签区域 -->
      <div class="storyTag">
        <!-- 签约作品 -->
        <div class="works"><span>签约作品</span></div>
        <!-- 暂无评价区域 -->
        <div class="without">
          <i class="star"></i>
          <span>暂无评价</span>
          <i class="trouble"></i>
        </div>
      </div>
      <!-- 蓝色标签区域 -->
      <div class="blueTag">
        <p>></p>
        <span>{{ book.kinds ? book.kinds[0].shortName : "连载" }}小说</span>
        <p>></p>
        <div v-if="book.highlightTags">
          <span v-for="(tag, index) in book.highlightTags" :key="index">{{
            tag.name
          }}</span>
        </div>
        <span>治愈无聊</span>
        <span>倾心制作</span>
        <span>努力</span>
      </div>
      <!-- 四个白色块块 -->
      <ul class="whileBlock">
        <li>
          <span>字数</span>
          <strong>{{ book.id }}</strong>
        </li>
        <li>
          <span>阅读</span>
          <strong>{{ book.ratingCount || "0" }}</strong>
        </li>
        <li>
          <span>加入书架</span>
          <strong>7</strong>
        </li>
        <li>
          <span>推荐票</span>
          <strong>{{ book.averageRating || "0" }}</strong>
        </li>
      </ul>
      <!-- 810px -->
      <div class="eight">
        <!-- 简介 -->
        <div class="intro">
          <span> 简介 </span>
        </div>
        <!--  简介内容-->
        <div class="introContent">
          {{ book.abstract || book.editorHighlight }}
        </div>
        <!-- 目录 -->
        <div class="intro catalog">
          <span>目录 ({{ sectionList.total }})</span>
          <div class="label">
            <label>
              <input type="checkbox" @click="newBeforeClick" />
              新发表在前
            </label>
            <label>
              <input
                type="checkbox"
                @click="showSectionText = !showSectionText"
              />
              显示简介
            </label>
          </div>
        </div>
        <!-- 章节 -->
        <ul class="section">
          <li
            class="sectionContent"
            v-for="section in sectionList.list"
            :key="section.id"
          >
            <h3>{{ section.title }}</h3>
            <div v-show="showSectionText">
              <div class="sectionText">
                {{ section.abstract }}
              </div>
              <div class="sectionTime">
                <span>{{ section.onSaleTime }}</span>
                <span
                  >阅读 {{ section.readCount }} 讨论
                  {{ section.commentCount }}</span
                >
              </div>
            </div>
          </li>
          <li class="sectionContent">
            <span class="examine" @click="manyToClose">{{
              manySection ? "点击查看更多" : "收起"
            }}</span>
          </li>
        </ul>
        <!-- 评论区域 -->
        <div class="intro">
          <span>评论 {{ introList.commentTotal }}</span>
        </div>
        <!-- 评论内容 -->
        <ul class="remark">
          <li v-for="item in introList.comments" :key="item.id">
            <!-- 头像 -->
            <div class="remarkHead">
              <img :src="item.user.avatar" alt="" />
            </div>
            <div class="remarkDetail">
              <p class="remarkName">{{ item.user.name }}</p>
              <span>{{ item.createTime }} </span>
              <span
                >发表{{ item.commentType === "Review" ? "书评" : "讨论" }}</span
              >
              <!-- 白色块 -->
              <div v-if="item.refDiscussion">
                <div
                  class="remarkDetailWhite"
                  v-for="re in item.refDiscussion"
                  :key="re.id"
                >
                  <div>
                    <span>{{ re.user.name }}</span>
                    <span>{{ re.createTime }}</span>
                  </div>
                  <span>{{ re.content }}</span>
                </div>
              </div>
              <p class="remarkText">{{ item.content }}</p>
              <div class="remarkBottom" v-show="item.commentType === 'Review'">
                <div class="remarkBottomSection" @click="clickGood(item.id)">
                  <span>赞 {{ item.upvoteCount }}</span>
                </div>
                <div @click="open(item.id)" class="remarkBottomSection">
                  <span>回复</span>
                </div>
                <div class="remarkBottomSection">
                  <span>分享 ></span>
                </div>
              </div>
              <div
                class="remarkBottomTwo"
                v-show="item.commentType === 'Discussion'"
              >
                <div class="remarkBottomTwLeft">
                  <span>章节</span>
                  <p>{{ item.works.title }}</p>
                </div>
                <div class="remarkBottomSection" @click="open(item.id)">
                  <span>写回复</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- footer -->
    <OneStoryFooter :book="book.id" />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import OneStoryFooter from "../../components/OneStoryFooter";
export default {
  name: "OneStory",
  data() {
    return {
      showSectionText: true, // 章节显示
      newBefore: true, // 最新在前
      manySection: true, // 收起和加载更多的开关
      goodBoo: true, // 控制赞的数目
      clickGoodId: null, // 赞的id值
    };
  },
  components: {
    OneStoryFooter,
  },
  computed: {
    ...mapState({
      book: (state) => state.onestory.book,
      sectionList: (state) => state.onestory.sectionList,
      introList: (state) => state.onestory.introList,
    }),
  },
  methods: {
    ...mapActions(["getSectionList", "getIntroList"]),
    ...mapMutations([
      "SORT_SECTION_LIST",
      "CONCAT_SECTION_LIST",
      "CLOSE_SECTION_LIST",
      "CLICK_GOOD",
      "INTRO_REPLY",
    ]),
    // 点击让最新章节在前
    newBeforeClick() {
      this.SORT_SECTION_LIST(this.newBefore);
      // 来回切换显示
      this.newBefore = !this.newBefore;
    },
    // 收起和加载更多的开关
    manyToClose() {
      // true 是 加载更多 发送加载更多的数据
      this.manySection ? this.CONCAT_SECTION_LIST() : this.CLOSE_SECTION_LIST();
      // 取反
      this.manySection = !this.manySection;
    },
    // 点赞
    clickGood(id) {
      let { goodBoo } = this;
      this.clickGoodId = id;
      this.CLICK_GOOD({ id, goodBoo });
      this.goodBoo = !this.goodBoo;
    },
    // 输入框element弹窗
    open(id) {
      this.$prompt("请输入回复内容", "回复", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        // inputPattern: /^[\s]/,
        // inputErrorMessage: "内容不能为空",
      })
        .then(({ value }) => {
          console.log(value);
          this.INTRO_REPLY({ id, content: value });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
  },
  async mounted() {
    await this.getSectionList();
    await this.getIntroList();
  },
};
</script>

<style lang="less" scoped>
.storyOuter {
  margin-top: 50px;
  background-color: #f8f9f9;
  min-width: 1200px;
}
.bgcOuter {
  background-image: linear-gradient(
      to top,
      #f8f9f9 0,
      rgba(255, 255, 255, 0) 100%
    ),
    url("../../assets/oneStoryBgcImg/25.jpg");
  height: 300px;
  min-width: 1200px;
  background-size: cover;
  background-position: center;
}
.module,
.bottomOuter {
  width: 1200px;
  min-width: 1200px;
  margin: 0 auto;
}
.threeGray {
  display: flex;
  align-items: center;
  padding-top: 10px;
  div {
    padding: 0 10px;
    height: 27px;
    text-align: center;
    line-height: 27px;
    border-radius: 27px;
    background-color: rgba(255, 255, 255, 0.5);
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
}
.arrows {
  font-size: 20px;
  margin: 0 5px;
  vertical-align: -2px;
  text-shadow: 1px 0 0 rgba(255, 255, 255, 0.8);
}
.sroryTitle {
  font-size: 40px;
  text-align: center;
  padding: 70px 0 30px 0;
}
// 头像和名字
.authorMessage {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  span {
    font-weight: bold;
    font-size: 13px;
  }
}
.headPortrait {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
// 个性签名
.signature {
  text-align: center;
}
// 标签区域
.storyTag {
  display: flex;
  flex-direction: column;
  align-items: center;
}
// 签约作品
.works {
  background: url("https://img3.doubanio.com/f/ark/194e1e765a170032e61aadd737d5b25c6ddca6c3/pics/common/profile/icon-contract-badge.svg")
    no-repeat 0 15px;
  background-size: 13px;
  padding: 15px 0 15px 17px;
}
// 星星
.star {
  vertical-align: middle;
  height: 15px;
  width: 80px;
  display: inline-block;
  margin-right: 5px;
  background: url("https://img3.doubanio.com/f/ark/d77e4fb55f64b99f5b7f095aa263f0357e17003d/pics/app/stars.svg")
    no-repeat;
}
// 红色问号
.trouble {
  vertical-align: middle;
  height: 15px;
  width: 15px;
  margin-left: 5px;
  display: inline-block;
  background: url("https://img3.doubanio.com/f/ark/e440d409395d65727138d1422b506fae8ed0829f/pics/common/icon-help-tip-red.svg")
    no-repeat;
}
// 蓝色的图标
.blueTag {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  span {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    margin: 0 5px;
    padding: 2px 10px;
    background-color: #389eac;
    border-radius: 10px;
    color: white;
    &:hover {
      background: #108899;
    }
  }
}
// 四个百块
.whileBlock {
  width: 810px;
  margin: 0 auto;
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
  li {
    width: 190px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 5px;
    strong {
      font-size: 14px;
      font-weight: bold;
    }
  }
}
// 810
.eight {
  width: 810px;
  margin: 0 auto;
}
.intro {
  height: 36px;
  background-color: #ebf0f2;
  font-size: 13px;
  font-weight: bold;
  line-height: 36px;
  box-sizing: border-box;
  padding-left: 10px;
}
.introContent {
  padding: 20px 13px 15px;
  line-height: 2.5;
}
.eight .intro.catalog {
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  font-size: 12px;
  font-weight: normal;
  .label input {
    vertical-align: middle;
  }
}
.sectionContent {
  padding: 20px 13px 10px;
  border-bottom: 1px solid #ddd;
  &:hover {
    background-color: #ebf0f2;
  }
  h3 {
    font-size: 16px;
  }
  .examine {
    display: flex;
    justify-content: center;
    color: #389eac;
    &:hover {
      color: #108899;
    }
  }
}
.sectionText {
  margin: 5px 0;
  line-height: 1.5;
  // 多行文本溢出
  height: 40px;
  display: -webkit-box;
  /* 文本行排列方向 */
  -webkit-box-orient: vertical;
  /* 设置几行之后出现溢出省略号 */
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 13px;
}
.sectionTime {
  display: flex;
  justify-content: space-between;
  color: #a6a6a6;
}
.remark {
  padding: 20px 0 10px;
  li {
    display: flex;
    border-bottom: 1px solid #ddd;
    padding: 15px 0 10px 0;
    .remarkHead {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 15px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .remarkDetail {
      width: 725px;
      .remarkName {
        font-weight: bold;
        font-size: 13px;
      }
      span {
        color: #a6a6a6;
      }
      .remarkDetailWhite {
        margin: 20px 20px 0px 12px;
        padding: 10px 12px;
        border-left: 1px solid #ddd;
        background: #fff;
        font-size: 12px;
        span {
          color: #777;
          margin-right: 5px;
          line-height: 1.5;
        }
      }
    }
    .remarkText {
      padding: 15px 0px 10px 0px;
      font-size: 13px;
    }
    .remarkBottom {
      display: flex;
      justify-content: flex-end;
    }
    .remarkBottomSection {
      width: 50px;
      height: 30px;
      background-color: #fff;
      text-align: center;
      line-height: 30px;
      margin-left: 5px;
      border-radius: 4px;
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
      &:hover {
        background: #389eac;
        box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
        span {
          color: white;
        }
      }
      span {
        color: #333;
      }
    }
    .remarkBottomTwo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .remarkBottomTwLeft {
        display: flex;
        span {
          margin-right: 10px;
        }
        p {
          color: #389eac;
          &:hover {
            color: #108899;
          }
        }
      }
    }
  }
}
</style>
