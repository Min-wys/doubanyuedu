import * as API from "../../api";
import Vue from "vue";
export default {
  state: {
    book: {},
    sectionList: {}, // 章节数据
    introList: {}, // 评论数据
    manySection: [
      {
        readCount: 77,
        hasRead: false,
        links: { reader: "/reader/column/35971331/chapter/168407419/" },
        title: "第一次迟到",
        price: 0,
        isPurchased: false,
        abstract:
          "  第一周的最后一个工作日，一场秋雨悄无声息的到来，淅淅沥沥的正赶上城市早高峰。关家老宅和公司正好在城市的斜对角，关晴堵车堵到怀疑人生，到楼下找车位又花了将近一刻钟。踏进公司的时候，时间已经到了九点钟。好巧不巧的，姗姗来迟的她在楼下等电梯的时候，正碰…",
        commentCount: 0,
        vip: null,
        fixedPrice: 0,
        limitedVip: null,
        isWithdrawn: false,
        onSaleTime: "01-04",
        id: "5",
      },
      {
        readCount: 18,
        hasRead: false,
        links: { reader: "/reader/column/35971331/chapter/168527638/" },
        title: "关小晴捞鱼计划",
        price: 0,
        isPurchased: false,
        abstract:
          "公司的单身小哥众多，看来关晴来远陆貌似真的来对了。她早有自己的小算盘。本命年一开始，父母虎视眈眈，话里话外的施压，要她早点考虑个人问题。关父更是异想天开，居然指望她去勾引陆鼎程，也不怕人笑话齐大非偶、硬攀高枝。家世上，关家或许可以和陆家媲美。可她爹…",
        commentCount: 2,
        vip: null,
        fixedPrice: 0,
        limitedVip: null,
        isWithdrawn: false,
        onSaleTime: "8 小时前",
        id: "6",
      },
      {
        readCount: 234,
        hasRead: false,
        links: { reader: "/reader/column/35971331/chapter/168091320/" },
        title: "大哥帮帮忙",
        price: 0,
        isPurchased: false,
        abstract:
          "  关晴最近觉得自己流年不利。本命年对她来讲，也许真的是个魔咒也说不定。距离上次见过陆鼎程之后没几天，大哥关钊给她下了最后通碟——既然这么闲，乖乖的出门上班赚钱去！不知道关钊怎么想的，他给了关晴两个选择：要么去关氏集团，他的眼皮子底下；要么，去外面，…",
        commentCount: 2,
        vip: null,
        fixedPrice: 0,
        limitedVip: null,
        isWithdrawn: false,
        onSaleTime: "01-01",
        id: "7",
      },
      {
        readCount: 176,
        hasRead: false,
        links: { reader: "/reader/column/35971331/chapter/168220353/" },
        title: "褒贬不一",
        price: 0,
        isPurchased: false,
        abstract:
          "事到临头，哪条路都走不通。关晴抓紧最后几天的自由时间，在上班之前恣意的玩了个痛快。今朝有酒今朝醉，工作的事嘛，无奈只能先就范再说。楚婷几个小姐妹都劝她，晴晴你眼光一定要放长远，从长计议。像她这种在家里没什么地位的，能怎么办呢？硬来只会自己给自己找麻…",
        commentCount: 1,
        vip: null,
        fixedPrice: 0,
        limitedVip: null,
        isWithdrawn: false,
        onSaleTime: "01-02",
        id: "8",
      },
      {
        readCount: 80,
        hasRead: false,
        links: { reader: "/reader/column/35971331/chapter/168347049/" },
        title: "职场小白第一天",
        price: 0,
        isPurchased: false,
        abstract:
          "周一是关晴去远陆集团上班的第一天。她早早的醒过来，在自己卧室的飘窗上，足足坐了一刻钟。等心情稍微调适过来，迷茫散去，又涌上些一腔孤勇的坚定，才起身去洗脸化妆。这个年纪的年轻人，大多数平平常常为了生计奔波的上班族。她偷懒了两年后回到正轨，那就随遇而安…",
        commentCount: 3,
        vip: null,
        fixedPrice: 0,
        limitedVip: null,
        isWithdrawn: false,
        onSaleTime: "01-03",
        id: "9",
      },
    ],
    count: 5,
  },
  actions: {
    // 获取章节数据
    async getSectionList({ commit }) {
      const sectionList = await API.oneStory.oneStorySectionData();
      commit("GET_SECTION_LIST", sectionList);
    },
    // 获取评论数据
    async getIntroList({ commit }) {
      const introList = await API.oneStory.oneStoryIntroData();
      commit("GET_INTRO_LIST", introList);
    },
  },
  mutations: {
    // 保存单本书的数据
    REPLACE_BOOK(state, book) {
      state.book = book;
    },
    // 章节数据
    GET_SECTION_LIST(state, sectionList) {
      state.sectionList = sectionList;
    },
    // 评论数据
    GET_INTRO_LIST(state, introList) {
      state.introList = introList.data.works;
    },
    // 点击让最新章节在前
    SORT_SECTION_LIST(state, newBefore) {
      console.log(newBefore);
      // state.sectionList.list.reverse();
      state.sectionList.list = state.sectionList.list.sort((a, b) =>
        // 为true是最新章节在前
        newBefore ? b.id - a.id : a.id - b.id
      );
    },
    // 点击加载更多
    CONCAT_SECTION_LIST(state) {
      // 每一次添加数据时，修改id值
      if (state.manySection) {
        state.manySection = state.manySection.map((item) => {
          state.count++;
          let num;
          state.count > 9 ? (num = 2) : (num = 1);
          item.title = item.title.slice(num);
          return {
            ...item,
            title: state.count + item.title,
            id: item.id + 1,
          };
        });
      }
      state.sectionList.list = state.sectionList.list.concat(state.manySection);
      // state.sectionList.list.push(state.manySection);
      // state.sectionList.list = state.sectionList.list.flat();
    },
    // 收起的五条数据
    CLOSE_SECTION_LIST(state) {
      // 截取前五个数据
      state.sectionList.list = state.sectionList.list.slice(0, 5);
    },
    // 点赞
    CLICK_GOOD(state, { id, goodBoo }) {
      let intro = state.introList.comments.find((item) => item.id === id);
      goodBoo ? (intro.upvoteCount = "1") : (intro.upvoteCount = "0");
    },
    // 回复
    INTRO_REPLY(state, { id, content }) {
      let intro = state.introList.comments.find((item) => item.id === id);
      // 没有refDiscussion的先添加上属性
      if (!intro.refDiscussion) {
        Vue.set(intro, "refDiscussion", [{
          id: Date.now(),
          user: {
            name: "清风",
            url: "https://read.douban.com/people/226232272",
          },
          isDeleted: null,
          createTime: "01-03",
          content,
        }]);
      } else {
        intro.refDiscussion.push({
          id: Date.now(),
          user: {
            name: "明月",
            url: "https://read.douban.com/people/226232272",
          },
          isDeleted: null,
          createTime: "01-06",
          content,
        });
      }

      intro.commentType = "Discussion";
    },
  },
};
