const Koa = require("koa");
const KoaRouter = require("koa-router");

// 1.创建服务器应用实例app
const app = new Koa();

//
const router = new KoaRouter();

app.use(router.routes()).use(router.allowedMethods());

// 返回home数据
let homeData = require("./datas/home.json");
router.get("/home", function(ctx, next) {
  ctx.body = {
    code: 200,
    data: homeData,
  };
});

let rankingsdata = require("./datas/rankings.json");
router.get("/rankings", function(ctx,next) {
  ctx.body = {
  code: 200,
  data:rankingsdata,
  }
})

let tuijianbangdata = require("./datas/tuijianbang.json");
router.get("/tuijianbang", function(ctx,next) {
  ctx.body = {
  code: 200,
  data:tuijianbangdata,
  }
})


app.listen("3000", function(error) {
  if (error) {
    console.log("服务器运行失败!!!");
  } else {
    console.log("服务器成功运行,运行于http://localhost:3000");
  }
});
