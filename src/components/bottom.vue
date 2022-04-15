<template>
  <div>
    <h3>bottom</h3>
    <p>{{ count }}</p>
    <button @click="count += 1">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>
