<template>
  <header class="header-card" @blur="isCategory = false">
    <div class="header-inner">
      <router-link to="/" class="site-logo"></router-link>
      <nav class="func-nav">
        <ul>
          <li class="nav-category" @click="isCategory = !isCategory">分类</li>
          <li>搜索</li>
        </ul>
      </nav>
      <div class="site-nav-container">
        <ul class="site-nav">
          <li>
            <router-link to="">原创</router-link>
          </li>
          <li>
            <router-link to="">排行</router-link>
          </li>
          <li>
            <router-link to="">出版</router-link>
          </li>
          <li>
            <router-link to="">会员</router-link>
          </li>
          <li>
            <router-link to="">App</router-link>
          </li>
        </ul>
      </div>
      <div class="user-info">
        <router-link to="/bookshelf">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="fill-current-color"
          >
            <path
              d="M13.9 5.223l3.14 12.1a.23.23 0 00.284.165l2.332-.645a.233.233 0 00.162-.28l-3.14-12.1a.23.23 0 00-.284-.166l-2.332.645a.233.233 0 00-.162.28zM8.5 5h-3v12h3zm1 12h3V3h-3v14zm4-9.327V14.5h1.77zm0-3.57a1.212 1.212 0 01.293-.125l2.33-.645a1.232 1.232 0 011.516.86v.018l3.136 12.1a1.23 1.23 0 01-.863 1.5l-2.33.647a1.232 1.232 0 01-1.516-.86v-.018l-.537-2.08H13.5V17a1 1 0 01-1 1h-3a1 1 0 01-.5-.134 1 1 0 01-.5.134h-3a1 1 0 01-1-1v-1.5H1.822a.23.23 0 00-.23.227l-.074 5.04a.23.23 0 00.23.233h20.506a.23.23 0 00.228-.234l-.074-5.04a.23.23 0 00-.23-.226h-1.59l-.268-1h1.858a1.23 1.23 0 011.23 1.213l.074 5.038A1.23 1.23 0 0122.27 22H1.75a1.23 1.23 0 01-1.232-1.23v-.02l.074-5.037a1.23 1.23 0 011.23-1.213H4.5V5a1 1 0 011-1h3V3a1 1 0 011-1h3a1 1 0 011 1z"
            ></path>
          </svg>
        </router-link>
        <router-link to="">登录</router-link>
        <router-link to="">注册</router-link>
      </div>
    </div>
    <div class="category" v-if="isCategory">
      <div class="category-con">
        <h2 class="category-title">
          <a href="" style="color: #333">原创作品</a>
        </h2>
        <div>
          <a href="" class="btn-link">言情小说</a>
          <a href="" class="btn-link">女性小说</a>
          <a href="" class="btn-link">悬疑小说</a>
          <a href="" class="btn-link">科幻小说</a>
          <a href="" class="btn-link">幻想小说</a>
          <a href="" class="btn-link">文艺小说</a>
          <a href="" class="btn-link">历史小说</a>
          <a href="" class="btn-link">非小说</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isCategory: false,
    };
  },
};
</script>

<style lang="less" scoped>
.header-card {
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
.header-inner {
  display: flex;
  padding: 0 26px 0 20px;
}
.site-logo {
  background: url("../../assets/image/nav.svg") right top/117px auto no-repeat;
  position: relative;
  margin-top: 10px;
  width: 117px;
  height: 40px;
}
.site-logo::after {
  position: absolute;
  right: -6px;
  bottom: 5px;
  display: block;
  content: "优质类型小说平台";
  letter-spacing: 6px;
  white-space: nowrap;
  font-size: 12px;
  transform: scale(0.8);
  transform-origin: top right;
}
.func-nav {
  margin-left: 30px;
}
.func-nav ul {
  display: flex;
  height: 50px;
  align-items: center;
}
.func-nav ul li {
  font-size: 13px;
  width: 53px;
  padding: 0 10px;
  text-align: center;
}
.user-info {
  display: flex;
  align-items: center;
  padding-left: 15px;
  height: 50px;
  width: 190px;
  box-sizing: border-box;
}
.user-info a {
  margin-left: 5px;
  padding: 0 15px;
  height: 26px;
  font-size: 12px;
  line-height: 26px;
  border-radius: 4px;
  white-space: nowrap;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}
.site-nav-container {
  flex-grow: 1;
}
.site-nav {
  height: 100%;
  display: flex;
  justify-content: center;
}
.site-nav li {
  height: 100%;
  display: flex;
  align-items: center;
}
.site-nav li a {
  // height: 100%;
  // display: flex;
  // align-items: center;
  padding: 0 17px;
  font-size: 14px;
  color: #000;
}
.category {
  margin-top: 30px;
  overflow: hidden;
}
.category-con {
  width: 1136px;
  margin: 0 auto 30px;
}
.category-title {
  margin-bottom: 20px;
}
.btn-link {
  margin-right: 5px;
}
.nav-category {
  cursor: pointer;
}
.fill-current-color {
  width: 24px;
  height: 24px;
  color: var(--blueBlack);
}
</style>
