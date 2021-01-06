// channel的完本数据
import request from "../../utils/request";

export default {
  oneStorySectionData() {
    return request({
      url: "/oneStorySectionData",
    });
  },
  oneStoryIntroData() {
    return request({
      url: "/oneStoryIntroData",
    });
  },
};
