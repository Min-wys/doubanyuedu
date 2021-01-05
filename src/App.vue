<template>
  <div id="app">
    <Header />
    <!-- <router-link >完本频道</router-link>
    <router-link>女性频道</router-link>
    <router-link>幻想频道</router-link>
    <router-link>文艺频道</router-link>
    <router-link>历史频道</router-link>
    <Channel /> -->
    <!-- <Home /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from "./views/Home";
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    // Home,
    Header,
    // Banner,
  },
};
</script>

<style>
html,
body {
  width: 100%;
}
</style>
