/* 
  自己的路由往里加
*/
import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home'
// import Rankings from '../views/Rankings'

const Home = () => import(/* webpackChunkName: "Home" */ "../views/Home");
const Category = () =>
  import(/* webpackChunkName: "Category"*/ "../views/category");
const Channel = () =>
  import(/* webpackChunkName: "Home" */ "../views/Channel/Channel.vue");
const OneStory = () =>
  import(/* webpackChunkName: "Home" */ "../views/OneStory");
const Rankings = () =>
  import(/* webpackChunkName: "Rankings" */ "../views/rankings");
const Bookshelf = () =>
  import(/* webpackChunkName: "Bookshelf" */ "../views/Bookshelf");
const Ebooks = () => import(/* webpackChunkName: "Home" */ "../views/Ebooks");

// 改写push/replace方法
const { push } = VueRouter.prototype;
const { replace } = VueRouter.prototype;

VueRouter.prototype.push = function (location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    return push.call(this, location, onComplete, onAbort);
  }
  return push.call(this, location, onComplete, () => {});
};

VueRouter.prototype.replace = function (location, onComplete, onAbort) {
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
    {
      path: "/category/:id",
      component: Category,
      name: "Category",
    },
    {
      path: "/channel/:id",
      component: Channel,
      name: "channel",
    },
    {
      path: "/OneStory",
      component: OneStory,
      name: "OneStory",
    },
    {
      path: "/rankings",
      component: Rankings,
    },
    {
      path: "/bookshelf",
      component: Bookshelf,
      name: "bookshelf",
    },
    {
      path: "/ebooks",
      component: Ebooks,
      name: "Ebooks",
    },
  ],
  // 每次切换路由页面滚动条位置
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
export default router;
