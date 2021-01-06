import Vue from "vue";
import App from "./App.vue";

import router from './router'
import store from "./store";
import * as API from "./api";
import "./plugins/element.js";

import "./styles/reset.css";

Vue.config.productionTip = false;
Vue.prototype.$API = API;

new Vue({
  beforeCreate() {
    // 定义全局事假总线
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
