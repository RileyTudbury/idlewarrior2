<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Welcome to Your Vue.js App</h1>
    <button @click="clicks++">Clicks: {{ clicks }}</button>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      clicks: 0
    };
  }
};
</script>
