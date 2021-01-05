// Home组件发送请求使用 自己写
import request from "../../utils/request";

export default {
  /*  */
  getHomeData() {
    return request({
      method: "GET",
      url: "/home",
    });
  },
  /*  */
  getHotData() {
    return request({
      method: "GET",
      url: "/hot",
    });
  },
  /*  */
  getHotRecommend() {
    return request({
      method: "GET",
      url: "/homerecommend",
    });
  },
  /*  */
  getChannelList() {
    return request({
      method: "GET",
      url: "/sixchannellist",
    });
  },
  /*  */
  getDraftList() {
    return request({
      method: "GET",
      url: "/draft",
    });
  },
};
