<template>
  <div class="right">
    <h2>right</h2>
    <p>{{ count }}</p>
    <button @click="add">+1</button>
    <h1>{{ mesFromLeft }}</h1>
  </div>
</template>

<script>
import bus from "./eventBus.js";

export default {
  props: ["msg", "user"],
  data() {
    return {
      count: 0,
      mesFromLeft: "",
    };
  },
  methods: {
    add() {
      this.count += 1;
      this.$emit("numchange", this.count);
    },
  },
  created() {
    bus.$on("share", (val) => {
      this.mesFromLeft = val;
    });
  },
};
</script>

<style lang="less" scoped>
div.right {
  width: 100%;
  background: rgb(41, 184, 112);
}
</style>
