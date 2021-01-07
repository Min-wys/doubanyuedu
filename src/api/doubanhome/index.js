// import request from "../../utils/request";
import axios from "axios";

export default {
  /* 获取首页初始数据 */
  getStart() {
    return axios({
      method: "GET",
      /* query参数可能是动态的 */
      url: "/j/index/featured/?start=6",
    });
  },
  /* 获取数据 */
  getHomeData(worksIds, query) {
    return axios({
      method: "POST",
      url: "/j/graphql",
      data: {
        variables: {
          worksIds,
        },
        query,
        operationName: "getWorksList",
      },
    });
  },
};
