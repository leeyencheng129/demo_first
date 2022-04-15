<template>
  <div class="app_container">
    <h1>APP根組件</h1>
    <hr />
    <p>countFromSon:{{ countFromSon }}</p>
    <button @click="resetBottom">reset Bottom number</button><br />
    <input type="text" v-if="inputVisible" @blur="showButton" ref="iptRef" />
    <button v-else @click="showInput">顯示輸入框</button>

    <div class="box">
      <!-- 渲染left, right組件 -->
      <Left :msg="message" :user="userinfo"></Left>
      <Right @numchange="getNewCount"></Right>
    </div>
    <Bottom ref="comBottom"></Bottom>
    <hr />
  </div>
</template>

<script>
import Left from "@/components/left.vue";
import Right from "@/components/right.vue";
import Bottom from "@/components/bottom.vue";

export default {
  data() {
    return {
      message: "hello kitty",
      userinfo: { name: "wendy", age: 18 },
      countFromSon: 0,
      inputVisible: false,
    };
  },
  components: {
    Left,
    Right,
    Bottom,
  },
  methods: {
    getNewCount(val) {
      this.countFromSon = val;
    },
    resetBottom() {
      this.$refs.comBottom.count = 0;
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.iptRef.focus();
      });
    },
    showButton() {
      this.inputVisible = false;
    },
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
