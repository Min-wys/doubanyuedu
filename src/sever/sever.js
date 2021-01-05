const Koa = require("koa");
const KoaRouter = require("koa-router");

// 1.创建服务器应用实例app
const app = new Koa();

//
const router = new KoaRouter();

app.use(router.routes()).use(router.allowedMethods());

// 返回home数据
let homeData = require("./datas/home.json");
router.get("/home", function (ctx, next) {
  ctx.body = {
    code: 200,
    data: homeData,
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
let homeRecommend = require("./datas/hot.json");
router.get("/homerecommend", function (ctx, next) {
  ctx.body = {
    code: 200,
    data: homeRecommend,
  };
});

// 返回chnnel完本推荐数据
let channelData = require("./datas/channel.json");
router.get("/channel", function(ctx, next) {
  ctx.body = {
    code: 200,
    data: channelData,
  };
});

// 返回finishBoom完本推荐的完本推荐数据
let finishBoomData = require("./datas/finishBoom.json");
router.get("/finishBoomData", function(ctx, next) {
  ctx.body = {
    code: 200,
    data: finishBoomData,
  };
});


app.listen("3000", function (error) {
  if (error) {
    console.log("服务器运行失败!!!");
  } else {
    console.log("服务器成功运行,运行于http://localhost:3000");
  }
});
