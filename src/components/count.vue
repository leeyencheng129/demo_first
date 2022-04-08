<template>
  <div>
    <h5>Count 組件</h5>
    <p>Count的值是:{{ count }}</p>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  //自定義屬性
  props: {
    init: {
      //如果外界沒有傳遞屬性值，則使用默認
      default: 0,
    },
  },

  data() {
    return {
      count: this.init,
    };
  },
  methods: {
    add() {
      this.count += 1;
    },
  },
};
</script>

<style lang="less"></style>
