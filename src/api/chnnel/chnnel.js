// channel的完本数据
import request from "../../utils/request";

export default {
  channel() {
    return request({
      url: "/channel",
    });
  },
  finishBoomData() {
    return request({
      url: "/finishBoomData",
    });
  },
  dangerData() {
    return request({
      url: "/finishBoomData",
    });
  },
};
