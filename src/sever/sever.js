const Koa = require("koa");
const KoaRouter = require("koa-router");

// 1.创建服务器应用实例app
const app = new Koa();

const router = new KoaRouter();

app.use(router.routes()).use(router.allowedMethods());

// 返回home数据
let homeDataList = require("./datas/home.json");
router.get("/home", function (ctx, next) {
  ctx.body = {
    code: 200,
    data: homeDataList,
  };
});
// 返回畅销作品数据
let hotData = require("./datas/hot.json");
router.get("/hot", function (ctx, next) {
  ctx.body = {
    code: 200,
    data: hotData,
  };
});
// 返回畅销作品数据
let homeRecommend = require("./datas/homeRecommend.json");
router.get("/homerecommend", function (ctx, next) {
  ctx.body = {
    code: 200,
    data: homeRecommend,
  };
});

// 返回chnnel完本推荐数据
let channelData = require("./datas/channel.json");
// 悬疑频道的推荐数据
let channelDanger = require("./datas/channelDanger.json");
// 女性频道的推荐数据
let channelWoman = require("./datas/channelWoman.json");

router.get("/channel", function (ctx, next) {
  const id = ctx.request.url.split("?")[1].split("=")[1];
  // 进行判断返回的数据是什么
  switch (id) {
    case "1":
      ctx.body = {
        code: 200,
        data: channelData,
      };
      break;
    case "2":
      ctx.body = {
        code: 200,
        data: channelDanger,
      };
      break;
    case "3":
      ctx.body = {
        code: 200,
        data: channelWoman,
      };
      break;
    case "4":
      ctx.body = {
        code: 200,
        data: channelData,
      };
      break;
    case "5":
      ctx.body = {
        code: 200,
        data: channelData,
      };
      break;
    case "6":
      ctx.body = {
        code: 200,
        data: channelData,
      };
      break;
  }
});

// 返回finishBoom完本频道的完本推荐数据

// 返回category分类数据
let categoryYanqingData = require("./datas/category/yanqing.json");
let categoryNvxingData = require("./datas/category/nvxing.json");
let categoryXuanyiData = require("./datas/category/xuanyi.json");
let categoryKehuanData = require("./datas/category/kehuan.json");

router.get("/category", function (ctx, next) {
  const kindId = ctx.request.url.split("?")[1].split("=")[1]
  switch (kindId) {
    case "1":
      ctx.body = {
        code: 200,
        data: categoryYanqingData,
      };
      break;
    case "2":
      ctx.body = {
        code: 200,
        data: categoryNvxingData,
      };
      break;
    case "3":
      ctx.body = {
        code: 200,
        data: categoryXuanyiData,
      };
      break;
    case "4":
      ctx.body = {
        code: 200,
        data: categoryKehuanData,
      };
      break;
  }
});

// 返回category分类类型筛选数据
let categoryTypeData = require("./datas/category/classification.json");
router.get("/categoryType", function (ctx, next) {
  ctx.body = {
    code: 200,
    data: categoryTypeData,
  };
});


// 悬疑频道的新作数据
let channelNewWork = require("./datas/channelNewWork.json");
// 女性频道的新作数据
let finishBoomData = require("./datas/finishBoom.json");
let channelWomanNewwork = require("./datas/channelWomanNewwork.json");

router.get("/finishBoomData", function (ctx, next) {
  const id = ctx.request.url.split("?")[1].split("=")[1];
  // console.log(id, typeof id);
  // 进行判断返回的数据是什么
  switch (id) {
    case "1":
      ctx.body = {
        code: 200,
        data: finishBoomData,
      };
      break;
    case "2":
      ctx.body = {
        code: 200,
        data: channelNewWork,
      };
      break;
    case "3":
      ctx.body = {
        code: 200,
        data: channelWomanNewwork,
      };
      break;
    case "4":
      ctx.body = {
        code: 200,
        data: finishBoomData,
      };
      break;
    case "5":
      ctx.body = {
        code: 200,
        data: finishBoomData,
      };
      break;
    case "6":
      ctx.body = {
        code: 200,
        data: finishBoomData,
      };
      break;
  }
});

// 完本数据的图片数据
let channelUrlList = require("./datas/channelUrlList.json");
// 悬疑频道的图片数据
let channelDangerUrlList = require("./datas/channelDangerUrlList.json");
// 女性频道的图片数据
let chanelWomanUrlList = require("./datas/chanelWomanUrlList.json");

router.get("/channelUrlList", function (ctx, next) {
  const id = ctx.request.url.split("?")[1].split("=")[1];
  // console.log(id, typeof id);
  // 进行判断返回的数据是什么
  switch (id) {
    case "1":
      ctx.body = {
        code: 200,
        data: channelUrlList,
      };
      break;
    case "2":
      ctx.body = {
        code: 200,
        data: channelDangerUrlList,
      };
      break;
    case "3":
      ctx.body = {
        code: 200,
        data: chanelWomanUrlList,
      };
      break;
    case "4":
      ctx.body = {
        code: 200,
        data: channelUrlList,
      };
      break;
    case "5":
      ctx.body = {
        code: 200,
        data: channelDangerUrlList,
      };
      break;
    case "6":
      ctx.body = {
        code: 200,
        data: chanelWomanUrlList,
      };
      break;
  }
});

// 返回finishBoom完本推荐的完本推荐数据
let sixChannelList = require("./datas/sixChannelList.json");
router.get("/sixchannellist", function (ctx, next) {
  ctx.body = {
    code: 200,
    data: sixChannelList,
  };
});
// 返回征稿数据
let draft = require("./datas/draft.json");
router.get("/draft", function (ctx, next) {
  ctx.body = {
    code: 200,
    data: draft,
  };
});

// 返回OneStory的章节数据
let oneStorySectionData = require("./datas/oneStory/section.json");
router.get("/oneStorySectionData", function(ctx, next) {
  ctx.body = {
    code: 200,
    data: oneStorySectionData,
  };
});

// 返回OneStory的评论数据
let oneStoryIntroData = require("./datas/oneStory/intro.json");
router.get("/oneStoryIntroData", function(ctx, next) {
  ctx.body = {
    code: 200,
    data: oneStoryIntroData,
  };
});

let rankingsdata = require("./datas/rankings.json");
router.get("/rankings", function(ctx,next) {
  ctx.body = {
  code: 200,
  data:rankingsdata,
  }
})

// 返回home数据ttttt
let homeData = require("./datas/eBooks/home.json");
router.get("/home", function (ctx, next) {
  ctx.body = {
    code: 200,
    data: homeData,
  };
});

//书籍分类数据
let booksClassify = require("./datas/eBooks/books.json");
router.get("/books", function (ctx, next) {
  ctx.body = {
    code: 200,
    data: booksClassify,
  };
});

//畅销排行
let goodSale = require("./datas/eBooks/goodsale.json");
router.get("/goodsale", function (ctx, next) {
  ctx.body = {
    code: 200,
    data: goodSale,
  };
});

//新书排行
let newBooks = require("./datas/eBooks/newbooks.json");
router.get("/newbooks", function (ctx, next) {
  ctx.body = {
    code: 200,
    data: newBooks,
  };
});
//编辑推荐
let recommendBooks = require("./datas/eBooks/recommendBooks.json");
router.get("/recommend", function (ctx, next) {
  ctx.body = {
    code: 200,
    data: recommendBooks,
  };
});
//最新上架
let newReleases = require("./datas/eBooks/newreleases.json");
router.get("/newreleases", function (ctx, next) {
  ctx.body = {
    code: 200,
    data: newReleases,
  };
});

app.listen("3000", function(error) {
  if (error) {
    console.log("服务器运行失败!!!");
  } else {
    console.log("服务器成功运行,运行于http://localhost:3000");
  }
});
