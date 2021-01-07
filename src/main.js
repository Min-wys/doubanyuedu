import Vue from "vue";
import App from "./App.vue";

import router from './router'
import store from "./store";
import * as API from "./api";
import "./plugins/element.js";

import VueLazyload from "vue-lazyload";
import "./styles/reset.css";

/* 懒加载的loading图片必须要引入 */
import loading from "./assets/image/loading.gif";

Vue.config.productionTip = false;
Vue.prototype.$API = API;

Vue.use(VueLazyload, {
  loading: loading,
});
new Vue({
  beforeCreate() {
    // 定义全局事假总线
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
