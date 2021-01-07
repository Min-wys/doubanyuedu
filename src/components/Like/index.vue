<template>
  <div class="like">
    <div class="like-inner">
      <div class="like-container">
        <div class="like-title">
          <h2>猜你喜欢</h2>
          <a href="" class="btn-link" @click.prevent="$emit('click')">换一组</a>
        </div>
        <div class="like-book">
          <div v-for="item in data" :key="item.id" class="book-item">
            <Brief :book="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Brief from "../../components/Brief";
export default {
  name: "",
  props: ["data"],
  methods: {
    // click() {
    //   this.
    // },
  },
  components: {
    Brief,
  },
};
</script>

<style lang="less" scoped>
.like {
  background-color: #f8f9f9;
  overflow: hidden;
}
.like-inner {
  height: 400px;
  margin: 60px 0;
}
.like-container {
  height: 100%;
  width: 1143px;
  margin: 0 auto;
}
.like-title {
  display: flex;
  justify-content: space-between;
}
.like-book {
  height: 340px;
  display: flex;
  justify-content: space-between;
}
.book-item {
  width: 20%;
  padding: 40px 20px 0 20px;
}
</style>
