<template>
  <div class="left">
    <h2>left</h2>
    <p>msg的值:{{ msg }}</p>
    <p>{{ user.name }}<br />{{ user.age }}</p>

    <button @click="send">把鋸子發給right</button>
  </div>
</template>

<script>
import bus from "./eventBus.js";

export default {
  props: ["msg", "user"],
  data() {
    return {
      str: "你好啊~~~~~~~~",
    };
  },
  methods: {
    send() {
      bus.$emit("share", this.str);
    },
  },
};
</script>

<style lang="less" scoped>
div.left {
  width: 100%;
  background: burlywood;
}
</style>
