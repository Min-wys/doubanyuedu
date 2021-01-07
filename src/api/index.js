// Home组件发送请求使用 自己写
import request from "../utils/request";
//获取分类书籍
export const reqGetBooksClassify = () => {
  return request({
    url: "/books",
  });
};
//畅销排行榜
export const reqGetGoodSale = () => {
  return request({
    url: "/goodsale",
  });
};

//新书列表
export const reqGetNewBooks = () => {
  return request({
    url: "/newbooks",
  });
};
//编辑推荐
export const reqGetRecommendBooks = () => {
  return request({
    url: "/recommend",
  });
};
//最新上架
export const reqGetNewreleases = () => {
  return request({
    url: "/newreleases",
  });
};