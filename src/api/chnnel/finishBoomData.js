// finish的完本数据
import request from "../../utils/request";

export default {
  channel() {
    return request({
      url: "/finishBoomData",
    });
  },
};
