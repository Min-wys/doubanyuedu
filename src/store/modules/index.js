// 汇总所有vuex的模块
import home from "./home";
import booksClassify from "./booksClassify";
import goodSale from "./goodSale";
import nweBooks from "./newBooks";
import recommend from "./recommend";
import newreleases from "./newreleases"


// 统一暴露出去
export default {
  home,
  booksClassify,
  goodSale,
  nweBooks,
  recommend,
  newreleases

};
