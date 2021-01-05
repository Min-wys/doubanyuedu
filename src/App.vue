<template>
  <div>
    <!-- 加载显示路由组件  -->
    <router-view></router-view>
    <Rankings />
  </div>
</template>

<script>
import Rankings from "./components/Rankings";

export default {
  name: "app",
  components: {
    Rankings,
  },
};
</script>

<style>
</style>
