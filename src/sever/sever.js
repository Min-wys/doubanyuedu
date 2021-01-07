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

//书籍分类数据
let booksClassify = require("./datas/books.json");
router.get("/books", function (ctx, next) {
  ctx.body = {
    code: 200,
    data: booksClassify,
  };
});

//畅销排行
let goodSale = require("./datas/goodsale.json");
router.get("/goodsale", function (ctx, next) {
  ctx.body = {
    code: 200,
    data: goodSale,
  };
});

//新书排行
let newBooks = require("./datas/newbooks.json");
router.get("/newbooks", function (ctx, next) {
  ctx.body = {
    code: 200,
    data: newBooks,
  };
});
//编辑推荐
let recommendBooks = require("./datas/recommendBooks.json");
router.get("/recommend", function (ctx, next) {
  ctx.body = {
    code: 200,
    data: recommendBooks,
  };
});
//最新上架
let newReleases = require("./datas/newreleases.json");
router.get("/newreleases", function (ctx, next) {
  ctx.body = {
    code: 200,
    data: newReleases,
  };
});


app.listen("3000", function (error) {
  if (error) {
    console.log("服务器运行失败!!!");
  } else {
    console.log("服务器成功运行,运行于http://localhost:3000");
  }
});
