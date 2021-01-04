/* 
  自己的路由往里加
*/
import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import(/* webpackChunkName: "Home" */ "../views/Home");

// 改写push/replace方法
const { push } = VueRouter.prototype;
const { replace } = VueRouter.prototype;

VueRouter.prototype.push = function(location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    return push.call(this, location, onComplete, onAbort);
  }
  return push.call(this, location, onComplete, () => {});
};

VueRouter.prototype.replace = function(location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    return replace.call(this, location, onComplete, onAbort);
  }
  return replace.call(this, location, onComplete, () => {});
};
Vue.use(VueRouter);

// 自己添加路由
const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
  ],
});
export default router;
