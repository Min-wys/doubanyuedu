<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
html,
body {
  width: 100%;
}
a {
  text-decoration: none !important;
}
.btn-link:hover {
  background-color: #389eac !important;
  color: #fff !important;
}
.btn-link {
  display: inline-block;
  border: none;
  border-radius: 4px;
  background: #fff;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  color: #333;
  padding: 0 14px;
  height: 30px;
  font-size: 13px;
  line-height: 30px;
}
</style>
