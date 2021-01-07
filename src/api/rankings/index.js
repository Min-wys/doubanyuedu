// rankingse组件发送请求使用
import request from "../../utils/request";

export default {
  rankingsdata() {
    return request({
      url: "/rankings",
    });
  },
};
