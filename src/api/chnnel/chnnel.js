// channel的完本数据
import request from "../../utils/request";

export default {
  channel(id) {
    return request({
      url: `/channel?id=${id}`,
    });
  },
  finishBoomData(id) {
    return request({
      url: `/finishBoomData?id=${id}`,
    });
  },
  channelUrlList(id) {
    return request({
      url: `/channelUrlList?id=${id}`,
    });
  },
};
