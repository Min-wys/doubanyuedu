// Home组件发送请求使用 自己写
import request from "../../utils/request";

export default {
  home() {
    return request({
      url: "地址",
    });
  },
};
