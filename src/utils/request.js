import axios from "axios";

// const evt =
//   process.env.NODE_ENV === "development" ? "/" : "http://read.douban.com";

const instance = axios.create({
  baseURL: "/api",
  headers: {},
});

// 请求拦截器
instance.interceptors.request.use((config) => {
  // 把设置到响应头中
  // config.headers.Referer = "https://read.douban.com/";
  return config;
});

// 设置响应拦截器
instance.interceptors.response.use(
  (response) => {
    // NProgress.done();
    if (response.data.code === 200) {
      return response.data.data;
    }
    // const { message } = response.data;
    // Message.error(message);
    return Promise.reject(response, "错误");
  },
  (error) => {
    // NProgress.done();
    // const message = error.message || "网络错误";
    return Promise.reject(error);
  }
);

export default instance;
