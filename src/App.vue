<template>
  <div class="app_container">
    <h1>APP根組件</h1>
    <hr />

    <div class="box">
      <!-- 渲染left, right組件 -->
      <Left></Left>
      <Right></Right>
      <Test></Test>
    </div>
  </div>
</template>

<script>
import Left from "@/components/left.vue";
import Right from "@/components/right.vue";
import Test from "@/components/test.vue";
export default {
  data() {
    return {};
  },
  components: {
    Left,
    Right,
    Test,
  },
};
</script>

<style lang="less">
.app_container {
  background: pink;
}
.box {
  display: flex;
}
</style>
