<template>
  <div id="app">
    <router-view></router-view>
    <!-- <router-link >完本频道</router-link>
    <router-link>女性频道</router-link>
    <router-link>幻想频道</router-link>
    <router-link>文艺频道</router-link>
    <router-link>历史频道</router-link>
    <Channel /> -->
    <Home />
  </div>
</template>

<script>

import Home from "./views/Home";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
html,
body {
  width: 100%;
}
</style>
