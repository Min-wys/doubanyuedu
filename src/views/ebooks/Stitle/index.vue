<template>
  <div class="content">
    <div class="left">
      <!-- 平台选择 -->
      <div class="leftNav">
        <h3>阅读平台</h3>
        <div class="line"></div>
        <div class="select">
          <div><img class="selectWeb" src="./images/web.png" alt="" /></div>
          <div>
            <img class="selectAndroid" src="./images/downLoad.png" alt="" />
          </div>
        </div>
      </div>
      <!-- 分类 -->
      <div class="classify" v-for="(item, index) in classify" :key="index">
        <h3>{{ item.title }}</h3>
        <div class="classifyList">
          <ul
            class="ListItem"
            v-for="list in item.booksClassifyList"
            :key="list.id"
          >
            <li>
              <a href="/">{{ list.ClassifyName }}</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 畅销 -->
      <div class="goodSale" v-for="(item, index) in saleBooks" :key="index">
        <h3>{{ item.title }}</h3>
        <div class="line"></div>
        <!-- 时间 -->
        <div class="time">
          <ul class="timeItem">
            <li>
              <a href="/">{{ item.day }}</a>
            </li>
            <li>
              <a href="/">{{ item.week }}</a>
            </li>
          </ul>
        </div>
        <br />
        <div
          class="detail"
          v-for="detail in item.goodSaleList"
          :key="detail.id"
        >
          <ul class="detailItem">
            <li>
              <h4>
                <a href="/">{{ detail.ClassifyName }}</a>
              </h4>
              <div>{{ detail.writer }}</div>
            </li>
          </ul>
        </div>
      </div>

      <!-- 新书排行 -->
      <div class="newBooks" v-for="(item, index) in newBook" :key="index">
        <h3>{{ item.title }}</h3>
        <div class="line"></div>
        <div class="detail">
          <ul
            class="detailItem"
            v-for="newBooks in item.newBooksDetail"
            :key="newBooks.id"
          >
            <li>
              <h4>
                <a href="/">{{ newBooks.ClassifyName }}</a>
              </h4>
              <div>{{ newBooks.writer }}</div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 读者动态 -->
      <!-- 待渲染 -->
      <div class="reder">
        <h3>读者动态</h3>
        <div class="line"></div>
        <div class="detail">
          <div class="imgBox"><img src="./images/1.jpg" alt="" /></div>
          <div class="detailRight">
            <p class="p1"><a href="/">马自达</a></p>
            <p class="p2">33分购买</p>
            <a href="/">数据分析思维:分析方法和业务知识</a>
          </div>
        </div>
        <div class="detail">
          <div class="imgBox"><img src="./images/2.jpg" alt="" /></div>
          <div class="detailRight">
            <p class="p1"><a href="/">马自达</a></p>
            <p class="p2">33分购买</p>
            <a href="/">数据分析思维:分析方法和业务知识</a>
          </div>
        </div>
        <div class="detail">
          <div class="imgBox"><img src="./images/3.jpg" alt="" /></div>
          <div class="detailRight">
            <p class="p1"><a href="/">马自达</a></p>
            <p class="p2">33分购买</p>
            <a href="/">数据分析思维:分析方法和业务知识</a>
          </div>
        </div>
        <div class="detail">
          <div class="imgBox"><img src="./images/4.jpg" alt="" /></div>
          <div class="detailRight">
            <p class="p1"><a href="/">马自达</a></p>
            <p class="p2">33分购买</p>
            <a href="/">数据分析思维:分析方法和业务知识</a>
          </div>
        </div>
      </div>

      <!-- 版权合作 -->
      <div class="cooperation">
        <h3>版权合作</h3>
        <div class="line"></div>
        <div class="explain">
          影视版权、图书出版、内容入驻等机构方合作，请邮件联系我们
        </div>
        <p class="email"><a href="/">read@douban.com</a></p>
        <div class="line"></div>
      </div>

      <!-- 关注我们 -->
      <div class="keep">
        <h3>关注我们</h3>
        <div class="line"></div>
        <div class="keepBox">
          <div class="icont">
            <span class="iconfont icon-douban11"></span>
          </div>
          <div class="keepDetail">
            <h4><a href="/">豆瓣小站:豆瓣阅读</a></h4>
            <h5>编辑手记&进展通告</h5>
          </div>
        </div>
        <div class="keepBox">
          <div class="icont">
            <span class="iconfont icon-xinlangweibo1"></span>
          </div>
          <div class="keepDetail">
            <h4><a href="/">@豆瓣阅读</a></h4>
            <h5>优秀作品与作者推荐</h5>
          </div>
        </div>
        <div class="keepBox">
          <div class="icont">
            <span class="iconfont icon-weixin"></span>
          </div>
          <div class="keepDetail">
            <h4><a href="/">豆瓣阅读</a></h4>
            <h5>精品文章每日推送</h5>
            <img style="width: 70px" src="./images/wechat-service.png" alt="" />
          </div>
        </div>
        <div class="keepBox">
          <div class="icont">
            <span class="iconfont icon-weixin"></span>
          </div>
          <div class="keepDetail">
            <h4><a href="/">豆瓣阅读服务号</a></h4>
            <h5>充值购买、问题反馈</h5>
            <img style="width: 70px" src="./images/wechat-service.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <!--  轮播图 -->
      <Banner />
      <!-- 编辑推荐 -->
      <div
        class="recommend"
        v-for="(recommend, index) in recommendBooks"
        :key="index"
      >
        <h3>{{ recommend.title }}</h3>
        <div class="line"></div>
        <div class="recommendBox">
          <div
            class="recommendItem"
            v-for="detail in recommend.recommendList"
            :key="detail.id"
          >
            <ul class="itemList">
              <li>
                <div class="detailImg">
                  <img :src="detail.imgUrl" alt="" />
                </div>
                <div class="bookName">
                  <h5>
                    <a href="/">{{ detail.bookName }}</a>
                  </h5>
                  <p class="wirter">{{ detail.writer }}</p>
                </div>
                <div class="buy">
                  <p class="price">
                    <span class="originalPrice">{{
                      detail.originalPrice
                    }}</span>
                    <span class="currentPrice">{{ detail.currentPrice }}</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 最新上架 -->
      <div
        class="NewReleases"
        v-for="(item, index) in listingBooks"
        :key="index"
      >
        <div class="header">
          <h3>{{ item.title }}</h3>
          <p><a href="/">更多新书</a></p>
        </div>
        <div class="line"></div>
        <div class="newBooksBox">
          <div
            class="items"
            v-for="detail in item.newreleasesList"
            :key="detail.id"
          >
            <ul class="itemList">
              <li>
                <div class="imgBox">
                  <img :src="detail.imgUrl" alt="" />
                </div>
                <div class="bookName">
                  <h5>
                    <a href="/">{{ detail.bookName }}</a>
                  </h5>
                  <p class="wirter">{{ detail.writer }}</p>
                </div>
                <div class="buy">
                  <p class="price">
                    <span class="originalPrice">{{
                      detail.originalPrice
                    }}</span>
                    <span class="currentPrice">{{ detail.currentPrice }}</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 最受关注 -->
      <div
        class="recommend"
        v-for="(recommend, index) in recommendBooks"
        :key="index"
      >
        <h3>最受关注</h3>
        <div class="line"></div>
        <div class="recommendBox">
          <div
            class="recommendItem"
            v-for="detail in recommend.recommendList"
            :key="detail.id"
          >
            <ul class="itemList">
              <li>
                <div class="detailImg">
                  <img :src="detail.imgUrl" alt="" />
                </div>
                <div class="bookName">
                  <h5>
                    <a href="/">{{ detail.bookName }}</a>
                  </h5>
                  <p class="wirter">{{ detail.writer }}</p>
                </div>
                <div class="buy">
                  <p class="price">
                    <span class="originalPrice">{{
                      detail.originalPrice
                    }}</span>
                    <span class="currentPrice">{{ detail.currentPrice }}</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 今日特价 -->
      <div
        class="recommend"
        v-for="(recommend, index) in recommendBooks"
        :key="index"
      >
        <h3>今日特价</h3>
        <div class="line"></div>
        <div class="recommendBox">
          <div
            class="recommendItem"
            v-for="detail in recommend.recommendList"
            :key="detail.id"
          >
            <ul class="itemList">
              <li>
                <div class="detailImg">
                  <img :src="detail.imgUrl" alt="" />
                </div>
                <div class="bookName">
                  <h5>
                    <a href="/">{{ detail.bookName }}</a>
                  </h5>
                  <p class="wirter">{{ detail.writer }}</p>
                </div>
                <div class="buy">
                  <p class="price">
                    <span class="originalPrice">{{
                      detail.originalPrice
                    }}</span>
                    <span class="currentPrice">{{ detail.currentPrice }}</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 新书速度 -->
      <div
        class="recommend"
        v-for="(recommend, index) in recommendBooks"
        :key="index"
      >
        <h3>新书速递</h3>
        <div class="line"></div>
        <div class="recommendBox">
          <div
            class="recommendItem"
            v-for="detail in recommend.recommendList"
            :key="detail.id"
          >
            <ul class="itemList">
              <li>
                <div class="detailImg">
                  <img :src="detail.imgUrl" alt="" />
                </div>
                <div class="bookName">
                  <h5>
                    <a href="/">{{ detail.bookName }}</a>
                  </h5>
                  <p class="wirter">{{ detail.writer }}</p>
                </div>
                <div class="buy">
                  <p class="price">
                    <span class="originalPrice">{{
                      detail.originalPrice
                    }}</span>
                    <span class="currentPrice">{{ detail.currentPrice }}</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 豆瓣阅读年度畅销书 -->
      <div
        class="recommend"
        v-for="(recommend, index) in recommendBooks"
        :key="index"
      >
        <h3>豆瓣阅读年度畅销书</h3>
        <div class="line"></div>
        <div class="recommendBox">
          <div
            class="recommendItem"
            v-for="detail in recommend.recommendList"
            :key="detail.id"
          >
            <ul class="itemList">
              <li>
                <div class="detailImg">
                  <img :src="detail.imgUrl" alt="" />
                </div>
                <div class="bookName">
                  <h5>
                    <a href="/">{{ detail.bookName }}</a>
                  </h5>
                  <p class="wirter">{{ detail.writer }}</p>
                </div>
                <div class="buy">
                  <p class="price">
                    <span class="originalPrice">{{
                      detail.originalPrice
                    }}</span>
                    <span class="currentPrice">{{ detail.currentPrice }}</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 寒冬里的暖书 -->
      <div
        class="recommend"
        v-for="(recommend, index) in recommendBooks"
        :key="index"
      >
        <h3>寒冬里的暖书</h3>
        <div class="line"></div>
        <div class="recommendBox">
          <div
            class="recommendItem"
            v-for="detail in recommend.recommendList"
            :key="detail.id"
          >
            <ul class="itemList">
              <li>
                <div class="detailImg">
                  <img :src="detail.imgUrl" alt="" />
                </div>
                <div class="bookName">
                  <h5>
                    <a href="/">{{ detail.bookName }}</a>
                  </h5>
                  <p class="wirter">{{ detail.writer }}</p>
                </div>
                <div class="buy">
                  <p class="price">
                    <span class="originalPrice">{{
                      detail.originalPrice
                    }}</span>
                    <span class="currentPrice">{{ detail.currentPrice }}</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 2020年度新书榜 -->
      <div
        class="recommend"
        v-for="(recommend, index) in recommendBooks"
        :key="index"
      >
        <h3>2020年度新书榜</h3>
        <div class="line"></div>
        <div class="recommendBox">
          <div
            class="recommendItem"
            v-for="detail in recommend.recommendList"
            :key="detail.id"
          >
            <ul class="itemList">
              <li>
                <div class="detailImg">
                  <img :src="detail.imgUrl" alt="" />
                </div>
                <div class="bookName">
                  <h5>
                    <a href="/">{{ detail.bookName }}</a>
                  </h5>
                  <p class="wirter">{{ detail.writer }}</p>
                </div>
                <div class="buy">
                  <p class="price">
                    <span class="originalPrice">{{
                      detail.originalPrice
                    }}</span>
                    <span class="currentPrice">{{ detail.currentPrice }}</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 女性之声 -->
      <div
        class="recommend"
        v-for="(recommend, index) in recommendBooks"
        :key="index"
      >
        <h3>女性之声</h3>
        <div class="line"></div>
        <div class="recommendBox">
          <div
            class="recommendItem"
            v-for="detail in recommend.recommendList"
            :key="detail.id"
          >
            <ul class="itemList">
              <li>
                <div class="detailImg">
                  <img :src="detail.imgUrl" alt="" />
                </div>
                <div class="bookName">
                  <h5>
                    <a href="/">{{ detail.bookName }}</a>
                  </h5>
                  <p class="wirter">{{ detail.writer }}</p>
                </div>
                <div class="buy">
                  <p class="price">
                    <span class="originalPrice">{{
                      detail.originalPrice
                    }}</span>
                    <span class="currentPrice">{{ detail.currentPrice }}</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 2020文景好书 -->
      <div
        class="recommend"
        v-for="(recommend, index) in recommendBooks"
        :key="index"
      >
        <h3>2020文景好书</h3>
        <div class="line"></div>
        <div class="recommendBox">
          <div
            class="recommendItem"
            v-for="detail in recommend.recommendList"
            :key="detail.id"
          >
            <ul class="itemList">
              <li>
                <div class="detailImg">
                  <img :src="detail.imgUrl" alt="" />
                </div>
                <div class="bookName">
                  <h5>
                    <a href="/">{{ detail.bookName }}</a>
                  </h5>
                  <p class="wirter">{{ detail.writer }}</p>
                </div>
                <div class="buy">
                  <p class="price">
                    <span class="originalPrice">{{
                      detail.originalPrice
                    }}</span>
                    <span class="currentPrice">{{ detail.currentPrice }}</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 定位 -->
      <div
        class="recommend"
        v-for="(recommend, index) in recommendBooks"
        :key="index"
      >
        <h3>定位</h3>
        <div class="line"></div>
        <div class="recommendBox">
          <div
            class="recommendItem"
            v-for="detail in recommend.recommendList"
            :key="detail.id"
          >
            <ul class="itemList">
              <li>
                <div class="detailImg">
                  <img :src="detail.imgUrl" alt="" />
                </div>
                <div class="bookName">
                  <h5>
                    <a href="/">{{ detail.bookName }}</a>
                  </h5>
                  <p class="wirter">{{ detail.writer }}</p>
                </div>
                <div class="buy">
                  <p class="price">
                    <span class="originalPrice">{{
                      detail.originalPrice
                    }}</span>
                    <span class="currentPrice">{{ detail.currentPrice }}</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 最美的诗 -->
      <div
        class="recommend"
        v-for="(recommend, index) in recommendBooks"
        :key="index"
      >
        <h3>最美的诗</h3>
        <div class="line"></div>
        <div class="recommendBox">
          <div
            class="recommendItem"
            v-for="detail in recommend.recommendList"
            :key="detail.id"
          >
            <ul class="itemList">
              <li>
                <div class="detailImg">
                  <img :src="detail.imgUrl" alt="" />
                </div>
                <div class="bookName">
                  <h5>
                    <a href="/">{{ detail.bookName }}</a>
                  </h5>
                  <p class="wirter">{{ detail.writer }}</p>
                </div>
                <div class="buy">
                  <p class="price">
                    <span class="originalPrice">{{
                      detail.originalPrice
                    }}</span>
                    <span class="currentPrice">{{ detail.currentPrice }}</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 病房内外 生死之间 -->
      <div
        class="recommend"
        v-for="(recommend, index) in recommendBooks"
        :key="index"
      >
        <h3>病房内外 生死之间</h3>
        <div class="line"></div>
        <div class="recommendBox">
          <div
            class="recommendItem"
            v-for="detail in recommend.recommendList"
            :key="detail.id"
          >
            <ul class="itemList">
              <li>
                <div class="detailImg">
                  <img :src="detail.imgUrl" alt="" />
                </div>
                <div class="bookName">
                  <h5>
                    <a href="/">{{ detail.bookName }}</a>
                  </h5>
                  <p class="wirter">{{ detail.writer }}</p>
                </div>
                <div class="buy">
                  <p class="price">
                    <span class="originalPrice">{{
                      detail.originalPrice
                    }}</span>
                    <span class="currentPrice">{{ detail.currentPrice }}</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 我们与恶的距离 -->
      <div
        class="recommend"
        v-for="(recommend, index) in recommendBooks"
        :key="index"
      >
        <h3>我们与恶的距离</h3>
        <div class="line"></div>
        <div class="recommendBox">
          <div
            class="recommendItem"
            v-for="detail in recommend.recommendList"
            :key="detail.id"
          >
            <ul class="itemList">
              <li>
                <div class="detailImg">
                  <img :src="detail.imgUrl" alt="" />
                </div>
                <div class="bookName">
                  <h5>
                    <a href="/">{{ detail.bookName }}</a>
                  </h5>
                  <p class="wirter">{{ detail.writer }}</p>
                </div>
                <div class="buy">
                  <p class="price">
                    <span class="originalPrice">{{
                      detail.originalPrice
                    }}</span>
                    <span class="currentPrice">{{ detail.currentPrice }}</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 出版方 -->
      <div class="publish">
        <h3>出版方</h3>
        <div class="line"></div>
        <div class="publishBox">
          <ul class="imgList">
            <li>
              <a href="/"><img src="./images/chuban/1.jpg" alt="" /></a>
            </li>
            <li>
              <a href="/"><img src="./images/chuban/2.jpg" alt="" /></a>
            </li>
            <li>
              <a href="/"><img src="./images/chuban/3.jpg" alt="" /></a>
            </li>
            <li>
              <a href="/"><img src="./images/chuban/4.jpg" alt="" /></a>
            </li>
            <li>
              <a href="/"><img src="./images/chuban/5.jpg" alt="" /></a>
            </li>
            <li>
              <a href="/"><img src="./images/chuban/6.jpg" alt="" /></a>
            </li>
            <li>
              <a href="/"><img src="./images/chuban/7.jpg" alt="" /></a>
            </li>
            <li>
              <a href="/"><img src="./images/chuban/8.jpg" alt="" /></a>
            </li>
            <li>
              <a href="/"><img src="./images/chuban/9.jpg" alt="" /></a>
            </li>
            <li>
              <a href="/"
                ><img class="lastImg" src="./images/chuban/10.jpg" alt=""
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Banner from "../../../components/Banner";

export default {
  name: "Stitle",
  data() {
    return {
      classify: this.$store.state.booksClassify,
      saleBooks: this.$store.state.goodSale,
      newBook: this.$store.state.newBooks,
      recommendBooks: this.$store.state.recommend,
      listingBooks: this.$store.state.newreleases,
    };
  },
  methods: {
    ...mapActions([
      "getBooksClassify",
      "getGoodSale",
      "getNewBooks",
      "getRecommendBooks",
      "getNewreleases",
    ]),
  },
  computed: {
    ...mapState({
      booksClassify: (state) => state.booksClassify.booksClassify,
      saleList: (state) => state.goodSale.saleList,
      newBooksList: (state) => state.newBooks.newBooksList,
      recommendBooksLists: (state) => state.recommend.recommendBooksLists,
      newReleasesBooksList: (state) => state.newreleases.newReleasesBooksList,
    }),
  },

  async mounted() {
    await this.getBooksClassify();
    await this.getGoodSale();
    await this.getNewBooks();
    await this.getRecommendBooks();
    await this.getNewreleases();
  },
  components: {
    Banner,
  },
};
</script>

<style lang="less" scoped>
.content {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;

  .left {
    width: 192px;
    font-size: 15px;

    h3 {
      font-size: 20px;
    }
    .line {
      width: 100%;
      border-top: 1px solid #ddd;
      margin: 10px 0;
    }
    .select {
      display: flex;
      width: 192px;
      justify-content: space-between;
      .selectAndroid {
        margin-right: 4px;
      }
    }
    .classify {
      margin-top: 25px;
      .ListItem li {
        margin: 0;
        padding: 0;
        border-bottom: 1px solid #eee;

        a {
          display: block;
          margin: 1px 0;
          padding: 12px 5px;
          height: 13px;
          color: #000;
          font-size: 13px;
          line-height: 1;
        }
      }
    }
    .goodSale {
      h3 {
        margin-top: 30px;
        font-size: 20px;
      }
      .timeItem li {
        display: inline;
        border-left: 1px solid #ddd;
        float: left;
        font-size: 14px;
        padding: 0 10px;
        overflow: hidden;
      }
      .detail {
        margin: 15px 0;
        .detailItem {
          li {
            display: block;
            margin: 10px 0;
            h4 a {
              color: #000;
              font-size: 14px;
            }
            div {
              color: #a6a6a6;
              font-size: 12px;
            }
          }
        }
      }
    }
    .newBooks {
      h3 {
        margin-top: 30px;
        font-size: 20px;
      }
      .timeItem li {
        display: inline;
        border-left: 1px solid #ddd;
        float: left;
        font-size: 14px;
        padding: 0 10px;
        overflow: hidden;
      }
      .detail {
        margin: 15px 0;
        .detailItem {
          li {
            display: block;
            margin: 10px 0;
            h4 a {
              color: #000;
              font-size: 14px;
            }
            div {
              color: #a6a6a6;
              font-size: 12px;
            }
          }
        }
      }
    }
    .reder {
      h3 {
        margin-top: 30px;
        font-size: 20px;
        color: red;
      }
      .detail {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        .imgBox {
          img {
            width: 48px;
            height: 48px;
          }
        }
        .detailRight {
          .p1 {
            font-size: 12px;
            margin: -2px 5px 5px;
            a {
              color: #000;
            }
          }
          .p2 {
            font-size: 12px;
            color: #a6a6a6;
            margin: 0px 5px 5px;
          }
          a {
            font-size: 12px;
            color: #389eac;
            margin: 0 5px;
          }
        }
      }
    }

    .cooperation {
      .explain {
        color: #333;
        font-size: 13px;
        margin-bottom: 5px;
      }
      .email {
        margin-bottom: 20px;
        a {
          color: #389eac;
        }
      }
    }

    .keep {
      font-size: 20px;
      .keepBox {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #ddd;
        padding: 15px 0;
        .iconfont {
          width: 30%;
        }
        .keepDetail {
          width: 70%;
          h4 {
            margin-bottom: 10px;
            a {
              font-size: 14px;
              color: #000;
            }
          }
          h5 {
            font-size: 10px;
          }
        }
      }
    }
  }
  .right {
    width: 696px;
    margin-top: -25px;
    .line {
      width: 100%;
      border-bottom: 1px solid #ddd;
      margin: 8px 0;
    }
    h3 {
      font-size: 20px;
    }
    .recommendBox {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      .recommendItem {
        width: 110px;
        height: 291px;
        padding: 10px;
        border: 1px solid #f2f2eb;
        background-color: white;
        .itemList {
          li {
            .detailImg {
              img {
                width: 110px;
                height: 165px;
                margin: 0 auto;
                border-radius: 5%;
              }
            }
            .bookName {
              display: flex;
              flex-direction: column;
              align-items: baseline;
              height: 110px;
              font-size: 13px;
              h5 {
                margin-bottom: 8px;
                a {
                  color: #000;
                }
              }
              .wirter {
                color: #a6a6a6;
                margin-right: 5px;
              }
            }
            .buy {
              //margin-top: 70px;
              .price {
                .originalPrice {
                  font-size: 12px;
                  color: #a6a6a6;
                  text-decoration: line-through;
                  margin-right: 3px;
                }
                .currentPrice {
                  font-size: 14px;
                  font-weight: bold;
                  color: #fa595f;
                }
              }
            }
          }
        }
      }
    }
    .NewReleases {
      .header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: relative;
        h3 {
          font-size: 20px;
        }
        p {
          position: absolute;
          top: 12px;
          right: 3px;
          a {
            color: #389eac;
          }
        }
      }
      .newBooksBox {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        flex-wrap: wrap;
        overflow: hidden;
        .items {
          width: 110px;
          height: 291px;
          padding: 10px;
          border: 1px solid #f2f2eb;
          background-color: white;
          margin-bottom: 15px;
          //margin-right: 10px;
          .itemList {
            li {
              .imgBox {
                img {
                  width: 110px;
                  height: 165px;
                  margin: 0 auto;
                  border-radius: 5%;
                }
              }
              .bookName {
                display: flex;
                flex-direction: column;
                align-items: baseline;
                height: 110px;
                font-size: 13px;
                h5 {
                  margin-bottom: 8px;
                  a {
                    color: #000;
                  }
                }
                .wirter {
                  color: #a6a6a6;
                  margin-right: 5px;
                }
              }
              .buy {
                //margin-top: 70px;
                .price {
                  .originalPrice {
                    font-size: 12px;
                    color: #a6a6a6;
                    text-decoration: line-through;
                    margin-right: 3px;
                  }
                  .currentPrice {
                    font-size: 14px;
                    font-weight: bold;
                    color: #3db192;
                  }
                }
              }
            }
          }
        }
      }
    }
    .publish {
      width: 100%;
      margin-bottom: 50px;
      .publishBox {
        .imgList {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          li {
            display: block;
            padding: 10px;
            border: 1px solid #f2f2eb;
            background-color: #fff;
            margin-bottom: 10px;

            a img {
              width: 110px;
              height: 70px;
            }
          }
        }
      }
    }
  }
}
</style>