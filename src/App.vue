<template>
  <div>
    <Header />
    <!-- 加载显示路由组件  -->
     <router-view></router-view>
    <Rankings />
  </div>
</template>

<script>

import Header from './components/Header'
import Rankings from './components/Rankings'

export default {
  name: "app",
  components: {
    Header,
    Rankings,
  }
};
</script>

<style>
</style>
