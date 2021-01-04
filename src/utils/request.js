import axios from "axios";

// const evt =
//   process.env.NODE_ENV === "development" ? "/" : "http://read.douban.com";

const instance = axios.create({
  baseURL:  "http://read.douban.com/",
  headers: {},
});

// 请求拦截器
instance.interceptors.request.use((config) => {
  // 把设置到响应头中
  return config;
});

// 设置响应拦截器
instance.interceptors.response.use(
  (response) => {
    NProgress.done();
    // if (response.data.code === 200) {
    return response.data;
    // }
    // const { message } = response.data;
    // Message.error(message);
    // return Promise.reject(message, "错误");
  },
  (error) => {
    // NProgress.done();
    const message = error.message || "网络错误";
    return Promise.reject("失败");
  }
);

export default instance;
