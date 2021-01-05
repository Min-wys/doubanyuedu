<template>
  <div id="app">
    <Home />
    <router-view></router-view>
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
