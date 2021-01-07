<template>
  <!-- 底部固定区域 -->
  <div class="storyOuterFooter">
    <div class="footerContent">
      <ul class="footerLeft">
        <li class="footerLeftItem">
          <span><i class="iconfont icon-fenxiang"></i> 分享</span>
        </li>
        <li class="footerLeftItem">
          <span><i class="iconfont icon-pingjia" @click="open"></i>评论</span>
        </li>
        <li class="footerLeftItem">
          <span><i class="iconfont icon-tuijian2"></i>推荐票</span>
        </li>
        <li>
          <span
            @mouseenter="bookContent = true"
            @mouseleave="bookContent = false"
            @click="addbook"
            v-if="!$store.state.bookshelf.isInBookShelf"
            ><i class="iconfont icon-wodeshujia"></i>加入书架{{
              bookContent ? " 第一时间获得更新提醒" : ""
            }}</span
          >
          <span v-else class="bookDone">
            <i class="iconfont icon-wodeshujia"></i>
            已在书架
          </span>
        </li>
      </ul>
      <div class="footerRight">
        <div class="buy public">购买</div>
        <div class="freeRead public">免费阅读</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OneStoryFooter",
  data() {
    return {
      bookContent: false, // 书架内容
    };
  },
  props: ["book"],
  methods: {
    addbook() {
      this.$store.commit("ADD_BOOK", this.book);
    },
    // 输入框element弹窗
    open() {
      this.$prompt("请输入评论内容", "评论", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          console.log(value);
          // this.INTRO_REPLY({ id, content: value });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
  },
};
</script>

<style lang="less" scoped>
.storyOuterFooter {
  width: 100%;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  height: 50px;
  background: #fff;
  box-shadow: 0 -0.5px 5px 0 #ddd;
  font-size: 12px;
  line-height: 50px;
  .footerContent {
    width: 800px;
    margin: 0 auto;
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    .footerLeft {
      display: flex;
      height: 100%;
      align-items: center;
      .footerLeftItem {
        width: 100px;
        .bookDone {
          color: #ddd !important;
          i {
            margin-right: 6px;
          }
        }
      }
      span {
        color: #389eac;
        i {
          margin-right: 6px;
        }
      }
    }
    .footerRight {
      display: flex;
      .public {
        height: 35px;
        line-height: 35px;
        color: #fff5e9;
        font-size: 14px;
        cursor: pointer;
        text-align: center;
        border-radius: 4px;
      }
      .buy {
        width: 60px;
        background: #389eac;
        margin-right: 10px;
      }
      .freeRead {
        width: 130px;
        background-color: #5dcaad;
      }
    }
  }
}
</style>
