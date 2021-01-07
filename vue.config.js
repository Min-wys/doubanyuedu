const path = require("path");

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
      "/j": {
        target: "https://read.douban.com",
        changeOrigin: true,
        pathRewrite: {
          "^/j": "/j",
        },
      },
    },
  },
};
