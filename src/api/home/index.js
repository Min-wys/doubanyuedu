// Home组件发送请求使用 自己写
import request from "../../utils/request";

export default {
  getHomeData() {
    return request({
      method: "GET",
      url: "/home",
    });
  },
};
