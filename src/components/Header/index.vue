<template>
  <header class="header-card">
    <div class="header-inner">
      <router-link to="/" class="site-logo"></router-link>
      <nav class="func-nav">
        <ul>
          <li>分类</li>
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
        <router-link to="">登录</router-link>
        <router-link to="">注册</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less" scoped>
.header-card {
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.1);
  background-color: #FFF;
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
  width: 118px;
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
</style>
